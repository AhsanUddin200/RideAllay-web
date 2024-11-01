"use client"; // Marking the component as a client component

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import logo from '../../public/logo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="relative shadow-lg bg-yellow-500">
            <div className="container mx-auto flex justify-between items-center px-6 py-4">
                {/* Left Header Section with Logo */}
                <div className="flex items-center">
                    <Image 
                        src={logo} 
                        alt="Carfix Logo" 
                        width={120} 
                        height={30} 
                        className="h-auto" 
                    />
                </div>

                {/* Mobile menu button */}
                <div className="md:hidden">
                    <button
                        onClick={toggleMenu}
                        className="text-white focus:outline-none"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
                        </svg>
                    </button>
                </div>

                {/* Navigation Links */}
                <div className={`md:flex flex-grow justify-center space-x-6 text-sm font-semibold text-white ${isOpen ? 'block' : 'hidden'}`}>
                    <Link href="/" className="block md:inline-block hover:text-gray-300 transition duration-300" aria-label="Home">Home</Link>
                    <Link href="/services" className="block md:inline-block hover:text-gray-300 transition duration-300" aria-label="Services">Services</Link>
                    <Link href="/case-studies" className="block md:inline-block hover:text-gray-300 transition duration-300" aria-label="Case Studies">Case Studies</Link>
                    <Link href="/about" className="block md:inline-block hover:text-gray-300 transition duration-300" aria-label="About Us">About Us</Link>
                    <Link href="/blog" className="block md:inline-block hover:text-gray-300 transition duration-300" aria-label="Blog">Blog</Link>
                    <Link href="/faq" className="block md:inline-block hover:text-gray-300 transition duration-300" aria-label="FAQ">FAQ</Link>
                    <Link href="/contact" className="block md:inline-block hover:text-gray-300 transition duration-300" aria-label="Contact">Contact</Link>

                    {/* Dropdown Menu */}
                    <div className="relative group">
                        <span className="block md:inline-block hover:text-gray-300 cursor-pointer transition duration-300">More</span>
                        <ul className="absolute left-0 hidden bg-white shadow-lg rounded-md group-hover:block mb-6">
                            <li><Link href="/more-option1" className="block px-4 py-2 text-gray-700 hover:bg-gray-200" aria-label="More Option 1">More Option 1</Link></li>
                            <li><Link href="/more-option2" className="block px-4 py-2 text-gray-700 hover:bg-gray-200" aria-label="More Option 2">More Option 2</Link></li>
                            <li><Link href="/more-option3" className="block px-4 py-2 text-gray-700 hover:bg-gray-200" aria-label="More Option 3">More Option 3</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Call to Action Button */}
                <div className="hidden md:block">
                    <Link 
                        href="/quote" 
                        className="bg-white text-black font-bold px-5 py-2 rounded-lg hover:bg-red-700 hover:text-white text-lg transition duration-300 shadow-lg" 
                        aria-label="Book an Appointment Now"
                    >
                        Book an Appointment Now
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
