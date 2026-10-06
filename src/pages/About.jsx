import { ArrowDown } from 'lucide-react';

const About = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* About Section */}
      <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-4">About FixMate</h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          FixMate is a proposed digital platform designed to connect customers with reliable local home-repair professionals. 
          The platform focuses on convenience, transparent estimated pricing, technician ratings, easy booking, 
          and support for local service providers.
        </p>
      </section>

      {/* Business Model Section */}
      <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">How FixMate Makes Money</h2>
        <p className="text-gray-600 mb-6">FixMate uses a commission-based revenue model.</p>
        
        <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 mb-4">
          <h3 className="font-semibold text-blue-900 mb-4">Example Transaction:</h3>
          <ul className="space-y-2 text-blue-800">
            <li className="flex justify-between">
              <span>Average service booking:</span>
              <span className="font-bold">₹500</span>
            </li>
            <li className="flex justify-between">
              <span>Platform commission:</span>
              <span className="font-bold">10%</span>
            </li>
            <li className="flex justify-between border-t border-blue-200 pt-2 mt-2">
              <span>FixMate revenue:</span>
              <span className="font-bold">₹50</span>
            </li>
          </ul>
        </div>

        <div className="bg-green-50 p-6 rounded-xl border border-green-100">
          <h3 className="font-semibold text-green-900 mb-4">Example Monthly Calculation:</h3>
          <p className="text-green-800 font-mono text-sm mb-2">100 bookings × ₹500 = ₹50,000 total booking value</p>
          <p className="text-green-800 font-mono text-sm">10% commission = <span className="font-bold">₹5,000 platform revenue</span></p>
        </div>
        
        <p className="text-xs text-gray-400 mt-4 text-right">
          * These are illustrative figures for the academic prototype.
        </p>
      </section>

      {/* Allocation Logic Section */}
      <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Technician Allocation Logic</h2>
        <p className="text-gray-600 mb-6">
          When a customer requests a service, FixMate considers multiple factors to display the most suitable professionals:
        </p>
        
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1 w-full">
            <ul className="space-y-4">
              {[
                'Service category',
                'Location (Distance from customer)',
                'Technician availability',
                'Rating & Reviews',
                'Years of experience'
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-100 text-blue-600 font-bold text-sm">
                    {index + 1}
                  </span>
                  <span className="font-medium text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="flex-1 w-full bg-gray-50 p-6 rounded-xl border border-gray-200 flex flex-col items-center space-y-2">
            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">Visual Flow</h3>
            
            {['Customer Request', 'Service Match', 'Location Check', 'Availability Check', 'Technician Selection', 'Booking Confirmation'].map((step, idx, arr) => (
              <div key={idx} className="flex flex-col items-center w-full">
                <div className="bg-white border border-gray-300 w-full text-center py-2 rounded shadow-sm text-sm font-medium text-gray-800">
                  {step}
                </div>
                {idx < arr.length - 1 && (
                  <ArrowDown className="h-5 w-5 text-gray-400 my-1" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
