import Image from "next/image";
import darkBGImage from '../../assets/images/darkbg-image.png'


export default function DarkBGWrapper({ children,height = 'h-full' }) {
    return (
        <div className={`relative w-full darkbg ${height} px-3 lg:p-16`}>
            <Image src={darkBGImage} alt="random image" width={235} className="absolute bottom-0 right-8 z-0" />
            <div className="max-w-7xl mx-auto"> 

            {children}
         
             
            </div>
        </div>
    )
}