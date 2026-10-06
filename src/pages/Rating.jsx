import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { professionals } from '../data/mockData';
import { Star } from 'lucide-react';

const Rating = () => {
  const { professionalId } = useParams();
  const navigate = useNavigate();
  const prof = professionals.find(p => p.id === professionalId);

  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [review, setReview] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!prof) return <div className="text-center py-20">Professional not found.</div>;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (rating === 0) {
      alert("Please select a rating.");
      return;
    }
    
    // In a real app, this would update a database.
    // For this prototype, we'll just show success.
    // Ideally we could append this to prof.reviews in a mutable state, 
    // but since they are imported statically, they reset on reload.
    // To demonstrate properly in a session, we could mutate the imported array (hacky but works for demo).
    prof.reviews.unshift({
      id: Date.now(),
      text: review,
      rating: rating
    });
    
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="max-w-md mx-auto px-4 py-20 text-center">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
          <Star className="h-16 w-16 text-yellow-400 fill-current mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Thank you for your feedback!</h2>
          <p className="text-gray-600 mb-8">Your review has been submitted and will appear on the technician's profile.</p>
          <div className="space-y-3">
            <button 
              onClick={() => navigate(`/professional/${professionalId}`)}
              className="w-full px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700"
            >
              View Technician Profile
            </button>
            <button 
              onClick={() => navigate('/')}
              className="w-full px-6 py-3 bg-white border border-gray-300 text-gray-700 font-bold rounded-lg hover:bg-gray-50"
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto px-4 py-10">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Rate {prof.name}</h1>
        <p className="text-gray-600 mb-8">How was your experience?</p>

        <form onSubmit={handleSubmit}>
          <div className="flex justify-center gap-2 mb-8">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                type="button"
                key={star}
                className="focus:outline-none"
                onClick={() => setRating(star)}
                onMouseEnter={() => setHover(star)}
                onMouseLeave={() => setHover(rating)}
              >
                <Star 
                  className={`h-10 w-10 ${star <= (hover || rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                />
              </button>
            ))}
          </div>

          <div className="text-left mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Write a review</label>
            <textarea 
              rows="4" 
              value={review}
              onChange={(e) => setReview(e.target.value)}
              placeholder="Tell others about your experience..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            ></textarea>
          </div>

          <button 
            type="submit"
            className="w-full px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 shadow-sm"
          >
            Submit Review
          </button>
        </form>
      </div>
    </div>
  );
};

export default Rating;
