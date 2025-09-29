import axios from "axios"
import { API_BASE_URL } from "../utils/constants"

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
})

export interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

export interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
  github_url?: string
  live_url?: string
  image_url?: string
}

export const contactService = {
  sendMessage: async (data: ContactFormData) => {
    const response = await api.post("/contact", data)
    return response.data
  },
}

export const projectService = {
  getProjects: async (): Promise<Project[]> => {
    const response = await api.get("/projects")
    return response.data
  },
}

export default api
