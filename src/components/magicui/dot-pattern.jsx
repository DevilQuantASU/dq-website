"use client"

import React, { useEffect, useId, useMemo, useRef, useState } from "react"
import { cn } from "../../lib/utils"

export function DotPattern({
  width = 16,
  height = 16,
  x = 0,
  y = 0,
  cx = 1,
  cy = 1,
  cr = 1,
  className,
  glow = false,
  ...props
}) {
  const id = useId()
  const containerRef = useRef(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        setDimensions((prev) => {
          const w = Math.round(rect.width)
          const h = Math.round(rect.height)
          if (prev.width === w && prev.height === h) return prev
          return { width: w, height: h }
        })
      }
    }

    updateDimensions()
    window.addEventListener("resize", updateDimensions)
    return () => window.removeEventListener("resize", updateDimensions)
  }, [])

  const dots = useMemo(() => {
    const cols = Math.ceil(dimensions.width / width) || 0
    const rows = Math.ceil(dimensions.height / height) || 0
    return Array.from({ length: cols * rows }, (_, i) => {
      const col = i % cols
      const row = Math.floor(i / cols)
      const seed = ((col * 127 + row * 311) % 1000) / 1000
      const seed2 = ((col * 311 + row * 127) % 1000) / 1000
      return {
        x: col * width + cx + x,
        y: row * height + cy + y,
        delay: seed * 5,
        duration: seed2 * 3 + 2,
      }
    })
  }, [dimensions.width, dimensions.height, width, height, cx, cy, x, y])

  // CSS-safe ID (useId returns colons which are invalid in keyframe names)
  const cssId = id.replace(/:/g, "_")

  return (
    <svg
      ref={containerRef}
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full text-neutral-400/80",
        className
      )}
      {...props}
    >
      <defs>
        <radialGradient id={`${id}-gradient`}>
          <stop offset="0%" stopColor="currentColor" stopOpacity="1" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </radialGradient>
      </defs>
      {glow && (
        <style>{`
          @keyframes ${cssId}-glow {
            0%, 100% { opacity: 0.4; }
            50% { opacity: 1; }
          }
        `}</style>
      )}
      {dots.map((dot) => (
        <circle
          key={`${dot.x}-${dot.y}`}
          cx={dot.x}
          cy={dot.y}
          r={cr}
          fill={glow ? `url(#${id}-gradient)` : "currentColor"}
          style={
            glow
              ? {
                  animation: `${cssId}-glow ${dot.duration}s ease-in-out infinite`,
                  animationDelay: `${dot.delay}s`,
                }
              : undefined
          }
        />
      ))}
    </svg>
  )
}
