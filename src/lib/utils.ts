import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function addHeadingId(text: string) {
  let counter = 0;
  
  return text.replace(/<h2>(.*?)<\/h2>/gi, (match, content) => {
    const id = `section-${counter}`;
    counter++;
    return `<h2 id="${id}">${content}</h2>`;
  });
}