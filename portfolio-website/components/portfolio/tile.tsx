"use client"

import { useRef, type ReactNode } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export type Tone = "sky" | "sage" | "clay" | "lilac" | "mist" | "sand"

export const toneClasses: Record<Tone, string> = {
  sky: "bg-sky-bg text-sky-fg",
  sage: "bg-sage-bg text-sage-fg",
  clay: "bg-clay-bg text-clay-fg",
  lilac: "bg-lilac-bg text-lilac-fg",
  mist: "bg-mist-bg text-mist-fg",
  sand: "bg-sand-bg text-sand-fg",
}

interface TileProps {
  children: ReactNode
  className?: string
  delay?: number
  layout?: boolean
  id?: string
}

/**
 * Bento tile: soft surface, hairline border, and a warm spotlight that follows the cursor.
 * Fades up once when it enters the viewport.
 */
export function Tile({ children, className, delay = 0, layout, id }: TileProps) {
  const ref = useRef<HTMLDivElement>(null)

  const handleMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el || e.pointerType === "touch") return
    const rect = el.getBoundingClientRect()
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`)
    el.style.setProperty("--my", `${e.clientY - rect.top}px`)
  }

  return (
    <motion.div
      ref={ref}
      id={id}
      layout={layout}
      onPointerMove={handleMove}
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.97 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "group relative overflow-hidden rounded-[20px] border border-line/10 bg-surface p-6 transition-colors duration-300 hover:border-line/20 sm:p-8",
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(340px circle at var(--mx, 50%) var(--my, 50%), rgb(var(--accent) / 0.09), transparent 70%)",
        }}
      />
      <div className="relative z-10 flex h-full flex-col">{children}</div>
    </motion.div>
  )
}

export function Tag({ tone = "sand", children, className }: { tone?: Tone; children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-1 font-mono text-[10px] font-medium uppercase tracking-[0.08em]",
        toneClasses[tone],
        className,
      )}
    >
      {children}
    </span>
  )
}

export function SectionHead({
  eyebrow,
  title,
  aside,
}: {
  eyebrow: string
  title: ReactNode
  aside?: ReactNode
}) {
  return (
    <div className="mb-6 flex flex-col gap-3 sm:mb-8 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.14em] text-mute">{eyebrow}</p>
        <h2 className="font-serif text-4xl leading-[1.05] tracking-[-0.02em] text-ink sm:text-5xl">{title}</h2>
      </div>
      {aside}
    </div>
  )
}

export function Kbd({ children }: { children: ReactNode }) {
  return (
    <kbd className="inline-flex h-5 min-w-5 items-center justify-center rounded border border-line/15 bg-canvas px-1.5 font-mono text-[10px] text-mute">
      {children}
    </kbd>
  )
}
