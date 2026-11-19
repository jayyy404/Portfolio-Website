"use client"

import { projects, skillCategories, type SkillCategory } from "@/lib/portfolio-data"
import { SectionHead, Tile, toneClasses, type Tone } from "./tile"

const tones: Record<SkillCategory["color"], Tone> = {
  blue: "sky",
  green: "sage",
  orange: "clay",
  purple: "lilac",
  cyan: "mist",
  yellow: "sand",
}

// Static class strings so Tailwind keeps them. Two rows of 12 columns on desktop.
const spans = [
  "lg:col-span-5",
  "lg:col-span-4",
  "lg:col-span-3",
  "lg:col-span-3",
  "lg:col-span-5",
  "lg:col-span-4",
]

const projectCount = (tech: string) => projects.filter((p) => p.tech.includes(tech)).length

interface SkillsProps {
  activeTech: string | null
  onSelectTech: (tech: string) => void
}

export function Skills({ activeTech, onSelectTech }: SkillsProps) {
  const handleSelect = (tech: string) => {
    const isClearing = activeTech === tech
    onSelectTech(tech)
    if (!isClearing) {
      document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="skills" className="mt-24 sm:mt-32">
      <SectionHead
        eyebrow="02 / Skills"
        title={<>Tools I <span className="italic">reach for</span></>}
        aside={
          <p className="max-w-xs text-sm text-mute">
            Select a technology to filter the projects below. The number is how many projects use it.
          </p>
        }
      />

      <div className="grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-6 lg:grid-cols-12">
        {skillCategories.map((cat, i) => {
          const tone = tones[cat.color]
          return (
            <Tile key={cat.name} delay={(i % 3) * 0.06} className={`md:col-span-3 ${spans[i]}`}>
              <div className="mb-6 flex items-center justify-between">
                <h3 className="text-[15px] font-medium text-ink">{cat.name}</h3>
                <span className={`h-2.5 w-2.5 rounded-[3px] ${toneClasses[tone].split(" ")[0]} ring-1 ring-inset ring-line/15`} />
              </div>
              <div className="mt-auto flex flex-wrap gap-2">
                {cat.techs.map((tech) => {
                  const count = projectCount(tech)
                  const selected = activeTech === tech
                  const disabled = count === 0
                  return (
                    <button
                      key={tech}
                      onClick={() => handleSelect(tech)}
                      disabled={disabled}
                      aria-pressed={selected}
                      title={disabled ? "No listed project uses this yet" : `Filter projects by ${tech}`}
                      className={`inline-flex h-9 items-center gap-2 rounded-full px-3.5 text-sm transition-all duration-200 ${
                        selected
                          ? "bg-ink text-canvas"
                          : disabled
                            ? `${toneClasses[tone]} cursor-default`
                            : `${toneClasses[tone]} hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.97]`
                      }`}
                    >
                      {tech}
                      {!disabled && <span className="font-mono text-[10px] opacity-60 tabular-nums">{count}</span>}
                    </button>
                  )
                })}
              </div>
            </Tile>
          )
        })}
      </div>
    </section>
  )
}
