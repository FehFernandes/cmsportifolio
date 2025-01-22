"use client"

import React from "react"
import { motion } from "framer-motion"
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa"
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md"

const Footer1 = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: FaFacebookF, href: "#", label: "Facebook" },
    { icon: FaTwitter, href: "#", label: "Twitter" },
    { icon: FaInstagram, href: "#", label: "Instagram" },
    { icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
  ]

  const contactInfo = [
    { icon: MdEmail, text: "info@example.com", href: "mailto:info@example.com" },
    { icon: MdPhone, text: "(22) 99181-7890", href: "tel:+11234567890" },
    { icon: MdLocationOn, text: "123 Web Dev, City, 12345", href: "#" },
  ]

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-black text-white py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/circuit-pattern.svg')] opacity-5" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h3 className="text-2xl font-bold mb-4 text-purple-400">About Us</h3>
            <p className="text-gray-300 mb-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, reprehenderit quisquam? Distinctio commodi fugiat exercitationem molestiae quisquam! Nemo earum sequi, nihil reiciendis amet eaque minima mollitia, odio id odit pariatur.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-purple-600 text-white py-2 px-4 rounded-full text-sm font-semibold hover:bg-purple-700 transition-colors duration-300"
            >
              Learn More
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-blue-400">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "Services", "Portfolio", "About", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center"
                  >
                    <span className="mr-2">›</span> {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-green-400">Contact</h3>
            <ul className="space-y-4">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-center text-gray-300">
                  <item.icon className="mr-2 text-green-400" />
                  <a href={item.href} className="hover:text-white transition-colors duration-300">
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-pink-400">Follow Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>
            <div className="mt-6">
              <h4 className="text-lg font-semibold mb-2 text-gray-200">Subscribe to Our Newsletter</h4>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-gray-800 text-white px-4 py-2 rounded-l-full focus:outline-none focus:ring-2 focus:ring-purple-600 flex-grow"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-purple-600 text-white px-4 py-2 rounded-r-full hover:bg-purple-700 transition-colors duration-300"
                >
                  Subscribe
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-12 pt-8 border-t border-gray-800 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-gray-400">&copy; {currentYear} Your Name. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer1

