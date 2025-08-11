"use client"
export default function ArrowKey({ keyIcon, onClick ,hoverfilter = true }) {
    return (
        <div onClick={onClick}
            className={`flex items-center justify-center absolute -bottom-16 cursor-pointer right-[33%] md:right-[40%] rounded-full w-12 h-12 bg-white text-blue-600 z-50 ${hoverfilter ? 'hover:bg-[#7453fc]' : ''}`} >
            {keyIcon()}
        </div >
    )
}