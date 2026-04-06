const Pricing = () => {
  return (
    <div className="max-w-[1400px] mx-auto px-14 py-16 space-y-16">

      {/* Title */}
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-bold">
          Simple, Transparent Pricing
        </h1>
        <p className="text-gray-400">
          Choose a plan that fits your growth stage
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid md:grid-cols-3 gap-8">

        {/* Starter */}
        <div className="glass-card p-8 rounded-2xl">
          <h2 className="text-xl mb-4">Starter</h2>
          <p className="text-3xl font-bold mb-6">₹0</p>

          <ul className="space-y-3 text-gray-400">
            <li>✔ Basic Dashboard</li>
            <li>✔ Limited Transactions</li>
            <li>✔ Email Support</li>
          </ul>
        </div>

        {/* Pro */}
        <div className="glass-card p-8 rounded-2xl border border-blue-500">
          <h2 className="text-xl mb-4">Pro</h2>
          <p className="text-3xl font-bold mb-6">₹999/mo</p>

          <ul className="space-y-3 text-gray-400">
            <li>✔ Advanced Analytics</li>
            <li>✔ Unlimited Transactions</li>
            <li>✔ Priority Support</li>
          </ul>
        </div>

        {/* Enterprise */}
        <div className="glass-card p-8 rounded-2xl">
          <h2 className="text-xl mb-4">Enterprise</h2>
          <p className="text-3xl font-bold mb-6">Custom</p>

          <ul className="space-y-3 text-gray-400">
            <li>✔ Custom Solutions</li>
            <li>✔ Dedicated Manager</li>
            <li>✔ Global Support</li>
          </ul>
        </div>

      </div>

    </div>
  );
};

export default Pricing;