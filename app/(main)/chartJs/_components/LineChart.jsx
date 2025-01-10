"use client";
import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  plugins,
} from "chart.js";
import { allInsurancePolicyForChart } from "@/actions/Insurance";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChartPage = () => {
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

  const chartData = {
    labels: labels,
    // labels: ["Mobile", "TV", "Fridge", "Bike"],
    datasets: [
      {
        data: chartDatas,
        // data: [4564, 3454, 3445, 2343],
        label: "Sales in year 2024",
        borderColor: "green",
        borderWidth: 2,
        tension: 0.3,
      },
      // {
      //   data: [3455, 3454, 5634, 2345],
      //   label: "Sales in year 2023",
      //   borderColor: "red",
      //   borderWidth: 2,
      //   tension: 0.3,
      // },
    ],
  };

  const options = {
    responsice: true,
    aspectRatio: 1,
    scales: {
      y: {
        beginAtZero: true,
        min: 0,
        max: 30,
        title: {
          display: true,
          text: "Item Qty",
          color: "blue",
          font: {
            size: 20,
          },
        },
      },
      x: {
        title: {
          display: true,
          text: "Item Name",
          color: "red",
          font: {
            size: 20,
          },
        },
      },
    },
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          color: "green",
          font: { size: 20 },
          boxWidth: 20,
          boxHeight: 25,
        },
      },
      title: {
        display: true,
        text: "Company sales for 23-24",
        font: { size: 20 },
        color: "blue",
      },
    },
  };
  return (
    <div>
      <div className="bg-gray-200 flex items-center justify-center h-[500px] w-[500px] mx-auto p-5">
        <Line data={chartData} options={options}></Line>
      </div>
    </div>
  );
};

export default LineChartPage;
