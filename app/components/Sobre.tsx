/* eslint-disable @next/next/no-img-element */
"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"

function CountUp({ target, suffix = "" }: { target: number; suffix?: string }) {
    const ref = useRef<HTMLSpanElement>(null)
    const inView = useInView(ref, { once: false })
    const [count, setCount] = useState(0)

    useEffect(() => {
        if (!inView) { setTimeout(() => setCount(0), 0); return }

        let start = 0
        const duration = 1400
        const step = 16
        const increment = target / (duration / step)

        const timer = setInterval(() => {
            start += increment
            if (start >= target) {
                setCount(target)
                clearInterval(timer)
            } else {
                setCount(Math.floor(start))
            }
        }, step)

        return () => clearInterval(timer)
    }, [inView, target])

    return <span ref={ref}>{count}{suffix}</span>
}

const stats = [
    { value: 15, suffix: "+", label: "anos de experiência" },
    { value: 500, suffix: "+", label: "projetos realizados" },
    { value: 100, suffix: "%", label: "conformidade técnica" },
]

const highlights = [
    { icon: "🏗️", text: "Obras residenciais e industriais" },
    { icon: "📋", text: "Projetos dentro das normas NBR e NR-10" },
    { icon: "🔧", text: "Equipe técnica especializada" },
    { icon: "📍", text: "Atendemos São Paulo e região" },
]

export default function Sobre() {
    return (
        <section
            id="sobre"
            className="snap-center relative py-32 overflow-hidden select-none"
            style={{ background: "linear-gradient(180deg, #ffffff 0%, #f4f8fb 50%, #eaf3f8 100%)" }}
        >
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-[100px] pointer-events-none -translate-y-1/4 translate-x-1/4" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-yellow-100/60 rounded-full blur-3xl pointer-events-none" />

            <div className="absolute right-0 top-0 h-full w-[3px] bg-gradient-to-b from-transparent via-[#0b3c5d]/10 to-transparent hidden md:block" />

            <div className="max-w-7xl mx-auto px-6 relative">
                <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="relative order-2 md:order-1"
                    >
                        <div className="absolute -top-4 -left-4 w-full h-full rounded-3xl border-2 border-yellow-400/30 pointer-events-none" />
                        <div className="absolute -bottom-4 -right-4 w-48 h-48 rounded-3xl bg-[#0b3c5d]/5 pointer-events-none" />

                        <img
                            src="/casal.png"
                            alt="Equipe AGR"
                            className="relative rounded-3xl shadow-2xl w-full object-cover hover:scale-[1.02] transition duration-700"
                        />

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: false }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                            className="absolute -bottom-5 -right-5 bg-[#0b3c5d] text-white px-5 py-3 rounded-2xl shadow-xl"
                        >
                            <p className="text-2xl font-extrabold text-yellow-400 leading-none">+15</p>
                            <p className="text-xs text-gray-300 mt-0.5">anos no mercado</p>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="order-1 md:order-2"
                    >
                        <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#0b3c5d]/50 mb-3">
                            Sobre a empresa
                        </span>

                        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0b3c5d] tracking-tight leading-tight">
                            Quem somos
                            <span className="text-yellow-400">.</span>
                        </h2>

                        <p className="mt-5 text-gray-600 leading-relaxed">
                            Somos especialistas em soluções elétricas, hidráulicas e de gás,
                            atuando com responsabilidade, segurança e excelência técnica
                            em projetos residenciais e comerciais em São Paulo e região.
                        </p>

                        <p className="mt-3 text-gray-500 leading-relaxed text-sm">
                            Nosso compromisso é entregar serviços duráveis,
                            eficientes e totalmente dentro das normas vigentes,
                            garantindo tranquilidade e qualidade para cada cliente.
                        </p>

                        <ul className="mt-8 grid grid-cols-2 gap-3">
                            {highlights.map(({ icon, text }) => (
                                <li
                                    key={text}
                                    className="flex items-start gap-2 bg-white border border-gray-100 rounded-xl px-4 py-3 shadow-sm text-sm text-gray-600"
                                >
                                    <span className="mt-0.5 text-base">{icon}</span>
                                    <span>{text}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="flex gap-3 mt-8 flex-wrap">
                            {stats.map(({ value, suffix, label }) => (
                                <div
                                    key={label}
                                    className="flex-1 min-w-[100px] bg-gradient-to-br from-[#0b3c5d] to-[#06283d] text-white rounded-2xl px-5 py-4 shadow-lg"
                                >
                                    <p className="text-2xl font-extrabold text-yellow-400 leading-none">
                                        <CountUp target={value} suffix={suffix} />
                                    </p>
                                    <p className="text-xs text-gray-300 mt-1">{label}</p>
                                </div>
                            ))}
                        </div>

                    </motion.div>
                </div>
            </div>
        </section>
    )
}