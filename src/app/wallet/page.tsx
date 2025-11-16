import React from "react";

const transactions = [
  { id: "TX-001", title: "Sale - Premium Wireless Headphones", status: "Completed", amount: "+$299.99", date: "1/15/2024", type: "credit" },
  { id: "TX-002", title: "Withdrawal to Bank Account", status: "Completed", amount: "-$500.00", date: "1/14/2024", type: "debit" },
  { id: "TX-003", title: "Sale - Organic Cotton T-Shirt (3x)", status: "Completed", amount: "+$89.97", date: "1/14/2024", type: "credit" },
];

export default function WalletPage() {
  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-semibold">Wallet & Finance</h1>
          <p className="text-xs sm:text-sm text-gray-500">Manage your earnings and financial transactions</p>
        </div>
        <div>
          <button className="px-4 py-2 bg-green-600 text-white rounded-lg shadow text-xs sm:text-sm whitespace-nowrap">Withdraw Funds</button>
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
      <div className="bg-white border rounded-lg p-3 sm:p-4 shadow-sm overflow-x-auto">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-2 mb-4 flex-wrap">
          <div className="font-semibold text-sm sm:text-base">Transaction History</div>
          <div className="flex items-center gap-2 flex-wrap">
            <select className="border rounded-lg px-2 sm:px-3 py-1 sm:py-2 text-xs sm:text-sm">
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>Last 90 days</option>
            </select>
            <button className="px-3 py-1 sm:py-2 border rounded text-xs sm:text-sm">Export</button>
          </div>
        </div>

        <div className="space-y-2 sm:space-y-3">
          {transactions.map((t) => (
            <div key={t.id} className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-2 sm:p-3 border rounded-lg gap-2">
              <div className="min-w-0">
                <div className="text-xs sm:text-sm font-medium truncate">{t.title} <span className="ml-2 text-xs text-gray-500">{t.id}</span></div>
                <div className="text-xs text-gray-400">{t.status}</div>
              </div>

              <div className="text-right flex-shrink-0">
                <div className={`font-semibold text-xs sm:text-sm ${t.type === 'credit' ? 'text-green-600' : 'text-red-600'}`}>{t.amount}</div>
                <div className="text-xs text-gray-400">{t.date}</div>
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
    <div className="bg-white border rounded-lg p-4 shadow-sm flex items-start gap-3">
      <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-gray-500">💸</div>
      <div>
        <div className="font-medium">{title}</div>
        <div className="text-xs text-gray-500">{subtitle}</div>
      </div>
    </div>
  );
}
