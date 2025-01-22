"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useDesign } from "./contexts/DesignContext"
import { ChevronDown, X, Settings } from "lucide-react"

type NavbarOption = "default" | "navbar1" | "navbar2"
type HeroOption = "default" | "hero1" | "hero2"
type SkillsOption = "default" | "skills1" | "skills2"
type ProjectsOption = "default" | "projects1" | "projects2"
type FooterOption = "default" | "footer1" | "footer2"

type SectionOption<T> = {
  name: string
  value: T
  preview: string
}

const Sidebar = () => {
  const {
    setCurrentNavbar,
    setCurrentHero,
    setCurrentSkills,
    setCurrentProjects,
    setCurrentFooter,
    currentNavbar,
    currentHero,
    currentSkills,
    currentProjects,
    currentFooter,
  } = useDesign()

  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const [isMinimized, setIsMinimized] = useState(false)
  const sidebarRef = useRef<HTMLDivElement>(null)

  const toggleSidebar = () => setIsOpen(!isOpen)
  const closeSidebar = () => setIsOpen(false)
  const toggleMinimize = () => setIsMinimized(!isMinimized)

  const sectionOptions = [
    {
      id: "navbar",
      title: "Navigation",
      description: "Escolha seu estilo de Navbar",
      current: currentNavbar,
      options: [
        { name: "Vazio", value: "default", preview: "Sem estilo" },
        { name: "Modern", value: "navbar1", preview: "Transparente arredondado" },
        { name: "Green", value: "navbar2", preview: "Verde moderno" },
      ] as SectionOption<NavbarOption>[],
      setter: setCurrentNavbar as (value: NavbarOption) => void,
    },
    {
      id: "hero",
      title: "Hero",
      description: "Escolha o estilo do sua Hero",
      current: currentHero,
      options: [
        { name: "Vazio", value: "default", preview: "Sem estilo" },
        { name: "Split", value: "hero1", preview: "Quadrados moderno parallax" },
        { name: "Dynamic", value: "hero2", preview: "Circulo animado com pulse" },
      ] as SectionOption<HeroOption>[],
      setter: setCurrentHero as (value: HeroOption) => void,
    },
    {
      id: "skills",
      title: "Skills",
      description: "Escolha seu estilo de habilidades",
      current: currentSkills,
      options: [
        { name: "Vazio", value: "default", preview: "Sem estilo" },
        { name: "Porcentagem", value: "skills1", preview: "Com hovers" },
        { name: "Barra", value: "skills2", preview: "Com animações" },
      ] as SectionOption<SkillsOption>[],
      setter: setCurrentSkills as (value: SkillsOption) => void,
    },
    {
      id: "projects",
      title: "Projects",
      description: "Escolha o estilo do seu Projeto",
      current: currentProjects,
      options: [
        { name: "Vazio", value: "default", preview: "Sem estilo" },
        { name: "Imagem", value: "projects1", preview: "Imagem com hover" },
        { name: "Moderno", value: "projects2", preview: "Branco moderno" },
      ] as SectionOption<ProjectsOption>[],
      setter: setCurrentProjects as (value: ProjectsOption) => void,
    },
    {
      id: "footer",
      title: "Footer",
      description: "Escolha o estilo do seu rodapé",
      current: currentFooter,
      options: [
        { name: "Vazio", value: "default", preview: "Sem estilo" },
        { name: "Colunas", value: "footer1", preview: "Com muitas colunas" },
        { name: "Simples", value: "footer2", preview: "Só o basico" },
      ] as SectionOption<FooterOption>[],
      setter: setCurrentFooter as (value: FooterOption) => void,
    },
  ]

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const sidebarVariants = {
    open: { x: 0 },
    closed: { x: isMinimized ? "-90%" : "-100%" },
  }

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/10 backdrop-blur-sm z-50 lg:hidden"
            onClick={toggleSidebar}
          />
        )}
      </AnimatePresence>

      <motion.div
        ref={sidebarRef}
        className="fixed left-0 top-0 h-full bg-white dark:bg-gray-800 shadow-2xl z-50 flex"
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={sidebarVariants}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div className={`w-80 flex flex-col ${isMinimized ? "hidden" : ""}`}>
          <div className="p-6 border-b dark:border-gray-700 relative flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Design Your Page</h2>
            <button
              onClick={closeSidebar}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
            >
              <X className="h-6 w-6 text-gray-500 dark:text-gray-400" />
            </button>
          </div>

          <div className="overflow-y-auto flex-grow">
            {sectionOptions.map((section) => (
              <div key={section.id} className="p-4 border-b dark:border-gray-700">
                <button
                  onClick={() => setActiveSection(activeSection === section.id ? "" : section.id)}
                  className="flex justify-between items-center w-full"
                >
                  <div className="text-left">
                    <h3 className="font-medium text-gray-800 dark:text-white">{section.title}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{section.description}</p>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 transition-transform duration-200
                              ${activeSection === section.id ? "rotate-180" : ""}`}
                  />
                </button>

                <AnimatePresence>
                  {activeSection === section.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 space-y-2"
                    >
                      {section.options.map((option) => (
                        <button
                          key={option.value}
                          onClick={() => section.setter(option.value)}
                          className={`w-full p-3 rounded-lg text-left transition-all
                                    ${
                                      section.current === option.value
                                        ? "bg-indigo-50 dark:bg-indigo-900/30 border-2 border-indigo-500"
                                        : "hover:bg-gray-50 dark:hover:bg-gray-700"
                                    }`}
                        >
                          <div className="flex items-center justify-between">
                            <span
                              className={`font-medium ${
                                section.current === option.value
                                  ? "text-indigo-600 dark:text-indigo-400"
                                  : "text-gray-700 dark:text-gray-200"
                              }`}
                            >
                              {option.name}
                            </span>
                            {section.current === option.value && (
                              <span className="px-2 py-1 text-xs font-medium text-indigo-600 dark:text-indigo-400 bg-indigo-100 dark:bg-indigo-900 rounded-full">
                                Active
                              </span>
                            )}
                          </div>
                          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{option.preview}</p>
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-between border-l border-gray-200 dark:border-gray-700">
          <button
            onClick={toggleMinimize}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
          >
            <ChevronDown
              className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${isMinimized ? "-rotate-90" : "rotate-90"}`}
            />
          </button>
          <button
            onClick={toggleSidebar}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>
      </motion.div>

      <button
        onClick={toggleSidebar}
        className={`fixed top-60 left-4 z-50 p-3 bg-indigo-600 text-white rounded-full shadow-lg 
                   hover:bg-indigo-700 hover:shadow-xl transition-all duration-300 
                   focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2
                   ${isOpen ? "hidden" : ""}`}
      >
        <Settings className="w-6 h-6" />
      </button>
    </>
  )
}

export default Sidebar

