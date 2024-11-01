import { ArrowRight } from 'lucide-react';

const CarServicesPage = () => {
  const services = [
    { name: 'Mechanical Works' },
    { name: 'Modifications' },
    { name: 'Electrical Works' },
    { name: 'Inspections' },
    { name: 'Body Works' },
    { name: 'Engine Tune-up' }
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-between">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Car Illustration */}
          <div className="w-full lg:w-1/2 animate-float">
            <svg
              viewBox="0 0 400 300"
              className="w-full max-w-lg mx-auto"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M50,200 L350,200 L320,100 L80,100 Z"
                className="fill-red-500"
              />
              <rect
                x="70"
                y="120"
                width="260"
                height="100"
                className="fill-red-500"
              />
              <rect
                x="100"
                y="80"
                width="200"
                height="40"
                className="fill-white"
              />
              <rect
                x="85"
                y="140"
                width="230"
                height="60"
                className="fill-white"
              />
              <path
                d="M80,200 L320,200 C320,240 280,260 250,260 L150,260 C120,260 80,240 80,200 Z"
                className="fill-red-500"
              />
            </svg>
          </div>

          {/* Content */}
          <div className="w-full lg:w-1/2 space-y-6">
            <div>
              <span className="text-red-500 font-semibold text-lg">
                OUR SERVICES
              </span>
              <h1 className="mt-2 text-4xl font-bold text-gray-900 leading-tight">
                CAR REPAIR & MAINTENANCE SERVICES
              </h1>
            </div>

            <p className="text-gray-600 text-lg leading-relaxed">
              Our garage services cater to the needs of vehicle owners in Karachi,
              providing comprehensive solutions for all automotive requirements.
            </p>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <ArrowRight className="w-5 h-5 text-red-500" />
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
        className="fixed bottom-8 right-8 bg-red-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:-translate-y-1 transition-transform duration-200"
      >
        Contact Us
      </a>
    </div>
  );
};

export default CarServicesPage;
