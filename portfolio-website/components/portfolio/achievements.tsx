"use client"

import { academicHonors, affiliations, certificates, hackathons } from "@/lib/portfolio-data"
import { Icon } from "./icons"
import { SectionHead, Tag, Tile, type Tone } from "./tile"

const placeTone = (achievement: string): Tone => {
  if (/place/i.test(achievement)) return "sand"
  if (/finalist/i.test(achievement)) return "clay"
  return "mist"
}

function Label({ children }: { children: React.ReactNode }) {
  return <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-mute">{children}</p>
}

export function Achievements() {
  return (
    <section id="achievements" className="mt-24 sm:mt-32">
      <SectionHead eyebrow="04 / Achievements" title={<>Recognition &amp; <span className="italic">learning</span></>} />

      <div className="grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-6 lg:grid-cols-12">
        {/* Academic honors */}
        <Tile className="md:col-span-6 lg:col-span-4">
          <Label>Academic honors</Label>
          {academicHonors.map((h) => (
            <div key={h.title} className="mt-auto pt-10">
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-sand-bg text-sand-fg">
                <Icon name="trophy" className="h-5 w-5" />
              </div>
              <p className="font-serif text-4xl leading-[1.05] tracking-[-0.02em] text-ink sm:text-5xl">{h.title}</p>
              <p className="mt-3 text-sm text-ink">{h.school}</p>
              <p className="mt-1 font-mono text-xs text-mute">{h.date}</p>
            </div>
          ))}
        </Tile>

        {/* Hackathons */}
        <Tile delay={0.06} className="md:col-span-6 lg:col-span-8">
          <Label>Hackathons &amp; competitions</Label>
          <ul className="mt-5">
            {hackathons.map((h) => (
              <li
                key={h.title}
                className="grid gap-x-6 gap-y-2 border-b border-line/10 py-5 first:pt-2 last:border-b-0 last:pb-0 sm:grid-cols-[1fr_auto]"
              >
                <div>
                  <h3 className="text-[15px] font-medium leading-snug text-ink text-pretty">{h.title}</h3>
                  {h.project && <p className="mt-1.5 text-sm leading-relaxed text-mute text-pretty">{h.project}</p>}
                </div>
                <div className="flex items-center gap-3 sm:flex-col sm:items-end sm:gap-2">
                  <Tag tone={placeTone(h.achievement)}>{h.achievement}</Tag>
                  <span className="font-mono text-xs text-mute tabular-nums">{h.date}</span>
                </div>
              </li>
            ))}
          </ul>
        </Tile>

        {/* Certifications */}
        <Tile delay={0.04} className="md:col-span-3 lg:col-span-6">
          <Label>Certifications</Label>
          <ul className="mt-5">
            {certificates.map((c) => (
              <li key={c.title} className="flex items-start justify-between gap-4 border-b border-line/10 py-4 first:pt-2 last:border-b-0 last:pb-0">
                <div>
                  <h3 className="text-[15px] font-medium text-ink">{c.title}</h3>
                  <p className="mt-1 text-sm text-mute">{c.issuer}</p>
                </div>
                <span className="shrink-0 font-mono text-xs text-mute">{c.date}</span>
              </li>
            ))}
          </ul>
        </Tile>

        {/* Affiliations */}
        <Tile delay={0.08} className="md:col-span-3 lg:col-span-6">
          <Label>Affiliations</Label>
          <ul className="mt-5">
            {affiliations.map((a) => (
              <li key={a.name} className="flex items-start justify-between gap-4 border-b border-line/10 py-4 first:pt-2 last:border-b-0 last:pb-0">
                <div>
                  <h3 className="text-[15px] font-medium text-ink">{a.name}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-mute text-pretty">{a.description}</p>
                </div>
                <span className="shrink-0 font-mono text-xs text-mute">{a.date}</span>
              </li>
            ))}
          </ul>
        </Tile>
      </div>
    </section>
  )
}
