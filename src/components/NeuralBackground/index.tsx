"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface NeuralBackgroundProps {
  className?: string
  color?: string
  trailOpacity?: number
  particleCount?: number
  speed?: number
}

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  age: number
  life: number
}

function createParticle(width: number, height: number): Particle {
  return {
    x: Math.random() * width,
    y: Math.random() * height,
    vx: 0,
    vy: 0,
    age: 0,
    life: Math.random() * 200 + 100,
  }
}

export default function NeuralBackground({
  className,
  color = "#6366f1",
  trailOpacity = 0.15,
  particleCount = 600,
  speed = 1,
}: NeuralBackgroundProps) {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const canvasRef = React.useRef<HTMLCanvasElement>(null)

  React.useEffect(() => {
    const container = containerRef.current
    const canvas = canvasRef.current
    if (!container || !canvas) return

    // Respect prefers-reduced-motion
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches
    if (prefersReduced) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let particles: Particle[] = []
    const mouse = { x: -1000, y: -1000 }

    function resize() {
      const dpr = window.devicePixelRatio || 1
      const width = container!.clientWidth
      const height = container!.clientHeight
      canvas!.width = width * dpr
      canvas!.height = height * dpr
      ctx!.scale(dpr, dpr)
      canvas!.style.width = `${width}px`
      canvas!.style.height = `${height}px`

      // Re-initialize particles
      particles = Array.from({ length: particleCount }, () =>
        createParticle(width, height)
      )
    }

    function animate() {
      const width = container!.clientWidth
      const height = container!.clientHeight

      // Trail overlay
      ctx!.fillStyle = `rgba(0, 0, 0, ${trailOpacity})`
      ctx!.fillRect(0, 0, width, height)

      // Draw and update particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]

        // Flow field
        const angle =
          (Math.cos(p.x * 0.005) + Math.sin(p.y * 0.005)) * Math.PI
        p.vx += Math.cos(angle) * 0.2 * speed
        p.vy += Math.sin(angle) * 0.2 * speed

        // Mouse repulsion
        const dx = p.x - mouse.x
        const dy = p.y - mouse.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 150) {
          const force = (150 - dist) / 150
          p.vx -= dx * force * 0.05
          p.vy -= dy * force * 0.05
        }

        // Friction
        p.vx *= 0.95
        p.vy *= 0.95

        // Update position
        p.x += p.vx
        p.y += p.vy
        p.age++

        // Screen wrapping (toroidal)
        if (p.x < 0) p.x += width
        if (p.x > width) p.x -= width
        if (p.y < 0) p.y += height
        if (p.y > height) p.y -= height

        // Respawn if too old
        if (p.age >= p.life) {
          particles[i] = createParticle(width, height)
          continue
        }

        // Alpha fade in/out
        const alpha = 1 - Math.abs((p.age / p.life - 0.5) * 2)

        ctx!.fillStyle = color
        ctx!.globalAlpha = alpha
        ctx!.fillRect(p.x, p.y, 1.5, 1.5)
      }

      ctx!.globalAlpha = 1
      animationFrameId = requestAnimationFrame(animate)
    }

    const onMouseMove = (e: MouseEvent) => {
      const rect = container!.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
    }

    const onMouseLeave = () => {
      mouse.x = -1000
      mouse.y = -1000
    }

    resize()
    animate()

    window.addEventListener("resize", resize)
    container.addEventListener("mousemove", onMouseMove)
    container.addEventListener("mouseleave", onMouseLeave)

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener("resize", resize)
      container.removeEventListener("mousemove", onMouseMove)
      container.removeEventListener("mouseleave", onMouseLeave)
    }
  }, [color, trailOpacity, particleCount, speed])

  return (
    <div
      ref={containerRef}
      className={cn("w-full h-full overflow-hidden bg-black", className)}
    >
      <canvas ref={canvasRef} aria-hidden="true" />
    </div>
  )
}
