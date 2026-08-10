"use client"

import { X } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"
import { projects } from "@/lib/portfolio-data"
import { ProjectCard } from "./project-card"
import { Reveal } from "./reveal"

interface ProjectsProps {
  activeTech: string | null
  onClearFilter: () => void
}

export function Projects({ activeTech, onClearFilter }: ProjectsProps) {
  return (
    <section id="projects" className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <h2 className="font-display text-4xl md:text-5xl font-extralight text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-600 to-gray-900 dark:from-gray-100 dark:via-gray-400 dark:to-gray-100 mb-6 text-center tracking-wide">
            Projects
          </h2>
        </Reveal>

        <AnimatePresence>
          {activeTech && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="flex justify-center mb-10"
            >
              <button
                onClick={onClearFilter}
                className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 text-sm font-medium border border-blue-300 dark:border-blue-500 hover:bg-blue-200 dark:hover:bg-blue-900/70 transition-colors duration-300"
              >
                Filtering by <span className="font-semibold">{activeTech}</span>
                <X className="w-3.5 h-3.5" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              activeTech={activeTech}
              dimmed={activeTech !== null && !project.tech.includes(activeTech)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
