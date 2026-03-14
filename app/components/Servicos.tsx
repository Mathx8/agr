"use client"

import { motion } from "framer-motion"
import { FaBolt, FaCheck } from "react-icons/fa6"
import { IoWater } from "react-icons/io5"
import { FaFire } from "react-icons/fa"
import { useState } from "react"

const services = [
    {
        title: "Elétrica",
        tagline: "Energia segura do início ao fim",
        icon: FaBolt,
        color: "#facc15",
        colorBg: "rgba(250,204,21,0.08)",
        colorBorder: "rgba(250,204,21,0.2)",
        items: [
            "Instalações residenciais e comerciais",
            "Quadros de distribuição",
            "Manutenção preventiva",
            "Adequação NR-10",
        ],
    },
    {
        title: "Hidráulica",
        tagline: "Fluxo perfeito em cada ponto",
        icon: IoWater,
        color: "#60a5fa",
        colorBg: "rgba(96,165,250,0.08)",
        colorBorder: "rgba(96,165,250,0.2)",
        items: [
            "Instalações completas",
            "Reparos e manutenção",
            "Detecção de vazamentos",
            "Água quente",
        ],
    },
    {
        title: "Gás",
        tagline: "Instalação com máxima segurança",
        icon: FaFire,
        color: "#f87171",
        colorBg: "rgba(248,113,113,0.08)",
        colorBorder: "rgba(248,113,113,0.2)",
        items: [
            "Instalação residencial",
            "Teste de estanqueidade",
            "Conversão de fogões",
            "Normas de segurança",
        ],
    },
]

const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15 } },
}

const cardAnim = {
    hidden: { opacity: 0, y: 60 },
    show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const } },
}

export default function Servicos() {
    const [hovered, setHovered] = useState<number | null>(null)

    return (
        <section
            id="serviços"
            className="snap-center relative py-32 overflow-hidden select-none"
            style={{ background: "linear-gradient(180deg, #f0f7fb 0%, #f8fbfd 60%, #ffffff 100%)" }}
        >
            <div
                className="absolute inset-0 opacity-[0.035]"
                style={{
                    backgroundImage: `linear-gradient(#0b3c5d 1px, transparent 1px), linear-gradient(90deg, #0b3c5d 1px, transparent 1px)`,
                    backgroundSize: "60px 60px",
                }}
            />

            {/* Glows */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-64 bg-blue-200/30 rounded-full blur-[80px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-200/40 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#0b3c5d]/50 mb-4">
                        O que fazemos
                    </span>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-[#0b3c5d] tracking-tight">
                        Nossos Serviços
                    </h2>
                    <div className="flex items-center justify-center gap-3 mt-4">
                        <div className="h-px w-16 bg-[#0b3c5d]/20" />
                        <div className="w-2 h-2 rounded-full bg-yellow-400" />
                        <div className="h-px w-16 bg-[#0b3c5d]/20" />
                    </div>
                    <p className="text-gray-500 mt-5 max-w-xl mx-auto leading-relaxed">
                        Soluções completas em instalações elétricas, hidráulicas e gás,
                        com qualidade, segurança e profissionais especializados.
                    </p>
                </motion.div>

                {/* Cards */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, margin: "-60px" }}
                    className="grid md:grid-cols-3 gap-6"
                >
                    {services.map((service, i) => {
                        const Icon = service.icon
                        const isHovered = hovered === i

                        return (
                            <motion.div
                                key={service.title}
                                variants={cardAnim}
                                onMouseEnter={() => setHovered(i)}
                                onMouseLeave={() => setHovered(null)}
                                className="group relative bg-white rounded-3xl p-8 border shadow-md hover:shadow-2xl transition-all duration-500 cursor-default overflow-hidden"
                                style={{
                                    borderColor: isHovered ? service.colorBorder : "rgba(0,0,0,0.06)",
                                    transform: isHovered ? "translateY(-8px)" : "translateY(0)",
                                }}
                            >
                                <div
                                    className="absolute inset-0 rounded-3xl transition-opacity duration-500"
                                    style={{
                                        background: `radial-gradient(circle at 30% 30%, ${service.colorBg} 0%, transparent 70%)`,
                                        opacity: isHovered ? 1 : 0,
                                    }}
                                />

                                <div
                                    className="absolute top-0 left-8 right-8 h-[2px] rounded-full transition-all duration-500"
                                    style={{
                                        background: `linear-gradient(90deg, transparent, ${service.color}, transparent)`,
                                        opacity: isHovered ? 1 : 0,
                                    }}
                                />

                                <div className="relative">
                                    <div
                                        className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-6 transition-transform duration-300"
                                        style={{
                                            background: service.colorBg,
                                            border: `1px solid ${service.colorBorder}`,
                                            transform: isHovered ? "scale(1.1) rotate(-4deg)" : "scale(1) rotate(0deg)",
                                        }}
                                    >
                                        <Icon size={26} color={service.color} />
                                    </div>

                                    <h3 className="text-2xl font-bold text-[#0b3c5d] tracking-tight">
                                        {service.title}
                                    </h3>
                                    <p className="text-sm text-gray-400 mt-1 mb-6">
                                        {service.tagline}
                                    </p>

                                    <div className="h-px bg-gray-100 mb-6" />

                                    {/* Items */}
                                    <ul className="space-y-3">
                                        {service.items.map((item) => (
                                            <li key={item} className="flex items-center gap-3 text-sm text-gray-600">
                                                <span
                                                    className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                                                    style={{ background: service.colorBg, border: `1px solid ${service.colorBorder}` }}
                                                >
                                                    <FaCheck size={9} color={service.color} />
                                                </span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        )
                    })}
                </motion.div>

            </div>
        </section>
    )
}