import { RefObject, useEffect, useRef } from "react";

export function useObserver(refElements: RefObject<(HTMLElement | null)[]>,setActiveId: React.Dispatch<React.SetStateAction<string>>) {

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id)
          console.log(entry.target)
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
  }, [setActiveId]);
}