/* eslint-disable @next/next/no-img-element */
"use client"

import { motion } from "framer-motion"

export default function Hero() {
    return (
        <section id="inicio" className="relative h-screen flex items-center text-white">

            <img
                src="/obra.jpg"
                alt=""
                className="absolute w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-[#0b3c5d]/90 to-[#0b3c5d]/50" />

            <div className="relative max-w-7xl mx-auto px-6 cursor-default select-none">

                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl md:text-6xl font-bold max-w-xl leading-tight"
                >
                    Instalações Elétricas, Hidráulicas e Gás
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="mt-6 text-lg text-gray-200 max-w-lg"
                >
                    Soluções completas com qualidade, segurança
                    e profissionais altamente qualificados.
                </motion.p>

                <motion.button
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="mt-8 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-8 py-4 rounded-xl shadow-lg transition cursor-pointer"
                >
                    Solicitar Orçamento
                </motion.button>

            </div>
        </section>
    )
}