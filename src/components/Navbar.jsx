import "./Navbar.css";

const Navbar = ({ currentPage, setPage }) => {
  const navItems = [
    "Home",
    "Transactions",
    "Analytics",
    "Pricing",
    "Company",
  ];

  return (
    <div className="navbar">

      {/* Logo */}
      <div className="logo">zorvyn</div>

      {/* Center Navigation */}
      <div className="nav-links">
        {navItems.map((item) => (
          <span
            key={item}
            onClick={() => setPage(item)}
            className={currentPage === item ? "active" : ""}
          >
            {item}
          </span>
        ))}
      </div>

      {/* Right CTA */}
      <button className="cta-btn">
        Contact Sales →
      </button>

    </div>
  );
};

export default Navbar;