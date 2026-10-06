import { useState } from 'react';
import { services } from '../data/mockData';
import { CheckCircle } from 'lucide-react';

const ProviderRegistration = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    serviceCategory: services[0]?.id || '',
    experience: '',
    serviceArea: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="max-w-xl mx-auto px-4 py-20 text-center">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-10">
          <CheckCircle className="h-20 w-20 text-green-500 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Registration submitted successfully!</h2>
          <p className="text-gray-600 mb-8">
            Thank you for applying to be a FixMate service provider. Our team will review your application and contact you soon.
          </p>
          <button 
            onClick={() => setSubmitted(false)}
            className="px-8 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700"
          >
            Register Another Provider
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-4">Grow Your Local Repair Business with FixMate</h1>
        <p className="text-xl text-gray-600">
          FixMate helps local technicians reach more customers and manage service requests digitally.
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-10">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
              <input required type="text" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
              <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Service Category *</label>
              <select required name="serviceCategory" value={formData.serviceCategory} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500">
                {services.map(s => (
                  <option key={s.id} value={s.id}>{s.name}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Years of Experience *</label>
              <input required type="number" min="0" name="experience" value={formData.experience} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Service Area (City/Neighborhood) *</label>
            <input required type="text" name="serviceArea" value={formData.serviceArea} onChange={handleChange} placeholder="e.g. South Delhi" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" />
          </div>

          <div className="pt-4">
            <button type="submit" className="w-full px-8 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 shadow-sm text-lg">
              Register as a Provider
            </button>
          </div>
          
          <p className="text-sm text-center text-gray-500 mt-4">
            * This is a prototype only; do not actually submit real data.
          </p>
        </form>
      </div>
    </div>
  );
};

export default ProviderRegistration;
