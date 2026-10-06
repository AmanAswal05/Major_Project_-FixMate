import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import ProfessionalListing from './pages/ProfessionalListing';
import ProfessionalProfile from './pages/ProfessionalProfile';
import Booking from './pages/Booking';
import BookingConfirmation from './pages/BookingConfirmation';
import MyBookings from './pages/MyBookings';
import Payment from './pages/Payment';
import Rating from './pages/Rating';
import ProviderRegistration from './pages/ProviderRegistration';
import About from './pages/About';
import Demo from './pages/Demo';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:serviceId" element={<ProfessionalListing />} />
            <Route path="/professional/:professionalId" element={<ProfessionalProfile />} />
            <Route path="/book/:professionalId" element={<Booking />} />
            <Route path="/booking-confirmation" element={<BookingConfirmation />} />
            <Route path="/my-bookings" element={<MyBookings />} />
            <Route path="/payment/:bookingId" element={<Payment />} />
            <Route path="/rating/:professionalId" element={<Rating />} />
            <Route path="/become-provider" element={<ProviderRegistration />} />
            <Route path="/about" element={<About />} />
            <Route path="/demo" element={<Demo />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
