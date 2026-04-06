const Company = () => {
  return (
    <div className="max-w-[1600px] mx-auto px-14 py-16 space-y-16">

      {/* Hero Section */}
      <div className="text-center max-w-4xl mx-auto space-y-6">
        <p className="text-sm text-blue-400 tracking-widest">
          FOUNDERS DAY
        </p>

        <h1 className="text-5xl font-bold leading-tight">
          Four Years of Building the{" "}
          <span className="gradient-text">Future of Finance</span>
        </h1>

        <p className="text-gray-400 text-lg">
          From a bold idea in 2022 to powering financial systems across
          25+ regions. This is our story.
        </p>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-3 gap-8">

        <div className="glass-card p-8 rounded-2xl text-center">
          <p className="text-3xl font-bold text-blue-400">600+</p>
          <p className="text-gray-400 mt-2">Companies</p>
        </div>

        <div className="glass-card p-8 rounded-2xl text-center">
          <p className="text-3xl font-bold text-green-400">25+</p>
          <p className="text-gray-400 mt-2">Regions</p>
        </div>

        <div className="glass-card p-8 rounded-2xl text-center">
          <p className="text-3xl font-bold text-purple-400">4 Years</p>
          <p className="text-gray-400 mt-2">Innovation</p>
        </div>

      </div>

      {/* Mission */}
      <div className="glass-card p-10 rounded-2xl text-center max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">
          Our Mission
        </h2>

        <p className="text-gray-400">
          To build secure, compliant, and intelligent financial
          infrastructure that scales with businesses across the world.
        </p>
      </div>

    </div>
  );
};

export default Company;