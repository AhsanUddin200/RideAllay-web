import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Service from '../../public/service.png';

const CarServicesPage = () => {
  const services = [
    { name: "Mechanical Repairs" },
    { name: "Custom Modifications" },
    { name: "Electrical Diagnostics" },
    { name: "Comprehensive Inspections" },
    { name: "Bodywork & Paint" },
    { name: "Engine Performance Tune-up" },
    { name: "Tire Rotation & Balancing" },
    { name: "Brake System Services" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-between">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Car Illustration */}
          <div className="w-full lg:w-1/2 animate-float">
            <Image
              src={Service}
              alt="Car Illustration"
              className="h-[500px] object-contain mx-auto" // Adjust height as needed
              width={900} // Set specific width
              height={500} // Set specific height
            />
          </div>

          {/* Content */}
          <div className="w-full lg:w-1/2 space-y-2">
            <div>
              <span className="text-yellow-500 font-medium">
                OUR SERVICES
              </span>
              <h1 className="text-4xl md:text-2xl font-bold text-gray-900 leading-tight mt-5">
                CAR REPAIR & MAINTENANCE SERVICES
              </h1>
            </div>

            <p className="text-gray-600 text-sm">
            We proudly serve the vehicle owners of Karachi, delivering expert automotive services tailored to meet your every need. Experience unparalleled quality and reliability with us.
            </p>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
                >
                  <ArrowRight className="w-5 h-5 text-yellow-500" />
                  <span className="font-medium text-gray-800">
                    {service.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Contact Button */}
      <a
        href="#contact"
        className="fixed bottom-8 right-8 bg-yellow-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:-translate-y-1 transition-transform duration-200"
      >
        Contact Us
      </a>
    </div>
  );
};

export default CarServicesPage;
