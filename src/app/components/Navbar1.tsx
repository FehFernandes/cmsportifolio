"use client"

import { useState, useEffect } from "react"

const Navbar1 = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeItem, setActiveItem] = useState("home")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const menuItems = [
    { id: "home", label: "Home" },
    { id: "projects", label: "Projects" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" }
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className={`fixed w-full z-10 transition-all duration-300 ${
      isScrolled 
        ? "py-4 bg-[#0F172A]/80 backdrop-blur-lg shadow-lg" 
        : "py-6 bg-transparent"
    }`}>
      <div className="container mx-auto px-6">
        <div className="relative flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-purple-600 to-indigo-600 
                          flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
              <span className="text-white text-xl font-bold">P</span>
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r 
                           from-purple-400 to-indigo-400">Portfolio</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {menuItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setActiveItem(item.id)}
                className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                          ${activeItem === item.id 
                            ? "text-white" 
                            : "text-gray-400 hover:text-white"
                          }`}
              >
                {activeItem === item.id && (
                  <span className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-indigo-500/20 
                                 animate-fade-in"></span>
                )}
                <span className="relative">{item.label}</span>
              </a>
            ))}
            <button className="ml-4 px-6 py-2 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 
                             text-white text-sm font-medium hover:shadow-lg hover:shadow-purple-500/25 
                             transform hover:-translate-y-0.5 transition-all duration-300">
              Resume
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors duration-300"
          >
            <div className="w-6 h-5 relative transform transition-all duration-300">
              <span className={`absolute h-0.5 w-6 bg-white transform transition-all duration-300 
                              ${isMobileMenuOpen ? "rotate-45 translate-y-2.5" : ""}`} />
              <span className={`absolute h-0.5 w-6 bg-white transform transition-all duration-300 translate-y-2 
                              ${isMobileMenuOpen ? "opacity-0" : ""}`} />
              <span className={`absolute h-0.5 w-6 bg-white transform transition-all duration-300 translate-y-4 
                              ${isMobileMenuOpen ? "-rotate-45 -translate-y-0.5" : ""}`} />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden absolute left-0 right-0 top-full mt-2 transition-all duration-300 
                        ${isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"}`}>
          <div className="mx-6 bg-[#1E293B] rounded-2xl shadow-xl border border-white/10 overflow-hidden backdrop-blur-lg">
            <div className="p-4 space-y-3">
              {menuItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => {
                    setActiveItem(item.id)
                    setIsMobileMenuOpen(false)
                  }}
                  className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors duration-300
                            ${activeItem === item.id 
                              ? "bg-gradient-to-r from-purple-500/20 to-indigo-500/20 text-white" 
                              : "text-gray-400 hover:text-white hover:bg-white/5"
                            }`}
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-3 border-t border-white/10">
                <button className="w-full px-4 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-500 
                                 text-white text-sm font-medium hover:from-purple-600 hover:to-indigo-600 
                                 transition-all duration-300">
                  Resume
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar1