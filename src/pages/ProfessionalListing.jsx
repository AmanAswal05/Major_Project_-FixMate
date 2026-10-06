import { useState, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { professionals, services } from '../data/mockData';
import { Star, MapPin, IndianRupee, Clock } from 'lucide-react';

const ProfessionalListing = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  
  const serviceDetails = services.find(s => s.id === serviceId);
  const serviceName = serviceDetails ? serviceDetails.name : 'Service';

  // Filters state
  const [ratingFilter, setRatingFilter] = useState(0);
  const [maxDistance, setMaxDistance] = useState(10);
  const [maxPrice, setMaxPrice] = useState(2000);

  const filteredProfessionals = useMemo(() => {
    return professionals
      .filter(p => p.service === serviceId)
      .filter(p => p.rating >= ratingFilter)
      .filter(p => p.distance <= maxDistance)
      .filter(p => p.priceMax <= maxPrice);
  }, [serviceId, ratingFilter, maxDistance, maxPrice]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-gray-900">{serviceName} Professionals</h1>
        <p className="mt-2 text-gray-500">Find and book the best {serviceName.toLowerCase()} experts near you.</p>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Filters Sidebar */}
        <div className="w-full md:w-64 flex-shrink-0">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 sticky top-6">
            <h2 className="text-lg font-bold text-gray-900 mb-6">Filters</h2>
            
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Minimum Rating</label>
              <select 
                value={ratingFilter}
                onChange={(e) => setRatingFilter(Number(e.target.value))}
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md border"
              >
                <option value={0}>Any Rating</option>
                <option value={4.0}>4.0 & above</option>
                <option value={4.5}>4.5 & above</option>
              </select>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Max Distance ({maxDistance} km)
              </label>
              <input 
                type="range" 
                min="1" 
                max="20" 
                value={maxDistance} 
                onChange={(e) => setMaxDistance(Number(e.target.value))}
                className="w-full accent-blue-600"
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Max Price (₹{maxPrice})
              </label>
              <input 
                type="range" 
                min="300" 
                max="3000" 
                step="100"
                value={maxPrice} 
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full accent-blue-600"
              />
            </div>
            
            <button 
              onClick={() => {
                setRatingFilter(0);
                setMaxDistance(10);
                setMaxPrice(2000);
              }}
              className="w-full px-4 py-2 text-sm text-blue-600 border border-blue-600 rounded-md hover:bg-blue-50"
            >
              Reset Filters
            </button>
          </div>
        </div>

        {/* Professional List */}
        <div className="flex-1">
          {filteredProfessionals.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-xl border border-gray-200">
              <p className="text-gray-500">No professionals found matching your criteria.</p>
            </div>
          ) : (
            <div className="space-y-6">
              {filteredProfessionals.map((prof) => (
                <div key={prof.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
                  <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{prof.name}</h3>
                      <div className="mt-2 flex flex-wrap gap-4 text-sm text-gray-600">
                        <span className="flex items-center gap-1 font-medium text-amber-600">
                          <Star className="h-4 w-4 fill-current" /> {prof.rating}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" /> {prof.distance} km
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" /> {prof.experience} yrs exp
                        </span>
                        <span className="flex items-center gap-1 font-medium text-green-700">
                          <IndianRupee className="h-4 w-4" /> ₹{prof.priceMin} - ₹{prof.priceMax}
                        </span>
                      </div>
                      <div className="mt-3">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          {prof.availability}
                        </span>
                      </div>
                    </div>
                    
                    <button
                      onClick={() => navigate(`/professional/${prof.id}`)}
                      className="w-full sm:w-auto flex-shrink-0 inline-flex items-center justify-center px-6 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                    >
                      View Profile
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfessionalListing;
