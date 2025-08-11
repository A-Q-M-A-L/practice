// components/Categories.jsx
"use client"
import { FaCube, FaPalette, FaMusic, FaGlobe, FaGem, FaRobot } from 'react-icons/fa';
import ArrowKey from '../arrowKey/arrowKey';
import { IoChevronForwardOutline } from "react-icons/io5";
import HR from '../hr/hr';



const categories = [
    { label: 'Blockchain', icon: <FaCube /> },
    { label: 'Digital Art', icon: <FaPalette /> },
    { label: 'Music Art', icon: <FaMusic /> },
    { label: 'Virtual World', icon: <FaGlobe /> },
    { label: 'Valuable', icon: <FaGem /> },
    { label: 'Triple NFT', icon: <FaRobot /> },
];


const keyIconhandler = () => {
    return <IoChevronForwardOutline size={23} className="iconcolor" />
}


export default function Categories() {
    return (
        <div className="py-12 text-white">
            {/* Heading */}
            <div className="text-center mb-16">
                <HR color={'#7453fc'} center />
                <h2 className="text-2xl sm:text-3xl font-semibold autoShow">
                    Browse Through Our <span className="text-[#7453fc]">Categories</span> Here.
                </h2>
            </div>

            {/* Categories Grid */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 px-4 autoShow">
                {categories.map((cat, idx) => (
                    <div
                        key={idx}
                        className=" relative flex flex-col items-center justify-center bg-[#282b2f] border-[1px] border-[#404245] rounded-2xl p-8 transition-all duration-300 shadow-lg text-center group autoShow"
                    >
                        <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-purple-600 text-xl mb-4 autoShow">
                            {cat.icon}
                        </div>
                        <span className="text-sm font-semibold autoShow">{cat.label}</span>

                        <div className='arrowKeyTextHoverWhite group opacity-0 group-hover:opacity-100 duration-300 absolute bottom-10 left-[65%] cursor-pointer'>
                            <ArrowKey keyIcon={keyIconhandler} />
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
}
