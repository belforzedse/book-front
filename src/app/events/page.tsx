import { getEvents } from "@/lib/strapi"
import { formatDate } from "@/lib/utils"

const FALLBACK_EVENTS = [
  {
    id: "placeholder-1",
    title: "رویداد فرهنگی به زودی",
    date: new Date().toISOString(),
    description: "جزئیات رویداد فرهنگی شهرکتاب به زودی اعلام می‌شود.",
  },
]

export default async function EventsPage() {
  const events = await getEvents()
  const items = events.length > 0 ? events : FALLBACK_EVENTS

  return (
    <div className="mx-auto max-w-5xl space-y-6 px-4 py-12">
      <div className="space-y-2 text-right">
        <h1 className="text-2xl font-bold text-gray-900">رویدادها</h1>
        <p className="text-sm text-gray-500">با برنامه‌های فرهنگی و جلسات نقد و بررسی همراه شوید.</p>
      </div>
      <div className="space-y-4">
        {items.map((event) => (
          <article
            key={event.id}
            className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <div className="flex flex-col gap-2 text-right">
              <span className="text-xs text-blue-500">{formatDate(event.date)}</span>
              <h2 className="text-xl font-semibold text-gray-900">{event.title}</h2>
              <p className="text-sm leading-7 text-gray-600 whitespace-pre-line">{event.description}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
