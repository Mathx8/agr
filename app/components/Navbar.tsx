/* eslint-disable @next/next/no-img-element */
"use client"

import { motion } from "framer-motion"
import { scrollTo } from "@/app/hooks/scrollTo"

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      className="fixed w-full z-50 backdrop-blur-md bg-[#0b3c5d]/80 border-b border-white/10 select-none"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 text-white">

        <div className="flex items-center gap-2">
          <img
            src="/LogoAGR.png"
            alt="Logo AGR"
            className="w-12 h-12 object-contain"
          />
        </div>

        <nav className="hidden md:flex gap-8 text-sm font-medium">

          {["Inicio", "Serviços", "Sobre", "Projetos", "Contato"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative group"
              onClick={(e) => {
                e.preventDefault();
                scrollTo(item.toLowerCase());
              }}
            >
              {item}

              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-400 transition-all group-hover:w-full" />
            </a>
          ))}

        </nav>

      </div>
    </motion.header>
  )
}