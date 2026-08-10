"use client"

import { useMemo, useState } from "react"
import {
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts"
import { skillCategories } from "@/lib/portfolio-data"
import { Reveal } from "./reveal"

const colorClasses: Record<string, { dot: string; badge: string; border: string }> = {
  blue: {
    dot: "from-blue-500 to-purple-500",
    badge: "from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 text-blue-700 dark:text-blue-300 border-blue-200/50 dark:border-blue-400/30",
    border: "hover:border-blue-200/50 dark:hover:border-blue-400/50",
  },
  green: {
    dot: "from-green-500 to-emerald-500",
    badge: "from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 text-green-700 dark:text-green-300 border-green-200/50 dark:border-green-400/30",
    border: "hover:border-green-200/50 dark:hover:border-green-400/50",
  },
  orange: {
    dot: "from-orange-500 to-red-500",
    badge: "from-orange-50 to-red-50 dark:from-orange-900/30 dark:to-red-900/30 text-orange-700 dark:text-orange-300 border-orange-200/50 dark:border-orange-400/30",
    border: "hover:border-orange-200/50 dark:hover:border-orange-400/50",
  },
  purple: {
    dot: "from-purple-500 to-pink-500",
    badge: "from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 text-purple-700 dark:text-purple-300 border-purple-200/50 dark:border-purple-400/30",
    border: "hover:border-purple-200/50 dark:hover:border-purple-400/50",
  },
  cyan: {
    dot: "from-cyan-500 to-blue-500",
    badge: "from-cyan-50 to-blue-50 dark:from-cyan-900/30 dark:to-blue-900/30 text-cyan-700 dark:text-cyan-300 border-cyan-200/50 dark:border-cyan-400/30",
    border: "hover:border-cyan-200/50 dark:hover:border-cyan-400/50",
  },
  yellow: {
    dot: "from-yellow-500 to-orange-500",
    badge: "from-yellow-50 to-orange-50 dark:from-yellow-900/30 dark:to-orange-900/30 text-yellow-700 dark:text-yellow-300 border-yellow-200/50 dark:border-yellow-400/30",
    border: "hover:border-yellow-200/50 dark:hover:border-yellow-400/50",
  },
}

interface SkillsProps {
  activeTech: string | null
  onSelectTech: (tech: string) => void
}

export function Skills({ activeTech, onSelectTech }: SkillsProps) {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null)

  const chartData = useMemo(
    () => skillCategories.map((cat) => ({ category: cat.name, count: cat.techs.length })),
    [],
  )

  const handleSelect = (tech: string) => {
    onSelectTech(tech)
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="skills"
      className="min-h-screen py-20 px-6 bg-albaster dark:bg-gray-800 transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <h2 className="font-display text-4xl md:text-5xl font-extralight text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-600 to-gray-900 dark:from-gray-100 dark:via-gray-400 dark:to-gray-100 mb-4 text-center tracking-wide">
            Skills &amp; Technologies
          </h2>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="text-center text-gray-500 dark:text-gray-400 mb-12 text-sm">
            Click a technology to see where it&apos;s used in my projects.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mb-14">
          <div className="max-w-md mx-auto h-64">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={chartData} outerRadius="75%">
                <PolarGrid stroke="currentColor" className="text-gray-300 dark:text-gray-600" />
                <PolarAngleAxis
                  dataKey="category"
                  tick={{ fill: "currentColor", fontSize: 11 }}
                  className="text-gray-600 dark:text-gray-300"
                />
                <Tooltip
                  contentStyle={{
                    background: "rgba(255,255,255,0.9)",
                    border: "1px solid rgba(0,0,0,0.1)",
                    borderRadius: 8,
                    fontSize: 12,
                  }}
                  formatter={(value: number) => [`${value} technologies`, "Focus"]}
                />
                <Radar
                  dataKey="count"
                  stroke="#3b82f6"
                  fill="#3b82f6"
                  fillOpacity={hoveredCategory ? 0.15 : 0.35}
                  strokeWidth={2}
                  animationDuration={800}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const colors = colorClasses[category.color]
            return (
              <Reveal key={category.name} delay={index * 0.05}>
                <div
                  onMouseEnter={() => setHoveredCategory(category.name)}
                  onMouseLeave={() => setHoveredCategory(null)}
                  className={`h-full bg-gray-50/70 dark:bg-gray-700/70 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl dark:shadow-gray-900/30 dark:hover:shadow-gray-900/50 transition-all duration-300 border border-gray-200/50 dark:border-gray-600/50 ${colors.border}`}
                >
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center">
                    <div className={`w-2 h-2 bg-gradient-to-r ${colors.dot} rounded-full mr-3`} />
                    {category.name}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.techs.map((tech) => (
                      <button
                        key={tech}
                        onClick={() => handleSelect(tech)}
                        className={`px-3 py-1.5 bg-gradient-to-r ${colors.badge} text-sm rounded-full border transition-all duration-300 hover:scale-105 active:scale-95 ${
                          activeTech === tech ? "ring-2 ring-offset-1 ring-blue-400 dark:ring-offset-gray-800" : ""
                        }`}
                      >
                        {tech}
                      </button>
                    ))}
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
