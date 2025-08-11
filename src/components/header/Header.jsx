'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import logo from '../../assets/logo/logo.png'
import LI from '../li/li';
import { usePathname } from 'next/navigation';
import Link from 'next/link';


const lisList = ['Home', 'Explore', 'Item Details', 'Author', 'Create Yours']


const isActive = (li, pathname) => {
    if (li === 'Home') return pathname === '/';
    if (li === 'Create Yours') return pathname === '/contact';
    return `/${li.toLowerCase()}` === pathname;
};


const StickyHeader = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isVisible, setIsVisible] = useState(true);
    const [menuOpen, setMenuOpen] = useState(false);


    const pathName = usePathname()

    // used chagt gpt for "typeof window !== 'undefined'"
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const handleScroll = () => {
                const currentY = window.scrollY;

                // When at top — floating pill-style
                if (currentY <= 10) {
                    setIsSticky(false);
                    setIsVisible(true);
                    setLastScrollY(currentY);
                    return;
                }

                // While scrolling down
                if (currentY > lastScrollY) {
                    if (!isSticky && currentY < 400) {
                        setIsVisible(false); // hide during scroll
                    }

                    // When reaching 400px or more — show sticky header
                    if (currentY >= 400 && !isSticky) {
                        setIsSticky(true);
                        setIsVisible(true);
                    }
                }

                setLastScrollY(currentY);
            };

            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
        }

    }, [lastScrollY, isSticky]);

    const activeLi = (li) => {
        if (li === 'Home') return '/';

        if (li === 'Create Yours') return '/contact'; 

        return `/${li.toLowerCase()}`
    }

    return (
        <header
            className={`transition-all duration-300 ease-in-out z-50 px-6 py-4 shadow-lg bg-white ${isVisible ? 'opacity-100' : 'opacity-0'
                } ${isSticky
                    ? 'fixed top-0 left-0 right-0 rounded-none'
                    : 'fixed top-0 lg:top-[4%] left-0 lg:left-[15%] right-0 lg:right-[15%] lg:rounded-full'
                }`}
        >
            <nav className="flex justify-between items-center">
                {/* Logo */}
                <div className="">
                    <Image src={logo} alt='Liberty' priority width={200} />
                </div>


                {/* Nav Links */}
                <ul className="hidden lg:flex gap-4 pr-10">
                    {lisList.map((li) => {
                        return <LI href={activeLi(li)} key={li} text={li} activetab={isActive(li, pathName)} />
                    })}
                </ul>



                {/* Hamburger */}

                <div className="lg:hidden">
                    <button
                        id="menu-btn"
                        type="button"
                        onClick={() => setMenuOpen(!menuOpen)}
                        className={`z-40 block hamburger lg:hidden focus:outline-none ${menuOpen ? 'open' : ''}`}
                    >
                        <span className="hamburger-top"></span>
                        <span className="hamburger-middle"></span>
                        <span className="hamburger-bottom"></span>
                    </button>
                </div>


            </nav>
            <div
                id="menu"
                className={`absolute top-[100%] left-0 right-0 w-[75%] mx-auto overflow-hidden transition-all duration-500 ease-in-out flex-col items-center justify-center bg-white text-black uppercase space-y-3 z-50 flex ${menuOpen ? 'max-h-[500px]' : 'max-h-0'
                    }`}
            >
                <Link href='/' className='nav-links mt-3'>Home</Link>
                <hr />
                <Link href='/explore' className='nav-links'>Explore</Link>
                <hr />
                <Link href='#' className='nav-links'>Item Details</Link>
                <hr />
                <Link href='/author' className='nav-links'>Author</Link>
                <hr />
                <Link href='/contact' className='nav-links mb-3'>Create Yours</Link>
            </div>


        </header>
    );
};

export default StickyHeader;
