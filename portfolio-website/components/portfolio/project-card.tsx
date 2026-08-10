"use client"

import { useRef } from "react"
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion"
import { ArrowUpRight, Lock } from "lucide-react"
import type { Project } from "@/lib/portfolio-data"

interface ProjectCardProps {
  project: Project
  index: number
  dimmed: boolean
  activeTech: string | null
}

export function ProjectCard({ project, index, dimmed, activeTech }: ProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const rotateX = useSpring(0, { stiffness: 200, damping: 20 })
  const rotateY = useSpring(0, { stiffness: 200, damping: 20 })
  const mouseX = useMotionValue(50)
  const mouseY = useMotionValue(50)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    const px = (e.clientX - rect.left) / rect.width
    const py = (e.clientY - rect.top) / rect.height
    rotateY.set((px - 0.5) * 10)
    rotateX.set((0.5 - py) * 10)
    mouseX.set(px * 100)
    mouseY.set(py * 100)
  }

  const handleMouseLeave = () => {
    rotateX.set(0)
    rotateY.set(0)
  }

  const glow = useMotionTemplate`radial-gradient(300px circle at ${mouseX}% ${mouseY}%, rgba(59,130,246,0.15), transparent 70%)`
  const hasLink = Boolean(project.link)

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.08 }}
      animate={{ opacity: dimmed ? 0.4 : 1, scale: dimmed ? 0.97 : 1 }}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      className={`group bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-2xl dark:shadow-gray-900/50 dark:hover:shadow-gray-900/70 transition-shadow duration-500 border border-gray-200/50 dark:border-gray-700/50 hover:border-blue-200/50 dark:hover:border-blue-400/50 relative overflow-hidden ${hasLink ? "cursor-pointer" : ""}`}
    >
      {hasLink && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${project.title}`}
          className="absolute inset-0 z-20"
        />
      )}

      <motion.div className="absolute inset-0 rounded-xl pointer-events-none" style={{ background: glow }} />

      <div className="relative z-10">
        <div className="flex items-start justify-between gap-3 mb-4">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 group-hover:text-blue-900 dark:group-hover:text-blue-300 transition-colors duration-300">
            {project.title}
          </h3>
          {hasLink ? (
            <ArrowUpRight className="w-5 h-5 text-gray-400 dark:text-gray-500 group-hover:text-blue-500 dark:group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 flex-shrink-0" />
          ) : (
            <Lock
              className="w-4 h-4 text-gray-300 dark:text-gray-600 flex-shrink-0"
              aria-label="Private project, no public link"
            />
          )}
        </div>
        <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">{project.description}</p>
        {project.tech.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className={`px-3 py-1 text-sm rounded-full border transition-colors duration-300 ${
                  activeTech === tech
                    ? "bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 border-blue-300 dark:border-blue-500"
                    : "bg-gradient-to-r from-gray-100 to-gray-50 dark:from-gray-700 dark:to-gray-600 text-gray-700 dark:text-gray-300 border-gray-200/50 dark:border-gray-600/50 group-hover:border-blue-200 dark:group-hover:border-blue-400"
                }`}
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  )
}
