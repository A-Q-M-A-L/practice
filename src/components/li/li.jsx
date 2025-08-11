import Link from "next/link"

export default function LI({ text, onClick, activetab, href,color = false }) {


    if (color === false) {
        return (
            <Link onClick={onClick} href={href} className={`nav-links ${activetab ? 'activeTab' : undefined}`}>{text}</Link>
        )
    }



    return (
        <li onClick={onClick} className={`market-nav-links ${color === null ? 'bg-[#7453fc]' : undefined}`}>{text}</li>
    )


}