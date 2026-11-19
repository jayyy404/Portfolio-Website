"use client"

import type { Project } from "@/lib/portfolio-data"
import { Icon } from "./icons"
import { Tile } from "./tile"

interface ProjectCardProps {
  project: Project
  index: number
  span: string
  activeTech: string | null
}

export function ProjectCard({ project, index, span, activeTech }: ProjectCardProps) {
  const hasLink = Boolean(project.link)

  return (
    <Tile layout delay={(index % 3) * 0.06} className={`min-h-[240px] md:col-span-3 ${span}`}>
      {hasLink && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${project.title}`}
          className="absolute inset-0 z-20 rounded-[20px]"
        />
      )}

      <div className="flex items-start justify-between gap-4">
        <span className="font-mono text-[11px] tracking-[0.1em] text-mute tabular-nums">
          {String(index + 1).padStart(2, "0")}
        </span>
        {hasLink ? (
          <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-line/10 text-mute transition-all duration-300 group-hover:border-ink group-hover:bg-ink group-hover:text-canvas">
            <Icon name="arrow" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-px group-hover:-translate-y-px" />
          </span>
        ) : (
          <span
            className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.08em] text-mute"
            title="Private project, no public link"
          >
            <Icon name="lock" className="h-3.5 w-3.5" />
            Private
          </span>
        )}
      </div>

      <h3 className="mt-6 font-serif text-[1.7rem] leading-[1.1] tracking-[-0.02em] text-ink text-balance">
        {project.title}
      </h3>
      <p className="mt-3 max-w-[56ch] text-sm leading-relaxed text-mute text-pretty">{project.description}</p>

      {project.tech.length > 0 && (
        <ul className="mt-auto flex flex-wrap gap-1.5 pt-6">
          {project.tech.map((tech) => (
            <li
              key={tech}
              className={`rounded-full px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.06em] transition-colors duration-200 ${
                activeTech === tech ? "bg-ink text-canvas" : "bg-canvas text-mute"
              }`}
            >
              {tech}
            </li>
          ))}
        </ul>
      )}
    </Tile>
  )
}
