"use client";
import StatCard from "@/components/commonComponents/StatCard";
import {
  ChartCandlestick,
  CircleArrowUp,
  Pen,
  Trash,
  TrendingDown,
  TrendingUp,
} from "lucide-react";
import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Bar, BarChart, CartesianGrid, Pie, PieChart, XAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
const StocksPage = () => {
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
    <div className="container mx-auto my-16">
      <div className="flex items-center justify-between pb-4">
        <h1 className="gradient-subTitle text-xl md:text-3xl">Stocks</h1>
        <Button>Add Stocks</Button>
      </div>
      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pb-4">
        <StatCard
          topTitle={"Total Stocks Value"}
          MainAmt={" 85,768"}
          statsChange={"+3.4% Change in Stocks Value."}
          iconName={<ChartCandlestick color="green" />}
          bgColor={"bg-green-50"}
          statTextColor={"text-green-600"}
        />
        <StatCard
          iconName={<CircleArrowUp color="purple" />}
          MainAmt={" 85,768"}
          statsChange={"Current month stocks buy."}
          topTitle={"Monthly Stocks Buy-Sell"}
          bgColor={"bg-purple-50"}
          statTextColor={"text-purple-600"}
        />
        <StatCard
          iconName={<TrendingUp color="green" />}
          MainAmt={" 85,768"}
          statsChange={"Top Gainers: Tata Steel, Tata Motors."}
          topTitle={"Top Gainers"}
          bgColor={"bg-green-50"}
          statTextColor={"text-green-600"}
        />
        <StatCard
          iconName={<TrendingDown color="red" />}
          MainAmt={" 85,768"}
          statsChange={"Top Loosers: Reliance, SBI."}
          topTitle={"Top Looser"}
          bgColor={"bg-red-50"}
          statTextColor={"text-red-600"}
        />
      </div>

      {/* Charts section */}
      <h3 className="gradient-subTitle text-xl">Stocks Charts</h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-2 pb-4">
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

      {/* Positive Stocks negative stocks */}
      {/* Stocks transaction history */}
      <h3 className="gradient-subTitle text-xl">Stocks Transactions</h3>
      <div>
        <Table className="w-full bg-white rounded-lg border border-neutral-200/30">
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Id</TableHead>
              <TableHead>Stocks</TableHead>
              <TableHead className="text-right">Share Buy Price</TableHead>
              <TableHead className="text-right">Current Price</TableHead>
              <TableHead className="text-right">Share Qty.</TableHead>
              <TableHead className="text-right">Total Investment</TableHead>
              <TableHead className="text-right">Total Profit / Loss</TableHead>
              <TableHead className="text-center">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">ST01</TableCell>
              <TableCell>
                <span className="px-2 py-1 text-xs font-medium bg-blue-50 text-blue-600 rounded-full">
                  SBI
                </span>
              </TableCell>
              <TableCell className="text-right">$250.00</TableCell>
              <TableCell className="text-right">$255.00</TableCell>
              <TableCell className="text-right">100</TableCell>
              <TableCell className="text-right">$25,000.00</TableCell>
              <TableCell className="text-right ">
                <span className="px-2 py-1 text-xs font-medium bg-green-50 text-green-600 rounded-full">
                  + $500.00
                </span>
              </TableCell>
              <TableCell className="flex items-center justify-center space-x-2">
                <Pen size={15} color="blue" />
                <Trash size={15} color="red" />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">ST01</TableCell>
              <TableCell>
                <span className="px-2 py-1 text-xs font-medium bg-blue-50 text-blue-600 rounded-full">
                  SBI
                </span>
              </TableCell>
              <TableCell className="text-right">$250.00</TableCell>
              <TableCell className="text-right">$255.00</TableCell>
              <TableCell className="text-right">100</TableCell>
              <TableCell className="text-right">$25,000.00</TableCell>
              <TableCell className="text-right ">
                <span className="px-2 py-1 text-xs font-medium bg-green-50 text-green-600 rounded-full">
                  + $500.00
                </span>
              </TableCell>
              <TableCell className="flex items-center justify-center space-x-2">
                <Pen size={15} color="blue" />
                <Trash size={15} color="red" />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">ST01</TableCell>
              <TableCell>
                <span className="px-2 py-1 text-xs font-medium bg-blue-50 text-blue-600 rounded-full">
                  SBI
                </span>
              </TableCell>
              <TableCell className="text-right">$250.00</TableCell>
              <TableCell className="text-right">$255.00</TableCell>
              <TableCell className="text-right">100</TableCell>
              <TableCell className="text-right">$25,000.00</TableCell>
              <TableCell className="text-right ">
                <span className="px-2 py-1 text-xs font-medium bg-green-50 text-green-600 rounded-full">
                  + $500.00
                </span>
              </TableCell>
              <TableCell className="flex items-center justify-center space-x-2">
                <Pen size={15} color="blue" />
                <Trash size={15} color="red" />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      {/* Basic Details of Stocks Account*/}
    </div>
  );
};

export default StocksPage;
