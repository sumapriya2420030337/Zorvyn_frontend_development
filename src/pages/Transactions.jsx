import TransactionTable from "../components/TransactionTable";

const Transactions = () => {
  return (
    <div className="max-w-[1600px] mx-auto px-14 py-12 space-y-10">

      <h1 className="text-5xl font-bold">
        All <span className="gradient-text">Transactions</span>
      </h1>

      <TransactionTable />

    </div>
  );
};

export default Transactions;