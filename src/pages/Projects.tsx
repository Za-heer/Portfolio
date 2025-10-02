"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { type Project } from "../services/api";
import Button from "../components/common/Button";
import Movie_recommender_image from "../assets/Movie-recommender.png";
import Code_analyzer from "../assets/code analyzer.png";
import Chat_bot_img from "../assets/chat_bot.png";

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  const mockProjects: Project[] = [
    {
      id: 1,
      title: "Customer Support Chatbot",
      description:
        "Built an AI-powered customer support chatbot using Retrieval-Augmented Generation (RAG) with Hugging Face models and VectorDB.",
      technologies: [
        "Python",
        "FastAPI",
        "HuggingFace",
        "VectorDB(Pinecorn)",
        "React",
        "Tailwind CSS",
      ],
      github_url: "https://github.com/Za-heer/Chatbot-frontend",
      live_url: "https://chatbot-frontend-wheat.vercel.app/",
      image_url: Chat_bot_img,
    },
    {
      id: 2,
      title: "Movie Recommender",
      description:
        "Movie Recommendation System built with FastAPI, Bootstrap, and Python. The app allows users to search and select movies, then provides top 5 recommendations using a content-based filtering model. Integrated with TMDB API for fetching movie posters. Deployed on Render with a clean and responsive UI.",
      technologies: [
        "FastAPI",
        "Python",
        "TMDB API",
        "Bootstrap",
        "Jinja2",
        "Uvicorn",
        "Render",
      ],
      github_url: "https://github.com/Za-heer/Movie-recommender.git",
      live_url: "https://movie-recommender-axa4.onrender.com",
      image_url: Movie_recommender_image,
    },
    {
      id: 3,
      title: "Code Analyzer",
      description:
        "Code Analyzer using CodeBERT and Pylint to evaluate .py and .ipynb files, providing linting feedback and semantic insights to improve code quality.",
      technologies: [
        "Python",
        "CodeBERT",
        "Pylint",
        "FastAPI",
        "Hugging Face Spaces",
      ],
      github_url: "https://github.com/Za-heer/AI_Assignment_Checker.git",
      live_url: "https://za-heer-ai-assignment-checker.hf.space/",
      image_url: Code_analyzer,
    },
  ];

  useEffect(() => {
    const fetchProjects = async () => {
      setProjects(mockProjects);
      setLoading(false);
      // try {
      //   const data = await projectService.getProjects();
      //   setProjects(data);
      // } catch (error) {
      //   setProjects(mockProjects);
      // } finally {
      //   setLoading(false);
      // }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <div className="py-20 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
          <p>Loading projects...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="py-20">
      <section className="section-padding">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">My Projects</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Here are some of the projects I've worked on. Each one represents
              a unique challenge and learning experience.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-dark-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={
                    project.image_url ||
                    "/placeholder.svg?height=300&width=500&query=project%20screenshot"
                  }
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    {project.github_url && (
                      <a
                        href={project.github_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        <Button
                          variant="outline"
                          className="w-full bg-transparent"
                        >
                          <Github className="mr-2" size={16} />
                          Code
                        </Button>
                      </a>
                    )}
                    {project.live_url && (
                      <a
                        href={project.live_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        <Button className="w-full">
                          <ExternalLink className="mr-2" size={16} />
                          Live Demo
                        </Button>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
