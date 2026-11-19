"use client"

import { useState } from "react"
import { MotionConfig } from "framer-motion"
import { ScrollProgress } from "@/components/portfolio/scroll-progress"
import { Nav } from "@/components/portfolio/nav"
import { Hero } from "@/components/portfolio/hero"
import { Experience } from "@/components/portfolio/experience"
import { Projects } from "@/components/portfolio/projects"
import { Skills } from "@/components/portfolio/skills"
import { Achievements } from "@/components/portfolio/achievements"
import { Contact } from "@/components/portfolio/contact"

export default function Portfolio() {
  const [activeTech, setActiveTech] = useState<string | null>(null)

  const handleSelectTech = (tech: string) => {
    setActiveTech((current) => (current === tech ? null : tech))
  }

  return (
    <MotionConfig reducedMotion="user">
      <div className="ambient" aria-hidden="true" />
      <div className="grain" aria-hidden="true" />
      <ScrollProgress />

      <main className="relative z-10 mx-auto w-full max-w-[1200px] px-4 pb-36 pt-6 sm:px-6 sm:pt-8">
        <Hero />
        <Experience />
        <Skills activeTech={activeTech} onSelectTech={handleSelectTech} />
        <Projects
          activeTech={activeTech}
          onSelectTech={handleSelectTech}
          onClearFilter={() => setActiveTech(null)}
        />
        <Achievements />
        <Contact />
      </main>

      <Nav />
    </MotionConfig>
  )
}
