import { useEffect, useRef} from "react";

export function useObserver(setActiveId: React.Dispatch<React.SetStateAction<string>>){
  
  const refElements = useRef<(HTMLElement | null)[]>([]);

  const callback = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setActiveId(entry.target.id)
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callback, {
      rootMargin: "-40% 0% -40% 0%", threshold: 0.1 });

    refElements.current.forEach((element) => {
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      if (refElements.current) {
        observer.disconnect();
      }
    };
  }, [refElements]);

  return refElements
}