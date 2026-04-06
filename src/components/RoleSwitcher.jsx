import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const RoleSwitcher = () => {
  const { role, setRole } = useContext(AppContext);

  return (
    <div className="flex gap-2 bg-white/5 p-1 rounded-xl border border-white/10">
      <button
        onClick={() => setRole("viewer")}
        className={`px-4 py-1 rounded-lg ${
          role === "viewer"
            ? "bg-blue-500 text-white"
            : "text-gray-400"
        }`}
      >
        Viewer
      </button>

      <button
        onClick={() => setRole("admin")}
        className={`px-4 py-1 rounded-lg ${
          role === "admin"
            ? "bg-blue-500 text-white"
            : "text-gray-400"
        }`}
      >
        Admin
      </button>
    </div>
  );
};

export default RoleSwitcher;