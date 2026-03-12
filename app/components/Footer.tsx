"use client"

import { motion } from "framer-motion"

const container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.15
        }
    }
}

const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 }
}

export default function Footer() {
    return (
        <section id="contato" className="relative text-white overflow-hidden">

            <div className="absolute inset-0 bg-gradient-to-r from-[#0b3c5d] to-[#06283d]" />

            <div className="absolute -top-40 -left-40 w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl" />

            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false }}
                className="relative"
            >

                {/* CTA */}
                <div className="max-w-4xl mx-auto text-center px-6 py-24">

                    <motion.h2
                        variants={item}
                        className="text-4xl md:text-5xl font-bold"
                    >
                        Tem um projeto em mente?
                    </motion.h2>

                    <motion.p
                        variants={item}
                        className="mt-6 text-lg text-gray-200"
                    >
                        Entre em contato com nossa equipe e receba um orçamento
                        rápido e totalmente personalizado para sua obra.
                    </motion.p>

                    <motion.div
                        variants={item}
                        className="flex justify-center gap-4 mt-10 flex-wrap"
                    >
                        <a
                            href="https://wa.me/5511999999999"
                            target="_blank"
                            className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-8 py-4 rounded-xl shadow-lg transition"
                        >
                            Orçamento via WhatsApp
                        </a>
                    </motion.div>

                </div>

                <div className="max-w-7xl mx-auto px-6">
                    <div className="border-t border-white/10" />
                </div>

                {/* Footer */}
                <footer className="py-16">

                    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">

                        <motion.div variants={item}>
                            <h3 className="text-xl font-bold">
                                AGR Instalações
                            </h3>

                            <p className="mt-4 text-gray-300">
                                Especialistas em instalações elétricas,
                                hidráulicas e gás para projetos
                                residenciais e industriais.
                            </p>
                        </motion.div>

                        <motion.div variants={item}>
                            <h4 className="font-semibold mb-4">
                                Serviços
                            </h4>

                            <ul className="space-y-2 text-gray-300">
                                <li className="hover:text-yellow-400 cursor-pointer transition">
                                    Instalações Elétricas
                                </li>
                                <li className="hover:text-yellow-400 cursor-pointer transition">
                                    Instalações Hidráulicas
                                </li>
                                <li className="hover:text-yellow-400 cursor-pointer transition">
                                    Instalação de Gás
                                </li>
                            </ul>
                        </motion.div>

                        <motion.div variants={item}>
                            <h4 className="font-semibold mb-4">
                                Contato
                            </h4>

                            <ul className="space-y-2 text-gray-300">
                                <li>📞 (11) 99999-9999</li>
                                <li>📧 contato@agr.com</li>
                                <li>📍 São Paulo e Região</li>
                            </ul>
                        </motion.div>

                    </div>

                    <motion.div
                        variants={item}
                        className="text-center text-gray-400 mt-12 select-none"
                    >
                        © 2026 AGR Instalações
                    </motion.div>

                </footer>

            </motion.div>

        </section>
    )
}