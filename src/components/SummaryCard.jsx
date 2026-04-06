import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const SummaryCard = ({ title }) => {
  const { transactions } = useContext(AppContext);

  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((a, b) => a + b.amount, 0);

  const expense = transactions
    .filter((t) => t.type === "expense")
    .reduce((a, b) => a + b.amount, 0);

  const balance = income - expense;

  const value =
    title === "Income"
      ? income
      : title === "Expenses"
      ? expense
      : balance;

  return (
    <div className="glass-card p-8 rounded-2xl">
      <p className="text-gray-400">{title}</p>
      <h2 className="text-3xl font-bold mt-2">₹{value}</h2>
    </div>
  );
};

export default SummaryCard;