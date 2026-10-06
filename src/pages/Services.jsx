import { useNavigate } from 'react-router-dom';
import { services } from '../data/mockData';
import * as Icons from 'lucide-react';

const Services = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-extrabold text-gray-900 text-center mb-10">What do you need help with?</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => {
          const IconComponent = Icons[service.icon];
          return (
            <div 
              key={service.id} 
              className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow flex flex-col"
            >
              <div className="p-6 flex-grow">
                <div className="h-12 w-12 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
                  {IconComponent && <IconComponent className="h-6 w-6 text-blue-600" />}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>
                <p className="text-gray-500 mb-6">{service.description}</p>
              </div>
              <div className="p-4 bg-gray-50 border-t border-gray-100">
                <button
                  onClick={() => navigate(`/services/${service.id}`)}
                  className="w-full flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                >
                  View Professionals
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
