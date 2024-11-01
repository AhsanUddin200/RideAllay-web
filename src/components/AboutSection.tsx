"use client";

import React, { useEffect, useRef, useState } from 'react';
import { Phone } from 'lucide-react';
import CountUp from 'react-countup';

const AboutSection = () => {
  const countUpRef = useRef(null);
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStartCount(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (countUpRef.current) {
      observer.observe(countUpRef.current);
    }

    return () => {
      if (countUpRef.current) {
        observer.unobserve(countUpRef.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-white relative">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-6 px-12">
            <span className="text-yellow-500 font-medium">CAR LIKE A FAMILY</span>
            
            <h1 className="text-4xl md:text-2xl font-bold text-gray-900 leading-tight">
              RIDEE ALLAY - EXPERT IN AUTOMOTIVE REPAIR & MAINTENANCE SERVICES
            </h1>
            
            <p className="text-gray-600 text-sm">
              Ridee Allay is a renowned automotive repair facility, esteemed for delivering 
              top-notch services. Located in Karachi, Pakistan, we boast over 20+ years 
              of expertise in the automotive industry. Whether it's computer diagnostics 
              or routine maintenance, count on us to meet your needs.
            </p>
            
            <button className="bg-yellow-500 text-white px-6 py-3 rounded hover:bg-yellow-700 transition-colors duration-300">
              MORE ABOUT US
            </button>

            {/* Appointment Section */}
            <div className="flex items-center space-x-4 mt-8 p-4 bg-gray-50 rounded-lg">
              <div className="bg-yellow-500 p-4 rounded-full">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-gray-600 text-sm">BOOK YOUR APPOINTMENT</p>
                <p className="text-xl font-bold text-gray-900">03369665724</p>
              </div>
            </div>
          </div>

          {/* Right Images */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative h-96">
              <img 
                src="https://images.pexels.com/photos/2244746/pexels-photo-2244746.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Car repair"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Experience Badge */}
            <div className="absolute bottom-4 left-4 bg-yellow-500 text-white p-6 rounded-lg">
              <div ref={countUpRef} className="text-4xl font-bold">
                {startCount ? <CountUp end={20} duration={3} /> : '0'}+
              </div>
              <div className="text-sm">Years of Experience</div>
            </div>

            {/* Secondary Image */}
            <div className="absolute -right-12 -bottom-12 w-64 h-64">
              <img 
                src="https://images.pexels.com/photos/4489737/pexels-photo-4489737.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Mechanic working"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
