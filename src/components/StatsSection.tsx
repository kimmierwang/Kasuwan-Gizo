'use client';

import { useEffect, useRef, useState } from 'react';

export default function StatsSection() {
  const stats = [
    {
      icon: '📦',
      number: '15,000+',
      label: 'Active Businesses',
    },
    {
      icon: '💰',
      number: 'N2.5B+',
      label: 'Revenue Generated',
    },
    {
      icon: '📚',
      number: '50+',
      label: 'Training Programs',
    },
    {
      icon: '🏆',
      number: '98%',
      label: 'Success Rate',
    },
  ];

  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`flex flex-col items-center text-center transform transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 100}ms` : '0ms',
              }}
            >
              <div className="w-12 sm:w-16 h-12 sm:h-16 bg-teal-600 rounded-full flex items-center justify-center mb-2 sm:mb-4 hover:scale-110 transition-transform duration-300">
                <span className="text-lg sm:text-2xl">{stat.icon}</span>
              </div>
              <div className="text-xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-1 sm:mb-2">
                {stat.number}
              </div>
              <div className="text-xs sm:text-sm lg:text-base text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
