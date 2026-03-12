import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projetos from "./components/Projetos";
import Servicos from "./components/Servicos";
import Sobre from "./components/Sobre";
import Whatsapp from "./components/Whatsapp";


export default function Home() {
  return (
    <main className="bg-gray-50">
      <Navbar />
      <Hero />
      <Servicos />
      <Sobre />
      <Projetos />
      <Whatsapp />
      <Footer />
    </main>
  )
}