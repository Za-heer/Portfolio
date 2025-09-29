"use client";

import type React from "react";
import { motion } from "framer-motion";

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "AI & Machine Learning",
      skills: [
        { name: "Machine Learning (Scikit-learn)", level: 85 },
        { name: "Deep Learning (TensorFlow/Pytorch)", level: 80 },
        { name: "Natural Language Processing (NLP)", level: 80 },
        { name: "Computer Vision (CV)", level: 75 },
        { name: "Large Language Models (LLMs)", level: 85 },
        { name: "Prompt Engineering / RAG", level: 80 },
      ],
    },
    {
      title: "Core Knowledge & Development",
      skills: [
        { name: "Statistics & Data Analysis", level: 90 },
        { name: "Python", level: 90 },
        { name: "SQL", level: 80 },
        { name: "React", level: 70 },
        { name: "JavaScript / TypeScript", level: 75 },
        { name: "HTML/CSS & Tailwind", level: 70 },
      ],
    },
    {
      title: "Tools & Deployment",
      skills: [
        { name: "FastAPI", level: 80 },
        { name: "Docker", level: 70 },
        { name: "MLflow", level: 70 },
        { name: "Git & GitHub", level: 85 },
        { name: "Vercel / Hugging Face Spaces", level: 80 },
        { name: "Weights & Biases (W&B)", level: 80 },
      ],
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
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Skills & Technologies
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Here are the technologies and tools I work with to bring ideas to
              life.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
                className="bg-white dark:bg-dark-800 rounded-xl p-8 shadow-lg"
              >
                <h2 className="text-2xl font-bold mb-6 text-center text-primary-600">
                  {category.title}
                </h2>
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-gray-600 dark:text-gray-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <motion.div
                          className="bg-primary-600 h-2 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true, amount: 0.4 }}
                          transition={{
                            duration: 1,
                            delay: categoryIndex * 0.2 + skillIndex * 0.1,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
