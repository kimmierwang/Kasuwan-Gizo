import React, { JSX } from "react";

type Customer = {
  id: string;
  name: string;
  email: string;
  city: string;
  status: string;
};

const customers: Customer[] = [
  { id: "c1", name: "Sarah Johnson", email: "sarah.j@email.com", city: "View...", status: "Active" },
  { id: "c2", name: "Michael Chen", email: "michael.chen@email.com", city: "View...", status: "Active" },
  { id: "c3", name: "Emma Williams", email: "emma.w@email.com", city: "View...", status: "Active" },
  { id: "c4", name: "David Rodriguez", email: "david.r@email.com", city: "View...", status: "Inactive" },
  { id: "c5", name: "Lisa Thompson", email: "lisa.t@email.com", city: "View...", status: "Active" },
  { id: "c6", name: "James Wilson", email: "james.w@email.com", city: "View...", status: "Active" },
  { id: "c7", name: "Sarah Johnson", email: "sarah.j@email.com", city: "View...", status: "Active" },
  { id: "c8", name: "Michael Chen", email: "michael.chen@email.com", city: "View...", status: "Active" },
  { id: "c9", name: "Emma Williams", email: "emma.w@email.com", city: "View...", status: "Active" },
];

const colors: string[] = [
  "bg-blue-500",
  "bg-green-500",
  "bg-purple-500",
  "bg-pink-500",
  "bg-yellow-500",
  "bg-red-500",
  "bg-indigo-500",
];

export default function CustomersPage(): JSX.Element {
  const getColor = (name: string): string => {
    const index = name.charCodeAt(0) % colors.length;
    return colors[index];
  };

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex flex-col gap-3 sm:gap-4">
        <div>
          <h1 className="text-lg sm:text-2xl font-semibold text-gray-800">Customers/Viewers</h1>
          <p className="text-xs sm:text-sm text-gray-500">
            Manage your customer relationships and communications
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4">
        <div className="bg-white border rounded-lg p-3 sm:p-4 shadow-sm">
          <div className="text-xs sm:text-sm text-gray-500 truncate">Total Customers</div>
          <div className="text-lg sm:text-2xl font-semibold text-gray-700">{customers.length}</div>
        </div>
        <div className="bg-white border rounded-lg p-3 sm:p-4 shadow-sm">
          <div className="text-xs sm:text-sm text-gray-500 truncate">Active Customers</div>
          <div className="text-lg sm:text-2xl font-semibold text-gray-700">
            {customers.filter((c) => c.status === "Active").length}
          </div>
        </div>
        <div className="bg-white border rounded-lg p-3 sm:p-4 shadow-sm">
          <div className="text-xs sm:text-sm text-gray-500 truncate">New This Month</div>
          <div className="text-lg sm:text-2xl font-semibold text-gray-700">0</div>
        </div>
      </div>

      <div className="mt-2 sm:mt-4">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3 mb-4">
          <input
            placeholder="Search customers..."
            className="flex-1 border rounded-lg px-3 sm:px-4 py-2 text-xs sm:text-sm text-gray-600 placeholder-gray-400"
          />
          <select className="border rounded-lg px-3 sm:px-4 py-2 text-xs sm:text-sm text-gray-600 bg-white hover:border-gray-300 transition">
            <option>All Status</option>
            <option>Active</option>
            <option>Inactive</option>
          </select>
          <button className="px-3 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded text-xs sm:text-sm font-medium transition whitespace-nowrap">
            Filter
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {customers.map((c) => (
            <div key={c.id} className="bg-white border rounded-lg p-3 sm:p-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
                  <div
                    className={`w-9 sm:w-10 h-9 sm:h-10 flex items-center justify-center rounded-full text-white font-semibold flex-shrink-0 ${getColor(
                      c.name
                    )}`}
                  >
                    {c.name.charAt(0).toUpperCase()}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-medium text-xs sm:text-sm text-gray-700 truncate">{c.name}</div>
                    <div className="text-xs text-gray-500 truncate">{c.email}</div>
                    <div className="text-xs text-gray-400 truncate">{c.city}</div>
                  </div>
                </div>
              </div>

              <div className="mt-3 sm:mt-4 flex items-center gap-2 flex-wrap">
                <button className="px-3 py-2 bg-blue-50 text-blue-600 hover:bg-blue-100 rounded text-xs sm:text-sm font-medium transition flex-1">
                  Message
                </button>
                <button className="px-3 py-2 border rounded text-xs sm:text-sm text-gray-600 hover:bg-gray-50 font-medium transition flex-1">
                  Viewed
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
