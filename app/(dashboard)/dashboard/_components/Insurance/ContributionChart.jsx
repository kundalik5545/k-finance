"use client";
import { allInsurancePolicyForChart } from "@/actions/Insurance";
import React, { useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const ContributionChart = () => {
  const [labelItem, setLabelItem] = useState([]);
  const [chartDataItem, setChartDataItem] = useState([]);

  const policySum = async () => {
    const response = await allInsurancePolicyForChart();
    const label = response.data.map((item) => item.policyType);
    const data = response.data.map((item) => item._sum.coverageAmount);
    setChartDataItem(data);
    setLabelItem(label);
  };

  useEffect(() => {
    policySum();
  }, []);

  const chartData = {
    labels: labelItem,
    datasets: [
      {
        data: chartDataItem,
        label: "Total Coverage In CR",
        backgroundColor: [
          "rgba(59, 130, 246, 0.6)",
          "rgba(16, 185, 129, 0.6)",
          "rgba(245, 158, 11, 0.6)",
          "rgba(139, 92, 246, 0.6)",
          "rgba(236, 72, 153, 0.6)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
      },
    },
  };
  return (
    <div className="w-[488px] h-[320px]">
      <Doughnut data={chartData} options={chartOptions} />
    </div>
  );
};

export default ContributionChart;
