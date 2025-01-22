
"use client"

import type React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Icon } from "@iconify/react"

interface Skill {
  name: string
  icon: string
  color: string
  level: number
  description: string
}

const skills: Skill[] = [
  {
    name: "React",
    icon: "logos:react",
    color: "#61DAFB",
    level: 90,
    description: "Building efficient and scalable front-end applications",
  },
  {
    name: "JavaScript",
    icon: "logos:javascript",
    color: "#F7DF1E",
    level: 85,
    description: "Creating dynamic and interactive web experiences",
  },
  {
    name: "TypeScript",
    icon: "logos:typescript-icon",
    color: "#3178C6",
    level: 80,
    description: "Developing robust and type-safe applications",
  },
  {
    name: "Node.js",
    icon: "logos:nodejs-icon",
    color: "#339933",
    level: 75,
    description: "Building scalable server-side and full-stack solutions",
  },
  {
    name: "CSS",
    icon: "vscode-icons:file-type-css",
    color: "#1572B6",
    level: 85,
    description: "Crafting beautiful and responsive user interfaces",
  },
  {
    name: "Python",
    icon: "logos:python",
    color: "#3776AB",
    level: 70,
    description: "Data analysis, automation, and backend development",
  },
]

const SkillsShowcase: React.FC = () => {
  const [activeSkill, setActiveSkill] = useState<Skill | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white py-20 px-4 overflow-hidden">
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-4xl md:text-5xl font-bold text-center mb-12"
      >
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
          Skills
        </span>
      </motion.h2>

      <div className="relative max-w-6xl mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-3xl opacity-20 animate-pulse" />

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="relative grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-10"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative"
              onMouseEnter={() => setActiveSkill(skill)}
              onMouseLeave={() => setActiveSkill(null)}
            >
              <div className="bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-xl p-6 h-full flex flex-col items-center justify-center border border-gray-700 hover:border-gray-500 transition-all duration-300 group">
                <Icon icon={skill.icon} className="text-6xl mb-4" style={{ color: skill.color }} />
                <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
                <div className="w-full bg-gray-700 rounded-full h-2.5 mb-4">
                  <motion.div
                    className="h-2.5 rounded-full"
                    style={{ backgroundColor: skill.color }}
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                </div>
                <AnimatePresence>
                  {activeSkill === skill && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-sm text-center text-gray-300"
                    >
                      {skill.description}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute -top-20 -left-20 w-40 h-40 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute -bottom-20 -right-20 w-40 h-40 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"
        />
      </div>
    </div>
  )
}

export default SkillsShowcase

