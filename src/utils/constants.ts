/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string
}

export interface ImportMeta {
  readonly env: ImportMetaEnv
}

export const NAVIGATION_ITEMS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]

export const SOCIAL_LINKS = {
  github: "https://github.com/Za-heer",
  linkedin: "https://www.linkedin.com/in/za-heer-ali/",
  huggingFace: "https://huggingface.co/Za-heer",
  kaggle: "https://www.kaggle.com/zaheerbalti",
  email: "mydocument783@gmail.com",
  whatsapp: "https://wa.me/923412324184",
}

export const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8000"
