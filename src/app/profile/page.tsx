import React from "react";

export default function ProfilePage() {
  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex flex-col gap-3 sm:gap-4">
        <div>
          <h1 className="text-lg sm:text-2xl font-semibold text-gray-700">Business Profile</h1>
          <p className="text-xs sm:text-sm text-gray-500">Manage your business information and public profile</p>
        </div>
      </div>
      <div className="bg-white border rounded-lg overflow-hidden">
        <div className="h-24 sm:h-36 lg:h-44 bg-gray-100 relative">
          <img
            src="/images/bg-image.jpg"
            alt="cover"
            className="w-full h-full object-cover"
          />
          <div className="absolute -bottom-3 sm:-bottom-5 left-3 sm:left-6 flex items-center gap-2 sm:gap-4 flex-wrap">
            <div className="w-14 sm:w-20 h-14 sm:h-20 rounded-lg bg-white p-1 shadow-md flex items-center justify-center flex-shrink-0">
              <img src="/images/apple.png" alt="logo" className="w-full h-full object-contain" />
            </div>
            <div className="bg-white rounded-full px-2 sm:px-3 py-1 text-xs sm:text-sm text-green-600 font-medium shadow whitespace-nowrap">Verified</div>
          </div>
        </div>

        <div className="p-3 sm:p-6 pt-6 sm:pt-10">
          <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">We specialize in premium electronics, fashion, and lifestyle products. Our mission is to provide high-quality products with exceptional customer service.</p>
        </div>
      </div>

      <div className="bg-white border rounded-lg p-4 sm:p-6">
        <div className="flex items-center gap-2 sm:gap-3 mb-4 flex-wrap">
          <button className="px-3 py-1 rounded-md bg-indigo-50 text-indigo-700 text-xs sm:text-sm font-medium hover:bg-indigo-100 transition">General Info</button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-6">
          <div className="space-y-4">
            <label className="block text-xs sm:text-sm text-gray-600">Business Name</label>
            <input className="w-full border rounded-lg px-3 py-2 text-xs sm:text-sm bg-gray-50 text-gray-400" defaultValue="Gizo Premium Store" />

            <label className="block text-xs sm:text-sm text-gray-600">Category</label>
            <input className="w-full border rounded-lg px-3 py-2 text-xs sm:text-sm bg-gray-50 text-gray-500" defaultValue="Electronics & Fashion" />

            <label className="block text-xs sm:text-sm text-gray-600">Business Description</label>
            <textarea className="w-full border rounded-lg px-3 py-2 text-xs sm:text-sm bg-gray-50 h-24 sm:h-28 text-gray-500" defaultValue={`We specialize in premium electronics, fashion, and lifestyle products. Our mission is to provide high-quality products with exceptional customer service.`} />

            <label className="block text-xs sm:text-sm text-gray-600">Website</label>
            <input className="w-full border rounded-lg px-3 py-2 text-xs sm:text-sm bg-gray-50 text-gray-500" defaultValue="www.gizopremium.com" />
          </div>

          <div className="space-y-4">
            <div className="bg-gray-50 border rounded-lg p-4">
              <div className="text-xs sm:text-sm text-gray-600">Verification Status</div>
              <div className="mt-3 bg-green-50 border border-green-100 text-green-700 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm">Business Verified — Your business profile has been verified and approved</div>
            </div>

            <div className="bg-gray-50 border rounded-lg p-4">
              <div className="text-xs sm:text-sm text-gray-600">Contact Email</div>
              <div className="mt-2 text-xs sm:text-sm text-gray-800 truncate">contact@gizopremium.com</div>

              <div className="mt-4 text-xs sm:text-sm text-gray-600">Phone</div>
              <div className="mt-2 text-xs sm:text-sm text-gray-800">+234 800 000 0000</div>

              <div className="mt-4 text-xs sm:text-sm text-gray-600">Address</div>
              <div className="mt-2 text-xs sm:text-sm text-gray-800">12 Market Street, Lagos, Nigeria</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
