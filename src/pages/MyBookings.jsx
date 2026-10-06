import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('fixmate_bookings') || '[]');
    // Sort by timestamp desc
    stored.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
    setBookings(stored);
  }, []);

  const handleSimulateCompletion = (id) => {
    const updated = bookings.map(b => {
      if (b.id === id) {
        return { ...b, status: 'Service Completed' };
      }
      return b;
    });
    setBookings(updated);
    localStorage.setItem('fixmate_bookings', JSON.stringify(updated));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-8">My Bookings</h1>

      {bookings.length === 0 ? (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-10 text-center">
          <p className="text-gray-500 mb-4">You have no bookings yet.</p>
          <button 
            onClick={() => navigate('/services')}
            className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700"
          >
            Find a Service
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          {bookings.map((booking) => (
            <div key={booking.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 flex flex-col sm:flex-row justify-between gap-6">
              <div className="flex-1">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-gray-900">Booking #{booking.id}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    booking.status === 'Service Completed' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                  }`}>
                    {booking.status}
                  </span>
                </div>
                
                <div className="text-gray-600 space-y-1 mb-4 text-sm">
                  <p><span className="font-medium text-gray-900">Technician:</span> {booking.professionalName}</p>
                  <p><span className="font-medium text-gray-900">Service:</span> <span className="capitalize">{booking.serviceCategory}</span> - {booking.serviceRequired}</p>
                  <p><span className="font-medium text-gray-900">Date & Time:</span> {booking.date} at {booking.time}</p>
                  <p><span className="font-medium text-gray-900">Estimated Cost:</span> ₹{booking.estimatedCost}</p>
                </div>

                {/* Progress bar simulation for active booking */}
                {booking.status !== 'Service Completed' && (
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                    <div className="bg-blue-600 h-2 rounded-full w-1/4"></div>
                  </div>
                )}
                {booking.status !== 'Service Completed' && (
                  <div className="flex justify-between text-xs text-gray-500">
                    <span className="font-medium text-blue-600">Booked</span>
                    <span>Assigned</span>
                    <span>On the Way</span>
                    <span>Completed</span>
                  </div>
                )}
              </div>

              <div className="flex flex-col gap-3 justify-center sm:w-48 flex-shrink-0 border-t sm:border-t-0 sm:border-l border-gray-100 pt-4 sm:pt-0 sm:pl-6">
                {booking.status === 'Service Completed' ? (
                  <>
                    <button 
                      onClick={() => navigate(`/payment/${booking.id}`)}
                      className="w-full px-4 py-2 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 text-sm"
                    >
                      Make Payment
                    </button>
                    <button 
                      onClick={() => navigate(`/rating/${booking.professionalId}`)}
                      className="w-full px-4 py-2 bg-white border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 text-sm"
                    >
                      Give Rating
                    </button>
                  </>
                ) : (
                  <button 
                    onClick={() => handleSimulateCompletion(booking.id)}
                    className="w-full px-4 py-2 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 text-sm border border-gray-300"
                  >
                    Simulate Service Completion
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyBookings;
