"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import retrato from "./retrato.png"

const Projects2 = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  const projects = [
    {
      id: 1,
      title: "Mobile App Design",
      description: "UI/UX design for a fitness tracking app",
      image: retrato,
      category: "Design",
    },
    {
      id: 2,
      title: "Web Development",
      description: "Full-stack development for a social media platform",
      image: retrato,
      category: "Development",
    },
    {
      id: 3,
      title: "Data Analysis",
      description: "Big data analysis for e-commerce trends",
      image: retrato,
      category: "Data Science",
    },
    {
      id: 4,
      title: "IoT Project",
      description: "Smart home automation system",
      image: retrato,
      category: "IoT",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-100 to-slate-100">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center text-black mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Featured Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-white rounded-xl shadow-2xl overflow-hidden transform transition-all duration-300 hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: project.id * 0.1 }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative">
                <Image
                  src={project.image || retrato}
                  alt={project.title}
                  width={600}
                  height={300}
                  className="w-full h-56 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100">
                  <span className="text-white text-lg font-semibold">View Project</span>
                </div>
              </div>
              <div className="p-6">
                <span className="text-sm font-bold text-indigo-600 uppercase tracking-wider">{project.category}</span>
                <h3 className="mt-2 text-2xl font-bold text-gray-800">{project.title}</h3>
                <p className="mt-3 text-gray-600 leading-relaxed">{project.description}</p>
                <motion.a
                  href="#"
                  className="mt-4 inline-block px-6 py-2 bg-indigo-600 text-white font-semibold rounded-full transition-colors duration-300 hover:bg-indigo-700"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                </motion.a>
              </div>
              {hoveredId === project.id && (
                <motion.div
                  className="absolute inset-0 bg-indigo-600 bg-opacity-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects2

