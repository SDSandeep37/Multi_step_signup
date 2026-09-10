import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar h-25 flex items-center justify-between px-4">
      <div className="logo h-full flex items-center justify-center">
        <img src="/logo.png" alt="Logo" className="h-full" />
      </div>
      <div className="navbar_button">
        <Link to="/signup">
          <button className="w-40 h-12 cursor-pointer text-(--color-text) px-4 py-2 rounded transition-all duration-300 ease-in-out">
            Login
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
