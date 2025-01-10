import { Plus } from "lucide-react";
import React from "react";
import AddPolicyForm from "./Insurance/AddPolicy";
import { Button } from "@/components/ui/button";

const Insurance = () => {
  return (
    <div>
      <div id="insurance">
        {/* <!-- Insurance Summary Cards --> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-white p-4 rounded-lg border border-neutral-200/30">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-neutral-500">Total Premium</p>
                <h3 className="text-2xl font-bold text-neutral-800">₹85,000</h3>
                <p className="text-sm text-neutral-600">Per Year</p>
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
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg border border-neutral-200/30">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-neutral-500">Active Policies</p>
                <h3 className="text-2xl font-bold text-neutral-800">5</h3>
                <p className="text-sm text-green-600">All Up to Date</p>
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
          </div>

          <div className="bg-white p-4 rounded-lg border border-neutral-200/30">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-neutral-500">Total Coverage</p>
                <h3 className="text-2xl font-bold text-neutral-800">₹2.5 Cr</h3>
                <p className="text-sm text-neutral-600">Combined</p>
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
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg border border-neutral-200/30">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-neutral-500">Next Due</p>
                <h3 className="text-2xl font-bold text-neutral-800">15 Mar</h3>
                <p className="text-sm text-orange-600">In 30 days</p>
              </div>
              <div className="p-2 bg-orange-50 rounded-lg">
                <svg
                  className="w-6 h-6 text-orange-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Policy Types Distribution --> */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <div className="lg:col-span-2 bg-white p-4 rounded-lg border border-neutral-200/30">
            <h3 className="text-lg font-semibold mb-4">
              Premium Payment Schedule
            </h3>
            <div className="h-80">
              <canvas
                id="premiumScheduleChart"
                width="1035"
                height="320"
                className="display: block; box-sizing: border-box; height: 320px; width: 1035px;"
              ></canvas>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg border border-neutral-200/30">
            <h3 className="text-lg font-semibold mb-4">
              Coverage Distribution
            </h3>
            <div className="h-80">
              <canvas
                id="coverageDistributionChart"
                width="488"
                height="320"
                className="display: block; box-sizing: border-box; height: 320px; width: 488px;"
              ></canvas>
            </div>
          </div>
        </div>

        {/* <!-- Insurance Policies List --> */}

        <div className="bg-white rounded-lg border border-neutral-200/30">
          <div className="p-4 border-b border-neutral-200/30 flex justify-between items-center">
            <h3 className="text-lg font-semibold">Active Insurance Policies</h3>
            <AddPolicyForm />

            {/* <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition-colors flex items-center gap-2">
              <Plus size={18} />
              Add Policy
            </button> */}
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-neutral-50">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-medium text-neutral-500">
                    Policy Name
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-neutral-500">
                    Type
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-neutral-500">
                    Premium
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-neutral-500">
                    Coverage
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-neutral-500">
                    Next Due
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
                        HDFC Life Term
                      </p>
                      <p className="text-xs text-neutral-500">
                        Policy #LI238756
                      </p>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <span className="px-2 py-1 text-xs font-medium bg-blue-50 text-blue-600 rounded-full">
                      Term Life
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <p className="text-sm font-medium text-neutral-800">
                      ₹25,000
                    </p>
                    <p className="text-xs text-neutral-500">Yearly</p>
                  </td>
                  <td className="px-4 py-3">
                    <p className="text-sm font-medium text-neutral-800">
                      ₹1 Cr
                    </p>
                  </td>
                  <td className="px-4 py-3">
                    <p className="text-sm font-medium text-neutral-800">
                      15 Mar 2024
                    </p>
                    <p className="text-xs text-orange-600">In 30 days</p>
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
                        Max Bupa Health
                      </p>
                      <p className="text-xs text-neutral-500">
                        Policy #HI456789
                      </p>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <span className="px-2 py-1 text-xs font-medium bg-green-50 text-green-600 rounded-full">
                      Health
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <p className="text-sm font-medium text-neutral-800">
                      ₹35,000
                    </p>
                    <p className="text-xs text-neutral-500">Yearly</p>
                  </td>
                  <td className="px-4 py-3">
                    <p className="text-sm font-medium text-neutral-800">
                      ₹50 L
                    </p>
                  </td>
                  <td className="px-4 py-3">
                    <p className="text-sm font-medium text-neutral-800">
                      20 Apr 2024
                    </p>
                    <p className="text-xs text-neutral-500">In 65 days</p>
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

export default Insurance;
