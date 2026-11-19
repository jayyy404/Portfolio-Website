"use client"

import { useEffect, useRef } from "react"
import { animate, useInView } from "framer-motion"
import { projects, roles, skillCategories } from "@/lib/portfolio-data"
import { Icon } from "./icons"
import { Tile, Tag } from "./tile"
import { useTypewriter } from "./use-typewriter"

function CountUp({ to }: { to: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  useEffect(() => {
    if (!inView || !ref.current) return
    const node = ref.current
    const controls = animate(0, to, {
      duration: 1.1,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => {
        node.textContent = String(Math.round(v))
      },
    })
    return () => controls.stop()
  }, [inView, to])
  return <span ref={ref}>0</span>
}

export function Hero() {
  const typed = useTypewriter(roles)
  const uniqueTechs = new Set(skillCategories.flatMap((c) => c.techs)).size

  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })

  return (
    <section id="home" className="grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-6 lg:grid-cols-12">
      {/* Intro */}
      <Tile className="md:col-span-6 lg:col-span-7 lg:min-h-[400px] sm:p-10">
        <div className="flex items-center justify-between gap-4">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-mute">Portfolio / 2026</p>
          <Tag tone="sage" className="gap-2">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inset-0 animate-soft-ping rounded-full bg-sage-fg" />
              <span className="relative h-1.5 w-1.5 rounded-full bg-sage-fg" />
            </span>
            Open to work
          </Tag>
        </div>

        <h1 className="mt-10 font-serif text-[2.9rem] leading-[1.02] tracking-[-0.03em] text-ink text-balance sm:text-7xl lg:text-[5.5rem]">
          John Paul <span className="italic text-clay">Sapasap</span>
        </h1>

        <p className="mt-5 flex h-7 items-center font-mono text-sm text-mute sm:text-base" aria-live="off">
          <span className="text-ink">{typed}</span>
          <span className="ml-0.5 inline-block h-4 w-px animate-pulse bg-ink" aria-hidden="true" />
        </p>

        <p className="mt-6 max-w-[52ch] text-base leading-relaxed text-mute text-pretty sm:text-lg">
          Software engineer shipping full-stack mobile and web apps, and applied AI and computer vision systems.
        </p>

        <div className="mt-auto flex flex-wrap items-center gap-x-6 gap-y-3 pt-10">
          <button
            onClick={() => go("projects")}
            className="inline-flex h-12 items-center gap-2 rounded-md bg-ink px-6 text-sm font-semibold text-canvas transition-all duration-200 hover:-translate-y-px hover:opacity-90 focus-visible:outline-offset-4 active:translate-y-0 active:scale-[0.98]"
          >
            View projects
            <Icon name="arrow" className="h-4 w-4 rotate-90" />
          </button>
          <button
            onClick={() => go("contacts")}
            className="group/link inline-flex h-12 items-center gap-1.5 text-sm font-medium text-ink"
          >
            <span className="border-b border-line/30 pb-0.5 transition-colors duration-200 group-hover/link:border-clay">
              Get in touch
            </span>
            <Icon name="arrow" className="h-3.5 w-3.5 transition-transform duration-200 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
          </button>
        </div>
      </Tile>

      {/* Portrait */}
      <Tile delay={0.08} className="p-2 sm:p-2 md:col-span-6 lg:col-span-5 lg:row-span-2">
        {/* Crisp inset frame: no overlay, no fade, the photo reads as it is. */}
        <div className="relative aspect-[4/5] w-full flex-1 overflow-hidden rounded-[14px] bg-canvas lg:aspect-auto">
          <img
            src="/image.jpg"
            alt="Portrait of John Paul Sapasap"
            className="absolute inset-0 h-full w-full object-cover object-top"
          />
        </div>
      </Tile>

      {/* Stats */}
      <Tile delay={0.12} className="md:col-span-6 lg:col-span-7">
        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-mute">At a glance</p>
        <dl className="mt-5 grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-4">
          {[
            { n: 1, label: "Industry Experience" },
            { n: 3, label: "Freelance Experience" },
            { n: projects.length, label: "Projects" },
            { n: uniqueTechs, label: "Technologies" },
          ].map((s) => (
            <div key={s.label} className="flex flex-col gap-2">
              <dt className="whitespace-nowrap text-xs leading-none text-mute">{s.label}</dt>
              <dd className="font-serif text-5xl leading-none tracking-[-0.02em] text-ink tabular-nums sm:text-6xl">
                <CountUp to={s.n} />
              </dd>
            </div>
          ))}
        </dl>
      </Tile>
    </section>
  )
}
