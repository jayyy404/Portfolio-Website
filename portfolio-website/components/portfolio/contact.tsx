"use client"

import { useEffect, useRef, useState } from "react"
import { contact } from "@/lib/portfolio-data"
import { Icon, type IconName } from "./icons"
import { Kbd, SectionHead, Tile } from "./tile"

const links: { label: string; value: string; href: string; icon: IconName }[] = [
  { label: "LinkedIn", value: contact.linkedin.label, href: contact.linkedin.url, icon: "linkedin" },
  { label: "GitHub", value: contact.github.label, href: contact.github.url, icon: "code" },
]

export function Contact() {
  const [copied, setCopied] = useState(false)
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)

  useEffect(() => () => clearTimeout(timer.current), [])

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contact.email)
      setCopied(true)
      clearTimeout(timer.current)
      timer.current = setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = `mailto:${contact.email}`
    }
  }

  return (
    <section id="contacts" className="mt-24 sm:mt-32">
      <SectionHead eyebrow="05 / Contact" title={<>Let&apos;s <span className="italic">talk</span></>} />

      <div className="grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-6 lg:grid-cols-12">
        <Tile className="md:col-span-6 lg:col-span-7 sm:p-10">
          <p className="max-w-[30ch] font-serif text-3xl leading-[1.12] tracking-[-0.02em] text-ink text-balance sm:text-4xl">
            Open to new opportunities and collaborations.
          </p>
          <p className="mt-4 max-w-[48ch] text-sm leading-relaxed text-mute sm:text-base">
            If you have a project in mind or just want to say hello, send a message and I will get back to you.
          </p>

          <div className="mt-auto flex flex-wrap items-center gap-3 pt-10">
            <a
              href={`mailto:${contact.email}`}
              className="inline-flex h-11 items-center gap-2 rounded-md bg-ink px-5 text-sm font-medium text-canvas transition-all duration-200 hover:opacity-85 active:scale-[0.98]"
            >
              <Icon name="mail" className="h-4 w-4" />
              Send an email
            </a>
            <button
              onClick={copyEmail}
              aria-label="Copy email address"
              className="inline-flex h-11 items-center gap-2 rounded-md border border-line/15 px-4 text-sm text-ink transition-all duration-200 hover:border-line/30 active:scale-[0.98]"
            >
              <Icon name={copied ? "check" : "copy"} className={`h-4 w-4 ${copied ? "text-sage-fg" : "text-mute"}`} />
              <span className="font-mono text-xs">{copied ? "Copied" : contact.email}</span>
            </button>
          </div>
        </Tile>

        <div className="grid gap-3 sm:gap-4 md:col-span-6 lg:col-span-5">
          {links.map((l, i) => (
            <Tile key={l.label} delay={0.06 * (i + 1)} className="p-0 sm:p-0">
              <a
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-4 p-6 sm:px-8 sm:py-7"
              >
                <span className="flex min-w-0 items-center gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-canvas text-ink">
                    <Icon name={l.icon} className="h-5 w-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[15px] font-medium text-ink">{l.label}</span>
                    <span className="block truncate font-mono text-xs text-mute">{l.value}</span>
                  </span>
                </span>
                <Icon
                  name="arrow"
                  className="h-4 w-4 shrink-0 text-mute transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink"
                />
              </a>
            </Tile>
          ))}
          <Tile delay={0.18}>
            <div className="flex items-center gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-canvas text-ink">
                <Icon name="pin" className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-[15px] font-medium text-ink">Based in</span>
                <span className="block text-sm text-mute">{contact.location}</span>
              </span>
            </div>
          </Tile>
        </div>
      </div>

      <footer className="mt-16 flex flex-col items-start justify-between gap-3 border-t border-line/10 pt-6 text-xs text-mute sm:flex-row sm:items-center">
        <p>&copy; 2026 John Paul Sapasap.</p>
        <p className="hidden items-center gap-2 sm:flex">
          Press <Kbd>T</Kbd> to switch theme
        </p>
      </footer>
    </section>
  )
}
