import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { allCalculator } from "@/data/calculators";

const CalculatorPage = () => {
  return (
    <div className="calculatorPage font-inter max-w-5xl mx-auto p-2 m-2 rounded-lg ">
      <h2 className="text-3xl font-bold text-black text-center mb-4 ">
        Calculators
      </h2>
      <div className="mainTypesOfCalc flex items-center justify-center space-x-3 pt-5">
        <Button>Investment</Button>
        <Button>Loans</Button>
        <Button>Others</Button>
      </div>
      <div className="subTypesOfCalc">
        <h3 className="text-center text-xl font-semibold p-2 pt-3">
          Savings & Investment Planning
        </h3>
        <div className="calList">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 p-2">
            {allCalculator.map((ele, index) => (
              <Link
                key={index}
                href={ele.to}
                className="p-5 bg-white rounded-lg flex items-center justify-center space-x-3  shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <span>{ele.symbol}</span>
                <span>{ele.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalculatorPage;
