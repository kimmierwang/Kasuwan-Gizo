import React from "react";

const transactions = [
  { id: "TX-001", title: "Sale - Premium Wireless Headphones", status: "Completed", amount: "+$299.99", date: "1/15/2024", type: "credit" },
  { id: "TX-002", title: "Withdrawal to Bank Account", status: "Completed", amount: "-$500.00", date: "1/14/2024", type: "debit" },
  { id: "TX-003", title: "Sale - Organic Cotton T-Shirt (3x)", status: "Completed", amount: "+$89.97", date: "1/14/2024", type: "credit" },
];

export default function WalletPage() {
  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
        <div className="flex-1">
          <h1 className="text-lg sm:text-2xl font-semibold">Wallet & Finance</h1>
          <p className="text-xs sm:text-sm text-gray-500">Manage your earnings and financial transactions</p>
        </div>
        <div className="flex-shrink-0">
          <button className="px-4 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition text-xs sm:text-sm whitespace-nowrap font-medium">Withdraw Funds</button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
        <div className="bg-white border rounded-lg p-3 sm:p-4 shadow-sm">
          <div className="text-xs sm:text-sm text-gray-500">Available Balance</div>
          <div className="text-xl sm:text-2xl font-semibold">$1247.83</div>
          <div className="text-xs text-gray-400">Ready for withdrawal</div>
        </div>

        <div className="bg-white border rounded-lg p-3 sm:p-4 shadow-sm">
          <div className="text-xs sm:text-sm text-gray-500">Pending Balance</div>
          <div className="text-xl sm:text-2xl font-semibold">$199.97</div>
          <div className="text-xs text-gray-400">Processing payments</div>
        </div>

        <div className="bg-white border rounded-lg p-3 sm:p-4 shadow-sm">
          <div className="text-xs sm:text-sm text-gray-500">Total Earnings</div>
          <div className="text-xl sm:text-2xl font-semibold">$389.96</div>
          <div className="text-xs text-gray-400">All time revenue</div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        <ActionCard title="Withdraw" subtitle="Transfer to bank" />
        <ActionCard title="Statements" subtitle="Download reports" />
        <ActionCard title="Settings" subtitle="Payment methods" />
        <ActionCard title="Support" subtitle="Get help" />
      </div>
      <div className="bg-white border rounded-lg p-3 sm:p-4 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 mb-4">
          <div className="font-semibold text-sm sm:text-base text-gray-900">Transaction History</div>
          <div className="flex items-center gap-2 flex-wrap w-full sm:w-auto">
            <select className="border rounded-lg px-2 sm:px-3 py-1 sm:py-2 text-xs sm:text-sm bg-white hover:border-gray-300 transition flex-1 sm:flex-initial">
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>Last 90 days</option>
            </select>
            <button className="px-3 py-1 sm:py-2 border rounded text-xs sm:text-sm hover:bg-gray-50 transition whitespace-nowrap">Export</button>
          </div>
        </div>

        <div className="space-y-2 sm:space-y-3">
          {transactions.map((t) => (
            <div key={t.id} className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-3 sm:p-4 border rounded-lg gap-2 sm:gap-4 hover:bg-gray-50 transition">
              <div className="min-w-0 flex-1">
                <div className="text-xs sm:text-sm font-medium text-gray-900 truncate">{t.title}</div>
                <div className="text-xs text-gray-500 mt-1">{t.id}</div>
                <div className="text-xs text-gray-400 mt-1">{t.status}</div>
              </div>

              <div className="text-right flex-shrink-0">
                <div className={`font-semibold text-sm ${t.type === 'credit' ? 'text-green-600' : 'text-red-600'}`}>{t.amount}</div>
                <div className="text-xs text-gray-400 mt-1">{t.date}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ActionCard({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="bg-white border rounded-lg p-3 sm:p-4 shadow-sm flex items-start gap-2 sm:gap-3">
      <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 flex-shrink-0 text-lg sm:text-xl">💸</div>
      <div className="min-w-0">
        <div className="font-medium text-xs sm:text-sm">{title}</div>
        <div className="text-xs text-gray-500">{subtitle}</div>
      </div>
    </div>
  );
}
