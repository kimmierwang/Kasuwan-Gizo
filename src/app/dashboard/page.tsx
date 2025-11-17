"use client";

import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Listing  } from "../types";
import AddListingModal from "@/components/AddListingModal";

export default function DashboardPage() {
  const router = useRouter();
  const [showAddListing, setShowAddListing] = useState(false);
  const [listings, setListings] = useState<Listing[]>([]);


  const stats = [
    { title: "Total Revenue", value: "$24,580", change: "+12.5% vs last month", color: "green" },
    { title: "Total Products", value: "1,247", change: "8.2% vs last month", color: "teal" },
    { title: "Active Products", value: "156", change: "3.1% vs last month", color: "purple" },
    { title: "New Viewers", value: "89", change: "13.3% vs last month", color: "orange" },
  ];

  const topProducts = [
    { name: "Fried Rice", price: "₦3,955", sales: 45 },
    { name: "MeatPie", price: "₦1,200", sales: 23 },
    { name: "Egusi Soup", price: "₦2,000", sales: 7 },
    { name: "Suya", price: "₦19,782", sales: 18 },
  ];

  const orders = [
    { id: "#1234", customer: "Products", product: "Grilled Suya", amount: "₦500", status: "Added", time: "2 min ago" },
    { id: "#1235", customer: "Products", product: "Pepper Soup", amount: "₦1,299", status: "Added", time: "15 min ago" },
    { id: "#1236", customer: "Products", product: "Jollof Rice", amount: "₦3,500", status: "Added", time: "1 hour ago" },
    { id: "#1237", customer: "Products", product: "Meat Pies", amount: "₦1,200", status: "Added", time: "2 hours ago" },
    { id: "#1238", customer: "Products", product: "Food Spread", amount: "₦700", status: "Added", time: "3 hours ago" },
  ];

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex flex-col gap-3 sm:gap-4">
        <div>
          <h2 className="text-lg sm:text-2xl font-semibold text-gray-900">Dashboard Overview</h2>
          <p className="text-xs sm:text-sm text-gray-500">Welcome back! Here's what's happening with your business today.</p>
        </div>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3">
          <input placeholder="Search products, orders, customers" className="text-gray-500 border rounded-lg px-3 py-2 text-xs sm:text-sm w-full sm:flex-1 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200" />
          <button
            className="px-3 sm:px-4 py-2 bg-white border rounded-lg text-gray-800 hover:bg-gray-50 active:bg-gray-200 transition-colors text-xs sm:text-sm whitespace-nowrap font-medium"
            onClick={() => setShowAddListing(true)}
          >
            + Add Product
          </button>
          <div className="hidden sm:flex w-10 h-10 bg-gray-100 rounded-full flex-col items-center justify-center text-sm text-gray-600 flex-shrink-0">ID</div>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 lg:gap-4">
        {stats.map((s) => (
          <div key={s.title} className="bg-white border rounded-lg p-3 sm:p-4 shadow-sm">
            <div className="flex items-center justify-between gap-2">
              <div className="min-w-0 flex-1">
                <div className="text-xs sm:text-sm text-gray-500 truncate">{s.title}</div>
                <div className="text-lg sm:text-xl font-semibold text-gray-800">{s.value}</div>
              </div>
              <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-lg flex items-center justify-center bg-gray-50 flex-shrink-0">
                <span className="text-xs sm:text-sm text-gray-400">💠</span>
              </div>
            </div>
            <div className="text-xs text-gray-700 mt-2">{s.change}</div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 sm:gap-4">
        <div className="lg:col-span-2 bg-white border rounded-lg p-4 sm:p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="font-semibold text-sm sm:text-base text-gray-700">Revenue Trend</div>
          </div>
          <div className="h-40 sm:h-48 rounded-lg bg-gradient-to-r from-indigo-50 to-pink-50 flex items-center justify-center text-gray-400">
            <div className="text-center px-4">
              <div className="mb-2 text-xs sm:text-sm">Revenue chart visualization</div>
              <div className="text-xs">Interactive charts coming soon</div>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-lg p-3 sm:p-4 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <div className="font-semibold text-sm sm:text-base text-gray-700">Products</div>
            <a className="text-xs sm:text-sm text-gray-500">View All</a>
          </div>
          <ul className="space-y-2 sm:space-y-3">
            {topProducts.map((p) => (
              <li key={p.name} className="flex items-center justify-between">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gray-100 rounded-md flex-shrink-0" />
                  <div>
                    <div className="font-medium text-xs sm:text-sm text-gray-700">{p.name}</div>
                    <div className="text-xs text-gray-600">{p.sales} sales</div>
                  </div>
                </div>
                <div className="font-semibold text-xs sm:text-sm text-gray-600">{p.price}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-white border rounded-lg p-3 sm:p-4 shadow-sm overflow-x-auto">
        <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
          <div className="font-semibold text-sm sm:text-base text-gray-700">Recent Products</div>
          <button className="text-gray-600 px-2 sm:px-3 py-1 border rounded text-xs sm:text-sm">View All Orders</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-xs sm:text-sm">
            <thead>
              <tr className="text-left text-gray-500">
                <th className="py-2 px-1 sm:px-2">Order ID</th>
                <th className="py-2 px-1 sm:px-2 hidden sm:table-cell">Products/Services</th>
                <th className="py-2 px-1 sm:px-2">Name</th>
                <th className="py-2 px-1 sm:px-2 hidden md:table-cell">Amount</th>
                <th className="py-2 px-1 sm:px-2">Status</th>
                <th className="py-2 px-1 sm:px-2 hidden lg:table-cell">Time</th>
                <th className="py-2 px-1 sm:px-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((o) => (
                <tr key={o.id} className="border-t">
                  <td className="py-2 sm:py-3 px-1 sm:px-2 text-blue-600 font-medium text-xs sm:text-sm">{o.id}</td>
                  <td className="py-2 sm:py-3 px-1 sm:px-2 text-gray-600 hidden sm:table-cell text-xs">{o.customer}</td>
                  <td className="py-2 sm:py-3 px-1 sm:px-2 text-gray-600 text-xs sm:text-sm">{o.product}</td>
                  <td className="py-2 sm:py-3 px-1 sm:px-2 text-gray-600 hidden md:table-cell">{o.amount}</td>
                  <td className="py-2 sm:py-3 px-1 sm:px-2">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      o.status === "completed" ? "bg-green-50 text-green-600" : o.status === "processing" ? "bg-blue-50 text-blue-600" :
                      "bg-green-300 text-gray-600"
                    }`}>{o.status}</span>
                  </td>
                  <td className="py-2 sm:py-3 px-1 sm:px-2 text-gray-500 hidden lg:table-cell text-xs">{o.time}</td>
                  <td className="py-2 sm:py-3 px-1 sm:px-2 text-gray-400">⋯</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
        <div className="bg-white border rounded-lg p-4 sm:p-6 shadow-sm text-center cursor-pointer hover:shadow-md transition-shadow" onClick={() => setShowAddListing(true)}>
          <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-gradient-to-r from-green-600 to-yellow-600 mx-auto mb-3 flex items-center justify-center text-white text-xl">+</div>
          <div className="font-semibold text-sm sm:text-base text-gray-700">Add New Product</div>
          <div className="text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4">Expand your inventory with new products</div>
          <button className="px-3 sm:px-4 py-2 bg-gradient-to-r from-green-600 to-yellow-600 hover:from-purple-700 hover:to-pink-700 text-white rounded text-xs sm:text-sm">Add Product</button>
        </div>

        <div className="bg-white border rounded-lg p-4 sm:p-6 shadow-sm text-center cursor-pointer hover:shadow-md transition-shadow" onClick={() => router.push('/campaign')}>
          <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-green-500 mx-auto mb-3 flex items-center justify-center text-white text-xl">⚡</div>
          <div className="font-semibold text-sm sm:text-base text-gray-700">Share URL Link</div>
          <div className="text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4">Copy & Share Unique URL</div>
          <button className="px-3 sm:px-4 py-2 bg-gradient-to-r from-green-600 to-yellow-500 hover:from-purple-700 hover:to-pink-700 text-white rounded text-xs sm:text-sm">Start Campaign</button>
        </div>

        <div className="bg-white border rounded-lg p-4 sm:p-6 shadow-sm text-center cursor-pointer hover:shadow-md transition-shadow">
          <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-orange-500 mx-auto mb-3 flex items-center justify-center text-white text-xl">📊</div>
          <div className="font-semibold text-sm sm:text-base text-gray-700">View Analytics</div>
          <div className="text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4">Deep dive into your business metrics</div>
          <button className="px-3 sm:px-4 py-2 bg-gradient-to-r from-green-600 to-yellow-500 hover:from-purple-700 hover:to-pink-700 text-white rounded text-xs sm:text-sm">View Reports</button>
        </div>
      </div>
       <AddListingModal
        isOpen={showAddListing}
        onClose={() => setShowAddListing(false)}
            onAdded={(newItem: Listing) => {
        setShowAddListing(false);
        setListings((prev) => [...prev, newItem]);
      }}

      />
    </div>
  );
}
