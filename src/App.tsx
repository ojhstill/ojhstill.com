'use client';

import { LinkedInLogoIcon, GitHubLogoIcon } from '@radix-ui/react-icons';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Journey from '@/pages/Journey';
import Home from '@/pages/Home';
import Contact from '@/pages/Contact';
import NotFound from '@/pages/NotFound';

export default function App() {
  const navigation = [
    { name: 'Home', to: '/' },
    { name: 'Career Journey', to: '/journey' },
    {
      name: 'GitHub',
      icon: <GitHubLogoIcon aria-hidden="true" />,
      to: 'https://github.com/ojhstill',
      target: '_blank',
    },
    {
      name: 'LinkedIn',
      icon: <LinkedInLogoIcon aria-hidden="true" />,
      to: 'https://linkedin.com/in/ojhstill',
      target: '_blank',
    },
  ];

  return (
    <Router>
      <div className="relative h-full w-full">
        <Header navigation={navigation} />

        <main className="relative isolate px-6 py-18">
          <Routes>
            <Route index element={<Home />} />
            <Route path="/journey" element={<Journey />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}
