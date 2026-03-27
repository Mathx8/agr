/* eslint-disable @next/next/no-img-element */
"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect, useRef } from "react"
import { FiMenu, FiX } from "react-icons/fi"
import { scrollTo } from "@/app/hooks/scrollTo"

const links = ["Inicio", "Serviços", "Sobre", "Projetos", "Contato"]

const sectionIds = ["inicio", "serviços", "sobre", "projetos", "contato"]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState("inicio")
  const [scrolled, setScrolled] = useState(false)
  const [hovered, setHovered] = useState<string | null>(null)
  const pillRef = useRef<HTMLDivElement>(null)
  const navRef = useRef<HTMLDivElement>(null)
  const itemRefs = useRef<Record<string, HTMLAnchorElement | null>>({})

  useEffect(() => {
    const container = document.querySelector("main")
    if (!container) return

    const onScroll = () => setScrolled(container.scrollTop > 40)
    container.addEventListener("scroll", onScroll, { passive: true })
    return () => container.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return

      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id) },
        { threshold: 0.4 }
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  useEffect(() => {
    const target = hovered ?? active
    const el = itemRefs.current[target]
    const nav = navRef.current
    const pill = pillRef.current
    if (!el || !nav || !pill) return

    const navRect = nav.getBoundingClientRect()
    const elRect = el.getBoundingClientRect()

    pill.style.left = `${elRect.left - navRect.left}px`
    pill.style.width = `${elRect.width}px`
  }, [active, hovered])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
  }, [open])

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="fixed w-full z-50 select-none transition-all duration-500"
      >
        <div
          className={`transition-all duration-500 ${scrolled
            ? "mx-4 mt-3 rounded-2xl bg-[#061e2e]/90 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/30"
            : "bg-[#0b3c5d]/80 backdrop-blur-md border-b border-white/10"
            }`}
        >
          <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3 text-white">

            <a
              href="#inicio"
              onClick={(e) => { e.preventDefault(); scrollTo("inicio") }}
              className="flex items-center gap-2 shrink-0"
            >
              <img
                src="/LogoAGR.png"
                alt="Logo AGR"
                className="w-11 h-11 object-contain"
              />
            </a>

            {/* Desktop nav */}
            <nav
              ref={navRef}
              className="hidden md:flex items-center gap-1 relative"
              onMouseLeave={() => setHovered(null)}
            >
              <div
                ref={pillRef}
                className="absolute top-0 h-full rounded-xl bg-white/10 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] pointer-events-none"
                style={{ left: 0, width: 0 }}
              />

              {links.map((item) => {
                const id = item.toLowerCase()
                const isActive = active === id

                return (
                  <a
                    key={item}
                    ref={(el) => { itemRefs.current[id] = el }}
                    href={`#${id}`}
                    onMouseEnter={() => setHovered(id)}
                    onClick={(e) => {
                      e.preventDefault()
                      scrollTo(id)
                    }}
                    className="relative px-4 py-2 text-sm font-medium rounded-xl transition-colors duration-200 z-10"
                    style={{
                      color: isActive ? "#facc15" : "rgba(255,255,255,0.75)",
                    }}
                  >
                    {item}

                    {isActive && (
                      <motion.span
                        layoutId="activeDoc"
                        className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-yellow-400"
                      />
                    )}
                  </a>
                )
              })}
            </nav>

            {/* Hamburger mobile */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-xl bg-white/10 hover:bg-white/20 transition text-white text-xl"
              aria-label="Menu"
            >
              <AnimatePresence mode="wait" initial={false}>
                {open ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FiX />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FiMenu />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>

          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
            exit={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-[#061e2e] flex flex-col h-[100dvh]"
          >
            <div className="absolute inset-0 opacity-[0.03]" style={{
              backgroundImage: `repeating-linear-gradient(-45deg, #facc15 0px, #facc15 1px, transparent 1px, transparent 48px)`
            }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-yellow-400/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative flex flex-col items-center justify-start flex-1 gap-2 px-8 pt-24 pb-10 overflow-y-auto">

              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="mb-10"
              >
                <img src="/LogoAGR.png" alt="AGR" className="w-16 h-16 object-contain opacity-80" />
              </motion.div>

              {links.map((item, i) => {
                const id = item.toLowerCase()
                const isActive = active === id

                return (
                  <motion.a
                    key={item}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                    href={`#${id}`}
                    onClick={(e) => {
                      e.preventDefault()
                      scrollTo(id)
                      setOpen(false)
                    }}
                    className="w-full max-w-xs flex items-center justify-between px-6 py-4 rounded-2xl transition-all duration-200 group"
                    style={{
                      background: isActive ? "rgba(250,204,21,0.08)" : "rgba(255,255,255,0.03)",
                      border: isActive ? "1px solid rgba(250,204,21,0.2)" : "1px solid rgba(255,255,255,0.05)",
                    }}
                  >
                    <span
                      className="text-xl font-semibold transition-colors"
                      style={{ color: isActive ? "#facc15" : "rgba(255,255,255,0.85)" }}
                    >
                      {item}
                    </span>
                    <svg
                      className="w-4 h-4 opacity-30 group-hover:opacity-70 transition"
                      style={{ color: isActive ? "#facc15" : "white" }}
                      fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.a>
                )
              })}

              {/* CTA mobile */}
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55 }}
                href="https://api.whatsapp.com/send?phone=5511947285115&text=Vim%20do%20site!%20Quero%20fazer%20um%20or%C3%A7amento!"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 w-full max-w-xs flex items-center justify-center gap-3 bg-yellow-400 text-black font-bold px-6 py-4 rounded-2xl shadow-lg shadow-yellow-400/20"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.535 5.858L.057 23.572a.75.75 0 0 0 .921.921l5.715-1.478A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.727 9.727 0 0 1-4.964-1.36l-.355-.213-3.685.952.972-3.592-.232-.371A9.72 9.72 0 0 1 2.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z" />
                </svg>
                Solicitar Orçamento
              </motion.a>

            </div>

            {/* Rodapé do menu */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="relative flex flex-col items-center sm:items-start gap-1 text-gray-600 text-xs pb-8"
            >
              <span className="uppercase tracking-widest text-[10px] text-gray-600">
                Desenvolvido por
              </span>

              <div className="flex items-center gap-3">
                <a
                  href="https://www.mathx8.com.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative font-medium text-gray-300 hover:text-yellow-400 transition-colors duration-300 group"
                >
                  Matheus
                  <span className="absolute left-0 -bottom-0.5 w-0 h-px bg-yellow-400 transition-all duration-300 group-hover:w-full" />
                </a>

                <span className="text-gray-600">•</span>

                <a
                  href="https://www.linkedin.com/in/samuel-lopes-gomes/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative font-medium text-gray-300 hover:text-yellow-400 transition-colors duration-300 group"
                >
                  Samuel
                  <span className="absolute left-0 -bottom-0.5 w-0 h-px bg-yellow-400 transition-all duration-300 group-hover:w-full" />
                </a>
              </div>
            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}