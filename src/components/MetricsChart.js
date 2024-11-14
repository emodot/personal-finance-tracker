import React, { useMemo } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const MetricsChart = ({ transactions }) => {
  const chartData = useMemo(() => {
    const summary = {};

    transactions.forEach(({ date, type, amount }) => {
      const month = new Date(date).toLocaleString("default", {
        month: "short",
        year: "numeric",
      });
      if (!summary[month]) {
        summary[month] = { income: 0, expense: 0 };
      }
      summary[month][type] += amount;
    });

    const labels = Object.keys(summary);
    const incomeData = labels.map((month) => summary[month].income);
    const expenseData = labels.map((month) => summary[month].expense);

    return {
      labels,
      datasets: [
        {
          label: "Income",
          data: incomeData,
          backgroundColor: "#4caf50",
        },
        {
          label: "Expenses",
          data: expenseData,
          backgroundColor: "#f44336",
        },
      ],
    };
  }, [transactions]);

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "Monthly Income vs Expenses" },
    },
  };

  return (
    <div className="p-4 bg-white rounded shadow-md">
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default MetricsChart;
