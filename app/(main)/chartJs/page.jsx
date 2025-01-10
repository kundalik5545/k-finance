"use client";
import React from "react";
import LineChartPage from "./_components/LineChart";
import PieChartPage from "./_components/PieChartPage";

const CharJsPage = () => {
  return (
    <div>
      <div>
        <h2>Line Chart</h2>
        <LineChartPage />
      </div>
      <div>
        <h2>Pie Chart</h2>
        <PieChartPage />
      </div>
    </div>
  );
};

export default CharJsPage;
