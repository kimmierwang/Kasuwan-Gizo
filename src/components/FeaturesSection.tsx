'use client';

import { useEffect, useRef, useState } from 'react';

export default function FeaturesSection() {
  const features = [
    {
      icon: '📋',
      title: 'Unique Business Page',
      description:
        'Get your personalized business page with custom link to showcase products, services, and brand story',
      bgColor: 'bg-emerald-50',
      iconBgColor: 'bg-emerald-100',
    },
    {
      icon: '🔍',
      title: 'Searchable Marketplace',
      description:
        'Be discovered by customers searching by location, category, pricing, and business type',
      bgColor: 'bg-blue-50',
      iconBgColor: 'bg-blue-100',
    },
    {
      icon: '📧',
      title: 'Training & Capacity Building',
      description:
        'Access industry-specific training, business strategies, and educational resources',
      bgColor: 'bg-purple-50',
      iconBgColor: 'bg-purple-100',
    },
    {
      icon: '👥',
      title: 'Stakeholder Network',
      description:
        'Connect with government agencies, financial institutions, and industry partners',
      bgColor: 'bg-orange-50',
      iconBgColor: 'bg-orange-100',
    },
    {
      icon: '📱',
      title: 'Social Media Integration',
      description:
        'Link your WhatsApp, Facebook, Instagram, and other social platforms seamlessly',
      bgColor: 'bg-pink-50',
      iconBgColor: 'bg-pink-100',
    },
    {
      icon: '🔒',
      title: 'Secure & Compliant',
      description:
        'Your business data is protected with enterprise-grade security and privacy compliance',
      bgColor: 'bg-teal-50',
      iconBgColor: 'bg-teal-100',
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
    <section className="py-12 sm:py-20 px-4 sm:px-6 bg-gray-50" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Everything Your Business Needs
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto px-2">
            From business profile creation to stakeholder connections, we provide comprehensive tools for MSME growth
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`${feature.bgColor} rounded-xl sm:rounded-2xl p-5 sm:p-8 transform transition-all duration-700 hover:shadow-lg hover:scale-105 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 75}ms` : '0ms',
              }}
            >
              <div
                className={`${feature.iconBgColor} w-12 sm:w-14 h-12 sm:h-14 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 transition-transform duration-300`}
              >
                <span className="text-xl sm:text-2xl">{feature.icon}</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
