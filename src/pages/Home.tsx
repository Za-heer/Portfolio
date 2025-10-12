"use client";

import type React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { SiHuggingface } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa";
import Button from "../components/common/Button";
import { SOCIAL_LINKS } from "../utils/constants";
import resume from "../assets/Zaheer AI.pdf";
import profile_img from "../assets/profile.jpeg";

const Home: React.FC = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)]">
      {" "}
      {/* 4rem = h-16 navbar */}
      {/* Hero Section */}
      <section className="section-padding py-20 lg:py-32">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Hi, I'm <span className="text-primary-600">Zaheer Khan</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-8">
                AI/ML Engineer & Data Scientist
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                I design data-driven solutions that bridge the gap between AI
                research and real-world impact.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a href="#projects">
                  <Button className="w-full sm:w-auto">
                    View My Work <ArrowRight className="ml-2" size={20} />
                  </Button>
                </a>
                <a href={resume} download>
                  <Button
                    variant="outline"
                    className="w-full sm:w-auto bg-transparent"
                  >
                    <Download className="mr-2" size={20} />
                    Download CV
                  </Button>
                </a>
              </div>
              <div className="flex space-x-4">
                <a
                  href={SOCIAL_LINKS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-gray-100 dark:bg-dark-800 hover:bg-primary-600 hover:text-white transition-all duration-200"
                >
                  <Github size={24} />
                </a>
                <a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-gray-100 dark:bg-dark-800 hover:bg-primary-600 hover:text-white transition-all duration-200"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href={`mailto:${SOCIAL_LINKS.email}`}
                  className="p-3 rounded-full bg-gray-100 dark:bg-dark-800 hover:bg-primary-600 hover:text-white transition-all duration-200"
                >
                  <Mail size={24} />
                </a>
                <a
                  href={SOCIAL_LINKS.huggingFace}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-gray-100 dark:bg-dark-800 hover:bg-primary-600 hover:text-white transition-all duration-200"
                >
                  <SiHuggingface size={24} />
                </a>
                <a
                  href={SOCIAL_LINKS.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-gray-100 dark:bg-dark-800 hover:bg-primary-600 hover:text-white transition-all duration-200"
                >
                  <FaWhatsapp size={24} />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center">
                <img
                  src={profile_img}
                  alt="Profile"
                  className="w-72 h-72 rounded-full object-cover border-4 border-white dark:border-dark-800"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-400 rounded-full animate-bounce"></div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Quick Stats */}
      <section className="section-padding py-16 bg-gray-50 dark:bg-dark-800">
        <div className="container-max">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "10+", label: "Projects Completed" },
              { number: "2+", label: "Years Experience" },
              { number: "20+", label: "Happy Clients" },
              { number: "15+", label: "Technologies" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl lg:text-4xl font-bold text-primary-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
