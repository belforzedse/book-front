"use client"

import { FormEvent, useEffect, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Search } from "lucide-react"
import { cn } from "@/lib/utils"

type SearchBarProps = {
  className?: string
}

export default function SearchBar({ className }: SearchBarProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [term, setTerm] = useState("")

  useEffect(() => {
    const current = searchParams.get("q") || ""
    setTerm((previous) => (previous === current ? previous : current))
  }, [searchParams])

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const value = term.trim()
    const nextPath = value.length > 0 ? "/catalog?q=" + encodeURIComponent(value) : "/catalog"
    router.push(nextPath)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        "flex w-full max-w-lg items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm shadow-sm",
        className,
      )}
    >
      <Search className="size-4 text-gray-500" aria-hidden="true" />
      <input
        value={term}
        onChange={(event) => setTerm(event.target.value)}
        placeholder="جست‌وجوی کتاب"
        className="flex-1 bg-transparent text-sm outline-none"
        aria-label="جست‌وجوی کتاب"
      />
      <button
        type="submit"
        className="rounded-full bg-blue-600 px-4 py-1 text-sm font-medium text-white transition hover:bg-blue-700"
      >
        جست‌وجو
      </button>
    </form>
  )
}
