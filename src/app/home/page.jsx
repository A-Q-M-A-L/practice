'use client'
import { useRef } from 'react'
import PrimaryButton from '@/components/primaryButton/primaryButton'
import classes from './_Styles/home.module.css'
import ImageSlider from '../../components/imagesSlider/imagesSlider.jsx'
import { IoChevronBackSharp, IoChevronForwardSharp } from "react-icons/io5";
import img1 from '../../assets/images/banner1.png'
import img2 from '../../assets/images/banner2.png'
import Categories from '@/components/categoriesList/categoriesList'
import HotCollections from './_Components/hotCollection/hotCollection'


import collectionImg from '../../assets/images/collection-img.jpg'
import manInButtom from '../../assets/images/darkbg-image.png'
import NftMarket from '../../components/nftMarket/nftMarket'
import Market from './_Components/Market/Market'
import Image from 'next/image'


const collectionsArray = [
    {
        title: 'Bored Ape Kennel Club',
        items: '324/324',
        category: 'Visual Art',
        image: collectionImg,
        btnText: 'Explore Bored Ape',
    },
    {
        title: 'Genesis Collective Statue',
        items: '380/394',
        category: 'Music Art',
        image: collectionImg,
        btnText: 'Explore Genesis',
    },
    {
        title: 'Worldwide Artwork Ground',
        items: '426/468',
        category: 'Blockchain',
        image: collectionImg,
        btnText: 'Explore Worldwide',
    },
    {
        title: 'Worldwide Artwork Ground',
        items: '426/468',
        category: 'Blockchain',
        image: collectionImg,
        btnText: 'Explore Worldwide',
    },
    {
        title: 'Worldwide Artwork Ground',
        items: '426/468',
        category: 'Blockchain',
        image: collectionImg,
        btnText: 'Explore Worldwide',
    },
    {
        title: 'Worldwide Artwork Ground',
        items: '426/468',
        category: 'Blockchain',
        image: collectionImg,
        btnText: 'Explore Worldwide',
    },
    {
        title: 'Worldwide Artwork Ground',
        items: '426/468',
        category: 'Blockchain',
        image: collectionImg,
        btnText: 'Explore Worldwide',
    },
    {
        title: 'Worldwide Artwork Ground',
        items: '426/468',
        category: 'Blockchain',
        image: collectionImg,
        btnText: 'Explore Worldwide',
    },
    {
        title: 'Worldwide Artwork Ground',
        items: '426/468',
        category: 'Blockchain',
        image: collectionImg,
        btnText: 'Explore Worldwide',
    },
    {
        title: 'Worldwide Artwork Ground',
        items: '426/468',
        category: 'Blockchain',
        image: collectionImg,
        btnText: 'Explore Worldwide',
    },
    {
        title: 'Worldwide Artwork Ground',
        items: '426/468',
        category: 'Blockchain',
        image: collectionImg,
        btnText: 'Explore Worldwide',
    },
];



export default function Home() {
    const slideshowRef = useRef();

    const imagesArray = [{ image: img1, alt: 'a boy' }, { image: img2, alt: 'a boy' }];


    return (


        <section>
            {/* Hero Section  */}
            <div className={`${classes.herobg} p-2 lg:p-6 h-[165vh] lg:h-screen w-screen flex items-center justify-center text-white`}>
                <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-[82rem] mx-auto ">
                    {/* Left Side */}
                    <div className='flex flex-col items-start justify-start space-y-7'>
                        <div className='flex flex-col items-start justify-center space-y-2.5 '>
                            <p className='text-sm lg:text-lg font-semibold'>Liberty NFT Market</p>
                            <h1 className='text-[50px] font-bold max-w-[48rem] uppercase leading-[55px] lg:leading-[65px] tracking-tighter lg:tracking-normal '>Create, Sell & Collect Top NFT’s.</h1>
                        </div>
                        {/* Para And Button */}
                        <div className='flex flex-col space-y-5'>
                            <p className='max-w-[40rem] text-[15px] tracking-wide leading-[25px]'>Liberty NFT Market is a really cool and professional design for your NFT websites. This HTML CSS template is based on Bootstrap v5 and it is designed for NFT related web portals. Liberty can be freely downloaded from TemplateMo's free css templates.</p>
                            {/* buttons */}
                            <div className='flex items-start justify-start space-x-2.5'>
                                <PrimaryButton bgTransparent>Explore Top NFTs</PrimaryButton>
                                <PrimaryButton>Watch Our Videos</PrimaryButton>
                            </div>
                        </div>
                    </div>


                    {/* Right Side */}
                    <div className='relative w-[300px] h-[340px] md:w-[525px] md:h-[460px] !overflow-visible mt-[6rem] lg:mt-0'>

                        {/* Image slider */}
                        <ImageSlider images={imagesArray} ref={slideshowRef} />

                        {/* Arrow keys */}
                        <div onClick={() => slideshowRef.current?.prev()} className='flex items-center justify-center absolute -bottom-16 cursor-pointer left-[33%] md:left-[40%] rounded-full w-12 h-12 bg-white text-blue-600 z-50 p-3 '>
                            <IoChevronBackSharp size={13} color='blue' />
                        </div>
                        <div onClick={() => slideshowRef.current?.next()} className='flex items-center justify-center absolute -bottom-16 cursor-pointer right-[33%] md:right-[40%] rounded-full w-12 h-12 bg-white text-blue-600 z-50'>
                            <IoChevronForwardSharp size={13} color='blue' />
                        </div>
                    </div>
                </div>
            </div>

            {/* Categories $ Hot Collection Section */}
            <div className={`darkbg p-6 relative`}>

                <div>
                    <Image src={manInButtom} width={20} alt="" className='w-fit h-fit autoShow' />
                </div>

                <Categories />

                <HotCollections collections={collectionsArray} />
            </div>

            {/* Nft market */}
            <NftMarket />

            <Market  />


        </section>
    )

}