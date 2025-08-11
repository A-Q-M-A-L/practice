import Image from "next/image";

import Image1 from '../../assets/images/discover-01.jpg'
import Image2 from '../../assets/images/discover-02.jpg'
import Image3 from '../../assets/images/discover-03.jpg'
import Image4 from '../../assets/images/discover-04.jpg'
import authorImage from '../../assets/images/author.jpg'


const data = [
    { image: Image1, title: 'Board Ape Kernal Club' },
    { image: Image2, title: 'Triple Mutant Ape Board' },
    { image: Image3, title: 'Crypto Arora Guy' },
    { image: Image4, title: 'Genesis Club Gmt' }
]


import collectionImg from '../../assets/images/collection-img.jpg'
import HeroUI from "@/components/heroUi/heroUI";

const collectionsArray = [
    {
        title: 'Bored Ape Kennel Club',
        items: '324/324',
        category: 'Visual Art',
        image: collectionImg,

    },
    {
        title: 'Genesis Collective Statue',
        items: '380/394',
        category: 'Music Art',
        image: collectionImg,
    },
    {
        title: 'Worldwide Artwork Ground',
        items: '426/468',
        category: 'Blockchain',
        image: collectionImg,

    },
    {
        title: 'Worldwide Artwork Ground',
        items: '426/468',
        category: 'Blockchain',
        image: collectionImg,

    },
    {
        title: 'Worldwide Artwork Ground',
        items: '426/468',
        category: 'Blockchain',
        image: collectionImg,

    },
    {
        title: 'Worldwide Artwork Ground',
        items: '426/468',
        category: 'Blockchain',
        image: collectionImg,

    },
    {
        title: 'Worldwide Artwork Ground',
        items: '426/468',
        category: 'Blockchain',
        image: collectionImg,

    },

];



export default function Explore() {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center text-white" >
            {/* Hero Section */}
            <div className="relative flex items-center justify-center h-[60vh] w-full explore-bg">
                <HeroUI title={'Liberty NFT Market'} desc={'Discover Some Top Items'} pageName={'Explore'} />

                <div className="absolute -bottom-[45%] flex items-center justify-between w-[95%] mx-auto overflow-hidden">
                    {data.map((data, index) => {
                        return <div key={(index * new Date().getMilliseconds())} className="relative group overflow-hidden">
                            <Image src={data.image} alt="Image" width={400} className="rounded-2xl" />

                            <div className="absolute bottom-7  bg-[#282b2fe6] p-7 rounded-2xl -right-72 group-hover:right-7 duration-700 cursor-pointer">
                                <div className="flex flex-col items-start justify-center sapce-y-4">
                                    <h3 className="text-white text-lg font-semibold mb-2 autoShow">{data.title}</h3>
                                    <div className='flex items-center gap-3'>
                                        <Image
                                            src={authorImage}
                                            alt="avatar"
                                            height={17}
                                            className="w-12 h-12 rounded-full autoShow"

                                        />
                                        <div className="flex flex-col items-start gap-1">
                                            <div className="text-sm text-white autoShow">Liberty Artist</div>
                                            <span className="text-[#7453fc] autoShow">@libertyart</span>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    })}

                </div>



            </div>



        </div>
    )
} 