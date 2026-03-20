import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GrainOverlay from '@/components/GrainOverlay';
import Home from '@/pages/Home';
import Journey from '@/pages/Journey';
import About from '@/pages/About';
import Contact from '@/pages/Contact';
import NotFound from '@/pages/NotFound';

function AnimatedRoutes() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/journey" element={<Journey />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default function App() {
  return (
    <Router>
      <div className="relative min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <AnimatedRoutes />
        </main>
        <Footer />
        <GrainOverlay />
      </div>
    </Router>
  );
}
