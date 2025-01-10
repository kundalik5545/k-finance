"use client";
import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";
import { allInsurancePolicyForChart } from "@/actions/Insurance";

ChartJS.register(ArcElement, Tooltip, Legend, Title);

const PieChartPage = () => {
  const [labels, setLabels] = useState([]);
  const [chartDatas, setChartDatas] = useState([]);

  const policySum = async () => {
    const response = await allInsurancePolicyForChart();
    const label = response.data.map((item) => item.policyType);
    const data = response.data.map((item) => item._sum.coverageAmount);
    setChartDatas(data);
    setLabels(label);
  };

  useEffect(() => {
    policySum();
  }, []);

  const pieChartData = {
    labels: labels,
    // labels: ["Mobile", "TV", "Fridge", "Bike"],
    datasets: [
      {
        data: chartDatas,
        // data: [4564, 3454, 3445, 2343],
        label: "Sales in year 2024",
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const pieChartOptions = {
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: "Sales Distribution (2024)",
        color: "blue",
        font: { size: 25 },
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="w-[400px] h-[350px]">
      <Pie data={pieChartData} options={pieChartOptions} />
    </div>
  );
};

export default PieChartPage;
