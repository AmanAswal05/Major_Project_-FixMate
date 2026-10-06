import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

const Payment = () => {
  const { bookingId } = useParams();
  const navigate = useNavigate();
  const [booking, setBooking] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState('upi');
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('fixmate_bookings') || '[]');
    const b = stored.find(x => x.id === bookingId);
    setBooking(b);
  }, [bookingId]);

  if (!booking) {
    return <div className="text-center py-20">Booking not found.</div>;
  }

  const serviceCost = booking.estimatedCost;
  const platformFee = 20;
  const total = serviceCost + platformFee;

  const handlePay = () => {
    setPaymentSuccess(true);
  };

  if (paymentSuccess) {
    return (
      <div className="max-w-md mx-auto px-4 py-20 text-center">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Payment Successful</h2>
          <p className="text-gray-600 mb-8">Thank you for using FixMate.</p>
          <button 
            onClick={() => navigate(`/rating/${booking.professionalId}`)}
            className="w-full px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700"
          >
            Rate Your Technician
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto px-4 py-10">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="bg-blue-50 px-6 py-4 border-b border-gray-200">
          <h1 className="text-xl font-bold text-gray-900 text-center">Payment Summary</h1>
        </div>
        
        <div className="p-6">
          <div className="bg-yellow-50 text-yellow-800 text-sm p-3 rounded-lg mb-6 border border-yellow-200">
            <strong>Prototype Notice:</strong> This is a mock payment for demonstration purposes. No real transaction occurs.
          </div>

          <div className="space-y-3 mb-6 border-b border-gray-100 pb-6">
            <div className="flex justify-between text-gray-600">
              <span>Service Cost</span>
              <span>₹{serviceCost}</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Platform Fee</span>
              <span>₹{platformFee}</span>
            </div>
            <div className="flex justify-between text-lg font-bold text-gray-900 pt-2 border-t border-gray-100">
              <span>Total</span>
              <span>₹{total}</span>
            </div>
          </div>

          <h3 className="font-semibold text-gray-900 mb-3">Select Payment Method</h3>
          <div className="space-y-2 mb-8">
            <label className={`flex items-center p-3 border rounded-lg cursor-pointer ${paymentMethod === 'upi' ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}`}>
              <input type="radio" name="payment" value="upi" checked={paymentMethod === 'upi'} onChange={() => setPaymentMethod('upi')} className="mr-3" />
              <span className="font-medium">UPI</span>
            </label>
            <label className={`flex items-center p-3 border rounded-lg cursor-pointer ${paymentMethod === 'card' ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}`}>
              <input type="radio" name="payment" value="card" checked={paymentMethod === 'card'} onChange={() => setPaymentMethod('card')} className="mr-3" />
              <span className="font-medium">Credit / Debit Card</span>
            </label>
            <label className={`flex items-center p-3 border rounded-lg cursor-pointer ${paymentMethod === 'cash' ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}`}>
              <input type="radio" name="payment" value="cash" checked={paymentMethod === 'cash'} onChange={() => setPaymentMethod('cash')} className="mr-3" />
              <span className="font-medium">Cash on Completion</span>
            </label>
          </div>

          <button 
            onClick={handlePay}
            className="w-full px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 shadow-sm"
          >
            Pay ₹{total}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
