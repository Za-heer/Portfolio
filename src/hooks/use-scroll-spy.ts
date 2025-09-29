"use client"

import { useEffect, useState } from "react"

export function useScrollSpy(sectionIds: string[], rootMargin = 0) {
  const [activeId, setActiveId] = useState<string>(sectionIds[0] || "")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute("id")
          if (!id) return
          if (entry.isIntersecting) {
            setActiveId(id)
          }
        })
      },
      {
        root: null,
        rootMargin: `-${rootMargin}px 0px -60% 0px`, // trigger a bit before the section top, favor current section
        threshold: 0.1,
      },
    )

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [sectionIds, rootMargin])

  return activeId
}
