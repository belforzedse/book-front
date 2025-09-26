import { getEvents } from "@/lib/strapi"
import { formatDate } from "@/lib/utils"

const FALLBACK_EVENTS = [
  {
    id: "placeholder-1",
    title: "رویداد فرهنگی به زودی",
    date: "2024-02-01T00:00:00.000Z",
    description: "جزئیات رویداد فرهنگی شهرکتاب به زودی اعلام می‌شود.",
  },
]

export default async function EventsPage() {
  const events = await getEvents()
  const items = events.length > 0 ? events : FALLBACK_EVENTS

  return (
    <div className="layout-frame space-y-6 py-12 text-neutral">
      <div className="space-y-2 text-right">
        <h1 className="text-2xl font-bold text-primary">رویدادها</h1>
        <p className="text-sm text-neutral/70">با برنامه‌های فرهنگی و جلسات نقد و بررسی همراه شوید.</p>
      </div>
      <div className="space-y-4">
        {items.map((event) => (
          <article
            key={event.id}
            className="rounded-2xl bg-card p-6 text-neutral shadow-md transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="flex flex-col gap-2 text-right">
              <span className="text-xs text-accent">{formatDate(event.date)}</span>
              <h2 className="text-xl font-semibold text-primary">{event.title}</h2>
              <p className="text-sm leading-7 text-neutral/80 whitespace-pre-line">{event.description}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
