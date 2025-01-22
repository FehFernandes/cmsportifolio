"use client"

import type React from "react"
import { createContext, useState, useContext } from "react"

type NavbarType = "default" | "navbar1" | "navbar2"
type HeroType = "default" | "hero1" | "hero2"
type SkillsType = "default" | "skills1" | "skills2"
type ProjectsType = "default" | "projects1" | "projects2"
type FooterType = "footer1" | "footer2" | "default";

interface DesignContextType {
  currentNavbar: NavbarType
  setCurrentNavbar: (navbar: NavbarType) => void
  currentHero: HeroType
  setCurrentHero: (hero: HeroType) => void
  currentSkills: SkillsType
  setCurrentSkills: (skills: SkillsType) => void
  currentProjects: ProjectsType
  setCurrentProjects: (projects: ProjectsType) => void
  currentFooter: FooterType
  setCurrentFooter: (footer: FooterType) => void
}

const DesignContext = createContext<DesignContextType | undefined>(undefined)

export const DesignProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentNavbar, setCurrentNavbar] = useState<NavbarType>("default")
  const [currentHero, setCurrentHero] = useState<HeroType>("default")
  const [currentSkills, setCurrentSkills] = useState<SkillsType>("default")
  const [currentProjects, setCurrentProjects] = useState<ProjectsType>("default")
  const [currentFooter, setCurrentFooter] = useState<FooterType>("default")

  return (
    <DesignContext.Provider
      value={{
        currentNavbar,
        setCurrentNavbar,
        currentHero,
        setCurrentHero,
        currentSkills,
        setCurrentSkills,
        currentProjects,
        setCurrentProjects,
        currentFooter,
        setCurrentFooter,
      }}
    >
      {children}
    </DesignContext.Provider>
  )
}

export const useDesign = () => {
  const context = useContext(DesignContext)
  if (context === undefined) {
    throw new Error("useDesign must be used within a DesignProvider")
  }
  return context
}

