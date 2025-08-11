import React from 'react';

import marketImage from '../../assets/images/market.jpg'
import authorImage from '../../assets/images/author.jpg'
import Image from 'next/image';


const MarketCard = ({ title, artistName, artistHandle }) => {



    return (
        <div className="bg-[#282b2f] autoShow border-[1px] border-[#404245] rounded-xl p-4 lg:p-8 shadow-lg flex items-center lg:items-start flex-col md:flex-row justify-between lg:space-x-2.5 gap-4 w-full">

            <img src={marketImage.src} alt={title} className="rounded-2xl object-cover autoShow w-[280px] lg:w-[195px]" loading='lazy' />

            <div className='w-full h-full flex flex-col items-start justify-between'>
                <h3 className="text-white text-lg font-semibold mb-2 autoShow">{title}</h3>
                <div className='flex items-center gap-3'>
                    <Image
                        src={authorImage}
                        alt="avatar"
                        height={40}
                        className="rounded-full autoShow"
                    />
                    <div className="flex flex-col items-start gap-1">
                        <div className="text-sm text-white autoShow">{artistName} </div>
                        <span className="text-[#7453fc] autoShow">{artistHandle}</span>
                    </div>
                </div>

                <div className='w-full h-[0.5px] bg-[#404245] autoShow'> </div>


                <div className="flex w-full justify-between text-sm text-white py-4">
                    <div>
                        <p className="text-[12px] font-semibold autoShow">Current Bid</p>
                        <p className="text-[15px] font-semibold autoShow">2.03 ETH</p>
                        <p className="autoShow">($7,200.50)</p>
                    </div>
                    <div>
                        <p className="text-[12px] font-semibold autoShow">Ends In</p>
                        <p className="text-[15px] font-semibold autoShow">2D 06H 30M 25S</p>
                        <p className="autoShow">(July 26th, 2022)</p>
                    </div>
                </div>

                <a href="#" className="text-sm font-semibold text-[#7453fc] mt-3 inline-block underline cursor-pointer autoShow">
                    View Item Details
                </a>
            </div>
        </div>
    );
};

export default MarketCard;
