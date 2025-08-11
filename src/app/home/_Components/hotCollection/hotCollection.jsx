'use client'

import ArrowKey from '@/components/arrowKey/arrowKey';
import PrimaryButton from '@/components/primaryButton/primaryButton';
import Image from 'next/image';
import { useRef, useEffect, useState } from 'react';
import { IoChevronBackSharp, IoChevronForwardSharp } from "react-icons/io5";
import gsap from 'gsap';
import HR from '@/components/hr/hr';

const leftArrowKeyHandler = () => <IoChevronBackSharp color='blue' size={13} />
const rightArrowKeyHandler = () => <IoChevronForwardSharp color='blue' size={13} />

export default function HotCollections({ collections }) {
    const carouselRef = useRef();
    const firstCardRef = useRef();
    const [scrollAmount, setScrollAmount] = useState(400);


    useEffect(() => {
        if (firstCardRef.current) {
            const rect = firstCardRef.current.getBoundingClientRect();
            const style = getComputedStyle(firstCardRef.current);
            const marginRight = parseFloat(style.marginRight || '0');
            setScrollAmount(rect.width + marginRight);
        }
    }, []);


    // Used Gsap with help of Chat GPT
    const scrollCarousel = (direction = 'right') => {
        if (!carouselRef.current) return;
        const el = carouselRef.current;

        const isAtEnd = el.scrollLeft + el.offsetWidth >= el.scrollWidth - scrollAmount;

        if (direction === 'right') {
            if (isAtEnd) {
                gsap.to(el, {
                    scrollLeft: 0,
                    duration: 0.8,
                    ease: 'power2.inOut',
                });
            } else {
                gsap.to(el, {
                    scrollLeft: el.scrollLeft + scrollAmount,
                    duration: 0.6,
                    ease: 'power2.inOut',
                });
            }
        } else {
            gsap.to(el, {
                scrollLeft: el.scrollLeft - scrollAmount,
                duration: 0.6,
                ease: 'power2.inOut',
            });
        }
    };

    const handleNext = () => scrollCarousel('right');
    const handlePrev = () => scrollCarousel('left');

    useEffect(() => {
        const interval = setInterval(() => {
            scrollCarousel('right');
        }, 5000);

        return () => clearInterval(interval);
    }, [scrollAmount]);
    return (
        <section className="py-16 text-white">
            <div className="text-center mb-12">
                <HR color={'#7453fc'} center />
                <h2 className="text-2xl sm:text-3xl font-semibold autoShow">
                    Explore Some Hot <span className="text-purple-500">Collections</span> In Market.
                </h2>
            </div>

            <div className="relative md:max-w-[82.5rem] mx-auto lg:px-4">
                {/* Left Arrow */}
                <div className="absolute top-[33%] md:top-[36%] left-12 transform -translate-y-1/2 z-10 autoShow">
                    <ArrowKey hoverfilter={false} keyIcon={leftArrowKeyHandler} onClick={handlePrev} />
                </div>

                {/* Right Arrow */}
                <div className="absolute top-[33%] lg:top-[36%] right-0 transform -translate-y-1/2 z-10 autoShow">
                    <ArrowKey hoverfilter={false} keyIcon={rightArrowKeyHandler} onClick={handleNext} />
                </div>

                {/* Scroll Container */}
                <div
                    ref={carouselRef}
                    className="flex space-x-6 overflow-hidden scroll-smooth"
                >
                    {collections.map((item, i) => (
                        <div
                            key={i}
                            ref={i === 0 ? firstCardRef : null}
                            className="min-w-[100px] max-w-[310px] md:max-w-full md:min-w-[400px] px-2 min-h-[550px] flex-shrink-0 "
                        >
                            <div className="bg-[#282b2f] rounded-2xl overflow-visible shadow-md transition-all duration-300 hover:shadow-purple-500/20">
                                <div className="relative w-full">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        className="object-cover rounded-2xl "
                                        width={400}
                                        height={250}
                                    />
                                </div>
                                <div className="relative p-6 flex flex-col justify-between min-h-[220px] border-[1px] border-[#404245] rounded-b-2xl">
                                    <h3 className="text-lg font-semibold mb-3 ">{item.title}</h3>
                                    <div className="w-full mx-auto border-t-[1.5px] border-[#404245] mb-4 "></div>
                                    <div className="text-sm text-gray-300 mb-6">
                                        <div className="flex justify-between">
                                            <span className="font-semibold ">Items In Collection:</span>
                                            <span className="text-[15px] font-bold text-white ">{item.items}</span>
                                        </div>
                                        <div className="flex justify-between mt-1">
                                            <span className="font-semibold ">Category:</span>
                                            <span className="text-[15px] font-bold text-white ">{item.category}</span>
                                        </div>
                                    </div>
                                    <div className="text-center w-[80%] absolute -bottom-6 left-1/2 -translate-x-1/2 ">
                                        <PrimaryButton>{item.btnText}</PrimaryButton>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
