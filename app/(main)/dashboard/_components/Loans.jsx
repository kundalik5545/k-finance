import React from "react";

const Loans = () => {
  return (
    <div>
      <div id="loans">
        {/* <!-- Loan Summary Cards --> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-white p-4 rounded-lg border border-neutral-200/30">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-neutral-500">Total Loan Amount</p>
                <h3 className="text-2xl font-bold text-neutral-800">
                  ₹45,00,000
                </h3>
              </div>
              <div className="p-2 bg-red-50 rounded-lg">
                <svg
                  className="w-6 h-6 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                  ></path>
                </svg>
              </div>
            </div>
            <p className="mt-2 text-sm text-neutral-600">Active Loans: 3</p>
          </div>

          <div className="bg-white p-4 rounded-lg border border-neutral-200/30">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-neutral-500">Monthly EMI</p>
                <h3 className="text-2xl font-bold text-neutral-800">₹42,500</h3>
              </div>
              <div className="p-2 bg-blue-50 rounded-lg">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  ></path>
                </svg>
              </div>
            </div>
            <p className="mt-2 text-sm text-neutral-600">Next Due: 5th Feb</p>
          </div>

          <div className="bg-white p-4 rounded-lg border border-neutral-200/30">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-neutral-500">Total Interest</p>
                <h3 className="text-2xl font-bold text-neutral-800">
                  ₹12,45,000
                </h3>
              </div>
              <div className="p-2 bg-yellow-50 rounded-lg">
                <svg
                  className="w-6 h-6 text-yellow-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
            </div>
            <p className="mt-2 text-sm text-neutral-600">Avg. Rate: 8.5%</p>
          </div>

          <div className="bg-white p-4 rounded-lg border border-neutral-200/30">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-neutral-500">Principal Paid</p>
                <h3 className="text-2xl font-bold text-neutral-800">
                  ₹15,25,000
                </h3>
              </div>
              <div className="p-2 bg-green-50 rounded-lg">
                <svg
                  className="w-6 h-6 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
            </div>
            <p className="mt-2 text-sm text-green-600">33.89% Complete</p>
          </div>
        </div>

        {/* <!-- Loan Charts --> */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <div className="bg-white p-4 rounded-lg border border-neutral-200/30">
            <h3 className="text-lg font-semibold mb-4">EMI Distribution</h3>
            <div className="h-80">
              <canvas
                id="emiDistributionChart"
                width="762"
                height="320"
                className="display: block; box-sizing: border-box; height: 320px; width: 762px;"
              ></canvas>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg border border-neutral-200/30">
            <h3 className="text-lg font-semibold mb-4">Loan Types</h3>
            <div className="h-80">
              <canvas
                id="loanTypesChart"
                width="762"
                height="320"
                className="display: block; box-sizing: border-box; height: 320px; width: 762px;"
              ></canvas>
            </div>
          </div>
        </div>

        {/* <!-- Active Loans --> */}
        <div className="bg-white rounded-lg border border-neutral-200/30">
          <div className="p-4 border-b border-neutral-200/30 flex justify-between items-center">
            <h3 className="text-lg font-semibold">Active Loans</h3>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition-colors flex items-center gap-2">
              <svg
                className="w-4 h-4"
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
              Add Loan
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-neutral-50">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-medium text-neutral-500">
                    Loan Details
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-neutral-500">
                    Amount
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-neutral-500">
                    EMI
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-neutral-500">
                    Interest Rate
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-neutral-500">
                    Tenure
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-neutral-500">
                    Status
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-neutral-500">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200/30">
                <tr>
                  <td className="px-4 py-3">
                    <div>
                      <p className="text-sm font-medium text-neutral-800">
                        Home Loan
                      </p>
                      <p className="text-xs text-neutral-500">HDFC Bank</p>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <p className="text-sm font-medium text-neutral-800">
                      ₹35,00,000
                    </p>
                    <p className="text-xs text-neutral-500">
                      Outstanding: ₹28,50,000
                    </p>
                  </td>
                  <td className="px-4 py-3">
                    <p className="text-sm font-medium text-neutral-800">
                      ₹32,500
                    </p>
                    <p className="text-xs text-green-600">No Dues</p>
                  </td>
                  <td className="px-4 py-3">
                    <p className="text-sm font-medium text-neutral-800">8.5%</p>
                    <p className="text-xs text-neutral-500">Fixed</p>
                  </td>
                  <td className="px-4 py-3">
                    <p className="text-sm font-medium text-neutral-800">
                      15 Years
                    </p>
                    <p className="text-xs text-neutral-500">12 Years Left</p>
                  </td>
                  <td className="px-4 py-3">
                    <span className="px-2 py-1 text-xs font-medium bg-green-50 text-green-600 rounded-full">
                      Active
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex gap-2">
                      <button className="p-1 text-blue-600 hover:bg-blue-50 rounded">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          ></path>
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          ></path>
                        </svg>
                      </button>
                      <button className="p-1 text-blue-600 hover:bg-blue-50 rounded">
                        <svg
                          className="w-4 h-4"
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
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3">
                    <div>
                      <p className="text-sm font-medium text-neutral-800">
                        Car Loan
                      </p>
                      <p className="text-xs text-neutral-500">SBI Bank</p>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <p className="text-sm font-medium text-neutral-800">
                      ₹8,00,000
                    </p>
                    <p className="text-xs text-neutral-500">
                      Outstanding: ₹5,20,000
                    </p>
                  </td>
                  <td className="px-4 py-3">
                    <p className="text-sm font-medium text-neutral-800">
                      ₹16,500
                    </p>
                    <p className="text-xs text-yellow-600">Due in 5 days</p>
                  </td>
                  <td className="px-4 py-3">
                    <p className="text-sm font-medium text-neutral-800">9.5%</p>
                    <p className="text-xs text-neutral-500">Fixed</p>
                  </td>
                  <td className="px-4 py-3">
                    <p className="text-sm font-medium text-neutral-800">
                      5 Years
                    </p>
                    <p className="text-xs text-neutral-500">3 Years Left</p>
                  </td>
                  <td className="px-4 py-3">
                    <span className="px-2 py-1 text-xs font-medium bg-green-50 text-green-600 rounded-full">
                      Active
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex gap-2">
                      <button className="p-1 text-blue-600 hover:bg-blue-50 rounded">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          ></path>
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          ></path>
                        </svg>
                      </button>
                      <button className="p-1 text-blue-600 hover:bg-blue-50 rounded">
                        <svg
                          className="w-4 h-4"
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
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loans;
