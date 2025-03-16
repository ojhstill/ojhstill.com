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
        {/* <div
          className="
          absolute inset-0 bg-background
          z-0
          [--s:20px]
          [--dot-size:1px]
          [--dot-colour:theme('colors.zinc.300')]
          dark:[--dot-colour:theme('colors.zinc.700')]
          [--g:radial-gradient(var(--dot-size)_at_25%_50%,var(--dot-colour)_96%,transparent)]
          [background-image:var(--g),var(--g)]
          [background-position:0_0,var(--s)_calc(var(--s)/2)]
          [background-size:calc(2*var(--s))_var(--s)]
          [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]
        "
        /> */}

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
