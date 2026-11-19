"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { LayoutGroup, motion } from "framer-motion"
import { Icon, type IconName } from "./icons"

const items: { id: string; label: string; icon: IconName }[] = [
  { id: "home", label: "Home", icon: "home" },
  { id: "experience", label: "Experience", icon: "briefcase" },
  { id: "skills", label: "Skills", icon: "stack" },
  { id: "projects", label: "Projects", icon: "grid" },
  { id: "achievements", label: "Awards", icon: "trophy" },
  { id: "contacts", label: "Contact", icon: "at" },
]

export function Nav() {
  const [active, setActive] = useState("home")
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  // Track the section nearest the middle of the viewport.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id)
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    )
    items.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const isDark = mounted && resolvedTheme === "dark"
  const toggleTheme = () => setTheme(isDark ? "light" : "dark")

  // Press "T" to flip the theme.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return
      const target = e.target as HTMLElement | null
      if (target && (target.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(target.tagName))) return
      if (e.key.toLowerCase() === "t") setTheme(isDark ? "light" : "dark")
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [isDark, setTheme])

  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-3 z-50 flex justify-center px-2 pb-[env(safe-area-inset-bottom)] sm:bottom-4 sm:px-3">
      <motion.nav
        aria-label="Primary"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="scrollbar-none pointer-events-auto flex max-w-full items-center overflow-x-auto rounded-2xl p-1 sm:gap-0.5 sm:p-1.5 border border-line/10 bg-surface/80 backdrop-blur-xl"
        style={{ boxShadow: "0 8px 30px -12px rgb(var(--line) / 0.25)" }}
      >
        <LayoutGroup>
          {items.map((item) => {
            const isActive = active === item.id
            return (
              <button
                key={item.id}
                onClick={() => go(item.id)}
                aria-label={item.label}
                aria-current={isActive ? "true" : undefined}
                className={`relative flex h-11 w-11 shrink-0 items-center justify-center gap-2 rounded-xl text-[13px] lg:w-auto lg:px-3.5 font-medium transition-colors duration-200 active:scale-[0.97] ${
                  isActive ? "text-canvas" : "text-mute hover:text-ink"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="dock-pill"
                    className="absolute inset-0 rounded-xl bg-ink"
                    transition={{ type: "spring", stiffness: 420, damping: 34 }}
                  />
                )}
                <Icon name={item.icon} className="relative z-10 h-[18px] w-[18px]" />
                <span className="relative z-10 hidden lg:inline">{item.label}</span>
              </button>
            )
          })}
        </LayoutGroup>

        <span className="mx-0.5 h-5 w-px shrink-0 bg-line/15 sm:mx-1" aria-hidden="true" />

        <button
          onClick={toggleTheme}
          aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          title="Toggle theme (T)"
          className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-mute transition-colors duration-200 hover:bg-line/5 hover:text-ink active:scale-[0.95]"
        >
          <motion.span
            key={isDark ? "sun" : "moon"}
            initial={{ rotate: -60, opacity: 0, scale: 0.7 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="block"
          >
            <Icon name={isDark ? "sun" : "moon"} className="h-[18px] w-[18px]" />
          </motion.span>
        </button>
      </motion.nav>
    </div>
  )
}
