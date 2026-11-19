"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { experience } from "@/lib/portfolio-data"
import { Icon } from "./icons"
import { SectionHead, Tile } from "./tile"

export function Experience() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [openBullet, setOpenBullet] = useState<number | null>(0)
  const entry = experience[roleIndex]

  const selectRole = (i: number) => {
    setRoleIndex(i)
    setOpenBullet(0)
  }

  return (
    <section id="experience" className="mt-24 sm:mt-32">
      <SectionHead eyebrow="01 / Experience" title={<>Where I&apos;ve <span className="italic">worked</span></>} />

      <Tile className="p-0 sm:p-0">
        <div className="grid md:grid-cols-[260px_1fr]">
          {/* Role switcher */}
          <div
            role="tablist"
            aria-label="Experience"
            className="scrollbar-none flex gap-2 overflow-x-auto border-b border-line/10 p-3 md:flex-col md:border-b-0 md:border-r md:p-4"
          >
            {experience.map((e, i) => {
              const active = i === roleIndex
              return (
                <button
                  key={e.role + e.org}
                  role="tab"
                  aria-selected={active}
                  onClick={() => selectRole(i)}
                  className={`relative min-w-[200px] shrink-0 rounded-xl p-4 text-left transition-colors duration-200 active:scale-[0.99] md:min-w-0 ${
                    active ? "text-ink" : "text-mute hover:text-ink"
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="role-bg"
                      className="absolute inset-0 rounded-xl border border-line/10 bg-canvas"
                      transition={{ type: "spring", stiffness: 400, damping: 34 }}
                    />
                  )}
                  <span className="relative z-10 block font-mono text-[11px] uppercase tracking-[0.1em]">{e.date}</span>
                  <span className="relative z-10 mt-1.5 block text-[15px] font-medium leading-snug">{e.role}</span>
                  <span className="relative z-10 mt-0.5 block text-xs text-mute">{e.org}</span>
                </button>
              )
            })}
          </div>

          {/* Role detail */}
          <div className="p-6 sm:p-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={roleIndex}
                role="tabpanel"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                <h3 className="font-serif text-3xl leading-tight tracking-[-0.02em] text-ink sm:text-4xl">{entry.role}</h3>
                <p className="mt-2 flex items-center gap-2 text-sm text-mute">
                  {entry.org}
                  {entry.location && (
                    <>
                      <span aria-hidden="true">/</span>
                      {entry.location}
                    </>
                  )}
                </p>

                {entry.bullets.length === 0 && (
                  <p className="mt-8 border-t border-line/10 pt-6 font-mono text-xs text-mute">Current role</p>
                )}

                <ul className="mt-8 empty:hidden">
                  {entry.bullets.map((b, i) => {
                    const open = openBullet === i
                    return (
                      <li key={b.title} className="border-b border-line/10 first:border-t">
                        <button
                          onClick={() => setOpenBullet(open ? null : i)}
                          aria-expanded={open}
                          className="flex w-full items-center justify-between gap-6 py-5 text-left"
                        >
                          <span className="text-[15px] font-medium leading-snug text-ink">{b.title}</span>
                          <span
                            className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-line/10 transition-all duration-300 ${
                              open ? "bg-ink text-canvas" : "text-mute"
                            }`}
                          >
                            <Icon name={open ? "minus" : "plus"} className="h-3.5 w-3.5" />
                          </span>
                        </button>
                        <div className="collapse-grid" data-open={open}>
                          <div>
                            <p className="max-w-[68ch] pb-6 text-sm leading-[1.7] text-mute">{b.description}</p>
                          </div>
                        </div>
                      </li>
                    )
                  })}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Tile>
    </section>
  )
}
