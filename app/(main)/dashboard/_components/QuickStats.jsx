import { allItems } from "@/data/Dashboard";
import Link from "next/link";
import React from "react";

const QuickStats = () => {
  return (
    <div>
      {/* Stats section */}
      <div
        className="total-balance grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
        id="dashboard-total-balance"
      >
        <div className="bg-white p-4 rounded-lg border border-neutral-200/30">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-neutral-500">Total Balance</p>
              <h3 className="text-2xl font-bold text-neutral-800">₹2,45,678</h3>
            </div>
            <div className="p-2 bg-green-50 rounded-lg">
              <svg
                className="w-6 h-6 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
          </div>
          <p className="mt-2 text-sm text-green-600">+2.5% from last month</p>
        </div>

        <div className="bg-white p-4 rounded-lg border border-neutral-200/30">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-neutral-500">Monthly Income</p>
              <h3 className="text-2xl font-bold text-neutral-800">₹85,000</h3>
            </div>
            <div className="p-2 bg-blue-50 rounded-lg">
              <svg
                className="w-6 h-6 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z"
                ></path>
              </svg>
            </div>
          </div>
          <p className="mt-2 text-sm text-blue-600">Regular salary credit</p>
        </div>

        <div className="bg-white p-4 rounded-lg border border-neutral-200/30">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-neutral-500">Monthly Expense</p>
              <h3 className="text-2xl font-bold text-neutral-800">₹45,230</h3>
            </div>
            <div className="p-2 bg-red-50 rounded-lg">
              <svg
                className="w-6 h-6 text-red-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"
                ></path>
              </svg>
            </div>
          </div>
          <p className="mt-2 text-sm text-red-600">+12% from last month</p>
        </div>

        <div className="bg-white p-4 rounded-lg border border-neutral-200/30">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-neutral-500">Investments</p>
              <h3 className="text-2xl font-bold text-neutral-800">₹5,25,000</h3>
            </div>
            <div className="p-2 bg-purple-50 rounded-lg">
              <svg
                className="w-6 h-6 text-purple-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                ></path>
              </svg>
            </div>
          </div>
          <p className="mt-2 text-sm text-purple-600">15% returns YTD</p>
        </div>
      </div>

      {/* Charts section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-4">
        <div className="bg-white p-4 rounded-lg border border-neutral-200/30">
          <h3 className="text-lg font-semibold mb-4">Income vs Expense</h3>
          <div className="h-80">
            <canvas
              id="incomeExpenseChart"
              width="762"
              height="320"
              className="display: block; box-sizing: border-box; height: 320px; width: 762px;"
            ></canvas>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg border border-neutral-200/30">
          <h3 className="text-lg font-semibold mb-4">
            Investment Distribution
          </h3>
          <div className="h-80">
            <canvas
              id="investmentChart"
              width="762"
              height="320"
              className="display: block; box-sizing: border-box; height: 320px; width: 762px;"
            ></canvas>
          </div>
        </div>
      </div>

      {/* All Instruments Balance */}
      <div className="all-assets pt-5 pb-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {allItems.map((ele) => (
          <Link href={ele.href} key={ele.id} className="block">
            <div className="bg-white p-4 rounded-lg border border-neutral-200/30">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-neutral-500">
                    <span>Total {ele.items} Balance</span>
                  </p>
                  <h3 className="text-2xl font-bold text-neutral-800">
                    ₹{ele.totalAmt}
                  </h3>
                </div>
                <div className="p-2 bg-gray-50 rounded-lg">{ele.icon}</div>
              </div>
              <p className="mt-2 text-sm ">{ele.chng}</p>
            </div>
          </Link>
        ))}
      </div>

      {/* Recent Transactions */}
      <div class="bg-white rounded-lg border border-neutral-200/30">
        <div class="p-4 border-b border-neutral-200/30">
          <h3 class="text-lg font-semibold">Recent Transactions</h3>
        </div>
        <div class="overflow-x-auto">
          <table class="w-full">
            <thead class="bg-neutral-50">
              <tr>
                <th class="px-4 py-3 text-left text-sm font-medium text-neutral-500">
                  Date
                </th>
                <th class="px-4 py-3 text-left text-sm font-medium text-neutral-500">
                  Description
                </th>
                <th class="px-4 py-3 text-left text-sm font-medium text-neutral-500">
                  Category
                </th>
                <th class="px-4 py-3 text-left text-sm font-medium text-neutral-500">
                  Amount
                </th>
                <th class="px-4 py-3 text-left text-sm font-medium text-neutral-500">
                  Status
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-neutral-200/30">
              <tr>
                <td class="px-4 py-3 text-sm text-neutral-600">2024-01-15</td>
                <td class="px-4 py-3 text-sm text-neutral-600">
                  Salary Credit
                </td>
                <td class="px-4 py-3 text-sm text-neutral-600">Income</td>
                <td class="px-4 py-3 text-sm text-green-600">+₹85,000</td>
                <td class="px-4 py-3">
                  <span class="px-2 py-1 text-xs font-medium bg-green-50 text-green-600 rounded-full">
                    Completed
                  </span>
                </td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm text-neutral-600">2024-01-14</td>
                <td class="px-4 py-3 text-sm text-neutral-600">
                  Grocery Shopping
                </td>
                <td class="px-4 py-3 text-sm text-neutral-600">Expense</td>
                <td class="px-4 py-3 text-sm text-red-600">-₹2,500</td>
                <td class="px-4 py-3">
                  <span class="px-2 py-1 text-xs font-medium bg-green-50 text-green-600 rounded-full">
                    Completed
                  </span>
                </td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm text-neutral-600">2024-01-13</td>
                <td class="px-4 py-3 text-sm text-neutral-600">
                  Mutual Fund SIP
                </td>
                <td class="px-4 py-3 text-sm text-neutral-600">Investment</td>
                <td class="px-4 py-3 text-sm text-blue-600">-₹10,000</td>
                <td class="px-4 py-3">
                  <span class="px-2 py-1 text-xs font-medium bg-green-50 text-green-600 rounded-full">
                    Completed
                  </span>
                </td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm text-neutral-600">2024-01-12</td>
                <td class="px-4 py-3 text-sm text-neutral-600">
                  Electricity Bill
                </td>
                <td class="px-4 py-3 text-sm text-neutral-600">Utilities</td>
                <td class="px-4 py-3 text-sm text-red-600">-₹1,850</td>
                <td class="px-4 py-3">
                  <span class="px-2 py-1 text-xs font-medium bg-yellow-50 text-yellow-600 rounded-full">
                    Pending
                  </span>
                </td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm text-neutral-600">2024-01-11</td>
                <td class="px-4 py-3 text-sm text-neutral-600">
                  Freelance Payment
                </td>
                <td class="px-4 py-3 text-sm text-neutral-600">Income</td>
                <td class="px-4 py-3 text-sm text-green-600">+₹15,000</td>
                <td class="px-4 py-3">
                  <span class="px-2 py-1 text-xs font-medium bg-green-50 text-green-600 rounded-full">
                    Completed
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default QuickStats;
