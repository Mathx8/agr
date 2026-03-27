"use client"

import { motion } from "framer-motion"

const container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.12
        }
    }
}

const item = {
    hidden: { opacity: 0, y: 32 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeInOut" as const } }
}

const services = [
    { label: "Instalações Elétricas", icon: "⚡" },
    { label: "Instalações Hidráulicas", icon: "💧" },
    { label: "Instalação de Gás", icon: "🔥" },
]

const contacts = [
    { icon: "📞", label: "(11) 94728-5115", href: "tel:+5511947285115" },
    { icon: "📧", label: "agrinstalacoeseletricasehid@gmail.com", href: "mailto:agrinstalacoeseletricasehid@gmail.com" },
    { icon: "📍", label: "São Paulo e Região", href: null },
]

export default function Footer() {
    return (
        <section id="contato" className="snap-center relative text-white overflow-hidden">
            <div className="absolute inset-0 bg-[#061e2e]" />

            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `repeating-linear-gradient(
                        -45deg,
                        #facc15 0px,
                        #facc15 1px,
                        transparent 1px,
                        transparent 40px
                    )`
                }}
            />

            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-yellow-400/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, margin: "-80px" }}
                className="relative"
            >
                {/* CTA */}
                <div className="max-w-4xl mx-auto text-center px-6 pt-28 pb-20">
                    <motion.h2
                        variants={item}
                        className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight"
                    >
                        Tem um projeto
                        <br />
                        <span className="text-yellow-400">em mente?</span>
                    </motion.h2>

                    <motion.p
                        variants={item}
                        className="mt-6 text-lg text-gray-400 max-w-xl mx-auto leading-relaxed"
                    >
                        Entre em contato com nossa equipe e receba um orçamento
                        rápido e totalmente personalizado para sua obra.
                    </motion.p>

                    <motion.div
                        variants={item}
                        className="flex justify-center gap-4 mt-10 flex-wrap"
                    >
                        <a
                            href="https://api.whatsapp.com/send?phone=5511947285115&text=Vim%20do%20site!%20Quero%20fazer%20um%20or%C3%A7amento!"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative inline-flex items-center gap-3 bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-8 py-4 rounded-2xl shadow-xl shadow-yellow-400/20 transition-all duration-300 hover:scale-[1.03] hover:shadow-yellow-400/40"
                        >
                            <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.535 5.858L.057 23.572a.75.75 0 0 0 .921.921l5.715-1.478A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.727 9.727 0 0 1-4.964-1.36l-.355-.213-3.685.952.972-3.592-.232-.371A9.72 9.72 0 0 1 2.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z" />
                            </svg>
                            Orçamento via WhatsApp
                        </a>
                    </motion.div>

                </div>

                <div className="max-w-7xl mx-auto px-6">
                    <div className="relative">
                        <div className="border-t border-white/[0.06]" />
                        <div className="absolute left-1/2 -translate-x-1/2 -top-px w-24 h-px bg-yellow-400/60" />
                    </div>
                </div>

                {/* Footer */}
                <footer className="py-16">
                    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
                        <motion.div variants={item}>
                            <div className="flex items-center gap-2 mb-4 select-none">
                                <div className="w-2 h-8 bg-yellow-400 rounded-full" />
                                <h3 className="text-2xl font-extrabold tracking-tight">
                                    AGR Instalações
                                </h3>
                            </div>
                            <p className="text-gray-400 text-sm leading-relaxed select-none">
                                Especialistas em instalações elétricas,
                                hidráulicas e gás para projetos
                                residenciais e industriais em São Paulo
                                e região.
                            </p>
                        </motion.div>

                        <motion.div variants={item} className="select-none">
                            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-5">
                                Serviços
                            </h4>
                            <ul className="space-y-3">
                                {services.map(({ label, icon }) => (
                                    <li key={label}>
                                        <span className="group flex items-center gap-3 text-gray-300 hover:text-yellow-400 cursor-pointer transition-colors duration-200 text-sm">
                                            <span className="text-base">{icon}</span>
                                            {label}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div variants={item}>
                            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-5 select-none">
                                Contato
                            </h4>
                            <ul className="space-y-3">
                                {contacts.map(({ icon, label, href }) => (
                                    <li key={label}>
                                        {href ? (
                                            <a
                                                href={href}
                                                className="flex items-start gap-3 text-gray-300 hover:text-yellow-400 transition-colors duration-200 text-sm group"
                                            >
                                                <span className="mt-0.5">{icon}</span>
                                                <span className="break-all">{label}</span>
                                            </a>
                                        ) : (
                                            <span className="flex items-start gap-3 text-gray-300 text-sm">
                                                <span className="mt-0.5">{icon}</span>
                                                {label}
                                            </span>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                    </div>

                    <motion.div
                        variants={item}
                        className="max-w-7xl mx-auto px-6 mt-14 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/[0.06] pt-8 select-none"
                    >
                        <p className="text-gray-500 text-sm flex items-center gap-2">
                            <span className="hidden sm:block text-white">|</span>

                            <span>
                                Desenvolvido por{" "}
                                <a
                                    href="https://www.mathx8.com.br/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 font-medium"
                                >
                                    Matheus
                                </a>
                                {" "}e{" "}
                                <a
                                    href="https://www.linkedin.com/in/samuel-lopes-gomes/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 font-medium"
                                >
                                    Samuel
                                </a>
                            </span>
                        </p>
                        <p className="text-gray-600 text-sm">
                            São Paulo, SP
                        </p>

                    </motion.div>

                </footer>

            </motion.div>

        </section>
    )
}