"use client"

import { useRef } from "react"
import { motion, useMotionTemplate, useMotionValue } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { roles } from "@/lib/portfolio-data"
import { useTypewriter } from "./use-typewriter"

export function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0.5)
  const mouseY = useMotionValue(0.5)
  const typed = useTypewriter(roles)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = sectionRef.current?.getBoundingClientRect()
    if (!rect) return
    mouseX.set((e.clientX - rect.left) / rect.width)
    mouseY.set((e.clientY - rect.top) / rect.height)
  }

  const background = useMotionTemplate`radial-gradient(600px circle at ${mouseX.get() * 100}% ${mouseY.get() * 100}%, rgba(99,102,241,0.12), transparent 70%)`

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="home"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="min-h-[85vh] flex flex-col md:flex-row items-center justify-center relative py-16 px-4 overflow-hidden pt-28 md:pt-16 gap-10 md:gap-16"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-albaster to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" />
      <motion.div className="absolute inset-0 pointer-events-none" style={{ background }} />

      <motion.div
        initial={{ opacity: 0, scale: 0.85, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="relative z-10 bg-white/80 dark:bg-gray-800/70 backdrop-blur-sm p-2 rounded-full shadow-2xl dark:shadow-gray-900/60 w-56 h-56 md:w-80 md:h-80 flex-shrink-0"
      >
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="w-full h-full rounded-full overflow-hidden ring-1 ring-black/5 dark:ring-white/10"
        >
          <img src="/image.jpg" alt="John Paul Sapasap" className="w-full h-full object-cover" />
        </motion.div>
      </motion.div>

      <div className="relative z-10 max-w-2xl text-center md:text-left px-4 sm:px-0">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 font-light tracking-widest uppercase mb-4 md:mb-6"
        >
          Welcome to my portfolio
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.6 }}
          className="font-display text-4xl sm:text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-gray-100 dark:via-gray-300 dark:to-gray-100 mb-4 tracking-tight leading-tight"
        >
          John Paul Sapasap
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="h-7 md:h-8 mb-6 md:mb-8 flex items-center justify-center md:justify-start"
        >
          <span className="text-lg md:text-xl font-medium text-blue-600 dark:text-blue-400">
            {typed}
            <span className="inline-block w-0.5 h-5 md:h-6 bg-blue-600 dark:bg-blue-400 ml-1 animate-pulse align-middle" />
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-medium mb-3"
        >
          Software Engineer | Software Developer
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.5 }}
          className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 font-light leading-relaxed"
        >
          Passionate about developing innovative mobile and web applications, with a growing focus on AI-driven
          systems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.5 }}
          className="mt-8 md:mt-10 flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start gap-4"
        >
          <button
            onClick={scrollToProjects}
            className="px-6 py-2.5 rounded-full bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-sm font-medium shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
          >
            View Projects
          </button>
          <button
            onClick={() => document.getElementById("contacts")?.scrollIntoView({ behavior: "smooth" })}
            className="px-6 py-2.5 rounded-full border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 text-sm font-medium hover:border-blue-400 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
          >
            Get in Touch
          </button>
        </motion.div>
      </div>

      <motion.button
        onClick={scrollToProjects}
        aria-label="Scroll to projects"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-6 h-6 border-2 border-gray-400 dark:border-gray-500 rounded-full flex items-center justify-center">
          <ChevronDown className="w-3 h-3 text-gray-400 dark:text-gray-500" />
        </div>
      </motion.button>
    </section>
  )
}
