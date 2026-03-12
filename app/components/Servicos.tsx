"use client"

import { motion } from "framer-motion"
import { FaBolt } from "react-icons/fa6";
import { IoWater } from "react-icons/io5";
import { FaFire, FaCheck } from "react-icons/fa";

const services = [
    {
        title: "Elétrica",
        icon: FaBolt,
        color: "#facc15",
        items: [
            "Instalações residenciais e comerciais",
            "Quadros de distribuição",
            "Manutenção preventiva",
            "Adequação NR-10",
        ],
    },
    {
        title: "Hidráulica",
        icon: IoWater,
        color: "#3b82f6",
        items: [
            "Instalações completas",
            "Reparos e manutenção",
            "Detecção de vazamentos",
            "Água quente",
        ],
    },
    {
        title: "Gás",
        icon: FaFire,
        color: "#ef4444",
        items: [
            "Instalação residencial",
            "Teste de estanqueidade",
            "Conversão de fogões",
            "Normas de segurança",
        ],
    },
]

export default function Servicos() {
    return (
        <section id="serviços" className="relative py-28 bg-gradient-to-b from-gray-50 to-white overflow-hidden select-none">
            <div className="max-w-7xl mx-auto px-6 text-center relative">

                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl font-bold text-[#0b3c5d]"
                >
                    Nossos Serviços
                </motion.h2>

                <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
                    Soluções completas em instalações elétricas, hidráulicas e gás,
                    com qualidade, segurança e profissionais especializados.
                </p>

                <div className="grid md:grid-cols-3 gap-10 mt-20">

                    {services.map((service, i) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 80 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: i * 0.2,
                                duration: 0.6,
                                ease: "easeOut",
                            }}
                            viewport={{ once: false }}
                            whileHover={{ y: -8 }}
                            className="group relative bg-white rounded-3xl p-10 border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500"
                        >
                            {/* glow hover */}
                            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-blue-500/10 to-yellow-400/10" />

                            <div className="relative">

                                <div className="flex justify-center mb-6 text-[#0b3c5d] group-hover:scale-110 transition">
                                    <service.icon size={44} color={service.color} />
                                </div>

                                <h3 className="text-2xl font-semibold text-[#0b3c5d]">
                                    {service.title}
                                </h3>

                                <ul className="mt-6 space-y-3 text-gray-600 text-sm leading-relaxed">
                                    {service.items.map((item) => (
                                        <li
                                            key={item}
                                            className="flex items-center gap-2"
                                        >
                                            <FaCheck className="text-green-500 text-sm" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>

                            </div>
                        </motion.div>
                    ))}

                </div>

            </div>
        </section>
    )
}