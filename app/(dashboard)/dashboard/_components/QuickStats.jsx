"use client";
import { allItems } from "@/data/Dashboard";
import Link from "next/link";
import React from "react";
import { Bar, BarChart, CartesianGrid, Pie, PieChart, XAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const QuickStats = () => {
  const chartData = [
    { month: "January", desktop: 186, mobile: 80 },
    { month: "February", desktop: 305, mobile: 200 },
    { month: "March", desktop: 237, mobile: 120 },
    { month: "April", desktop: 73, mobile: 190 },
    { month: "May", desktop: 209, mobile: 130 },
    { month: "June", desktop: 214, mobile: 140 },
    { month: "June", desktop: 214, mobile: 140 },
  ];

  const chartConfig = {
    desktop: {
      label: "Desktop",
      color: "#2563eb",
    },
    mobile: {
      label: "Mobile",
      color: "#60a5fa",
    },
  };

  const chartDataPieChart = [
    { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
    { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
    { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
    { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
    { browser: "other", visitors: 90, fill: "var(--color-other)" },
  ];

  const chartConfigPieChart = {
    visitors: {
      label: "Visitors",
    },
    chrome: {
      label: "Chrome",
      color: "hsl(var(--chart-1))",
    },
    safari: {
      label: "Safari",
      color: "hsl(var(--chart-2))",
    },
    firefox: {
      label: "Firefox",
      color: "hsl(var(--chart-3))",
    },
    edge: {
      label: "Edge",
      color: "hsl(var(--chart-4))",
    },
    other: {
      label: "Other",
      color: "hsl(var(--chart-5))",
    },
  };

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
            <ChartContainer
              config={chartConfigPieChart}
              className="mx-auto aspect-square max-h-[350px]"
            >
              <PieChart>
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent hideLabel />}
                />
                <Pie
                  data={chartDataPieChart}
                  dataKey="visitors"
                  nameKey="browser"
                  innerRadius={80}
                />
              </PieChart>
            </ChartContainer>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg border border-neutral-200/30">
          <h3 className="text-lg font-semibold mb-4">
            Investment Distribution
          </h3>
          <div className="h-80">
            <ChartContainer
              config={chartConfig}
              className="w-full h-80" // Example: Adjust the height to 64 Tailwind units
            >
              <BarChart accessibilityLayer data={chartData}>
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                  tickFormatter={(value) => value.slice(0, 3)}
                />
                <ChartTooltip content={<ChartTooltipContent />} />
                <ChartLegend content={<ChartLegendContent />} />
                <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
                <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
              </BarChart>
            </ChartContainer>
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
      <div className="bg-white rounded-lg border border-neutral-200/30">
        <div className="p-4 border-b border-neutral-200/30">
          <h3 className="text-lg font-semibold">Recent Transactions</h3>
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
                  Amount
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-neutral-500">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-200/30">
              <tr>
                <td className="px-4 py-3 text-sm text-neutral-600">
                  2024-01-15
                </td>
                <td className="px-4 py-3 text-sm text-neutral-600">
                  Salary Credit
                </td>
                <td className="px-4 py-3 text-sm text-neutral-600">Income</td>
                <td className="px-4 py-3 text-sm text-green-600">+₹85,000</td>
                <td className="px-4 py-3">
                  <span className="px-2 py-1 text-xs font-medium bg-green-50 text-green-600 rounded-full">
                    Completed
                  </span>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm text-neutral-600">
                  2024-01-14
                </td>
                <td className="px-4 py-3 text-sm text-neutral-600">
                  Grocery Shopping
                </td>
                <td className="px-4 py-3 text-sm text-neutral-600">Expense</td>
                <td className="px-4 py-3 text-sm text-red-600">-₹2,500</td>
                <td className="px-4 py-3">
                  <span className="px-2 py-1 text-xs font-medium bg-green-50 text-green-600 rounded-full">
                    Completed
                  </span>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm text-neutral-600">
                  2024-01-13
                </td>
                <td className="px-4 py-3 text-sm text-neutral-600">
                  Mutual Fund SIP
                </td>
                <td className="px-4 py-3 text-sm text-neutral-600">
                  Investment
                </td>
                <td className="px-4 py-3 text-sm text-blue-600">-₹10,000</td>
                <td className="px-4 py-3">
                  <span className="px-2 py-1 text-xs font-medium bg-green-50 text-green-600 rounded-full">
                    Completed
                  </span>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm text-neutral-600">
                  2024-01-12
                </td>
                <td className="px-4 py-3 text-sm text-neutral-600">
                  Electricity Bill
                </td>
                <td className="px-4 py-3 text-sm text-neutral-600">
                  Utilities
                </td>
                <td className="px-4 py-3 text-sm text-red-600">-₹1,850</td>
                <td className="px-4 py-3">
                  <span className="px-2 py-1 text-xs font-medium bg-yellow-50 text-yellow-600 rounded-full">
                    Pending
                  </span>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm text-neutral-600">
                  2024-01-11
                </td>
                <td className="px-4 py-3 text-sm text-neutral-600">
                  Freelance Payment
                </td>
                <td className="px-4 py-3 text-sm text-neutral-600">Income</td>
                <td className="px-4 py-3 text-sm text-green-600">+₹15,000</td>
                <td className="px-4 py-3">
                  <span className="px-2 py-1 text-xs font-medium bg-green-50 text-green-600 rounded-full">
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
