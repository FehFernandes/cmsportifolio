"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Icon } from "@iconify/react"

const Skills1 = () => {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null)

  const skills = [
    {
      name: "React",
      level: 90,
      color: "#61DAFB",
      icon: "logos:react",
      description: "Expertise in building complex, scalable web applications using React and its ecosystem.",
    },
    {
      name: "JavaScript",
      level: 85,
      color: "#F7DF1E",
      icon: "logos:javascript",
      description: "Strong command of modern JavaScript, including ES6+ features and asynchronous programming.",
    },
    {
      name: "TypeScript",
      level: 80,
      color: "#3178C6",
      icon: "logos:typescript-icon",
      description: "Proficient in using TypeScript to build robust, type-safe applications and libraries.",
    },
    {
      name: "Node.js",
      level: 75,
      color: "#339933",
      icon: "logos:nodejs-icon",
      description: "Experienced in server-side JavaScript, building RESTful APIs, and working with databases.",
    },
    {
      name: "CSS",
      level: 85,
      color: "#1572B6",
      icon: "vscode-icons:file-type-css",
      description: "Advanced skills in CSS, including Flexbox, Grid, animations, and responsive design.",
    },
    {
      name: "Python",
      level: 70,
      color: "#3776AB",
      icon: "logos:python",
      description: "Proficiency in Python for data analysis, automation, and backend development.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Skills
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              className="relative overflow-hidden"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              onHoverStart={() => setSelectedSkill(skill.name)}
              onHoverEnd={() => setSelectedSkill(null)}
            >
              <div className="bg-gray-800 p-6 rounded-xl shadow-lg h-full flex flex-col justify-between border border-gray-700 hover:border-gray-500 transition-colors duration-300">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold" style={{ color: skill.color }}>
                      {skill.name}
                    </h3>
                    <Icon icon={skill.icon} className="text-4xl" />
                  </div>
                  <div className="relative pt-1">
                    <div className="flex mb-2 items-center justify-between">
                      <div>
                        <span
                          className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-white"
                          style={{ backgroundColor: skill.color }}
                        >
                          {skill.level}%
                        </span>
                      </div>
                    </div>
                    <div className="overflow-hidden h-2 mb-4 text-xs flex rounded-full bg-gray-700">
                      <motion.div
                        style={{ width: 0, backgroundColor: skill.color }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center"
                      />
                    </div>
                  </div>
                </div>
                <AnimatePresence>
                  {selectedSkill === skill.name && (
                    <motion.p
                      className="text-sm text-gray-300 mt-2"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {skill.description}
                    </motion.p>
                  )}
                </AnimatePresence>
                <p className="text-gray-400 mt-2 text-sm">
                  {skill.level < 50
                    ? "Beginner"
                    : skill.level < 70
                      ? "Intermediate"
                      : skill.level < 90
                        ? "Advanced"
                        : "Expert"}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills1

