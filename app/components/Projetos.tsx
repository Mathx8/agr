/* eslint-disable @next/next/no-img-element */
"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useCallback, useEffect, useState } from "react"
import { MdOutlineZoomIn, MdClose, MdChevronLeft, MdChevronRight } from "react-icons/md"

type TipoProjeto = "Prédios" | "Elétrica" | "Hidráulica" | "Gás"

type Projeto = {
    titulo: string
    desc: string
    tipo: "Prédios" | "Elétrica" | "Hidráulica" | "Gás"
    imagens: string[]
}

const projetos: Projeto[] = [
    {
        titulo: "Residencial Aquarela",
        desc: "Desenvolvimento e execução de toda a infraestrutura elétrica e hidráulica.",
        tipo: "Prédios",
        imagens: [
            "/Residencial Aquarela.jpeg",
            "/Residencial Aquarela 2.jpeg",
            "/Residencial Aquarela 3.jpeg"
        ]
    },
    {
        titulo: "You Conceito",
        desc: "Desenvolvimento e execução de toda a infraestrutura elétrica e hidráulica.",
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
        desc: "Desenvolvimento e execução de toda a infraestrutura elétrica e hidráulica.",
        tipo: "Prédios",
        imagens: [
            "/Gênesis Residencial.jpeg",
            "/Gênesis Residencial 2.jpeg"
        ]
    },
    {
        titulo: "Sistema Hidráulico de Piscina",
        desc: "Instalação das redes de retorno, aspiração e ralo de fundo.",
        tipo: "Hidráulica",
        imagens: ["/hidraulica1.jpeg", "/hidraulica1_pronta.jpeg"]
},
{
        titulo: "Sistema Hidráulico Predial",
        desc: "Instalação de pontos hidráulicos, prumadas e sistema de individualização.",
        tipo: "Hidráulica",
        imagens: ["/hidraulica2.jpeg"]
},
{
        titulo: "Instalação de metais",
        desc: "Instalação de metais, incluindo torneiras, registros e acessórios hidráulicos.",
        tipo: "Hidráulica",
        imagens: ["/hidraulica3.jpeg"]
},
{
        titulo: "Redes Hidráulicas em Subsolo",
        desc: "Redes no subsolo: água pluvial, esgoto, gordura, água quente e fria.",
        tipo: "Hidráulica",
        imagens: ["/hidraulica4.jpeg"]
},
{
        titulo: "Caixa de Incêndio",
        desc: "Instalação de caixa de incêndio e tubulação em ferro.",
        tipo: "Hidráulica",
        imagens: ["/hidraulica5.jpeg"]
},
{
        titulo: "Montagem de Bomba",
        desc: "Montagem de bomba de recalque",
        tipo: "Hidráulica",
        imagens: ["/hidraulica6.jpeg"]
    }
]

const filtros: TipoProjeto[] = ["Prédios", "Elétrica", "Hidráulica", "Gás"]

