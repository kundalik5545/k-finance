import React, { Suspense } from "react";
import { BarLoader } from "react-spinners";
import CalculatorPage from "./page";
const CalculatorsLayout = ({ children }) => {
  return (
    <div className="">
      {/* Dashboard Page */}
      <Suspense
        fallback={<BarLoader className="mt-4" width={"100%"} color="#9333ea" />}
      >
        {children}
      </Suspense>
    </div>
  );
};

export default CalculatorsLayout;
