/* eslint-disable @next/next/no-img-element */
"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

type TipoProjeto = "Todos" | "Prédios" | "Elétrica" | "Hidráulica" | "Gás"

type Projeto = {
    titulo: string
    desc: string
    tipo: "Prédios" | "Elétrica" | "Hidráulica" | "Gás"
    imagens: string[]
}

const projetos: Projeto[] = [
    {
        titulo: "Residencial Aquarela",
        desc: "Elétrica e Hidráulica.",
        tipo: "Prédios",
        imagens: [
            "/Residencial Aquarela.jpeg",
            "/Residencial Aquarela 2.jpeg",
            "/Residencial Aquarela 3.jpeg"
        ]
    },
    {
        titulo: "You Conceito",
        desc: "Elétrica e Hidráulica.",
        tipo: "Prédios",
        imagens: [
            "/You Conceito.jpeg",
            "/You Conceito 2.jpeg",
            "/You Conceito 3.jpeg",
            "/You Conceito 4.jpeg"
        ]
    },
    {
        titulo: "Gênesis Residencial",
        desc: "Elétrica e Hidráulica.",
        tipo: "Prédios",
        imagens: [
            "/Gênesis Residencial.jpeg",
            "/Gênesis Residencial 2.jpeg"
        ]
    }
]

function ProjetoCard({
    projeto,
    delay,
    onClick
}: {
    projeto: Projeto
    delay: number
    onClick: () => void
}) {
    const [index, setIndex] = useState(0)

    useEffect(() => {
        if (projeto.imagens.length <= 1) return

        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % projeto.imagens.length)
        }, 3000)

        return () => clearInterval(interval)
    }, [projeto.imagens.length])

    return (
        <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay }}
            viewport={{ once: false }}
            className="relative overflow-hidden rounded-2xl shadow-lg group bg-white cursor-pointer"
            onClick={onClick}
        >
            <div className="relative h-64 overflow-hidden">

                {projeto.imagens.map((img, i) => (
                    <img
                        key={img}
                        src={img}
                        alt={projeto.titulo}
                        className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${i === index ? "opacity-100" : "opacity-0"
                            }`}
                    />
                ))}

                <div className="absolute inset-0 bg-[#0b3c5d]/70 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-white font-semibold text-lg">
                    Ver Projeto
                </div>

            </div>

            <div className="p-5 text-left">
                <h3 className="font-semibold text-lg text-[#0b3c5d]">
                    {projeto.titulo}
                </h3>
                <p className="text-gray-500 mt-1">
                    {projeto.desc}
                </p>
            </div>

        </motion.div>
    )
}

function ProjetoModal({
    projeto,
    onClose
}: {
    projeto: Projeto
    onClose: () => void
}) {
    const [index, setIndex] = useState(0)

    function next() {
        setIndex((prev) => (prev + 1) % projeto.imagens.length)
    }

    function prev() {
        setIndex((prev) =>
            prev === 0 ? projeto.imagens.length - 1 : prev - 1
        )
    }

    return (
        <AnimatePresence>
            <motion.div
                className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
            >

                <motion.div
                    className="bg-white max-w-4xl w-full rounded-2xl overflow-hidden"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0.8 }}
                    onClick={(e) => e.stopPropagation()}
                >

                    <div className="relative">

                        <img
                            src={projeto.imagens[index]}
                            alt={projeto.titulo}
                            className="w-full h-[400px] object-cover"
                        />

                        {projeto.imagens.length > 1 && (
                            <>
                                <button
                                    onClick={prev}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 text-white px-3 py-2 rounded-lg cursor-pointer"
                                >
                                    ‹
                                </button>

                                <button
                                    onClick={next}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 text-white px-3 py-2 rounded-lg cursor-pointer"
                                >
                                    ›
                                </button>
                            </>
                        )}

                    </div>

                    <div className="p-6 text-left">

                        <h3 className="text-2xl font-bold text-[#0b3c5d]">
                            {projeto.titulo}
                        </h3>

                        <p className="text-gray-500 mt-2">
                            {projeto.desc}
                        </p>

                        <p className="text-sm text-gray-400 mt-4">
                            {index + 1} / {projeto.imagens.length}
                        </p>

                    </div>

                </motion.div>
            </motion.div>
        </AnimatePresence>
    )
}

export default function Projetos() {
    const [selectedProjeto, setSelectedProjeto] = useState<Projeto | null>(null)
    const [filter, setFilter] = useState<TipoProjeto>("Todos")

    const filteredProjetos =
        filter === "Todos"
            ? projetos
            : projetos.filter((p) => p.tipo === filter)

    const filtros: TipoProjeto[] = [
        "Todos",
        "Prédios",
        "Elétrica",
        "Hidráulica",
        "Gás"
    ]

    return (
        <section id="projetos" className="relative py-28 bg-white overflow-hidden">

            <div className="max-w-7xl mx-auto px-6 text-center">

                <h2 className="text-4xl md:text-5xl font-bold text-[#0b3c5d]">
                    Nossas Obras
                </h2>

                {/* filtros */}
                <div className="flex justify-center flex-wrap gap-3 mt-10">

                    {filtros.map((f) => (
                        <button
                            key={f}
                            onClick={() => setFilter(f)}
                            className={`px-5 py-2 rounded-full border transition cursor-pointer ${filter === f
                                ? "bg-[#0b3c5d] text-white"
                                : "bg-white text-gray-600 hover:bg-gray-100"
                                }`}
                        >
                            {f}
                        </button>
                    ))}

                </div>

                <div className="grid md:grid-cols-3 gap-10 mt-16">

                    {filteredProjetos.map((projeto, i) => (
                        <ProjetoCard
                            key={projeto.titulo}
                            projeto={projeto}
                            delay={i * 0.15}
                            onClick={() => setSelectedProjeto(projeto)}
                        />
                    ))}

                </div>

            </div>

            {selectedProjeto && (
                <ProjetoModal
                    projeto={selectedProjeto}
                    onClose={() => setSelectedProjeto(null)}
                />
            )}

        </section>
    )
}