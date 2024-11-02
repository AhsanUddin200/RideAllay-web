"use client"; // This makes the component a Client Component

import React, { useState, useEffect } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaTachometerAlt, FaBatteryFull, FaTools, FaOilCan, FaWrench, FaRegClock } from 'react-icons/fa'; // Import social media and service icons
import { motion } from 'framer-motion'; // Import Framer Motion

const images = [
    'https://images.pexels.com/photos/3807277/pexels-photo-3807277.jpeg',
    'https://images.pexels.com/photos/7564863/pexels-photo-7564863.jpeg',
    'https://images.pexels.com/photos/7564871/pexels-photo-7564871.jpeg',
    'https://images.pexels.com/photos/3807120/pexels-photo-3807120.jpeg',
    'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg',
];

const HeroSection = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [carName, setCarName] = useState(""); // State to hold user input for car name

    // Change the current image every 2 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full h-screen overflow-hidden flex flex-col">
            {/* Background Images */}
            <div className="absolute top-0 left-0 w-full h-full">
                {images.map((image, index) => (
                    <img 
                        key={index} 
                        src={image} 
                        alt={`Background ${index + 1}`} 
                        className={`w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-1000 ease-in-out ${currentImageIndex === index ? 'opacity-100' : 'opacity-0'}`}
                    />
                ))}
            </div>

            {/* Overlay */}
            <motion.div 
                className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50" 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            />

            {/* Content */}
            <motion.div 
                className="relative z-10 flex items-center justify-between h-full text-white px-8 ml-16 mr-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="max-w-md">
                    <motion.h1 
                        className="text-sm md:text-lg mb-4"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Welcome to Ride Allay
                    </motion.h1>
                    <motion.p 
                        className="text-3xl md:text-5xl font-bold mb-4 whitespace-nowrap"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        We care like a family
                    </motion.p>
                    <motion.p 
                        className="text-xs md:text-sm mb-4 font-bold"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        From oil changes and tuning to brake repairs and engine maintenance, we’ve got your car service needs covered, big or small.
                    </motion.p>

                    {/* Car Name Input */}
                    <div className="mb-4">
                        <label className="block text-sm mb-2">
                            Enter Your Car Name:
                        </label>
                        <input 
                            type="text"
                            value={carName}
                            onChange={(e) => setCarName(e.target.value)}
                            className="p-2 rounded-md text-black"
                            placeholder="e.g., Toyota, Honda"
                        />
                    </div>

                    <div className="flex space-x-4">
                        <select className="p-2 rounded-md text-black">
                            <option value="">-- Choose a Service --</option>
                            <option value="oil_change">Oil Change</option>
                            <option value="brake_repair">Brake Repair</option>
                            <option value="engine_tuning">Engine Tuning</option>
                            <option value="radiator_service">Radiator Service</option>
                        </select>
                        <button 
                            className="bg-yellow-400 hover:bg-red-700 text-black font-bold py-2 px-4 rounded-lg transition duration-300 text-sm"
                            aria-label="Book an Appointment"
                        >
                            Book an Appointment
                        </button>
                    </div>
                </div>

                {/* Social Media Section */}
                <div className="flex flex-col items-center ml-4 gap-8">
                    <motion.div
                        className="text-xs mb-4 transform rotate-90 whitespace-nowrap flex items-center justify-center"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Follow Us
                    </motion.div>

                    <div className="flex flex-col space-y-4">
                        {[ 
                            { name: 'Facebook', icon: <FaFacebookF size={20} />, link: 'https://facebook.com' },
                            { name: 'Twitter', icon: <FaTwitter size={20} />, link: 'https://twitter.com' },
                            { name: 'Instagram', icon: <FaInstagram size={20} />, link: 'https://instagram.com' },
                        ].map(({ name, icon, link }, index) => (
                            <motion.div 
                                key={name} 
                                className="bg-yellow-400 rounded-full p-1"
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <a href={link} target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 transition duration-300">
                                    {icon}
                                </a>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* Fixed Yellow Bar Section */}
            <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-3/5 bg-yellow-500 p-4 flex items-center justify-center"> {/* Adjusted width */}
                {/* Icons section */}
                <div className="flex space-x-8"> {/* Adjusted space between icons */}
                    <div className="flex items-center space-x-2">
                        <FaTachometerAlt className="text-white" />
                        <span className="text-white text-xs">Tire and wheel</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <FaTools className="text-white" />
                        <span className="text-white text-xs">Tune Up</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <FaBatteryFull className="text-white" />
                        <span className="text-white text-xs">Battery</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <FaOilCan className="text-white" />
                        <span className="text-white text-xs">Oil Change</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <FaWrench className="text-white" />
                        <span className="text-white text-xs">Brake System</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <FaRegClock className="text-white" />
                        <span className="text-white text-xs">Maintenance</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
