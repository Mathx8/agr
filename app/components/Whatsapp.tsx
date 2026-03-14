import { FaWhatsapp } from "react-icons/fa";

export default function Whatsapp() {
    return (
        <a
            href="https://api.whatsapp.com/send?phone=5511947285115&text=Vim%20do%20site!%20Quero%20fazer%20um%20or%C3%A7amento!"
            target="_blank"
            className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-400 text-white p-4 rounded-full shadow-xl text-2xl z-50"
        >
            <FaWhatsapp />
        </a>
    )
}