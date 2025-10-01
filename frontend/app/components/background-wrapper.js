"use client";

import StarsCanvas from "./stars-canvas-dark";
import { useTheme } from "next-themes";
import StarsCanvasLight from "./stars-canvas-light";

export default function BackgroundWrapper() {
  const { theme } = useTheme();

  return (
    <>
      {theme === "dark" && <StarsCanvas />}
      {theme === "light" && <StarsCanvasLight />}
    </>
  );
}
