import StatCard from "@/components/commonComponents/StatCard";
import { CircleArrowUp } from "lucide-react";
import React from "react";

const EPFPage = () => {
  return (
    <div className="container mx-auto pt-12 text-3xl gradient-subTitle flex flex-col">
      <h2>EPF Page</h2>
      {/* EPF Quick Stats */}
      <div className="total-balance grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          iconName={<CircleArrowUp color="green" />}
          MainAmt={" 85,768"}
          statsChange={"Regular salary credit."}
          topTitle={"Monthly Income"}
          bgColor={"bg-green-50"}
          statTextColor={"text-green-600"}
        />
        <StatCard
          iconName={<CircleArrowUp color="blue" />}
          MainAmt={" 85,768"}
          statsChange={"Regular salary credit."}
          topTitle={"Monthly Income"}
          bgColor={"bg-blue-50"}
          statTextColor={"text-blue-600"}
        />
        <StatCard
          iconName={<CircleArrowUp color="blue" />}
          MainAmt={" 85,768"}
          statsChange={"Regular salary credit."}
          topTitle={"Monthly Income"}
          bgColor={"bg-blue-50"}
          statTextColor={"text-blue-600"}
        />
        <StatCard
          iconName={<CircleArrowUp color="blue" />}
          MainAmt={" 85,768"}
          statsChange={"Regular salary credit."}
          topTitle={"Monthly Income"}
          bgColor={"bg-blue-50"}
          statTextColor={"text-blue-600"}
        />
      </div>
      {/* Add EPF Transaction */}
      {/* Basic Details of EPF Account*/}
      <div className="total-balance grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-272">
        <div class="bg-white p-4 rounded-lg border border-neutral-200/30">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm text-neutral-500 tracking-wider">Stocks</p>
              <h3 class="text-2xl font-bold text-neutral-800">₹400</h3>
            </div>
            <div class="p-2 rounded-lg bg-green-50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-dollar-sign"
              >
                <line x1="12" x2="12" y1="2" y2="22"></line>
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
              </svg>
            </div>
          </div>
          <p class="mt-2 text-sm text-green-600">+2.5% from last month</p>
        </div>
        <div class="bg-white p-4 rounded-lg border border-neutral-200/30">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm text-neutral-500 tracking-wider">Stocks</p>
              <h3 class="text-2xl font-bold text-neutral-800">₹400</h3>
            </div>
            <div class="p-2 rounded-lg bg-green-50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-dollar-sign"
              >
                <line x1="12" x2="12" y1="2" y2="22"></line>
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
              </svg>
            </div>
          </div>
          <p class="mt-2 text-sm text-green-600">+2.5% from last month</p>
        </div>
        <div class="bg-white p-4 rounded-lg border border-neutral-200/30">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm text-neutral-500 tracking-wider">Stocks</p>
              <h3 class="text-2xl font-bold text-neutral-800">₹400</h3>
            </div>
            <div class="p-2 rounded-lg bg-green-50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-dollar-sign"
              >
                <line x1="12" x2="12" y1="2" y2="22"></line>
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
              </svg>
            </div>
          </div>
          <p class="mt-2 text-sm text-green-600">+2.5% from last month</p>
        </div>
        <div class="bg-white p-4 rounded-lg border border-neutral-200/30">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm text-neutral-500 tracking-wider">Stocks</p>
              <h3 class="text-2xl font-bold text-neutral-800">₹400</h3>
            </div>
            <div class="p-2 rounded-lg bg-green-50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-dollar-sign"
              >
                <line x1="12" x2="12" y1="2" y2="22"></line>
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
              </svg>
            </div>
          </div>
          <p class="mt-2 text-sm text-green-600">+2.5% from last month</p>
        </div>
      </div>
      {/* Add EPF Transaction */}
    </div>
  );
};

export default EPFPage;
