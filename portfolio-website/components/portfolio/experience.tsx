"use client"

import { Briefcase } from "lucide-react"
import { experience } from "@/lib/portfolio-data"
import { Reveal } from "./reveal"

export function Experience() {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <h2 className="font-display text-4xl md:text-5xl font-extralight text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-600 to-gray-900 dark:from-gray-100 dark:via-gray-400 dark:to-gray-100 mb-16 text-center tracking-wide">
            Experience
          </h2>
        </Reveal>

        <div className="relative space-y-10 before:absolute before:left-5 before:top-2 before:bottom-2 before:w-px before:bg-gray-300/60 dark:before:bg-gray-600/60 md:before:left-[1.4rem]">
          {experience.map((entry, entryIndex) => (
            <Reveal key={entry.role + entry.org} delay={entryIndex * 0.1}>
              <div className="relative pl-14 md:pl-16">
                <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>

                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-1">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{entry.role}</h3>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{entry.date}</span>
                </div>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-4">
                  {entry.org}
                  {entry.location ? ` · ${entry.location}` : ""}
                </p>

                <div className="space-y-4">
                  {entry.bullets.map((bullet) => (
                    <div
                      key={bullet.title}
                      className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl p-5 shadow-md dark:shadow-gray-900/40 border border-gray-200/50 dark:border-gray-700/50 hover:border-blue-200/50 dark:hover:border-blue-400/50 transition-colors duration-300"
                    >
                      <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-1.5">{bullet.title}</h4>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">{bullet.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
