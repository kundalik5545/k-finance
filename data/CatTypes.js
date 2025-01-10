export const policyTypesCat = [
  {
    name: "Term Life",
    color: "#3b82f699",
    cname: "blue",
  },
  {
    name: "Health",
    color: "#10b98199",
    cname: "light green",
  },
  {
    name: "Vehicle",
    color: "#f59e0b99",
    cname: "light yellow",
  },
  {
    name: "Home",
    color: "#8b5cf699",
    cname: "light Purple",
  },
  {
    name: "Travel",
    color: "#88489999",
    cname: "light cyane",
  },

  {
    name: "Other",
    color: "#F9FAFB",
    cname: "light yellow",
  },
];

// Income vs Expense Chart
const incomeExpenseCtx = document
  .getElementById("incomeExpenseChart")
  .getContext("2d");
new Chart(incomeExpenseCtx, {
  type: "bar",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Income",
        data: [85000, 82000, 88000, 85000, 85000, 90000],
        backgroundColor: "rgba(59, 130, 246, 0.5)",
        borderColor: "rgb(59, 130, 246)",
        borderWidth: 1,
      },
      {
        label: "Expense",
        data: [45000, 48000, 42000, 49000, 45000, 47000],
        backgroundColor: "rgba(239, 68, 68, 0.5)",
        borderColor: "rgb(239, 68, 68)",
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

// Investment Distribution Chart
const investmentCtx = document
  .getElementById("investmentChart")
  .getContext("2d");
new Chart(investmentCtx, {
  type: "doughnut",
  data: {
    labels: ["Stocks", "Mutual Funds", "Fixed Deposits", "Gold", "PPF"],
    datasets: [
      {
        data: [30, 25, 20, 15, 10],
        backgroundColor: [
          "rgba(59, 130, 246, 0.5)",
          "rgba(16, 185, 129, 0.5)",
          "rgba(245, 158, 11, 0.5)",
          "rgba(139, 92, 246, 0.5)",
          "rgba(236, 72, 153, 0.5)",
        ],
        borderColor: [
          "rgb(59, 130, 246)",
          "rgb(16, 185, 129)",
          "rgb(245, 158, 11)",
          "rgb(139, 92, 246)",
          "rgb(236, 72, 153)",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "right",
      },
    },
  },
});
