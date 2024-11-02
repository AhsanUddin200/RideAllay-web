import React from 'react';
import { Wrench, Car, Tool, FileText, Shield, Users, Clipboard, CheckCircle, Star } from 'lucide-react'; // Import necessary icons

const ServiceCard = ({ title, description, icon: Icon }) => {
  // Check if Icon is defined
  if (!Icon) {
    console.error(`Icon for ${title} is not defined.`);
    return null; // Return null if the icon is not defined
  }

  return (
    <div className="flex flex-col p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
        <Icon className="w-10 h-10 text-yellow-500" /> {/* Changed to yellow */}
      </div>
      <p className="text-gray-600 mb-4 flex-grow">{description}</p> {/* Make this flex-grow to allow space usage */}
      <button className="bg-yellow-500 text-white w-32 px-5 py-2 rounded hover:bg-yellow-600 transition-colors"> {/* Fixed width button */}
        Learn More
      </button>
    </div>
  );
};

const ServiceCards = () => {
  const services = [
    {
      title: "Vehicle Diagnostics",
      description: "Expert diagnostics to identify issues quickly and accurately, ensuring your vehicle operates at peak performance.",
      icon: Car
    },
    {
      title: "Accident Recovery",
      description: "Professional repairs that restore your vehicle's condition and safety after an accident.",
      icon: Tool
    },
    {
      title: "Copyright Consultation",
      description: "Expert advice on copyright compliance for automotive services, protecting business legally.",
      icon: FileText
    },
    {
      title: "Preventative Maintenance",
      description: "Routine inspections and services to prevent breakdowns and extend your vehicle's lifespan for more traveling.",
      icon: Shield
    },
    {
      title: "Safety Inspections",
      description: "Thorough checks to ensure your vehicle meets safety standards, keeping you and your loved ones safe.",
      icon: CheckCircle
    },
    {
      title: "Expert Mechanical Services",
      description: "Comprehensive mechanical repairs tailored to meet the unique needs of your vehicle.",
      icon: Wrench
    },
    {
      title: "Customer Support",
      description: "Friendly and knowledgeable support to answer your questions and guide you through our services.",
      icon: Users
    },
    {
      title: "Documentation Reporting",
      description: "Detailed documentation for all services performed, providing transparency and peace of mind.",
      icon: Clipboard
    },
    {
      title: "Tire Services",
      description: "Complete tire services, including installation, rotation, and alignment to ensure smooth driving.",
      icon: Star // New card icon
    }
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-12">
        <span className="text-yellow-500 font-medium">CAR LIKE A FAMILY</span>
        {/* Header Section with Flexbox */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <h2 className="text-4xl md:text-2xl font-bold text-gray-900 leading-tight md:mb-0 md:w-1/2">
            YOUR VEHICLE'S BEST ALLY
          </h2>
          <div className="flex flex-col md:w-1/2">
            <p className="text-gray-600 text-sm max-w-2xl">
              Raide Allay is your one-stop shop for all your automotive needs. Our experienced technicians handle everything from routine maintenance to complex repairs. 
            </p>
            {/* Add Learn More button here */}
            <button className="mt-4 bg-yellow-500 text-white px-6 py-2 rounded hover:bg-yellow-600 transition-colors w-44">
              Learn More
            </button>
          </div>
        </div>
         
        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;
