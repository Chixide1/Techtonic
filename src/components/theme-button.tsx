'use client'
import { SunIcon, MoonIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeButton() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <button onClick={() => setTheme(theme == 'light' ? 'dark' : 'light')} className="btn">
      {theme == 'light' ? <SunIcon/> : <MoonIcon/> }
    </button>
  );
}