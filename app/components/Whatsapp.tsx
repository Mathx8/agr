import { FaWhatsapp } from "react-icons/fa";

export default function Whatsapp() {
    return (
        <a
            href="https://wa.me/5511999999999"
            target="_blank"
            className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-400 text-white p-4 rounded-full shadow-xl text-2xl z-50"
        >
            <FaWhatsapp />
        </a>
    )
}