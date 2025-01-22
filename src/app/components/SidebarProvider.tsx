"use client"

import type { ReactNode } from "react"
import Sidebar from "./Sidebar"

interface SidebarProviderProps {
  children: ReactNode
}

const SidebarProvider: React.FC<SidebarProviderProps> = ({ children }) => {
  return (
    <div className="relative">
      <Sidebar />
      <div className="min-h-screen">{children}</div>
    </div>
  )
}

export default SidebarProvider

