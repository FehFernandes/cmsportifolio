"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, useAnimation, useMotionValue, useTransform } from "framer-motion"
import retrato from "./retrato.png"

const Hero2 = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const cursorX = useMotionValue(0)
  const cursorY = useMotionValue(0)
  const controls = useAnimation()

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  useEffect(() => {
    cursorX.set(mousePosition.x)
    cursorY.set(mousePosition.y)
  }, [mousePosition, cursorX, cursorY])

  const rotateX = useTransform(cursorY, [0, window.innerHeight], [5, -5])
  const rotateY = useTransform(cursorX, [0, window.innerWidth], [-5, 5])

  const handleHoverStart = () => setIsHovering(true)
  const handleHoverEnd = () => setIsHovering(false)

  const name = "Your Name"
  const title = "Full-Stack Developer & UI/UX Enthusiast"
  const skills = ["React", "Node.js", "TypeScript", "UI/UX Design", "AWS"]

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 to-black overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[url('/circuit-pattern.svg')] bg-repeat opacity-10" />
        <div className="absolute inset-0 backdrop-filter backdrop-blur-sm" />
      </div>

      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col md:flex-row items-center justify-between"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="text-left mb-10 md:mb-0 md:mr-10">
          <motion.h1
            className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            {name}
          </motion.h1>
          <motion.h2
            className="text-2xl md:text-3xl text-gray-300 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {title}
          </motion.h2>
          <motion.p
            className="text-xl text-gray-400 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Crafting digital experiences that inspire and innovate.
          </motion.p>
          <motion.div
            className="flex flex-wrap gap-3 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            {skills.map((skill, index) => (
              <span key={index} className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">
                {skill}
              </span>
            ))}
          </motion.div>
          <motion.div
            className="relative inline-block"
            onHoverStart={handleHoverStart}
            onHoverEnd={handleHoverEnd}
            style={{ perspective: 1000 }}
          >
            <motion.button
              className="bg-purple-600 text-white py-3 px-6 rounded-full text-lg font-semibold transition-all duration-300 ease-in-out hover:bg-purple-700 hover:shadow-lg hover:shadow-purple-500/50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ rotateX, rotateY }}
            >
              View My Work
            </motion.button>
            <motion.div
              className="absolute -inset-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 opacity-75 blur-lg"
              initial={false}
              animate={isHovering ? { scale: 1.1, opacity: 0.8 } : { scale: 1, opacity: 0 }}
            />
          </motion.div>
        </div>

        <motion.div
          className="relative w-64 h-64 md:w-96 md:h-96"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <div
            className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full animate-pulse"
            style={{ filter: "blur(40px)" }}
          />
          <Image
            src={retrato}
            alt="John Doe"
            width={384}
            height={384}
            className="rounded-full object-cover border-4 border-white"
          />
          <motion.div
            className="absolute -inset-4 rounded-full border-2 border-purple-500 opacity-75"
            animate={{
              rotate: 360,
              scale: [1, 1.05, 1],
            }}
            transition={{
              rotate: { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
              scale: { duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
            }}
          />
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        
        <motion.div
          className="w-6 h-10 border-2 border-white rounded-full p-1"
          initial={{ y: 0 }}
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5, ease: "easeInOut" }}
        >
          <motion.div className="w-1 h-2 bg-white rounded-full mx-auto" />
        </motion.div>
      </motion.div>

      <motion.div
        className="fixed top-0 left-0 w-6 h-6 rounded-full bg-white mix-blend-difference pointer-events-none z-50"
        style={{
          x: cursorX,
          y: cursorY,
        }}
      />
    </div>
  )
}

export default Hero2

