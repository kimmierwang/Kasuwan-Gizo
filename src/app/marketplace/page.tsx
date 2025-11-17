import Image from 'next/image';
import Link from 'next/link';
import { ImGit } from 'react-icons/im';

const products = [
  {
    id: 1,
    title: 'Ankara Fashion Collection',
    business: 'Amara\'s Fashion Hub',
    location: 'Lagos, Nigeria',
    price: '₦15,000',
    image: 'images/material.png',
    badge: '-25%',
    rating: 4.9,
    reviews: 124,
  },
  {
    id: 2,
    title: 'Organic Honey Collection',
    business: 'Sweet Nature Kenya',
    location: 'Nairobi, Kenya',
    price: 'KSh 800',
    image: 'images/img1.png',
    badge: null,
    rating: 4.8,
    reviews: 89,
  },
  {
    id: 3,
    title: 'Handwoven Baskets Set',
    business: 'Craft Masters Ghana',
    location: 'Accra, Ghana',
    price: 'GHC 120',
    image: 'images/img3.png',
    badge: '-20%',
    rating: 4.7,
    reviews: 67,
  },
  {
    id: 4,
    title: 'Mobile Repair Services',
    business: 'Tech Solutions Hub',
    location: 'Cape Town, South Africa',
    price: 'R 250',
    image: 'images/img5.png',
    badge: null,
    rating: 4.9,
    reviews: 156,
  },
  {
    id: 5,
    title: 'Shea Butter Skincare',
    business: 'Natural Glow Beauty',
    location: 'Addis Ababa, Ethiopia',
    price: 'ETB 450',
    image: 'images/img3.png',
    badge: null,
    rating: 4.8,
    reviews: 203,
  },
  {
    id: 6,
    title: 'Coffee Bean Premium',
    business: 'Mountain Coffee Co',
    location: 'Addis Ababa, Ethiopia',
    price: 'ETB 320',
    image: 'images/img6.png',
    badge: null,
    rating: 4.9,
    reviews: 89,
  },
  {
    id: 7,
    title: 'Traditional Jewelry Set',
    business: 'Heritage Jewelry',
    location: 'Lagos, Nigeria',
    price: '₦8,500',
    image: 'images/img4.png',
    badge: '-29%',
    rating: 4.6,
    reviews: 94,
  },
  {
    id: 8,
    title: 'Web Design Package',
    business: 'Digital Creators',
    location: 'Nairobi, Kenya',
    price: 'KSh 15,000',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=60',
    badge: null,
    rating: 4.9,
    reviews: 178,
  },
    {
    id: 9,
    title: 'Ankara Fashion Collection',
    business: 'Amara\'s Fashion Hub',
    location: 'Lagos, Nigeria',
    price: '₦15,000',
    image: 'images/material.png',
    badge: '-25%',
    rating: 4.9,
    reviews: 124,
  },
  {
    id: 10,
    title: 'Organic Honey Collection',
    business: 'Sweet Nature Kenya',
    location: 'Nairobi, Kenya',
    price: 'KSh 800',
    image: 'images/img1.png',
    badge: null,
    rating: 4.8,
    reviews: 89,
  },
  {
    id: 11,
    title: 'Handwoven Baskets Set',
    business: 'Craft Masters Ghana',
    location: 'Accra, Ghana',
    price: 'GHC 120',
    image: 'images/img3.png',
    badge: '-20%',
    rating: 4.7,
    reviews: 67,
  },
  {
    id: 12,
    title: 'Mobile Repair Services',
    business: 'Tech Solutions Hub',
    location: 'Cape Town, South Africa',
    price: 'R 250',
    image: 'images/img5.png',
    badge: null,
    rating: 4.9,
    reviews: 156,
  },
  {
    id: 13,
    title: 'Shea Butter Skincare',
    business: 'Natural Glow Beauty',
    location: 'Addis Ababa, Ethiopia',
    price: 'ETB 450',
    image: 'images/img3.png',
    badge: null,
    rating: 4.8,
    reviews: 203,
  },
  {
    id: 14,
    title: 'Coffee Bean Premium',
    business: 'Mountain Coffee Co',
    location: 'Addis Ababa, Ethiopia',
    price: 'ETB 320',
    image: 'images/img6.png',
    badge: null,
    rating: 4.9,
    reviews: 89,
  },
  {
    id: 15,
    title: 'Traditional Jewelry Set',
    business: 'Heritage Jewelry',
    location: 'Lagos, Nigeria',
    price: '₦8,500',
    image: 'images/img4.png',
    badge: '-29%',
    rating: 4.6,
    reviews: 94,
  },
  {
    id: 16,
    title: 'Web Design Package',
    business: 'Digital Creators',
    location: 'Nairobi, Kenya',
    price: 'KSh 15,000',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=60',
    badge: null,
    rating: 4.9,
    reviews: 178,
  },
    {
    id: 17,
    title: 'Ankara Fashion Collection',
    business: 'Amara\'s Fashion Hub',
    location: 'Lagos, Nigeria',
    price: '₦15,000',
    image: 'images/material.png',
    badge: '-25%',
    rating: 4.9,
    reviews: 124,
  },
  {
    id: 18,
    title: 'Organic Honey Collection',
    business: 'Sweet Nature Kenya',
    location: 'Nairobi, Kenya',
    price: 'KSh 800',
    image: 'images/img1.png',
    badge: null,
    rating: 4.8,
    reviews: 89,
  },
  {
    id: 19,
    title: 'Handwoven Baskets Set',
    business: 'Craft Masters Ghana',
    location: 'Accra, Ghana',
    price: 'GHC 120',
    image: 'images/img3.png',
    badge: '-20%',
    rating: 4.7,
    reviews: 67,
  },
  {
    id: 20,
    title: 'Mobile Repair Services',
    business: 'Tech Solutions Hub',
    location: 'Cape Town, South Africa',
    price: 'R 250',
    image: 'images/img5.png',
    badge: null,
    rating: 4.9,
    reviews: 156,
  },
  {
    id: 21,
    title: 'Shea Butter Skincare',
    business: 'Natural Glow Beauty',
    location: 'Addis Ababa, Ethiopia',
    price: 'ETB 450',
    image: 'images/img3.png',
    badge: null,
    rating: 4.8,
    reviews: 203,
  },
  {
    id: 22,
    title: 'Coffee Bean Premium',
    business: 'Mountain Coffee Co',
    location: 'Addis Ababa, Ethiopia',
    price: 'ETB 320',
    image: 'images/img6.png',
    badge: null,
    rating: 4.9,
    reviews: 89,
  },
  {
    id: 23,
    title: 'Traditional Jewelry Set',
    business: 'Heritage Jewelry',
    location: 'Lagos, Nigeria',
    price: '₦8,500',
    image: 'images/img4.png',
    badge: '-29%',
    rating: 4.6,
    reviews: 94,
  },
  {
    id: 24,
    title: 'Web Design Package',
    business: 'Digital Creators',
    location: 'Nairobi, Kenya',
    price: 'KSh 15,000',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=60',
    badge: null,
    rating: 4.9,
    reviews: 178,
  },
    {
    id: 25,
    title: 'Ankara Fashion Collection',
    business: 'Amara\'s Fashion Hub',
    location: 'Lagos, Nigeria',
    price: '₦15,000',
    image: 'images/material.png',
    badge: '-25%',
    rating: 4.9,
    reviews: 124,
  },
  {
    id: 26,
    title: 'Organic Honey Collection',
    business: 'Sweet Nature Kenya',
    location: 'Nairobi, Kenya',
    price: 'KSh 800',
    image: 'images/img1.png',
    badge: null,
    rating: 4.8,
    reviews: 89,
  },
  {
    id: 27,
    title: 'Handwoven Baskets Set',
    business: 'Craft Masters Ghana',
    location: 'Accra, Ghana',
    price: 'GHC 120',
    image: 'images/img3.png',
    badge: '-20%',
    rating: 4.7,
    reviews: 67,
  },
  {
    id: 28,
    title: 'Mobile Repair Services',
    business: 'Tech Solutions Hub',
    location: 'Cape Town, South Africa',
    price: 'R 250',
    image: 'images/img5.png',
    badge: null,
    rating: 4.9,
    reviews: 156,
  },
  {
    id: 29,
    title: 'Shea Butter Skincare',
    business: 'Natural Glow Beauty',
    location: 'Addis Ababa, Ethiopia',
    price: 'ETB 450',
    image: 'images/img3.png',
    badge: null,
    rating: 4.8,
    reviews: 203,
  },
  {
    id: 30,
    title: 'Coffee Bean Premium',
    business: 'Mountain Coffee Co',
    location: 'Addis Ababa, Ethiopia',
    price: 'ETB 320',
    image: 'images/img6.png',
    badge: null,
    rating: 4.9,
    reviews: 89,
  },
  {
    id: 31,
    title: 'Traditional Jewelry Set',
    business: 'Heritage Jewelry',
    location: 'Lagos, Nigeria',
    price: '₦8,500',
    image: 'images/img4.png',
    badge: '-29%',
    rating: 4.6,
    reviews: 94,
  },
  {
    id: 32,
    title: 'Web Design Package',
    business: 'Digital Creators',
    location: 'Nairobi, Kenya',
    price: 'KSh 15,000',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=60',
    badge: null,
    rating: 4.9,
    reviews: 178,
  },
    {
    id: 33,
    title: 'Ankara Fashion Collection',
    business: 'Amara\'s Fashion Hub',
    location: 'Lagos, Nigeria',
    price: '₦15,000',
    image: 'images/material.png',
    badge: '-25%',
    rating: 4.9,
    reviews: 124,
  },
  {
    id: 34,
    title: 'Organic Honey Collection',
    business: 'Sweet Nature Kenya',
    location: 'Nairobi, Kenya',
    price: 'KSh 800',
    image: 'images/img1.png',
    badge: null,
    rating: 4.8,
    reviews: 89,
  },
  {
    id: 35,
    title: 'Handwoven Baskets Set',
    business: 'Craft Masters Ghana',
    location: 'Accra, Ghana',
    price: 'GHC 120',
    image: 'images/img3.png',
    badge: '-20%',
    rating: 4.7,
    reviews: 67,
  },
  {
    id: 36,
    title: 'Mobile Repair Services',
    business: 'Tech Solutions Hub',
    location: 'Cape Town, South Africa',
    price: 'R 250',
    image: 'images/img5.png',
    badge: null,
    rating: 4.9,
    reviews: 156,
  },
  {
    id: 37,
    title: 'Shea Butter Skincare',
    business: 'Natural Glow Beauty',
    location: 'Addis Ababa, Ethiopia',
    price: 'ETB 450',
    image: 'images/img3.png',
    badge: null,
    rating: 4.8,
    reviews: 203,
  },
  {
    id: 38,
    title: 'Coffee Bean Premium',
    business: 'Mountain Coffee Co',
    location: 'Addis Ababa, Ethiopia',
    price: 'ETB 320',
    image: 'images/img6.png',
    badge: null,
    rating: 4.9,
    reviews: 89,
  },
];

