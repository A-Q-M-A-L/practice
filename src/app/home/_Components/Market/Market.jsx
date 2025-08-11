'use client'

import HR from '@/components/hr/hr'
import LI from '@/components/li/li'
import MarketCard from '@/components/marketCard/marketCard.jsx'
import { motion, AnimatePresence } from 'framer-motion';
import marketData from '@/data/marketData.js'
import { useEffect, useState } from 'react'

export default function Market() {
    const items = marketData

    const [activeTab, setActiveTab] = useState('All Items');
    const [filteredItems, setFilteredItems] = useState(items);
    const [fadeOut, setFadeOut] = useState(false);

    const lisList = ['All Items', 'Music Art', 'Digital Art', "Blockchain", 'Virtual']

    const shuffleArray = (array) => {
        return [...array].sort(() => Math.random() - 0.5);
    };



    useEffect(() => {
        setFadeOut(true); // Start fade-out
        const timeout = setTimeout(() => {
            const filtered =
                activeTab === 'All Items'
                    ? items
                    : items.filter((item) => item.categorie === activeTab);
            setFilteredItems(shuffleArray(filtered));
            setFadeOut(false); // Trigger fade-in
        }, 300); // Time matches transition duration

        return () => clearTimeout(timeout);
    }, [activeTab]);

    return (

        <div className='max-w-full w-full h-full px-0 lg:px-10 py-20 darkbg flex items-center justify-center' >


            <div className='flex flex-col gap-20 items-center justify-between h-full max-w-7xl mx-auto'>

                {/* Section header */}
                <div className='flex flex-col  lg:flex-row gap-4 items-center justify-between mt-20 w-full max-w-6xl'>

                    {/* left Side */}
                    <div className='flex flex-col  justify-start items-start gap-3'>
                        <HR color={'#7453fc'} />
                        <h3 className='text-2xl font-semibold text-white autoShow'><span className='text-[#7453fc]'>Items</span> Currently In The Market.</h3>
                    </div>




                    {/* Right Side */}
                    <ul className="flex items-center justify-center flex-wrap px-3 lg:px-0 gap-0 text-white autoShow">
                        {lisList.map((li, index) => {
                            return <LI onClick={() => setActiveTab(li)} color={li == activeTab ? null : 'white'} key={index} text={li} />
                        })}
                    </ul>

                </div>


                {/* 
                clsx(
                'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 transition-opacity duration-300',
                fadeOut ? 'opacity-0' : 'opacity-100' */}



                {/* Used Chat GPT only for farmer motion  */}
                <div className={`max-w-5xl h-full grid grid-cols-1 lg:grid-cols-2 gap-7 duration-500 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
                    <AnimatePresence>

                        {filteredItems.map((data) => {
                            return <motion.div
                                key={new Date().getMilliseconds() * Math.random()}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.3 }}
                                className='w-full'
                            >
                                <MarketCard title={data.title} artistName={data.artistName} artistHandle={data.artistHandle} />
                            </motion.div>
                        })}
                    </AnimatePresence>


                    {/* <AnimatePresence>
                        {filteredItems.map((item) => (
                            <motion.div
                                key={item.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.3 }}
                                className="bg-white border shadow-md rounded-xl p-4"
                            >
                                <h3 className="text-lg font-semibold">{item.title}</h3>
                                <p className="text-sm text-gray-500">{item.category}</p>
                            </motion.div>
                        ))}
                    </AnimatePresence> */}


                </div>

            </div>
        </div>
    )


}

