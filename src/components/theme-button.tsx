'use client'
import { SunIcon, MoonIcon } from "@radix-ui/react-icons"
import { useState } from "react";

export function ThemeButton() {
  let [darkTheme, setDarkTheme] = useState(false)
  console.log(darkTheme)

  const toggleTheme = () => {
    document.documentElement.classList.toggle('dark');
    setDarkTheme(darkTheme = !darkTheme)
  };

  return (
    <button onClick={toggleTheme} className="mr-8">
      {darkTheme ? <MoonIcon /> : <SunIcon />}
    </button>
  );
}