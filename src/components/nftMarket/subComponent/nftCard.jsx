
import Image from "next/image";

export default function NftCard({ icon, title, desc }) {

    return (
        <div className="w-full lg:max-w-xs  flex flex-col items-center lg:items-start justify-center space-y-3 text-white mt-10">
            <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center autoShow">
                <Image
                    src={icon}
                    alt={title}
                    width={30}
                />
            </div>
            <h3 className="text-[16] font-semibold mt-6 mb-3 autoShow">{title}</h3>
            <p className="text-white text-sm tracking-wide leading-[25px] text-center lg:text-left autoShow"> 
                {desc}
            </p>
        </div>
    )


}