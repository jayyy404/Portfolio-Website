"use client"

import { useState } from "react"
import { Check, Copy, Github, Linkedin, Mail, MapPin } from "lucide-react"
import { contact } from "@/lib/portfolio-data"
import { Reveal } from "./reveal"

export function Contact() {
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contact.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // clipboard unavailable, ignore
    }
  }

  return (
    <section id="contacts" className="py-10 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <Reveal>
          <h2 className="font-display text-4xl md:text-5xl font-extralight text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-600 to-gray-900 dark:from-gray-100 dark:via-gray-400 dark:to-gray-100 mb-16 text-center tracking-wide">
            Contacts
          </h2>
        </Reveal>

        <div className="space-y-8">
          <Reveal delay={0.1}>
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-8 shadow-md dark:shadow-gray-900/30 transition-colors duration-300">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-6">Get In Touch</h3>

              <div className="space-y-4 text-gray-600 dark:text-gray-400 text-left max-w-md mx-auto">
                <div className="flex items-center justify-between gap-3">
                  <a
                    href={`mailto:${contact.email}`}
                    className="flex items-center gap-3 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300"
                  >
                    <Mail className="w-4 h-4 flex-shrink-0" />
                    {contact.email}
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    aria-label="Copy email address"
                    className="p-1.5 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300 flex-shrink-0"
                  >
                    {copied ? (
                      <Check className="w-4 h-4 text-green-500" />
                    ) : (
                      <Copy className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                    )}
                  </button>
                </div>

                <a
                  href={contact.linkedin.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300"
                >
                  <Linkedin className="w-4 h-4 flex-shrink-0" />
                  {contact.linkedin.label}
                </a>

                <a
                  href={contact.github.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300"
                >
                  <Github className="w-4 h-4 flex-shrink-0" />
                  {contact.github.label}
                </a>

                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 flex-shrink-0" />
                  {contact.location}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
              I'm always interested in new opportunities and collaborations. Feel free to reach out if you'd like to
              discuss a project or just say hello!
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
