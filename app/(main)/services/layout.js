import React, { Suspense } from "react";
import DashboardPage from "./page";
import { BarLoader } from "react-spinners";

const ServicesLayout = () => {
  return (
    <div className="">
      <h1 className="text-4xl font-bold gradient-title mb-5">Services</h1>

      {/* Dashboard Page */}
      <Suspense
        fallback={<BarLoader className="mt-4" width={"100%"} color="#9333ea" />}
      >
        <DashboardPage />
      </Suspense>
    </div>
  );
};

export default ServicesLayout;
