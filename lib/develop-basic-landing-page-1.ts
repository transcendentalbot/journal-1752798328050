// components/Navigation.tsx
import React from 'react';
import Link from 'next/link';

const Navigation = () => {
  return (
    <nav className="bg-gray-800 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-white font-bold text-xl">
          Journal
        </Link>
        <div>
          <Link href="/about" className="text-white mr-4">
            About
          </Link>
          <Link href="/contact" className="text-white">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;