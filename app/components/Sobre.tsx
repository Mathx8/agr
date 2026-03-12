/* eslint-disable @next/next/no-img-element */
"use client"

import { motion } from "framer-motion"

export default function Sobre() {
    return (
        <section id="sobre" className="relative py-28 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
            <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl" />
            <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-yellow-200/30 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center select-none relative">

                {/* TEXTO */}
                <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.7 }}
                >

                    <span className="uppercase tracking-widest text-sm text-[#0b3c5d]/70 font-semibold">
                        Sobre a empresa
                    </span>

                    <h2 className="text-4xl md:text-5xl font-bold text-[#0b3c5d] mt-3">
                        Quem somos
                    </h2>

                    <p className="mt-6 text-gray-600 leading-relaxed text-lg">
                        Somos especialistas em soluções elétricas, hidráulicas e de gás,
                        atuando com responsabilidade, segurança e excelência técnica
                        em projetos residenciais e comerciais.
                    </p>

                    <p className="mt-4 text-gray-600 leading-relaxed">
                        Nosso compromisso é entregar serviços duráveis,
                        eficientes e totalmente dentro das normas vigentes,
                        garantindo tranquilidade e qualidade para cada cliente.
                    </p>

                    {/* ESTATÍSTICAS */}
                    <div className="flex gap-6 mt-10 flex-wrap">

                        <motion.div
                            whileHover={{ y: -4 }}
                            className="bg-white border border-gray-100 shadow-md px-8 py-6 rounded-2xl"
                        >
                            <h3 className="text-3xl font-bold text-[#0b3c5d]">
                                +15
                            </h3>
                            <p className="text-gray-500 text-sm">
                                anos de experiência
                            </p>
                        </motion.div>

                        <motion.div
                            whileHover={{ y: -4 }}
                            className="bg-white border border-gray-100 shadow-md px-8 py-6 rounded-2xl"
                        >
                            <h3 className="text-3xl font-bold text-[#0b3c5d]">
                                +500
                            </h3>
                            <p className="text-gray-500 text-sm">
                                projetos realizados
                            </p>
                        </motion.div>

                    </div>

                </motion.div>

                {/* IMAGEM */}
                <motion.div
                    initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.7 }}
                    className="relative"
                >

                    <div className="absolute inset-0 bg-blue-200/20 blur-3xl rounded-full" />

                    <img
                        src="/casal.png"
                        alt="Equipe"
                        className="relative rounded-3xl shadow-2xl hover:scale-[1.03] transition duration-500"
                    />

                </motion.div>

            </div>
        </section>
    )
}