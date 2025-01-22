"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Home, User, Briefcase, Mail, Menu, X, ChevronRight } from "lucide-react"

const Navbar2 = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [hoverIndex, setHoverIndex] = useState<number | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "services", "contact"]
      const scrollPosition = window.scrollY

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", icon: Home, href: "#home" },
    { name: "About", icon: User, href: "#about" },
    { name: "Services", icon: Briefcase, href: "#services" },
    { name: "Contact", icon: Mail, href: "#contact" },
  ]

  return (
    <nav className="fixed w-full z-20 bg-gray-900 shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0"
          >
            <a href="#" className="text-2xl font-bold text-white">
              Port<span className="text-green-400">folio</span>
            </a>
          </motion.div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  className="relative"
                  onHoverStart={() => setHoverIndex(index)}
                  onHoverEnd={() => setHoverIndex(null)}
                >
                  <motion.a
                    href={item.href}
                    className={`px-3 py-2 rounded-md text-sm font-medium ${
                      activeSection === item.name.toLowerCase()
                        ? "text-green-400 bg-gray-800"
                        : "text-gray-300 hover:text-green-400 hover:bg-gray-800"
                    } transition-all duration-300 ease-in-out`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <item.icon className="inline-block w-4 h-4 mr-2" />
                    {item.name}
                  </motion.a>
                  <AnimatePresence>
                    {hoverIndex === index && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-0 mt-2 w-48 rounded-md shadow-lg bg-gray-800 ring-1 ring-black ring-opacity-5"
                      >
                        
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-gray-800"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    activeSection === item.name.toLowerCase()
                      ? "text-green-400 bg-gray-900"
                      : "text-gray-300 hover:text-green-400 hover:bg-gray-700"
                  } transition-all duration-300 ease-in-out`}
                  whileHover={{ x: 5 }}
                  onClick={() => setIsOpen(false)}
                >
                  <item.icon className="inline-block w-4 h-4 mr-2" />
                  {item.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        className="hidden md:block absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-blue-500"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5 }}
      />
    </nav>
  )
}

export default Navbar2

