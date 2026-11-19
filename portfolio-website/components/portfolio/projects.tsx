"use client"

import { useMemo } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { projects } from "@/lib/portfolio-data"
import { Icon } from "./icons"
import { ProjectCard } from "./project-card"
import { SectionHead } from "./tile"

interface ProjectsProps {
  activeTech: string | null
  onSelectTech: (tech: string) => void
  onClearFilter: () => void
}

// Asymmetric rhythm for the unfiltered grid (each group of rows sums to 12).
const bentoSpans = [
  "lg:col-span-7",
  "lg:col-span-5",
  "lg:col-span-4",
  "lg:col-span-4",
  "lg:col-span-4",
  "lg:col-span-5",
  "lg:col-span-7",
  "lg:col-span-4",
  "lg:col-span-4",
  "lg:col-span-4",
  "lg:col-span-6",
  "lg:col-span-6",
]

export function Projects({ activeTech, onSelectTech, onClearFilter }: ProjectsProps) {
  const filterOptions = useMemo(() => {
    const counts = new Map<string, number>()
    projects.forEach((p) => p.tech.forEach((t) => counts.set(t, (counts.get(t) ?? 0) + 1)))
    const common = [...counts.entries()]
      .filter(([, n]) => n >= 2)
      .sort((a, b) => b[1] - a[1])
      .map(([t]) => t)
    if (activeTech && !common.includes(activeTech)) common.push(activeTech)
    return common
  }, [activeTech])

  const visible = activeTech ? projects.filter((p) => p.tech.includes(activeTech)) : projects

  return (
    <section id="projects" className="mt-24 sm:mt-32">
      <SectionHead
        eyebrow="03 / Projects"
        title={<>Selected <span className="italic">work</span></>}
        aside={
          <p className="font-mono text-xs text-mute tabular-nums" aria-live="polite">
            Showing {visible.length} of {projects.length}
          </p>
        }
      />

      <div className="scrollbar-none -mx-4 mb-4 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0">
        <button
          onClick={onClearFilter}
          aria-pressed={activeTech === null}
          className={`inline-flex h-9 shrink-0 items-center rounded-full px-4 text-sm transition-all duration-200 active:scale-[0.97] ${
            activeTech === null ? "bg-ink text-canvas" : "border border-line/15 text-mute hover:text-ink"
          }`}
        >
          All
        </button>
        {filterOptions.map((tech) => {
          const selected = activeTech === tech
          return (
            <button
              key={tech}
              onClick={() => onSelectTech(tech)}
              aria-pressed={selected}
              className={`inline-flex h-9 shrink-0 items-center gap-1.5 rounded-full px-4 text-sm transition-all duration-200 active:scale-[0.97] ${
                selected ? "bg-ink text-canvas" : "border border-line/15 text-mute hover:text-ink"
              }`}
            >
              {tech}
              {selected && <Icon name="close" className="h-3 w-3" />}
            </button>
          )
        })}
      </div>

      <motion.div layout className="grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-6 lg:grid-cols-12">
        <AnimatePresence mode="popLayout">
          {visible.map((project, i) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={i}
              span={activeTech ? "lg:col-span-4" : bentoSpans[i % bentoSpans.length]}
              activeTech={activeTech}
            />
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  )
}
