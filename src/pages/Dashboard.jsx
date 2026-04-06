import SummaryCard from "../components/SummaryCard";
import TransactionTable from "../components/TransactionTable";
import RoleSwitcher from "../components/RoleSwitcher";

const Dashboard = () => {
  return (
    <div className="max-w-[1600px] mx-auto px-14 py-12 space-y-12">

      <div className="flex justify-between items-center">
        <h1 className="text-5xl font-bold">
          Building <span className="gradient-text">Secure</span> Financial Systems
        </h1>
        <RoleSwitcher />
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <SummaryCard title="Balance" />
        <SummaryCard title="Income" />
        <SummaryCard title="Expenses" />
      </div>

      <TransactionTable />

    </div>
  );
};

export default Dashboard;