const categories = ['All Categories', 'Fashion & Accessories', 'Food & Beverages', 'Technology', 'Health & Beauty', 'Arts & Crafts', 'Services'];

export default function MarketplacePage() {
  return (
    <div className="w-full bg-white">
      <section className="bg-gradient-to-r from-emerald-500 to-emerald-900 text-white py-8 sm:py-12 lg:py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-2 sm:mb-3 text-gray-200 leading-tight">Discover Amazing Products</h1>
            <p className="text-xs sm:text-sm lg:text-xl text-white/90 mb-4 sm:mb-8 leading-relaxed">Explore thousands of products from verified African businesses across different categories and locations</p>
            <div className="max-w-2xl mx-auto">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center bg-white rounded-lg overflow-hidden shadow-sm gap-0">
                <input className="flex-1 px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-base text-gray-700 placeholder-gray-500" placeholder="Search products, businesses, or categories..." />
                <button className="bg-emerald-600 text-white px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-base font-medium whitespace-nowrap hover:bg-emerald-700 transition">Search</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 -mt-4 sm:-mt-6">
        <div className="bg-white rounded-lg p-3 sm:p-4 shadow-sm overflow-x-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
            <div className="flex-1 min-w-0">
              <div className="flex gap-2 items-center overflow-x-auto pb-2 sm:pb-0 sm:flex-wrap">
                {categories.map((c, i) => (
                  <button key={c} className={`text-xs sm:text-sm whitespace-nowrap ${i===0? 'bg-emerald-600 text-white': 'bg-gray-100 text-gray-700'} px-2 sm:px-3 py-1 sm:py-2 rounded-full transition hover:shadow-sm flex-shrink-0`}>{c}</button>
                ))}
              </div>
            </div>
            <div className="w-full sm:w-auto flex-shrink-0">
              <label className="sr-only">Location</label>
              <select className="border border-gray-200 rounded-lg px-2 sm:px-3 py-1 sm:py-2 text-xs sm:text-sm w-full sm:w-auto">
                <option>All Locations</option>
                <option>Nigeria</option>
                <option>Kenya</option>
                <option>Ghana</option>
                <option>South Africa</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-10">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 mb-4 sm:mb-6">
          <h2 className="text-base sm:text-lg font-semibold text-gray-900">8 Products Found</h2>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3">
            <label className="text-xs sm:text-sm text-gray-600 hidden sm:block">Sort by:</label>
            <select className="border border-gray-200 rounded-lg px-2 sm:px-3 py-2 text-xs sm:text-sm bg-white hover:border-gray-300 transition">
              <option>Most Popular</option>
              <option>Newest</option>
              <option>Price: Low to High</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
          {products.map((p) => (
            <article key={p.id} className="bg-white border border-gray-100 rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="relative h-32 sm:h-40 lg:h-44 bg-gray-50">
                {p.badge && <div className="absolute left-2 sm:left-3 top-2 sm:top-3 bg-red-500 text-white text-xs px-2 py-1 rounded-md font-medium">{p.badge}</div>}
                <img src={p.image} alt={p.title}  className="object-cover w-full h-full" />
              </div>
              <div className="p-3 sm:p-4">
                <div className="flex items-center gap-2 sm:gap-3 mb-2 min-w-0">
                  <div className="w-7 sm:w-8 h-7 sm:h-8 bg-emerald-50 text-emerald-700 rounded-full flex items-center justify-center text-xs sm:text-sm font-semibold flex-shrink-0">{p.business.split(' ').map(s=>s[0]).join('').slice(0,2)}</div>
                  <div className="min-w-0 flex-1">
                    <div className="text-xs sm:text-sm text-gray-600 truncate">{p.business}</div>
                    <div className="text-xs text-gray-400 truncate">{p.location}</div>
                  </div>
                </div>
                <h3 className="font-semibold text-sm sm:text-base text-gray-900 mb-2 line-clamp-2">{p.title}</h3>
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div className="min-w-0">
                    <div className="text-xs sm:text-sm text-amber-500">{'★'.repeat(Math.round(p.rating))}</div>
                    <div className="text-xs text-gray-500">{p.rating} ({p.reviews})</div>
                  </div>
                  <div className="text-base sm:text-lg font-bold text-gray-900 flex-shrink-0">{p.price}</div>
                </div>
                <div className="flex gap-2">
                  <Link href="#" className="flex-1 text-center bg-emerald-600 text-white hover:bg-emerald-700 rounded-md px-2 sm:px-3 py-2 text-xs sm:text-sm font-medium transition">Contact</Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
