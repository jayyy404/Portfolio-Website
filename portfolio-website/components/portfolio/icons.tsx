// One consistent icon set: 24px grid, 1.6 stroke, round caps. No external icon library.
const paths = {
  arrow: "M7 17L17 7M8 7h9v9",
  sun: "M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6L7 7M17 17l1.4 1.4M5.6 18.4L7 17M17 7l1.4-1.4M12 8a4 4 0 100 8 4 4 0 000-8z",
  moon: "M20 14.5A8 8 0 019.5 4 8 8 0 1020 14.5z",
  copy: "M9 9h10v10H9zM5 15V5h10",
  check: "M5 12.5l4.5 4.5L19 7.5",
  code: "M8 8l-4 4 4 4M16 8l4 4-4 4M13.5 6l-3 12",
  linkedin: "M5.5 10v9M5.5 5.5v.01M10 19v-9M10 14a3.5 3.5 0 017 0v5",
  mail: "M4 6h16v12H4zM4 7l8 6 8-6",
  pin: "M12 21s6-5.2 6-10a6 6 0 10-12 0c0 4.8 6 10 6 10zM12 9a2 2 0 100 4 2 2 0 000-4z",
  lock: "M6 11h12v9H6zM8.5 11V8a3.5 3.5 0 017 0v3",
  plus: "M12 5v14M5 12h14",
  minus: "M5 12h14",
  close: "M6 6l12 12M18 6L6 18",
  home: "M4 11l8-7 8 7v9H4z",
  briefcase: "M4 8h16v11H4zM9 8V5h6v3M4 13h16",
  stack: "M12 3l9 5-9 5-9-5zM3 13l9 5 9-5",
  grid: "M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z",
  trophy: "M8 4h8v5a4 4 0 01-8 0zM8 6H4v1a3 3 0 003 3M16 6h4v1a3 3 0 01-3 3M12 13v4M8 20h8",
  at: "M16 12a4 4 0 11-8 0 4 4 0 018 0zM16 12v1.5a2.5 2.5 0 005 0V12a9 9 0 10-3.5 7.1",
} as const

export type IconName = keyof typeof paths

export function Icon({ name, className = "h-4 w-4" }: { name: IconName; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d={paths[name]} />
    </svg>
  )
}
