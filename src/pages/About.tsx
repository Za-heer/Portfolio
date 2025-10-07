"use client";

import type React from "react";
import { motion } from "framer-motion";
import { Brain, Bot, BarChart3, Code2 } from "lucide-react";
import about_img from "../assets/about.jpg";

const About: React.FC = () => {
  const skills = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI & Machine Learning",
      description:
        "Building intelligent models using ML/DL for real-world problems, from prediction systems to computer vision and NLP solutions",
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: "Generative & Agentic AI",
      description:
        "Designing, fine-tuning, and deploying LLMs with RAG pipelines, prompt engineering, and custom AI agents for businesses and users.",
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Data Science & Analytics",
      description:
        "Transforming raw data into actionable insights through statistical analysis, visualization, and data-driven decision-making.",
    },
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Web Development",
      description:
        "Creating modern, scalable web applications with the MERN stack and integrating AI-powered features into user experiences.",
    },
  ];

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
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">About Me</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              I’m Zaheer Khan, an AI Engineer with a foundation in BS
              Statistics, web development, and advanced training in Artificial
              Intelligence & Data Science. My expertise spans LLMs, Generative &
              Agentic AI, NLP, CV, ML/DL, Prompt Engineering, RAG, and
              deployment tools like MLflow, Docker, and FastAPI. Alongside this,
              I also have hands-on experience in MERN stack development. <br />
              <br />
              I’m passionate about building intelligent systems that merge data,
              AI, and real-world applications, and my long-term goal is to
              become an AI expert and launch my own AI-driven startup.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img
                src={about_img}
                alt="About me"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-3xl font-bold mb-6">My Journey</h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  Statistics Foundation → Began my academic journey with a BS in
                  Statistics, building strong analytical and problem-solving
                  skills.
                </p>

                <p>
                  Web Development → Completed a 1-year course in MERN stack,
                  gaining experience in building scalable and interactive web
                  applications.
                </p>

                <p>
                  AI & Data Science → Transitioned into AI & Data Science, where
                  I learned machine learning, deep learning, NLP, and computer
                  vision.
                </p>

                <p>
                  AI Engineer → Currently working on Generative & Agentic AI,
                  LLMs, and AI deployment, with projects focused on fine-tuning,
                  RAG pipelines, and intelligent systems.
                </p>

                <p>
                  Future Vision → Striving to become an AI expert and eventually
                  found my own startup to deliver impactful AI solutions.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-center mb-12">What I Do</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="text-center p-6 rounded-xl bg-white dark:bg-dark-800 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="text-primary-600 mb-4 flex justify-center">
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{skill.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {skill.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
