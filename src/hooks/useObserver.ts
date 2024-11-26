import { useEffect, useRef } from "react";

export function useObserver(setActiveId: React.Dispatch<React.SetStateAction<string>>) {
  const refElements = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id)
        }
      })
    }, { rootMargin: "-40% 0% -40% 0%", threshold: 0.1 })

    if (refElements.current) {
      refElements.current.forEach((el) => {
        if (el) { observer.observe(el) }
      })
    }

    return () => {
      observer.disconnect()
    }
  }, []);

  return refElements
}