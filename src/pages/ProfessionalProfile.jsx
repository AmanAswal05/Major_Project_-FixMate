import { useParams, useNavigate } from 'react-router-dom';
import { professionals } from '../data/mockData';
import { Star, MapPin, Clock, CheckCircle } from 'lucide-react';

const ProfessionalProfile = () => {
  const { professionalId } = useParams();
  const navigate = useNavigate();
  
  const prof = professionals.find(p => p.id === professionalId);

  if (!prof) {
    return <div className="text-center py-20">Professional not found.</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
        {/* Header */}
        <div className="bg-blue-50 px-6 py-8 border-b border-gray-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
          <div>
            <h1 className="text-3xl font-extrabold text-gray-900">{prof.name}</h1>
            <div className="mt-3 flex flex-wrap gap-4 text-sm text-gray-700">
              <span className="flex items-center gap-1 font-semibold text-amber-600 bg-amber-50 px-2 py-1 rounded">
                <Star className="h-4 w-4 fill-current" /> {prof.rating} / 5
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4 text-gray-400" /> {prof.experience} years experience
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="h-4 w-4 text-gray-400" /> {prof.distance} km away
              </span>
            </div>
          </div>
          <button
            onClick={() => navigate(`/book/${prof.id}`)}
            className="w-full sm:w-auto px-8 py-3 text-white bg-blue-600 hover:bg-blue-700 font-bold rounded-lg shadow-sm"
          >
            Book Now
          </button>
        </div>

        <div className="p-6 sm:p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-8">
              {/* About */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">About</h3>
                <p className="text-gray-600 leading-relaxed">{prof.description}</p>
              </div>

              {/* Services */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Services Offered</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {prof.servicesOffered.map((service, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      {service}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Reviews */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Customer Reviews</h3>
                {prof.reviews.length > 0 ? (
                  <div className="space-y-4">
                    {prof.reviews.map((review) => (
                      <div key={review.id} className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                        <div className="flex items-center gap-1 mb-2 text-amber-500">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-current" />
                          ))}
                        </div>
                        <p className="text-gray-700 italic">"{review.text}"</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500">No reviews yet.</p>
                )}
              </div>
            </div>

            {/* Sidebar Details */}
            <div className="space-y-6">
              <div className="bg-gray-50 p-5 rounded-xl border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-4">Quick Details</h3>
                
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-gray-500">Estimated Price</p>
                    <p className="font-semibold text-gray-900">₹{prof.priceMin} - ₹{prof.priceMax}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Availability</p>
                    <p className="font-semibold text-green-700">{prof.availability}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalProfile;
