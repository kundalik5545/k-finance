import React from "react";

const Transactions = () => {
  return (
    <div id="transactions">
      {/* <!-- Filters and Actions --> */}
      <div class="bg-white rounded-lg border border-neutral-200/30 mb-6">
        <div class="p-4">
          <div class="flex flex-wrap gap-4 items-center justify-between">
            <div class="flex gap-4">
              <select class="px-4 py-2 border border-neutral-200/30 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>All Types</option>
                <option>Income</option>
                <option>Expense</option>
                <option>Investment</option>
                <option>Transfer</option>
              </select>
              <select class="px-4 py-2 border border-neutral-200/30 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>All Categories</option>
                <option>Salary</option>
                <option>Bills</option>
                <option>Shopping</option>
                <option>Investment</option>
                <option>Food</option>
              </select>
              <input
                type="date"
                class="px-4 py-2 border border-neutral-200/30 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button class="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition-colors flex items-center gap-2">
              <svg
                class="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                ></path>
              </svg>
              Add Transaction
            </button>
          </div>
        </div>
      </div>

      {/* <!-- Summary Cards --> */}
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div class="bg-white p-4 rounded-lg border border-neutral-200/30">
          <h3 class="text-sm text-neutral-500">Total Income</h3>
          <p class="text-2xl font-bold text-green-600">₹1,25,000</p>
          <p class="text-sm text-green-600 mt-1">+12% vs last month</p>
        </div>
        <div class="bg-white p-4 rounded-lg border border-neutral-200/30">
          <h3 class="text-sm text-neutral-500">Total Expense</h3>
          <p class="text-2xl font-bold text-red-600">₹45,230</p>
          <p class="text-sm text-red-600 mt-1">+5% vs last month</p>
        </div>
        <div class="bg-white p-4 rounded-lg border border-neutral-200/30">
          <h3 class="text-sm text-neutral-500">Net Savings</h3>
          <p class="text-2xl font-bold text-blue-600">₹79,770</p>
          <p class="text-sm text-blue-600 mt-1">+15% vs last month</p>
        </div>
      </div>

      {/* <!-- Transactions Table --> */}
      <div class="bg-white rounded-lg border border-neutral-200/30">
        <div class="p-4 border-b border-neutral-200/30 flex justify-between items-center">
          <h2 class="text-lg font-semibold">Transaction History</h2>
          <div class="flex gap-2">
            <button class="p-2 text-neutral-600 hover:bg-neutral-50 rounded-lg">
              <svg
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12"
                ></path>
              </svg>
            </button>
            <button class="p-2 text-neutral-600 hover:bg-neutral-50 rounded-lg">
              <svg
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                ></path>
              </svg>
            </button>
          </div>
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
                  Type
                </th>
                <th class="px-4 py-3 text-left text-sm font-medium text-neutral-500">
                  Amount
                </th>
                <th class="px-4 py-3 text-left text-sm font-medium text-neutral-500">
                  Status
                </th>
                <th class="px-4 py-3 text-left text-sm font-medium text-neutral-500">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-neutral-200/30">
              <tr>
                <td class="px-4 py-3 text-sm">2024-01-15</td>
                <td class="px-4 py-3 text-sm">Monthly Salary</td>
                <td class="px-4 py-3 text-sm">Salary</td>
                <td class="px-4 py-3">
                  <span class="px-2 py-1 text-xs font-medium bg-green-50 text-green-600 rounded-full">
                    Income
                  </span>
                </td>
                <td class="px-4 py-3 text-sm font-medium text-green-600">
                  +₹85,000
                </td>
                <td class="px-4 py-3">
                  <span class="px-2 py-1 text-xs font-medium bg-blue-50 text-blue-600 rounded-full">
                    Completed
                  </span>
                </td>
                <td class="px-4 py-3">
                  <div class="flex gap-2">
                    <button class="p-1 text-blue-600 hover:bg-blue-50 rounded">
                      <svg
                        class="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                        ></path>
                      </svg>
                    </button>
                    <button class="p-1 text-red-600 hover:bg-red-50 rounded">
                      <svg
                        class="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm">2024-01-14</td>
                <td class="px-4 py-3 text-sm">Grocery Shopping</td>
                <td class="px-4 py-3 text-sm">Shopping</td>
                <td class="px-4 py-3">
                  <span class="px-2 py-1 text-xs font-medium bg-red-50 text-red-600 rounded-full">
                    Expense
                  </span>
                </td>
                <td class="px-4 py-3 text-sm font-medium text-red-600">
                  -₹2,500
                </td>
                <td class="px-4 py-3">
                  <span class="px-2 py-1 text-xs font-medium bg-blue-50 text-blue-600 rounded-full">
                    Completed
                  </span>
                </td>
                <td class="px-4 py-3">
                  <div class="flex gap-2">
                    <button class="p-1 text-blue-600 hover:bg-blue-50 rounded">
                      <svg
                        class="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                        ></path>
                      </svg>
                    </button>
                    <button class="p-1 text-red-600 hover:bg-red-50 rounded">
                      <svg
                        class="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-sm">2024-01-13</td>
                <td class="px-4 py-3 text-sm">SIP Investment</td>
                <td class="px-4 py-3 text-sm">Investment</td>
                <td class="px-4 py-3">
                  <span class="px-2 py-1 text-xs font-medium bg-purple-50 text-purple-600 rounded-full">
                    Investment
                  </span>
                </td>
                <td class="px-4 py-3 text-sm font-medium text-purple-600">
                  -₹10,000
                </td>
                <td class="px-4 py-3">
                  <span class="px-2 py-1 text-xs font-medium bg-yellow-50 text-yellow-600 rounded-full">
                    Pending
                  </span>
                </td>
                <td class="px-4 py-3">
                  <div class="flex gap-2">
                    <button class="p-1 text-blue-600 hover:bg-blue-50 rounded">
                      <svg
                        class="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                        ></path>
                      </svg>
                    </button>
                    <button class="p-1 text-red-600 hover:bg-red-50 rounded">
                      <svg
                        class="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="p-4 border-t border-neutral-200/30 flex items-center justify-between">
          <div class="flex items-center gap-2">
            <span class="text-sm text-neutral-600">
              Showing 1 to 3 of 50 entries
            </span>
          </div>
          <div class="flex gap-2">
            <button class="px-3 py-1 text-sm border border-neutral-200/30 rounded hover:bg-neutral-50">
              Previous
            </button>
            <button class="px-3 py-1 text-sm bg-blue-600 text-white rounded">
              1
            </button>
            <button class="px-3 py-1 text-sm border border-neutral-200/30 rounded hover:bg-neutral-50">
              2
            </button>
            <button class="px-3 py-1 text-sm border border-neutral-200/30 rounded hover:bg-neutral-50">
              3
            </button>
            <button class="px-3 py-1 text-sm border border-neutral-200/30 rounded hover:bg-neutral-50">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
