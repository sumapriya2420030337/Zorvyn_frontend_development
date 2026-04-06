import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const TransactionTable = () => {
  const { transactions } = useContext(AppContext);

  return (
    <div className="glass-card p-10 rounded-2xl">

      <h2 className="text-xl mb-6">Transactions</h2>

      <table className="w-full text-base">

        <thead>
          <tr className="text-gray-400 border-b border-white/10">
            <th className="py-3 text-left">Date</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Type</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((t) => (
            <tr key={t.id} className="border-b border-white/10 hover:bg-white/5">
              <td className="py-4">{t.date}</td>
              <td>₹{t.amount}</td>
              <td>{t.category}</td>
              <td className={t.type === "income" ? "text-green-400" : "text-red-400"}>
                {t.type}
              </td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
};

export default TransactionTable;