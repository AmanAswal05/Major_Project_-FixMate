import { useLocation, useNavigate } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

const BookingConfirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const booking = location.state?.booking;

  if (!booking) {
    return (
      <div className="text-center py-20">
        <p className="text-xl text-gray-600 mb-4">No booking information found.</p>
        <button onClick={() => navigate('/')} className="text-blue-600 font-medium">Go to Home</button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 text-center">
        <CheckCircle className="h-20 w-20 text-green-500 mx-auto mb-6" />
        <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Booking Confirmed!</h1>
        <p className="text-gray-500 mb-8">Your service request has been successfully placed.</p>

        <div className="bg-gray-50 rounded-xl p-6 text-left space-y-4 mb-8">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-500">Booking ID</p>
              <p className="font-semibold text-gray-900">{booking.id}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Estimated Cost</p>
              <p className="font-semibold text-gray-900">₹{booking.estimatedCost}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Technician</p>
              <p className="font-semibold text-gray-900">{booking.professionalName}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Service</p>
              <p className="font-semibold text-gray-900 capitalize">{booking.serviceCategory} - {booking.serviceRequired}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Date</p>
              <p className="font-semibold text-gray-900">{booking.date}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Time</p>
              <p className="font-semibold text-gray-900">{booking.time}</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button 
            onClick={() => navigate('/my-bookings')}
            className="px-8 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 shadow-sm"
          >
            View Booking
          </button>
          <button 
            onClick={() => navigate('/')}
            className="px-8 py-3 bg-white border border-gray-300 text-gray-700 font-bold rounded-lg hover:bg-gray-50"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingConfirmation;
