"use client"

import { useState } from "react"
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
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
      <ScrollProgress />
      <Nav />
      <Hero />
      <Experience />
      <Projects activeTech={activeTech} onClearFilter={() => setActiveTech(null)} />
      <Skills activeTech={activeTech} onSelectTech={handleSelectTech} />
      <Achievements />
      <Contact />
    </div>
  )
}
