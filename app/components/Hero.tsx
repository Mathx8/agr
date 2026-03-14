/* eslint-disable @next/next/no-img-element */
"use client"

import { motion } from "framer-motion"
import { FaBolt } from "react-icons/fa6"
import { IoWater } from "react-icons/io5"
import { FaFire } from "react-icons/fa"
import { scrollTo } from "@/app/hooks/scrollTo"

const badges = [
    { icon: FaBolt, label: "Elétrica", color: "#facc15" },
    { icon: IoWater, label: "Hidráulica", color: "#60a5fa" },
    { icon: FaFire, label: "Gás", color: "#f87171" },
]

const stats = [
    { value: "+15", label: "anos de experiência" },
    { value: "+500", label: "projetos realizados" },
    { value: "100%", label: "dentro das normas" },
]

export default function Hero() {
    return (
        <section id="inicio" className="snap-center relative min-h-screen flex items-center text-white overflow-hidden select-none">
            <img
                src="/obra.jpg"
                alt=""
                className="absolute w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-[#061e2e]/95 via-[#0b3c5d]/80 to-[#0b3c5d]/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#061e2e]/60 via-transparent to-transparent" />

            <div
                className="absolute inset-0 opacity-[0.025]"
                style={{
                    backgroundImage: `repeating-linear-gradient(
                        -55deg,
                        #facc15 0px,
                        #facc15 1px,
                        transparent 1px,
                        transparent 48px
                    )`
                }}
            />

            <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-yellow-400/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-transparent via-yellow-400/60 to-transparent hidden md:block" />

            <div className="relative max-w-7xl mx-auto px-6 md:px-12 pt-28 pb-16 w-full">
                <div className="max-w-2xl">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="flex flex-wrap gap-2 mb-8"
                    >
                        {badges.map(({ icon: Icon, label, color }) => (
                            <span
                                key={label}
                                className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/15 text-white/90 text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full"
                            >
                                <Icon size={11} color={color} />
                                {label}
                            </span>
                        ))}
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                        className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight"
                    >
                        Instalações
                        <br />
                        <span className="text-yellow-400">que duram.</span>
                        <br />
                        <span className="text-white/70 text-4xl md:text-5xl font-bold">
                            Feitas com cuidado.
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
                        className="mt-7 text-base md:text-lg text-gray-300 leading-relaxed max-w-lg"
                    >
                        Soluções completas em elétrica, hidráulica e gás
                        para obras residenciais e industriais em São Paulo
                        e região — com segurança e excelência técnica.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.55, ease: "easeOut" }}
                        className="flex flex-wrap gap-4 mt-10"
                    >
                        <a
                            href="https://api.whatsapp.com/send?phone=5511947285115&text=Vim%20do%20site!%20Quero%20fazer%20um%20or%C3%A7amento!"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center gap-3 bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-8 py-4 rounded-2xl shadow-lg shadow-yellow-400/25 transition-all duration-300 hover:scale-[1.03] hover:shadow-yellow-400/40"
                        >
                            {/* WhatsApp icon */}
                            <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.535 5.858L.057 23.572a.75.75 0 0 0 .921.921l5.715-1.478A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.727 9.727 0 0 1-4.964-1.36l-.355-.213-3.685.952.972-3.592-.232-.371A9.72 9.72 0 0 1 2.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z" />
                            </svg>
                            Solicitar Orçamento
                        </a>

                        <a
                            onClick={(e) => {
                                e.preventDefault()
                                scrollTo("projetos")
                            }}
                            className="inline-flex items-center gap-2 border border-white/20 hover:border-white/50 bg-white/5 hover:bg-white/10 backdrop-blur-sm text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-300 cursor-pointer hover:scale-[1.02]"
                        >
                            Ver Obras
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </a>
                    </motion.div>

                </div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.75, ease: "easeOut" }}
                    className="mt-20 flex flex-wrap gap-px"
                >
                    {stats.map(({ value, label }, i) => (
                        <div
                            key={label}
                            className={`flex flex-col px-8 py-5 bg-white/5 backdrop-blur-sm border border-white/10 
                                ${i === 0 ? "rounded-l-2xl" : ""} 
                                ${i === stats.length - 1 ? "rounded-r-2xl" : ""}
                            `}
                        >
                            <span className="text-2xl md:text-3xl font-extrabold text-yellow-400 leading-none">
                                {value}
                            </span>
                            <span className="text-xs text-gray-400 mt-1 whitespace-nowrap">
                                {label}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}