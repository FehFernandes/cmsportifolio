"use client"

import { useState, useRef, useEffect } from "react"
import Image, { StaticImageData } from "next/image"
import { motion, useAnimation, useInView } from "framer-motion"
import { ArrowUpRight, Code2, Globe } from "lucide-react"
import retrato from "./retrato.png"

interface Project {
  id: number
  title: string
  description: string
  image: string | StaticImageData
  tags: string[]
  githubUrl: string
  liveUrl: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution with React and Node.js",
    image: retrato,
    tags: ["React", "Node.js", "MongoDB"],
    githubUrl: "https://github.com",
    liveUrl: "https://",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A productivity app built with React Native",
    image: retrato,
    tags: ["React Native", "Redux", "Firebase"],
    githubUrl: "https://github.com",
    liveUrl: "https://",
  },
  {
    id: 3,
    title: "Data Visualization Dashboard",
    description: "An interactive dashboard using D3.js and React",
    image: retrato,
    tags: ["React", "D3.js", "REST API"],
    githubUrl: "https://github.com",
    liveUrl: "https://",
  },
  {
    id: 4,
    title: "AI-Powered Chatbot",
    description: "A conversational AI using natural language processing",
    image: retrato,
    tags: ["Python", "TensorFlow", "NLP"],
    githubUrl: "https://github.com",
    liveUrl: "https://",
  },
  {
    id: 5,
    title: "Blockchain Voting System",
    description: "A secure and transparent voting system using blockchain",
    image: retrato,
    tags: ["Solidity", "Ethereum", "Web3.js"],
    githubUrl: "https://github.com/",
    liveUrl: "https://",
  },
]

const ProjectCard = ({ project }: { project: Project }) => {
  const [isHovered, setIsHovered] = useState(false)
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref)

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 },
      }}
      transition={{ duration: 0.5 }}
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-xl aspect-video">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
        transition={{ duration: 0.3 }}
        className="absolute bottom-0 left-0 right-0 p-4 text-white"
      >
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-sm mb-4">{project.description}</p>
        <div className="flex space-x-2 mb-4">
          {project.tags.map((tag, index) => (
            <span key={index} className="text-xs bg-purple-600 bg-opacity-50 px-2 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex space-x-4">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-sm hover:text-purple-400 transition-colors"
          >
            <Code2 size={16} className="mr-1" /> Code
          </a>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-sm hover:text-purple-400 transition-colors"
          >
            <Globe size={16} className="mr-1" /> Live Demo
          </a>
        </div>
      </motion.div>
    </motion.div>
  )
}

const ProjectsGallery = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Innovative Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <ProjectCard project={project} />
              {hoveredIndex === index && (
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute -top-2 -right-2 bg-purple-600 text-white rounded-full p-2 shadow-lg"
                >
                  <ArrowUpRight size={16} />
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsGallery

