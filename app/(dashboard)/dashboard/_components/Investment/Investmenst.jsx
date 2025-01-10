import React from "react";

const Investmenst = () => {
  return (
    <div>
      <div id="investments">
        {/* <!-- Investment Summary Cards --> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-white p-4 rounded-lg border border-neutral-200/30">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-neutral-500">Total Investments</p>
                <h3 className="text-2xl font-bold text-neutral-800">
                  ₹12,50,000
                </h3>
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
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  ></path>
                </svg>
              </div>
            </div>
            <p className="mt-2 text-sm text-green-600">+15.2% Returns YTD</p>
          </div>

          <div className="bg-white p-4 rounded-lg border border-neutral-200/30">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-neutral-500">Mutual Funds</p>
                <h3 className="text-2xl font-bold text-neutral-800">
                  ₹5,25,000
                </h3>
              </div>
              <div className="p-2 bg-purple-50 rounded-lg">
                <svg
                  className="w-6 h-6 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  ></path>
                </svg>
              </div>
            </div>
            <p className="mt-2 text-sm text-green-600">+12.5% Returns</p>
          </div>

          <div className="bg-white p-4 rounded-lg border border-neutral-200/30">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-neutral-500">Fixed Deposits</p>
                <h3 className="text-2xl font-bold text-neutral-800">
                  ₹3,00,000
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
            <p className="mt-2 text-sm text-neutral-600">7.5% Fixed Return</p>
          </div>

          <div className="bg-white p-4 rounded-lg border border-neutral-200/30">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-neutral-500">Stocks</p>
                <h3 className="text-2xl font-bold text-neutral-800">
                  ₹4,25,000
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
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  ></path>
                </svg>
              </div>
            </div>
            <p className="mt-2 text-sm text-red-600">-2.5% Today</p>
          </div>
        </div>

        {/* <!-- Portfolio Distribution Chart --> */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <div className="lg:col-span-2 bg-white p-4 rounded-lg border border-neutral-200/30">
            <h3 className="text-lg font-semibold mb-4">
              Portfolio Performance
            </h3>
            <div className="h-80">
              <canvas
                id="portfolioChart"
                width="1035"
                height="320"
                className="display: block; box-sizing: border-box; height: 320px; width: 1035px;"
              ></canvas>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg border border-neutral-200/30">
            <h3 className="text-lg font-semibold mb-4">Asset Distribution</h3>
            <div className="h-80">
              <canvas
                id="assetDistributionChart"
                width="488"
                height="320"
                className="display: block; box-sizing: border-box; height: 320px; width: 488px;"
              ></canvas>
            </div>
          </div>
        </div>

        {/* <!-- Investment List --> */}
        <div className="bg-white rounded-lg border border-neutral-200/30">
          <div className="p-4 border-b border-neutral-200/30 flex justify-between items-center">
            <h3 className="text-lg font-semibold">Investment Details</h3>
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
              Add Investment
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-neutral-50">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-medium text-neutral-500">
                    Investment Name
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-neutral-500">
                    Type
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-neutral-500">
                    Amount
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-neutral-500">
                    Returns
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
                        HDFC Top 100 Fund
                      </p>
                      <p className="text-xs text-neutral-500">Large Cap Fund</p>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <span className="px-2 py-1 text-xs font-medium bg-purple-50 text-purple-600 rounded-full">
                      Mutual Fund
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <p className="text-sm font-medium text-neutral-800">
                      ₹2,00,000
                    </p>
                    <p className="text-xs text-neutral-500">
                      SIP: ₹10,000/month
                    </p>
                  </td>
                  <td className="px-4 py-3">
                    <p className="text-sm font-medium text-green-600">+15.8%</p>
                    <p className="text-xs text-neutral-500">₹31,600</p>
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
                        SBI FD
                      </p>
                      <p className="text-xs text-neutral-500">2 Year Lock-in</p>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <span className="px-2 py-1 text-xs font-medium bg-green-50 text-green-600 rounded-full">
                      Fixed Deposit
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <p className="text-sm font-medium text-neutral-800">
                      ₹3,00,000
                    </p>
                    <p className="text-xs text-neutral-500">Matures: 2026</p>
                  </td>
                  <td className="px-4 py-3">
                    <p className="text-sm font-medium text-neutral-600">7.5%</p>
                    <p className="text-xs text-neutral-500">₹22,500/year</p>
                  </td>
                  <td className="px-4 py-3">
                    <span className="px-2 py-1 text-xs font-medium bg-yellow-50 text-yellow-600 rounded-full">
                      Locked
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

export default Investmenst;
