import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/40 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-white tracking-wide"
        >
          AI<span className="text-purple-500">Thumb</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 text-white font-medium">
          <Link to="/dashboard" className="hover:text-purple-400 transition">
            Dashboard
          </Link>
          <Link to="/generate" className="hover:text-purple-400 transition">
            Generate
          </Link>
          <Link to="/pricing" className="hover:text-purple-400 transition">
            Pricing
          </Link>
        </div>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link
            to="/login"
            className="px-4 py-2 text-white hover:text-purple-400 transition"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="px-5 py-2 rounded-full bg-purple-600 hover:bg-purple-700 text-white transition"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black/90 backdrop-blur-lg border-t border-white/10">
          <div className="flex flex-col px-6 py-4 space-y-4 text-white">
            <Link to="/dashboard" onClick={() => setOpen(false)}>
              Dashboard
            </Link>
            <Link to="/generate" onClick={() => setOpen(false)}>
              Generate
            </Link>
            <Link to="/pricing" onClick={() => setOpen(false)}>
              Pricing
            </Link>
            <hr className="border-white/10" />
            <Link to="/login" onClick={() => setOpen(false)}>
              Login
            </Link>
            <Link
              to="/register"
              onClick={() => setOpen(false)}
              className="bg-purple-600 text-center py-2 rounded-lg"
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
