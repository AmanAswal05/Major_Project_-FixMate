import { useState } from 'react';
import { CheckCircle, Star, MapPin, IndianRupee, Clock, ArrowRight, RefreshCw, Presentation, X } from 'lucide-react';

const Demo = () => {
  const [step, setStep] = useState(1);
  const [presentationMode, setPresentationMode] = useState(false);

  const totalSteps = 8;

  const handleNextStep = () => {
    if (step < totalSteps) setStep(step + 1);
  };

  const handleRestart = () => {
    setStep(1);
  };

  const explanations = {
    1: "Identifies the customer's problem and service requirement.",
    2: "Shows how FixMate helps customers discover and compare local professionals.",
    3: "Demonstrates transparency through ratings, experience, location and estimated pricing.",
    4: "Shows the booking process.",
    5: "Demonstrates technician allocation.",
    6: "Shows successful service completion.",
    7: "Demonstrates the revenue/payment model.",
    8: "Shows customer feedback and retention."
  };

  const Step1 = () => (
    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-200">
      <h3 className="text-xl font-bold text-gray-900 mb-6 border-b pb-4">CUSTOMER REQUEST</h3>
      <div className="space-y-4 text-gray-700">
        <p><span className="font-semibold text-gray-900">Customer:</span> Aarushi</p>
        <p><span className="font-semibold text-gray-900">Location:</span> Ulwe, Navi Mumbai</p>
        <p><span className="font-semibold text-gray-900">Service Required:</span> Plumbing</p>
        <p className="p-3 bg-gray-50 rounded-lg italic">Problem: "Kitchen tap is leaking."</p>
        <p><span className="font-semibold text-gray-900">Urgency:</span> Today</p>
        <p><span className="font-semibold text-gray-900">Estimated budget:</span> ₹300–₹500</p>
      </div>
      <button onClick={handleNextStep} className="mt-8 w-full md:w-auto px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 flex items-center justify-center gap-2">
        Find a Technician <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );

  const Step2 = () => (
    <div className="space-y-4">
      <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-200">
        <h3 className="text-xl font-bold text-gray-900 mb-2">Technicians Near You</h3>
        <p className="text-sm text-blue-700 bg-blue-50 p-3 rounded-lg mb-6">
          FixMate recommends technicians using location, service category, availability, experience, and customer ratings.
        </p>
        
        <div className="flex gap-2 text-xs font-medium text-gray-500 mb-4 pb-2 border-b">
          <span>Filters:</span>
          <span className="bg-gray-100 px-2 py-1 rounded">Rating</span>
          <span className="bg-gray-100 px-2 py-1 rounded">Distance</span>
          <span className="bg-gray-100 px-2 py-1 rounded">Price</span>
          <span className="bg-gray-100 px-2 py-1 rounded">Availability</span>
        </div>

        <div className="space-y-4">
          <div className="border-2 border-blue-500 bg-blue-50/30 p-4 rounded-xl flex flex-col sm:flex-row justify-between gap-4">
            <div>
              <h4 className="font-bold text-gray-900 text-lg">RAJ PLUMBING SERVICES</h4>
              <div className="flex flex-wrap gap-3 text-sm text-gray-600 mt-2">
                <span className="flex items-center gap-1 font-medium text-amber-600"><Star className="w-4 h-4 fill-current"/> 4.8</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4"/> 7 years experience</span>
                <span className="flex items-center gap-1"><MapPin className="w-4 h-4"/> 1.2 km away</span>
                <span className="flex items-center gap-1 font-medium text-green-700"><IndianRupee className="w-4 h-4"/> 300-500</span>
              </div>
              <span className="inline-block mt-2 px-2 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full">Available Today</span>
            </div>
            <button onClick={handleNextStep} className="self-center px-4 py-2 bg-blue-600 text-white text-sm font-bold rounded-lg hover:bg-blue-700 whitespace-nowrap flex items-center gap-2">
              Select Raj <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="border border-gray-200 p-4 rounded-xl opacity-75">
            <h4 className="font-bold text-gray-900">AMIT HOME SERVICES</h4>
            <div className="flex flex-wrap gap-3 text-sm text-gray-600 mt-1">
              <span className="text-amber-600">⭐ 4.6</span> <span>5 yrs exp</span> <span>2.4 km away</span> <span>₹350-550</span>
            </div>
          </div>
          <div className="border border-gray-200 p-4 rounded-xl opacity-75">
            <h4 className="font-bold text-gray-900">SHARMA REPAIRS</h4>
            <div className="flex flex-wrap gap-3 text-sm text-gray-600 mt-1">
              <span className="text-amber-600">⭐ 4.5</span> <span>8 yrs exp</span> <span>3.1 km away</span> <span>₹300-600</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const Step3 = () => (
    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-200">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="text-2xl font-bold text-gray-900">Raj Plumbing Services</h3>
          <div className="flex gap-4 text-sm mt-2 text-gray-600">
            <span className="font-semibold text-amber-600 bg-amber-50 px-2 py-1 rounded">⭐ 4.8 / 5</span>
            <span className="px-2 py-1 bg-gray-100 rounded">7 Years Experience</span>
            <span className="px-2 py-1 bg-gray-100 rounded">📍 1.2 km away</span>
          </div>
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Services</h4>
          <ul className="space-y-1 text-sm text-gray-600">
            <li>• Tap repair</li>
            <li>• Pipe leakage</li>
            <li>• Drain cleaning</li>
            <li>• Bathroom plumbing</li>
          </ul>
        </div>
        <div>
           <div className="bg-green-50 border border-green-100 p-4 rounded-lg mb-4">
             <p className="text-sm text-green-800 font-semibold mb-1">Available Today</p>
             <p className="text-green-900 font-bold">Estimated Price: ₹300–₹500</p>
           </div>
           <h4 className="font-semibold text-gray-900 mb-2">Reviews</h4>
           <p className="text-sm text-gray-600 italic">"Quick and professional service."</p>
           <p className="text-sm text-gray-600 italic">"Good pricing and reliable."</p>
        </div>
      </div>

      <button onClick={handleNextStep} className="w-full md:w-auto px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 flex items-center justify-center gap-2">
        Book This Technician <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );

  const Step4 = () => {
    const [confirmed, setConfirmed] = useState(false);
    return (
      <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-200 transition-all duration-300">
        {!confirmed ? (
          <>
            <h3 className="text-xl font-bold text-gray-900 mb-6 border-b pb-4">BOOKING FORM</h3>
            <div className="grid grid-cols-2 gap-y-4 gap-x-6 text-sm text-gray-700 mb-8">
              <div><p className="font-semibold">Customer:</p><p className="bg-gray-50 p-2 rounded mt-1">Aarushi</p></div>
              <div><p className="font-semibold">Phone:</p><p className="bg-gray-50 p-2 rounded mt-1">98765XXXXX</p></div>
              <div className="col-span-2"><p className="font-semibold">Address:</p><p className="bg-gray-50 p-2 rounded mt-1">Ulwe, Navi Mumbai</p></div>
              <div><p className="font-semibold">Service:</p><p className="bg-gray-50 p-2 rounded mt-1">Plumbing</p></div>
              <div><p className="font-semibold">Estimated cost:</p><p className="bg-gray-50 p-2 rounded mt-1 font-bold text-blue-700">₹400</p></div>
              <div><p className="font-semibold">Date:</p><p className="bg-gray-50 p-2 rounded mt-1">Today</p></div>
              <div><p className="font-semibold">Time:</p><p className="bg-gray-50 p-2 rounded mt-1">4:00 PM</p></div>
              <div className="col-span-2"><p className="font-semibold">Problem:</p><p className="bg-gray-50 p-2 rounded mt-1">Kitchen tap is leaking.</p></div>
            </div>
            <button onClick={() => setConfirmed(true)} className="w-full px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700">
              Confirm Booking
            </button>
          </>
        ) : (
          <div className="text-center py-10">
            <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-4 animate-bounce" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">BOOKING CONFIRMED</h3>
            <p className="text-gray-500 mb-8">Booking ID: FM-1001</p>
            <button onClick={handleNextStep} className="px-8 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 flex items-center justify-center gap-2 mx-auto">
              Continue Demo <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    );
  };

  const Step5 = () => (
    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-200 text-center">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Technician Assigned</h3>
      <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 max-w-sm mx-auto mb-8 text-left">
        <p className="text-blue-800 font-semibold mb-4 flex items-center gap-2">
          <CheckCircle className="w-5 h-5"/> Raj Plumbing Services has accepted.
        </p>
        <div className="space-y-2 text-sm text-gray-700">
          <p><span className="font-semibold">Technician:</span> Raj Kumar</p>
          <p><span className="font-semibold">Rating:</span> ⭐ 4.8</p>
          <p><span className="font-semibold">Distance:</span> 1.2 km</p>
          <p><span className="font-semibold text-green-700">Arrival:</span> Approx 20 minutes</p>
        </div>
      </div>

      <div className="flex justify-between items-center max-w-md mx-auto text-xs font-semibold text-gray-500 mb-8">
        <div className="flex flex-col items-center gap-1 text-green-600"><CheckCircle className="w-6 h-6"/><span>Booked</span></div>
        <div className="flex-1 border-t-2 border-green-500 mx-2"></div>
        <div className="flex flex-col items-center gap-1 text-green-600"><CheckCircle className="w-6 h-6"/><span>Assigned</span></div>
        <div className="flex-1 border-t-2 border-gray-200 mx-2"></div>
        <div className="flex flex-col items-center gap-1"><div className="w-6 h-6 rounded-full bg-blue-600 border-4 border-blue-200"></div><span>On the Way</span></div>
        <div className="flex-1 border-t-2 border-gray-200 mx-2"></div>
        <div className="flex flex-col items-center gap-1"><div className="w-6 h-6 rounded-full border-2 border-gray-300"></div><span>Done</span></div>
      </div>
      
      <p className="text-sm text-gray-500 italic mb-8">
        "FixMate matches customers with suitable technicians based on service type, location, availability, experience, and ratings."
      </p>

      <button onClick={handleNextStep} className="px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 flex items-center justify-center gap-2 mx-auto">
        Simulate Technician Arrival <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );

  const Step6 = () => (
    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-200 text-center">
      <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Service Completed</h3>
      <p className="text-gray-600 mb-8">Raj Plumbing Services completed the repair.</p>
      
      <div className="bg-gray-50 rounded-xl p-6 max-w-sm mx-auto mb-8 text-left space-y-3 text-sm">
        <div className="flex justify-between border-b pb-2">
          <span className="text-gray-500">Service:</span>
          <span className="font-semibold text-gray-900">Kitchen tap repair</span>
        </div>
        <div className="flex justify-between border-b pb-2">
          <span className="text-gray-500">Service cost:</span>
          <span className="font-bold text-gray-900">₹400</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">Status:</span>
          <span className="font-bold text-green-600">Completed</span>
        </div>
      </div>

      <button onClick={handleNextStep} className="px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 flex items-center justify-center gap-2 mx-auto">
        Continue to Payment <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );

  const Step7 = () => {
    const [paid, setPaid] = useState(false);
    return (
      <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-200 max-w-md mx-auto">
        {!paid ? (
          <>
            <h3 className="text-xl font-bold text-gray-900 mb-6 text-center border-b pb-4">PAYMENT SUMMARY</h3>
            <div className="space-y-4 mb-8">
              <div className="flex justify-between text-gray-700">
                <span>Service Cost:</span>
                <span>₹400</span>
              </div>
              <div className="flex justify-between text-gray-700">
                <span>FixMate Platform Fee:</span>
                <span>₹20</span>
              </div>
              <div className="flex justify-between font-bold text-xl text-gray-900 border-t pt-4">
                <span>TOTAL:</span>
                <span>₹420</span>
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-xl mb-8">
              <p className="text-sm font-semibold text-blue-900 mb-3 text-center">Revenue Split</p>
              <div className="flex items-center justify-between text-sm">
                <div className="bg-white px-3 py-2 rounded shadow-sm border border-blue-100 flex-1 text-center font-medium">₹400<br/><span className="text-xs text-gray-500">Provider</span></div>
                <div className="mx-2 text-blue-300">+</div>
                <div className="bg-blue-600 px-3 py-2 rounded shadow-sm text-white flex-1 text-center font-medium">₹20<br/><span className="text-xs text-blue-100">FixMate</span></div>
              </div>
            </div>

            <p className="text-xs text-center text-red-500 font-bold mb-4 uppercase tracking-wider">MOCK PAYMENT DEMO ONLY</p>
            
            <button onClick={() => setPaid(true)} className="w-full px-6 py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700">
              Pay ₹420 (Demo)
            </button>
          </>
        ) : (
          <div className="text-center py-8">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">PAYMENT SUCCESSFUL</h3>
            <p className="text-gray-500 mb-8">Demo payment completed successfully.</p>
            <button onClick={handleNextStep} className="w-full px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 flex items-center justify-center gap-2">
              Continue to Review <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    );
  };

  const Step8 = () => {
    const [submitted, setSubmitted] = useState(false);
    return (
      <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-200 max-w-md mx-auto text-center">
        {!submitted ? (
          <>
            <h3 className="text-xl font-bold text-gray-900 mb-6">How was your FixMate experience?</h3>
            <div className="flex justify-center gap-2 mb-6">
              {[1, 2, 3, 4, 5].map(i => (
                <Star key={i} className="w-12 h-12 text-yellow-400 fill-current" />
              ))}
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-8 text-left text-gray-700 italic">
              "Quick, reliable and professional service."
            </div>
            <button onClick={() => setSubmitted(true)} className="w-full px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700">
              Submit Review
            </button>
          </>
        ) : (
          <div className="py-8">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">REVIEW SUBMITTED</h3>
            <p className="text-gray-500 mb-8">Thank you for helping us improve FixMate!</p>
            <button onClick={() => setStep('final')} className="w-full px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700">
              Finish Demo
            </button>
          </div>
        )}
      </div>
    );
  };

  const FinalSummary = () => (
    <div className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-gray-200">
      <div className="text-center mb-10">
        <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-sm font-bold rounded-full mb-4">DEMO COMPLETED</span>
        <h2 className="text-3xl font-extrabold text-gray-900">FIXMATE BUSINESS DEMO</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-10">
        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
          <h4 className="font-bold text-gray-900 mb-4 border-b pb-2">Transaction Summary</h4>
          <div className="space-y-2 text-sm">
            <p className="flex justify-between"><span className="text-gray-500">Customer:</span><span className="font-medium text-gray-900">Aarushi</span></p>
            <p className="flex justify-between"><span className="text-gray-500">Service:</span><span className="font-medium text-gray-900">Plumbing</span></p>
            <p className="flex justify-between"><span className="text-gray-500">Technician:</span><span className="font-medium text-gray-900">Raj Plumbing Services</span></p>
            <p className="flex justify-between mt-4 pt-2 border-t"><span className="text-gray-500">Service Cost:</span><span className="font-medium text-gray-900">₹400</span></p>
            <p className="flex justify-between"><span className="text-gray-500">FixMate Fee:</span><span className="font-medium text-blue-600">₹20</span></p>
            <p className="flex justify-between font-bold text-base mt-2 pt-2 border-t text-gray-900"><span>Total Paid:</span><span>₹420</span></p>
            <p className="flex justify-between mt-4"><span className="text-gray-500">Final Rating:</span><span className="text-amber-500 tracking-widest">⭐⭐⭐⭐⭐</span></p>
          </div>
        </div>

        <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 flex flex-col justify-center">
          <h4 className="font-bold text-blue-900 mb-6 text-center">How FixMate Creates Value</h4>
          <div className="space-y-4">
            <div>
              <span className="block font-bold text-blue-800 text-sm uppercase">Customer</span>
              <span className="text-blue-900 text-sm">Easy access to trusted local professionals.</span>
            </div>
            <div>
              <span className="block font-bold text-blue-800 text-sm uppercase">Technician</span>
              <span className="text-blue-900 text-sm">More customers and digital visibility.</span>
            </div>
            <div>
              <span className="block font-bold text-blue-800 text-sm uppercase">FixMate Platform</span>
              <span className="text-blue-900 text-sm">Commission/service fee from completed bookings.</span>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center">
        <button onClick={handleRestart} className="px-8 py-4 bg-gray-900 text-white font-bold rounded-xl hover:bg-gray-800 flex items-center justify-center gap-2 mx-auto text-lg shadow-md">
          <RefreshCw className="w-5 h-5" /> Restart Demo
        </button>
      </div>
    </div>
  );

  const renderStepContent = () => {
    if (step === 'final') return <FinalSummary />;
    switch(step) {
      case 1: return <Step1 />;
      case 2: return <Step2 />;
      case 3: return <Step3 />;
      case 4: return <Step4 />;
      case 5: return <Step5 />;
      case 6: return <Step6 />;
      case 7: return <Step7 />;
      case 8: return <Step8 />;
      default: return <Step1 />;
    }
  };

  return (
    <div className={`min-h-screen bg-gray-50 flex flex-col transition-all duration-300 ${presentationMode ? 'fixed inset-0 z-50 overflow-y-auto pb-20' : 'py-10'}`}>
      
      {/* Header Area */}
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full ${presentationMode ? 'pt-8 pb-6' : 'mb-8'}`}>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h1 className={`${presentationMode ? 'text-4xl' : 'text-3xl'} font-extrabold text-gray-900 tracking-tight`}>FixMate — Business Demo</h1>
              <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-bold rounded uppercase tracking-wider border border-blue-200">Academic Prototype</span>
            </div>
            <p className={`${presentationMode ? 'text-lg' : 'text-base'} text-gray-500`}>See how a customer finds, books, and pays for a trusted home-repair professional.</p>
          </div>
          
          <button 
            onClick={() => setPresentationMode(!presentationMode)}
            className={`flex items-center gap-2 px-4 py-2 font-semibold rounded-lg border ${presentationMode ? 'bg-red-50 text-red-700 border-red-200 hover:bg-red-100' : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'}`}
          >
            {presentationMode ? <><X className="w-4 h-4"/> Exit Presentation</> : <><Presentation className="w-4 h-4"/> Presentation Mode</>}
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-grow flex flex-col lg:flex-row gap-8 ${presentationMode ? 'scale-[1.02] transform origin-top' : ''}`}>
        
        {/* Left Column: Interactive Demo Area */}
        <div className="flex-1 flex flex-col">
          
          {/* Progress Stepper */}
          {step !== 'final' && (
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 mb-6 overflow-x-auto">
              <div className="flex items-center justify-between min-w-[600px]">
                {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
                  <div key={i} className={`flex flex-col items-center flex-1 relative ${i < 8 ? "after:content-[''] after:absolute after:top-4 after:left-1/2 after:w-full after:h-[2px] " + (step > i ? 'after:bg-blue-600' : 'after:bg-gray-200') : ''}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold z-10 ${step === i ? 'bg-blue-600 text-white ring-4 ring-blue-100' : step > i ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-400'}`}>
                      {step > i ? <CheckCircle className="w-4 h-4"/> : i}
                    </div>
                    <span className={`text-[10px] mt-2 font-medium text-center ${step === i ? 'text-blue-700' : 'text-gray-500'}`}>
                      {['Request', 'Find', 'Compare', 'Book', 'Assigned', 'Complete', 'Payment', 'Review'][i-1]}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Dynamic Content */}
          <div className="flex-grow flex flex-col justify-center">
            {renderStepContent()}
          </div>
          
        </div>

        {/* Right Column: Explainer Panel */}
        {step !== 'final' && (
          <div className="w-full lg:w-80 flex-shrink-0">
            <div className="bg-blue-900 rounded-2xl shadow-lg border border-blue-800 p-6 text-white sticky top-6">
              <h3 className="text-xs font-bold tracking-widest text-blue-300 mb-4 uppercase flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                What this demonstrates
              </h3>
              
              <div className="mb-8">
                <span className="text-blue-200 text-sm font-medium mb-1 block">Step {step} of 8</span>
                <p className={`${presentationMode ? 'text-xl' : 'text-lg'} font-medium leading-snug`}>
                  {explanations[step]}
                </p>
              </div>

              <div className="space-y-3 pt-6 border-t border-blue-800">
                <button onClick={handleNextStep} className="w-full py-3 bg-white text-blue-900 font-bold rounded-lg hover:bg-gray-100 flex items-center justify-center gap-2 shadow-sm">
                  Next Step <ArrowRight className="w-4 h-4" />
                </button>
                <button onClick={handleRestart} className="w-full py-3 bg-blue-800 text-white font-medium rounded-lg hover:bg-blue-700 flex items-center justify-center gap-2 border border-blue-700">
                  <RefreshCw className="w-4 h-4" /> Restart Demo
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default Demo;
