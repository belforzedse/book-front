import axios from "axios";
import { ensureAbsoluteUrl, PLACEHOLDER_IMAGE } from "./utils";

export type StrapiEvent = {
  id: string;
  title: string;
  date: string;
  description: string;
};

export type StrapiNewsItem = {
  id: string;
  title: string;
  publishedAt: string;
  image: string;
};

const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL;

function buildEndpoint(path: string) {
  if (!strapiUrl) return null;
  const base = strapiUrl.endsWith("/") ? strapiUrl.slice(0, -1) : strapiUrl;
  return base + path;
}

function normalizeImage(url?: string | null) {
  const absolute = ensureAbsoluteUrl(url || undefined, strapiUrl);
  return absolute || PLACEHOLDER_IMAGE;
}

// ---------------------
// Generic Strapi types
// ---------------------

interface StrapiResponse<T> {
  data: StrapiEntity<T>[];
}

interface StrapiEntity<T> {
  id: number | string;
  attributes: T;
}

// Event attributes from Strapi
interface StrapiEventAttributes {
  title?: string;
  date?: string;
  description?: string;
}

// News attributes from Strapi
interface StrapiNewsAttributes {
  title?: string;
  publishedAt?: string;
  cover?: {
    data?: {
      attributes?: {
        url?: string;
      };
    };
  };
}

// ---------------------
// Fetchers
// ---------------------

export async function getEvents(): Promise<StrapiEvent[]> {
  try {
    const endpoint = buildEndpoint("/events");
    if (!endpoint) return [];

    const response = await axios.get<StrapiResponse<StrapiEventAttributes>>(
      endpoint,
      {
        params: { populate: "*" },
      }
    );

    const records = response.data?.data ?? [];

    return records.map((item) => {
      const attributes = item.attributes ?? {};
      return {
        id: String(item.id ?? ""),
        title: attributes.title || "رویداد جدید",
        date: attributes.date || new Date().toISOString(),
        description: attributes.description || "",
      };
    });
  } catch (error) {
    console.warn("Failed to load Strapi events", error);
    return [];
  }
}

export async function getNews(): Promise<StrapiNewsItem[]> {
  try {
    const endpoint = buildEndpoint("/news");
    if (!endpoint) return [];

    const response = await axios.get<StrapiResponse<StrapiNewsAttributes>>(
      endpoint,
      {
        params: { populate: "cover" },
      }
    );

    const records = response.data?.data ?? [];

    return records.map((item) => {
      const attributes = item.attributes ?? {};
      const imageUrl = attributes.cover?.data?.attributes?.url;
      return {
        id: String(item.id ?? ""),
        title: attributes.title || "خبر جدید",
        publishedAt: attributes.publishedAt || new Date().toISOString(),
        image: normalizeImage(imageUrl),
      };
    });
  } catch (error) {
    console.warn("Failed to load Strapi news", error);
    return [];
  }
}
