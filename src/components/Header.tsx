import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaEnvelope, FaLinkedinIn, FaYoutube, FaPhone } from 'react-icons/fa'; // Ensure react-icons is installed

const Header = () => {
    return (
        <header className="bg-white shadow-md py-2 px-4">
            <div className="container mx-auto flex justify-between items-center">
                {/* Contact Info */}
                <div className="text-gray-700 flex items-center space-x-4 text-sm">
                    <div className="flex items-center">
                        <FaPhone className="inline mr-1" />
                        <span>+123 456 7890</span>
                    </div>
                    
                    <div className="flex items-center">
                        <FaEnvelope className="inline mr-1" />
                        <span>info@example.com</span>
                    </div>
                    
                </div>

                {/* Social Media Icons */}
                <div className="flex space-x-2">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white bg-black p-1 rounded-full hover:bg-blue-600 transition duration-300 text-xs">
                        <FaFacebookF />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white bg-black p-1 rounded-full hover:bg-blue-400 transition duration-300 text-xs">
                        <FaTwitter />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white bg-black p-1 rounded-full hover:bg-pink-500 transition duration-300 text-xs">
                        <FaInstagram />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white bg-black p-1 rounded-full hover:bg-blue-700 transition duration-300 text-xs">
                        <FaLinkedinIn />
                    </a>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-white bg-black p-1 rounded-full hover:bg-red-600 transition duration-300 text-xs">
                        <FaYoutube />
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;
