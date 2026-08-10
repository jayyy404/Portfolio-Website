"use client"

import { Award, Medal, Trophy, Users } from "lucide-react"
import { academicHonors, affiliations, certificates, hackathons } from "@/lib/portfolio-data"
import { Reveal } from "./reveal"

function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-5">
      {children}
    </h3>
  )
}

export function Achievements() {
  return (
    <section id="achievements" className="py-20 px-6 bg-albaster dark:bg-gray-800">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <h2 className="font-display text-4xl md:text-5xl font-extralight text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-600 to-gray-900 dark:from-gray-100 dark:via-gray-400 dark:to-gray-100 mb-16 text-center tracking-wide">
            Achievements
          </h2>
        </Reveal>

        <div className="mb-14">
          <Reveal>
            <SubHeading>Academic Honors</SubHeading>
          </Reveal>
          <div className="space-y-4">
            {academicHonors.map((honor, index) => (
              <Reveal key={honor.title} delay={index * 0.08}>
                <div className="group flex items-center gap-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl dark:shadow-gray-900/50 dark:hover:shadow-gray-900/70 transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50 hover:border-yellow-200/50 dark:hover:border-yellow-400/50">
                  <div className="w-10 h-10 rounded-full bg-yellow-100 dark:bg-yellow-900/40 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Medal className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{honor.title}</h4>
                    <p className="text-gray-600 dark:text-gray-400">{honor.date}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mb-14">
          <Reveal>
            <SubHeading>Hackathons &amp; Competitions</SubHeading>
          </Reveal>
          <div className="space-y-4">
            {hackathons.map((hackathon, index) => (
              <Reveal key={hackathon.title} delay={index * 0.08}>
                <div className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl dark:shadow-gray-900/50 dark:hover:shadow-gray-900/70 transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50 hover:border-purple-200/50 dark:hover:border-purple-400/50">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 flex items-center gap-3">
                      <Trophy className="w-5 h-5 text-purple-600 dark:text-purple-400 flex-shrink-0" />
                      {hackathon.title}
                    </h4>
                    <span className="text-sm text-gray-500 dark:text-gray-400 mt-1 md:mt-0">{hackathon.date}</span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 font-medium mb-2">{hackathon.achievement}</p>
                  {hackathon.project && (
                    <p className="text-gray-600 dark:text-gray-400">Project: {hackathon.project}</p>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mb-14">
          <Reveal>
            <SubHeading>Certifications</SubHeading>
          </Reveal>
          <div className="space-y-4">
            {certificates.map((cert, index) => (
              <Reveal key={cert.title} delay={index * 0.08}>
                <div className="group flex items-start gap-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl dark:shadow-gray-900/50 dark:hover:shadow-gray-900/70 transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50 hover:border-purple-200/50 dark:hover:border-purple-400/50">
                  <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/40 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Award className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-1">{cert.title}</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      {cert.issuer} • {cert.date}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div>
          <Reveal>
            <SubHeading>Affiliations</SubHeading>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {affiliations.map((affiliation, index) => (
              <Reveal key={affiliation.name} delay={index * 0.08}>
                <div className="flex items-start gap-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-5 shadow-md dark:shadow-gray-900/40 border border-gray-200/50 dark:border-gray-700/50">
                  <Users className="w-4 h-4 text-cyan-600 dark:text-cyan-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100">{affiliation.name}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{affiliation.description}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-500 mt-0.5">{affiliation.date}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
