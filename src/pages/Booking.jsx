import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { professionals } from '../data/mockData';

const Booking = () => {
  const { professionalId } = useParams();
  const navigate = useNavigate();
  const prof = professionals.find(p => p.id === professionalId);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    date: '',
    time: '',
    serviceRequired: prof ? prof.servicesOffered[0] : '',
    notes: ''
  });

  if (!prof) {
    return <div className="text-center py-20">Professional not found.</div>;
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create booking object
    const bookingId = 'FM-' + Math.floor(1000 + Math.random() * 9000);
    const estimatedCost = Math.floor((prof.priceMin + prof.priceMax) / 2);
    
    const newBooking = {
      id: bookingId,
      professionalId: prof.id,
      professionalName: prof.name,
      serviceCategory: prof.service,
      serviceRequired: formData.serviceRequired,
      date: formData.date,
      time: formData.time,
      estimatedCost: estimatedCost,
      status: 'Booked',
      timestamp: new Date().toISOString()
    };

    // Save to local storage
    const existingBookings = JSON.parse(localStorage.getItem('fixmate_bookings') || '[]');
    localStorage.setItem('fixmate_bookings', JSON.stringify([...existingBookings, newBooking]));

    // Navigate to confirmation
    navigate('/booking-confirmation', { state: { booking: newBooking } });
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-10">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Book a Service</h1>
        <p className="text-gray-600 mb-8">You are booking with <span className="font-semibold text-gray-900">{prof.name}</span></p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Customer Name *</label>
              <input required type="text" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
              <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Address *</label>
            <textarea required name="address" value={formData.address} onChange={handleChange} rows="2" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"></textarea>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Select Date *</label>
              <input required type="date" name="date" value={formData.date} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Select Time *</label>
              <select required name="time" value={formData.time} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500">
                <option value="">Choose a time</option>
                <option value="09:00 AM">09:00 AM</option>
                <option value="11:00 AM">11:00 AM</option>
                <option value="02:00 PM">02:00 PM</option>
                <option value="04:00 PM">04:00 PM</option>
                <option value="06:00 PM">06:00 PM</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Service Required *</label>
            <select required name="serviceRequired" value={formData.serviceRequired} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500">
              {prof.servicesOffered.map((s, i) => (
                <option key={i} value={s}>{s}</option>
              ))}
              <option value="Other">Other / Not Sure</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Additional Notes</label>
            <textarea name="notes" value={formData.notes} onChange={handleChange} rows="2" placeholder="Any specific details about the issue..." className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"></textarea>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg flex justify-between items-center">
            <span className="text-gray-700 font-medium">Estimated Price:</span>
            <span className="text-xl font-bold text-blue-700">₹{Math.floor((prof.priceMin + prof.priceMax) / 2)}</span>
          </div>

          <div className="pt-4 flex justify-end gap-4">
            <button type="button" onClick={() => navigate(-1)} className="px-6 py-2 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50">Cancel</button>
            <button type="submit" className="px-8 py-2 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 shadow-sm">Confirm Booking</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Booking;
