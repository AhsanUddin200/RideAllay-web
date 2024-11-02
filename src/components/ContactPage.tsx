"use client";
import React, { useState, useEffect } from 'react';
import { Settings, Check, Users } from 'lucide-react';

const backgroundImages = [
  'https://images.unsplash.com/photo-1637640125496-31852f042a60?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FyJTIwbWVjaGFuaWN8ZW58MHx8MHx8fDA%3D',
  'https://images.unsplash.com/photo-1636761358954-cebc0e5dfebb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNhciUyMG1lY2hhbmljfGVufDB8fDB8fHww',
  'https://images.unsplash.com/photo-1645445522156-9ac06bc7a767?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhciUyMG1lY2hhbmljfGVufDB8fDB8fHww'
];

const ContactPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        {backgroundImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${currentImageIndex === index ? 'opacity-100' : 'opacity-0'}`}
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${img})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="bg-white p-8 rounded-lg shadow-lg text-black">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="lg:w-1/2">
              <h3 className="text-sm uppercase tracking-wider mb-4">OUR CORE VALUE</h3>
              <h2 className="text-4xl font-bold mb-6">WHY CHOOSE US FOR YOUR CAR?</h2>
              <p className="mb-8">
                We are designed to give complete satisfaction in any way. Our company's first priority is customer satisfaction and we are continuously working on it.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-yellow-600 p-3 rounded">
                    <Settings className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">GENUINE SPARE PARTS</h4>
                    <p>We provide 100% genuine manufacture approved OEM/OES spare parts.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-yellow-600 p-3 rounded">
                    <Check className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">UNCONDITIONAL WARRANTY</h4>
                    <p>We provide warranty on all services and spare parts.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-yellow-600 p-3 rounded">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">PERSONALIZED SERVICE</h4>
                    <p>We have dedicated team providing genuine advice & live updates.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold mb-6">BOOK APPOINTMENT NOW</h2>
                <form className="space-y-4">
                  <div>
                    <label className="block mb-2">Name <span className="text-yellow-600">*</span></label>
                    <input type="text" className="w-full p-2 border rounded" required />
                  </div>

                  <div>
                    <label className="block mb-2">Phone <span className="text-yellow-600">*</span></label>
                    <div className="flex">
                      <select className="border rounded p-2 w-20">
                        <option value="+92">🇵🇰 +92</option>
                      </select>
                      <input type="tel" className="w-full p-2 border rounded ml-2" placeholder="0301 2345678" required />
                    </div>
                  </div>

                  <div>
                    <label className="block mb-2">Our Services</label>
                    <select className="w-full p-2 border rounded">
                      <option>Car Mechanic Services</option>
                      <option>Other Services</option>
                    </select>
                  </div>

                  <div>
                    <label className="block mb-2">Date / Time</label>
                    <div className="grid grid-cols-2 gap-4">
                      <input type="date" className="p-2 border rounded" />
                      <input type="time" className="p-2 border rounded" />
                    </div>
                  </div>

                  <button type="submit" className="w-full bg-yellow-600 text-white py-3 rounded hover:bg-yellow-700 transition-colors">
                    BOOK APPOINTMENT NOW 
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
