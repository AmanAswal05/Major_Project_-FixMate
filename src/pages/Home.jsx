import { useNavigate } from 'react-router-dom';
import { services } from '../data/mockData';
import * as Icons from 'lucide-react';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col bg-white">
      {/* Hero Section */}
      <section className="bg-blue-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            Find Trusted Home Repair<br/> Professionals Near You
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Compare local professionals, check ratings, view estimated prices, and book a service easily. Reliable Home Repairs, Just a Click Away.
          </p>
          <div className="mt-8 flex justify-center gap-4 flex-col sm:flex-row">
            <button 
              onClick={() => navigate('/services')}
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
            >
              Find a Service
            </button>
            <button 
              onClick={() => navigate('/become-provider')}
              className="inline-flex items-center justify-center px-8 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
            >
              Become a Service Provider
            </button>
          </div>
        </div>
      </section>

      {/* Popular Services Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-10">Popular Services</h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {services.map((service) => {
              const IconComponent = Icons[service.icon];
              return (
                <div 
                  key={service.id} 
                  onClick={() => navigate(`/services/${service.id}`)}
                  className="flex flex-col items-center p-6 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer hover:border-blue-200 group"
                >
                  <div className="h-12 w-12 rounded-full bg-blue-50 flex items-center justify-center mb-4 group-hover:bg-blue-100">
                    {IconComponent && <IconComponent className="h-6 w-6 text-blue-600" />}
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900 text-center">{service.name}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-10">How FixMate Works</h2>
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {['Choose a service', 'Find a technician', 'Compare & book', 'Get the repair done', 'Pay & review'].map((step, idx) => (
              <div key={idx} className="flex flex-col items-center flex-1">
                <div className="h-12 w-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg mb-4">
                  {idx + 1}
                </div>
                <h4 className="font-semibold text-gray-900 text-center">{step}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="p-4">
              <Icons.ShieldCheck className="h-10 w-10 text-blue-500 mx-auto mb-4" />
              <h4 className="font-bold text-lg text-gray-900">Verified Professionals</h4>
            </div>
            <div className="p-4">
              <Icons.BadgeIndianRupee className="h-10 w-10 text-blue-500 mx-auto mb-4" />
              <h4 className="font-bold text-lg text-gray-900">Transparent Pricing</h4>
            </div>
            <div className="p-4">
              <Icons.Star className="h-10 w-10 text-blue-500 mx-auto mb-4" />
              <h4 className="font-bold text-lg text-gray-900">Ratings & Reviews</h4>
            </div>
            <div className="p-4">
              <Icons.CalendarCheck className="h-10 w-10 text-blue-500 mx-auto mb-4" />
              <h4 className="font-bold text-lg text-gray-900">Easy Booking</h4>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