function ProjetoCard({
    projeto,
    index,
    onClick
}: {
    projeto: Projeto
    index: number
    onClick: () => void
}) {
    const [imgIndex, setImgIndex] = useState(0)

    useEffect(() => {
        if (projeto.imagens.length <= 1) return
        const interval = setInterval(() => {
            setImgIndex((prev) => (prev + 1) % projeto.imagens.length)
        }, 3200)
        return () => clearInterval(interval)
    }, [projeto.imagens.length])

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.12, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: false }}
            onClick={onClick}
            className="group relative overflow-hidden rounded-3xl shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer bg-white"
            style={{ transform: "translateY(0)" }}
            whileHover={{ y: -6 }}
        >
            <div className="relative h-60 overflow-hidden">
                {projeto.imagens.map((img, i) => (
                    <img
                        key={img}
                        src={img}
                        alt={projeto.titulo}
                        className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${i === imgIndex ? "opacity-100 scale-100" : "opacity-0 scale-105"}`}
                    />
                ))}

                <div className="absolute inset-0 bg-gradient-to-t from-[#061e2e]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl p-3">
                        <MdOutlineZoomIn size={28} className="text-white" />
                    </div>
                </div>

                {projeto.imagens.length > 1 && (
                    <div className="absolute bottom-3 right-3 flex gap-1">
                        {projeto.imagens.map((_, i) => (
                            <div
                                key={i}
                                className={`h-1 rounded-full transition-all duration-500 ${i === imgIndex ? "w-4 bg-white" : "w-1 bg-white/40"}`}
                            />
                        ))}
                    </div>
                )}

                <div className="absolute top-3 left-3">
                    <span className="bg-[#0b3c5d]/80 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full">
                        {projeto.tipo}
                    </span>
                </div>
            </div>

            <div className="p-5">
                <h3 className="font-bold text-lg text-[#0b3c5d] group-hover:text-[#0b3c5d] transition">
                    {projeto.titulo}
                </h3>
                <p className="text-gray-400 text-sm mt-1 leading-relaxed">
                    {projeto.desc}
                </p>
                <div className="flex items-center gap-1 mt-3 text-xs font-semibold text-[#0b3c5d]/50 group-hover:text-yellow-500 transition">
                    <span>Ver fotos</span>
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                </div>
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

    const next = useCallback(() => {
        setIndex((prev) => (prev + 1) % projeto.imagens.length)
    }, [projeto.imagens.length])

    const prev = useCallback(() => {
        setIndex((prev) => prev === 0 ? projeto.imagens.length - 1 : prev - 1)
    }, [projeto.imagens.length])

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose()
            if (e.key === "ArrowRight") next()
            if (e.key === "ArrowLeft") prev()
        }
        window.addEventListener("keydown", handler)
        return () => window.removeEventListener("keydown", handler)
    }, [onClose, next, prev])

    return (
        <AnimatePresence>
            <motion.div
                className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-4 md:p-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
            >
                <motion.div
                    className="bg-white max-w-4xl w-full rounded-3xl overflow-hidden shadow-2xl"
                    initial={{ scale: 0.85, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.85, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="relative overflow-hidden bg-[#061e2e]" style={{ height: "420px" }}>
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={index}
                                src={projeto.imagens[index]}
                                alt={projeto.titulo}
                                className="w-full h-full object-cover"
                                initial={{ opacity: 0, scale: 1.04 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.97 }}
                                transition={{ duration: 0.35 }}
                            />
                        </AnimatePresence>

                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 bg-black/40 hover:bg-black/60 backdrop-blur-sm text-white p-2 rounded-xl transition cursor-pointer"
                        >
                            <MdClose size={20} />
                        </button>

                        {projeto.imagens.length > 1 && (
                            <>
                                <button
                                    onClick={prev}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 backdrop-blur-sm text-white p-2 rounded-xl transition cursor-pointer"
                                >
                                    <MdChevronLeft size={24} />
                                </button>
                                <button
                                    onClick={next}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 backdrop-blur-sm text-white p-2 rounded-xl transition cursor-pointer"
                                >
                                    <MdChevronRight size={24} />
                                </button>
                            </>
                        )}

                        {projeto.imagens.length > 1 && (
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                                {projeto.imagens.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setIndex(i)}
                                        className={`transition-all duration-300 rounded-full cursor-pointer ${i === index ? "w-5 h-2 bg-white" : "w-2 h-2 bg-white/40"}`}
                                    />
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="p-6 flex items-start justify-between gap-4">
                        <div>
                            <span className="text-xs font-bold uppercase tracking-widest text-[#0b3c5d]/40">
                                {projeto.tipo}
                            </span>
                            <h3 className="text-2xl font-bold text-[#0b3c5d] mt-1">
                                {projeto.titulo}
                            </h3>
                            <p className="text-gray-500 mt-2 text-sm">
                                {projeto.desc}
                            </p>
                        </div>
                        <span className="shrink-0 text-sm text-gray-400 mt-1">
                            {index + 1} / {projeto.imagens.length}
                        </span>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    )
}

export default function Projetos() {
    const [selectedProjeto, setSelectedProjeto] = useState<Projeto | null>(null)
    const [filter, setFilter] = useState<TipoProjeto>("Prédios")
    const [showAll, setShowAll] = useState(false)
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768)
        }

        handleResize()
        window.addEventListener("resize", handleResize)

        return () => window.removeEventListener("resize", handleResize)
    }, [])
    

    const filteredProjetos = projetos.filter((p) => p.tipo === filter)

    const projetosExibidos =
        isMobile && !showAll
            ? filteredProjetos.slice(0, 2)
            : filteredProjetos

    return (
        <section
            id="projetos"
            className="snap-center relative py-32 overflow-hidden select-none"
            style={{ background: "linear-gradient(180deg, #eaf3f8 0%, #f5f9fc 50%, #ffffff 100%)" }}
        >
            <div className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-blue-100/40 rounded-full blur-[80px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#0b3c5d]/50 mb-4">
                        Portfólio
                    </span>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-[#0b3c5d] tracking-tight">
                        Nossas Obras
                    </h2>
                    <p className="text-gray-500 mt-3 mb-6 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
                        Confira alguns dos nossos serviços realizados com qualidade e eficiência.
                    </p>
                    <div className="flex items-center justify-center gap-3 mt-4">
                        <div className="h-px w-16 bg-[#0b3c5d]/20" />
                        <div className="w-2 h-2 rounded-full bg-yellow-400" />
                        <div className="h-px w-16 bg-[#0b3c5d]/20" />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="flex justify-center flex-wrap gap-2 mb-12"
                >
                    {filtros.map((f) => (
                        <button
                            key={f}
                            onClick={() => setFilter(f)}
                            className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-300 cursor-pointer ${filter === f
                                ? "bg-[#0b3c5d] text-white border-[#0b3c5d] shadow-lg shadow-[#0b3c5d]/20"
                                : "bg-white text-gray-500 border-gray-200 hover:border-[#0b3c5d]/30 hover:text-[#0b3c5d]"
                                }`}
                        >
                            {f}
                        </button>
                    ))}
                </motion.div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={filter}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="grid md:grid-cols-3 gap-7"
                    >
                        {filteredProjetos.length > 0 ? (
                            projetosExibidos.map((projeto, i) => (
                                <ProjetoCard
                                    key={projeto.titulo}
                                    projeto={projeto}
                                    index={i}
                                    onClick={() => setSelectedProjeto(projeto)}
                                />
                            ))
                        ) : (
                            <div className="col-span-3 text-center py-20 text-gray-400">
                                Nenhum projeto encontrado nessa categoria.
                            </div>
                        )}
                    </motion.div>
                </AnimatePresence>
                    {isMobile && filteredProjetos.length > 2 && (
                        <div className="flex justify-center mt-6">
                            {!showAll ? (
                                <button
                                    onClick={() => setShowAll(true)}
                                    className="px-6 py-2 bg-[#0b3c5d] text-white rounded-full font-semibold"
                                >
                                    Ver mais
                                </button>
                            ) : (
                                <button
                                    onClick={() => setShowAll(false)}
                                    className="px-6 py-2 bg-gray-400 text-white rounded-full font-semibold"
                                >
                                    Ver menos
                                </button>
                            )}
                        </div>
                    )}
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