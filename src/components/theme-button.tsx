'use client'
import { SunIcon, MoonIcon, UpdateIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeButton() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <UpdateIcon className="max-w-4 animate-spin"/>
  }

  return (
    <button onClick={() => setTheme(theme == 'light' ? 'dark' : 'light')} className="btn">
      {theme == 'light' ? <SunIcon/> : <MoonIcon/> }
    </button>
  );
}