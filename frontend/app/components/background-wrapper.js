"use client"

import dynamic from "next/dynamic"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

const StarsCanvas = dynamic(() => import("./stars-canvas-dark"), { ssr: false })
const StarsCanvasLight = dynamic(() => import("./stars-canvas-light"), { ssr: false })

export default function BackgroundWrapper() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <>
      {theme === "dark" && <StarsCanvas />}
      {theme === "light" && <StarsCanvasLight />}
    </>
  )
}
