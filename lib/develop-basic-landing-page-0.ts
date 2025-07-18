// app/page.tsx
import React from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <Hero />
    </div>
  );
};

export default HomePage;