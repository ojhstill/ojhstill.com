'use client'

import { useState } from 'react';
import { LinkedInLogoIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import MobileMenu from '@/components/MobileMenu';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Timeline from '@/components/Timeline';
import Home from '@/components/Home';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Timeline', href: '/timeline' },
  { name: 'GitHub', icon: <GitHubLogoIcon aria-hidden="true" />, href: 'https://github.com/ojhstill' },
  { name: 'LinkedIn', icon: <LinkedInLogoIcon aria-hidden="true" />, href: 'https://www.linkedin.com/in/ojhstill' },
]

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <Router>
      <div className="relative h-full w-full pb-20">
        <div className="
          absolute inset-0 bg-background
          [--s:20px]
          [--dot-size:1px]
          [--dot-colour:theme('colors.zinc.300')]
          dark:[--dot-colour:theme('colors.zinc.700')]
          [--g:radial-gradient(var(--dot-size)_at_25%_50%,var(--dot-colour)_96%,transparent)]
          [background-image:var(--g),var(--g)]
          [background-position:0_0,var(--s)_calc(var(--s)/2)]
          [background-size:calc(2*var(--s))_var(--s)]
          [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]
        " />

        <Header navigation={navigation} setMobileMenuOpen={setMobileMenuOpen} />
        <MobileMenu navigation={navigation} mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/timeline" element={<Timeline />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  )
}
