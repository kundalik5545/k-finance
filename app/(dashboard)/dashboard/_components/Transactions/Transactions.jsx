"use client";
import React, { Suspense, useEffect } from "react";
import AddTransaction from "./AddTransaction";
import useFetch from "@/hooks/use-fetch";
import { getTransactions } from "@/actions/transactions";
import { BarLoader } from "react-spinners";
import clsx from "clsx";
import {
  transactionCategoryColors,
  transactionCategorys,
} from "@/data/TransactionCategories";

const Transactions = () => {
  const { apiFun, error, loading, apiRes } = useFetch(getTransactions);

  useEffect(() => {
    const fetchData = async () => {
      await apiFun();
    };
    fetchData();
  }, [apiFun]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const transactionStatusColors = {
    Completed: "bg-green-50 text-green-500",
    Pending: "bg-yellow-50 text-yellow-500",
    Expired: "bg-red-50 text-red-500",
  };

  const transactionTypeColors = {
    Income: "bg-blue-50 text-blue-500",
    Transfer: "bg-purple-50 text-purple-500",
    Investment: "bg-red-50 text-red-500",
  };

  return (
    <div id="transactions">
      {/* <!-- Filters and Actions --> */}
      <AddTransaction />

      {/* <!-- Summary Cards --> */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg border border-neutral-200/30">
          <h3 className="text-sm text-neutral-500">Total Income</h3>
          <p className="text-2xl font-bold text-green-600">₹1,25,000</p>
          <p className="text-sm text-green-600 mt-1">+12% vs last month</p>
        </div>
        <div className="bg-white p-4 rounded-lg border border-neutral-200/30">
          <h3 className="text-sm text-neutral-500">Total Expense</h3>
          <p className="text-2xl font-bold text-red-600">₹45,230</p>
          <p className="text-sm text-red-600 mt-1">+5% vs last month</p>
        </div>
        <div className="bg-white p-4 rounded-lg border border-neutral-200/30">
          <h3 className="text-sm text-neutral-500">Net Savings</h3>
          <p className="text-2xl font-bold text-blue-600">₹79,770</p>
          <p className="text-sm text-blue-600 mt-1">+15% vs last month</p>
        </div>
      </div>

      {/* <!-- Transactions Table --> */}
      <div className="bg-white rounded-lg border border-neutral-200/30">
        <div className="p-4 border-b border-neutral-200/30 flex justify-between items-center">
          <h2 className="text-lg font-semibold">Transaction History</h2>
          <div className="flex gap-2">
            <button className="p-2 text-neutral-600 hover:bg-neutral-50 rounded-lg">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12"
                ></path>
              </svg>
            </button>
            <button className="p-2 text-neutral-600 hover:bg-neutral-50 rounded-lg">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-neutral-50">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-medium text-neutral-500">
                  Date
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-neutral-500">
                  Description
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-neutral-500">
                  Category
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-neutral-500">
                  Type
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-neutral-500">
                  Amount
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-neutral-500">
                  Status
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-neutral-500">
                  Actions
                </th>
              </tr>
            </thead>
            <Suspense
              fallback={
                <BarLoader className="mt-4" width={"100%"} color="#9333ea" />
              }
            >
              <tbody className="divide-y divide-neutral-200/30">
                {apiRes &&
                  apiRes.data &&
                  apiRes.data.map((transaction) => (
                    <tr>
                      <td className="px-4 py-3 text-sm">
                        {new Date(transaction.date).toLocaleDateString()}
                      </td>
                      <td className="px-4 py-3 text-sm">
                        {transaction.description}
                      </td>
                      <td>
                        <span
                          className={clsx(
                            transactionCategoryColors[transaction.category],
                            "px-2 py-1 text-xs font-medium rounded-full"
                          )}
                        >
                          {transaction.category}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <span
                          className={clsx(
                            transactionTypeColors[transaction.type],
                            "px-2 py-1 text-xs font-medium rounded-full"
                          )}
                        >
                          {transaction.type}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-sm font-medium text-green-600">
                        +₹{transaction.amount}
                      </td>
                      <td className="px-4 py-3">
                        <span
                          className={clsx(
                            transactionStatusColors[transaction.status],
                            "px-2 py-1 text-xs font-medium rounded-full"
                          )}
                        >
                          {transaction.status}
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
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                              ></path>
                            </svg>
                          </button>
                          <button className="p-1 text-red-600 hover:bg-red-50 rounded">
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                              ></path>
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </Suspense>
          </table>
        </div>
        <div className="p-4 border-t border-neutral-200/30 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-sm text-neutral-600">
              Showing 1 to 3 of 50 entries
            </span>
          </div>
          <div className="flex gap-2">
            <button className="px-3 py-1 text-sm border border-neutral-200/30 rounded hover:bg-neutral-50">
              Previous
            </button>
            <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded">
              1
            </button>
            <button className="px-3 py-1 text-sm border border-neutral-200/30 rounded hover:bg-neutral-50">
              2
            </button>
            <button className="px-3 py-1 text-sm border border-neutral-200/30 rounded hover:bg-neutral-50">
              3
            </button>
            <button className="px-3 py-1 text-sm border border-neutral-200/30 rounded hover:bg-neutral-50">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
