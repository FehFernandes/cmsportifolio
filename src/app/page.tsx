"use client"

import { useDesign } from "./components/contexts/DesignContext"
import Sidebar from "./components/Sidebar"
import Navbar1 from "./components/Navbar1"
import Navbar2 from "./components/Navbar2"
import Hero1 from "./components/Hero1"
import Hero2 from "./components/Hero2"
import Skills1 from "./components/Skills1"
import Skills2 from "./components/Skills2"
import Projects1 from "./components/Projects1"
import Projects2 from "./components/Projects2"
import Footer1 from "./components/Footer1"
import Footer2 from "./components/Footer2"
import SidebarProvider from "./components/SidebarProvider"

export default function Home() {
  const { currentNavbar, currentHero, currentSkills, currentProjects, currentFooter } = useDesign()

  return (
    <div className="min-h-screen bg-gray-100">
      <Sidebar />
      <main>
        {currentNavbar === "navbar1" && <Navbar1 />}
        {currentNavbar === "navbar2" && <Navbar2 />}
        {currentHero === "hero1" && <Hero1 />}
        {currentHero === "hero2" && <Hero2 />}
        {currentSkills === "skills1" && <Skills1 />}
        {currentSkills === "skills2" && <Skills2 />}
        {currentProjects === "projects1" && <Projects1 />}
        {currentProjects === "projects2" && <Projects2 />}

        {currentNavbar === "default" &&
          currentHero === "default" &&
          currentSkills === "default" &&
          currentProjects === "default" &&
          currentFooter === "default" && (
            <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
              <h1 className="text-3xl font-bold text-gray-800 mb-4">Bem-vindo ao Your Portfolio Builder</h1>
              <p className="text-gray-600">
              Escolha designs para navbar, hero, skills, projects e footer seções na barra lateral para começar.
              </p>
            </div>
          )}
      </main>
      {currentFooter === "footer1" && <Footer1 />}
      {currentFooter === "footer2" && <Footer2 />}
    </div>
  )
}

