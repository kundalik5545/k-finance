import React, { Suspense } from "react";
import DashboardPage from "./page";
import { BarLoader } from "react-spinners";
import TestPage from "./page";

const DashboardLayout = () => {
  return (
    <div className="p-5 md:p-0">
      <h1 className="text-4xl font-bold gradient-title mb-5">Test Page</h1>

      {/* Dashboard Page */}
      <Suspense
        fallback={<BarLoader className="mt-4" width={"100%"} color="#9333ea" />}
      >
        <TestPage />
      </Suspense>
    </div>
  );
};

export default DashboardLayout;
