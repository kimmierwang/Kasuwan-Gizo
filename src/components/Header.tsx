"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Header() {
  const [forceFullNav, setForceFullNav] = useState(false);

  useEffect(() => {
    try {
      const flag = (window as any).__RSC_OK === false || localStorage.getItem('forceFullNav') === '1';
      setForceFullNav(Boolean(flag));
    } catch (e) {
      setForceFullNav(false);
    }
  }, []);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 md:w-10 h-8 md:h-10 rounded-lg flex items-center justify-center bg-white">
            <img
              src="/images/logos.png"
              alt="Logo"
              className="w-full h-full object-contain rounded-lg"
            />
          </div>

          <span className="text-lg md:text-xl font-bold text-gray-900">Kasuwan Gizo</span>
        </div>
        <div className="flex items-center gap-2 md:gap-3">
          {forceFullNav ? (
            <>
              <a href="/marketplace" className="px-4 md:px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold text-sm md:text-base hover:bg-blue-700 transition">
                Login
              </a>
              <a href="/signup" className="px-4 md:px-6 py-2 bg-teal-600 text-white rounded-lg font-semibold text-sm md:text-base hover:bg-teal-700 transition">
                Get Started
              </a>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="px-3 md:px-6 py-2 text-teal-600 border-2 border-teal-600 rounded-lg font-semibold text-sm md:text-base hover:bg-teal-50 transition"
              >
                Login
              </Link>
              <Link
                href="/signup"
                className="px-3 md:px-6 py-2 bg-teal-600 text-white rounded-lg font-semibold text-sm md:text-base hover:bg-teal-700 transition"
              >
                Get Started
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
