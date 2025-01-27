"use client"

import { useState, useEffect } from "react"

const Hero1 = () => {
  const [scrollY, setScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  // Parallax effect
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Entrance animation
  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0F172A]">
      
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] top-[-250px] left-[-250px] bg-purple-500/30 rounded-full blur-3xl" 
             style={{ transform: `translate(${scrollY * 0.3}px, ${scrollY * 0.2}px)` }} />
        <div className="absolute w-[500px] h-[500px] bottom-[-250px] right-[-250px] bg-indigo-500/30 rounded-full blur-3xl"
             style={{ transform: `translate(${-scrollY * 0.3}px, ${-scrollY * 0.2}px)` }} />
      </div>

      <div className="absolute inset-0" 
           style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
                    backgroundSize: "50px 50px" }} />

      <div className="relative container mx-auto px-6 pt-32 pb-24">
        <div className={`max-w-6xl mx-auto transform transition-all duration-1000 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}>
          {/* Main content */}
          <div className="space-y-16">
            {/* Header section */}
            <div className="text-center space-y-8">
              <h2 className="text-gray-400 font-mono tracking-wide animate-fadeIn">
                FULL-STACK DEVELOPER
              </h2>
              <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400">
                Creating Digital
                <span className="block mt-2 bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text">
                  Experiences
                </span>
              </h1>
            </div>

            {/* Interactive cards */}
            <div className="grid md:grid-cols-3 gap-8 mt-16">
              {[
                { title: "Frontend", count: "40+", desc: "Projects Completed" },
                { title: "Backend", count: "95%", desc: "Client Satisfaction" },
                { title: "DevOps", count: "5+", desc: "Years Experience" }
              ].map((card, index) => (
                <div
                  key={index}
                  className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm
                           hover:bg-white/10 hover:border-white/20 transition-all duration-300
                           transform hover:-translate-y-1"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 opacity-0 
                                group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                  <h3 className="text-xl font-semibold text-gray-200 mb-2">{card.title}</h3>
                  <div className="text-3xl font-bold text-white mb-2">{card.count}</div>
                  <p className="text-gray-400">{card.desc}</p>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-16">
              <button className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold
                               hover:from-purple-600 hover:to-indigo-600 transform hover:-translate-y-0.5 transition-all duration-200
                               focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-[#0F172A]">
                View Projects
              </button>
              <button className="px-8 py-3 rounded-full border border-white/20 text-white font-semibold
                               hover:bg-white/10 transform hover:-translate-y-0.5 transition-all duration-200
                               focus:outline-none focus:ring-2 focus:ring-white/20">
                Contact Me
              </button>
            </div>

            {/* Scroll indicator */}
            
          </div>
        </div>
      </div>

      {/* Tech stack floating elements */}
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 opacity-20">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="w-24 h-24 absolute rounded-full border border-white/10"
            style={{
              left: `${i * 60}px`,
              top: `${Math.sin(i) * 100}px`,
              animation: `float ${3 + i}s infinite ease-in-out`
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default Hero1