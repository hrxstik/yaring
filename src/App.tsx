import { Routes, Route } from 'react-router';

import MainLayout from './MainLayout';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import LivingRules from './pages/LivingRules';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Login from './pages/Login';
import Booking from './pages/Booking';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="contact" element={<Contact />} />
          <Route path="living-rules" element={<LivingRules />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="login" element={<Login />} />
          <Route path="booking" element={<Booking />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
