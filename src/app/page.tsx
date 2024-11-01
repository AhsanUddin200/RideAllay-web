import React from 'react';
import HeroSection from '../components/HeroSection'; // Adjust the import path if necessary
import AboutSection  from '../components/AboutSection'; 
import CarServicesPage from '../components/CarServicesPage'; 

const HomePage = () => {
    return (
        <div>
            <HeroSection />
            <AboutSection />
            <CarServicesPage />
            {/* You can add more sections below the hero section if needed */}
        </div>
    );
};

export default HomePage;
