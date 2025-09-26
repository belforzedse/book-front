import axios from "axios"
import { PLACEHOLDER_IMAGE } from "./utils"

type GraphQLResponse<T> = {
  data?: T
  errors?: Array<{ message?: string }>
}

type VendureAsset = {
  preview?: string | null
}

type VendureVariant = {
  priceWithTax: number
  currencyCode: string
  price?: number
  listPrice?: number
}

type VendureProduct = {
  id: string
  name: string
  slug: string
  description?: string | null
  featuredAsset?: VendureAsset | null
  assets?: VendureAsset[] | null
  variants?: VendureVariant[] | null
  customFields?: Record<string, unknown>
}

export type ProductSummary = {
  id: string
  name: string
  slug: string
  priceWithTax: number
  currencyCode: string
  image: string
  author?: string
  compareAtPrice?: number
  description?: string
}

export type ProductDetail = ProductSummary & {
  description: string
}

const vendureUrl = process.env.NEXT_PUBLIC_VENDURE_URL

export async function fetchGraphQL<T>(query: string, variables?: Record<string, unknown>): Promise<T> {
  if (!vendureUrl) {
    throw new Error("NEXT_PUBLIC_VENDURE_URL is not defined")
  }

  try {
    const response = await axios.post<GraphQLResponse<T>>(vendureUrl, { query, variables }, {
      headers: {
        "Content-Type": "application/json",
      },
    })

    if (response.data.errors && response.data.errors.length > 0) {
      throw new Error(response.data.errors[0]?.message || "Unknown Vendure error")
    }

    if (!response.data.data) {
      throw new Error("Vendure response missing data")
    }

    return response.data.data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.message || "Vendure request failed")
    }

    if (error instanceof Error) {
      throw error
    }

    throw new Error("Vendure request failed")
  }
}

function resolveImage(product: VendureProduct) {
  const candidate = product.featuredAsset?.preview || product.assets?.[0]?.preview
  return candidate || PLACEHOLDER_IMAGE
}

function resolveCompareAtPrice(variant?: VendureVariant) {
  if (!variant) return undefined
  const base = typeof variant.listPrice === "number" ? variant.listPrice : variant.price
  if (typeof base === "number" && base > variant.priceWithTax) {
    return base
  }
  return undefined
}

function resolveAuthor(product: VendureProduct) {
  const field = product.customFields && product.customFields.author
  if (typeof field === "string" && field.trim().length > 0) {
    return field
  }
  return undefined
}

export async function getProducts(take = 12): Promise<ProductSummary[]> {
  try {
    const query = [
      "query GetProducts($take: Int!) {",
      "  products(options: { take: $take }) {",
      "    items {",
      "      id",
      "      name",
      "      slug",
      "      description",
      "      featuredAsset { preview }",
      "      assets { preview }",
      "      variants {",
      "        priceWithTax",
      "        currencyCode",
      "        price",
      "        listPrice",
      "      }",
      "      customFields",
      "    }",
      "  }",
      "}",
    ].join("\n")

    const result = await fetchGraphQL<{ products: { items: VendureProduct[] } }>(query, { take })
    const items = result.products?.items || []

    return items.map((item) => {
      const variant = item.variants && item.variants.length > 0 ? item.variants[0] : undefined
      return {
        id: item.id,
        name: item.name,
        slug: item.slug,
        priceWithTax: variant ? variant.priceWithTax : 0,
        currencyCode: variant ? variant.currencyCode : "IRR",
        image: resolveImage(item),
        author: resolveAuthor(item),
        compareAtPrice: resolveCompareAtPrice(variant),
        description: item.description || undefined,
      }
    })
  } catch (error) {
    console.warn("Failed to load Vendure products", error)
    return []
  }
}

export async function getProductById(id: string): Promise<ProductDetail | null> {
  try {
    const query = [
      "query GetProduct($id: ID!) {",
      "  product(id: $id) {",
      "    id",
      "    name",
      "    slug",
      "    description",
      "    featuredAsset { preview }",
      "    assets { preview }",
      "    customFields",
      "    variants {",
      "      priceWithTax",
      "      currencyCode",
      "      price",
      "      listPrice",
      "    }",
      "  }",
      "}",
    ].join("\n")

    const result = await fetchGraphQL<{ product: VendureProduct | null }>(query, { id })
    const product = result.product
    if (!product) {
      return null
    }

    const variant = product.variants && product.variants.length > 0 ? product.variants[0] : undefined

    return {
      id: product.id,
      name: product.name,
      slug: product.slug,
      description: product.description || "",
      priceWithTax: variant ? variant.priceWithTax : 0,
      currencyCode: variant ? variant.currencyCode : "IRR",
      image: resolveImage(product),
      author: resolveAuthor(product),
      compareAtPrice: resolveCompareAtPrice(variant),
    }
  } catch (error) {
    console.warn("Failed to load Vendure product " + id, error)
    return null
  }
}
