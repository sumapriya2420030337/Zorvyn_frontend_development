import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const COLORS = ["#60a5fa", "#34d399", "#f87171", "#fbbf24"];

const Analytics = () => {
  const { transactions } = useContext(AppContext);

  // 📈 Monthly trend (mock grouping)
  const trendData = [
    { name: "Jan", income: 4000, expense: 2400 },
    { name: "Feb", income: 3000, expense: 1398 },
    { name: "Mar", income: 5000, expense: 2800 },
    { name: "Apr", income: 7000, expense: 3908 },
  ];

  // 🥧 Category breakdown
  const categoryMap = {};
  transactions.forEach((t) => {
    if (t.type === "expense") {
      categoryMap[t.category] =
        (categoryMap[t.category] || 0) + t.amount;
    }
  });

  const pieData = Object.keys(categoryMap).map((key) => ({
    name: key,
    value: categoryMap[key],
  }));

  // 💡 Insights
  const totalExpense = transactions
    .filter((t) => t.type === "expense")
    .reduce((acc, t) => acc + t.amount, 0);

  const totalIncome = transactions
    .filter((t) => t.type === "income")
    .reduce((acc, t) => acc + t.amount, 0);

  const highestCategory =
    pieData.length > 0
      ? pieData.reduce((max, curr) =>
          curr.value > max.value ? curr : max
        )
      : null;

  return (
    <div className="max-w-[1600px] mx-auto px-14 py-12 space-y-12">

      {/* Title */}
      <h1 className="text-5xl font-bold">
        Financial <span className="gradient-text">Analytics</span>
      </h1>

      {/* Charts */}
      <div className="grid md:grid-cols-2 gap-10">

        {/* Line Chart */}
        <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl">
          <h2 className="mb-4 text-lg">Monthly Trend</h2>

          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={trendData}>
              <XAxis dataKey="name" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="income"
                stroke="#60a5fa"
                strokeWidth={3}
              />
              <Line
                type="monotone"
                dataKey="expense"
                stroke="#f87171"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
        <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl">
          <h2 className="mb-4 text-lg">Spending Breakdown</h2>

          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                outerRadius={100}
                label
              >
                {pieData.map((entry, index) => (
                  <Cell
                    key={index}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Insights */}
      <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl">
        <h2 className="text-xl mb-6 font-semibold">Insights</h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="p-6 rounded-xl bg-white/5">
            <p className="text-gray-400 text-sm">Total Income</p>
            <p className="text-2xl font-bold text-green-400">
              ₹{totalIncome}
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white/5">
            <p className="text-gray-400 text-sm">Total Expenses</p>
            <p className="text-2xl font-bold text-red-400">
              ₹{totalExpense}
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white/5">
            <p className="text-gray-400 text-sm">
              Highest Spending
            </p>
            <p className="text-2xl font-bold text-blue-400">
              {highestCategory
                ? highestCategory.name
                : "N/A"}
            </p>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Analytics;