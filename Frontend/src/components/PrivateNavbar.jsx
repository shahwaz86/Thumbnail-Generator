import { Link } from "react-router-dom";
// import { logout } from "../utils/auth";
import { logoutUser } from "../redux/slice/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const PrivateNavbar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = async() =>{
        try{
           await  dispatch(logoutUser()).unwrap();
        navigate("/");
        toast.success("logout successfully");

        }
        catch(err){
            toast.err(err?.message);

        }
    }
 

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-white">
          AI<span className="text-purple-500">Thumb</span>
        </Link>

        {/* Links */}
        <div className="hidden md:flex items-center space-x-8 text-white">
          <Link to="/generate" className="hover:text-purple-400">
            Generate
          </Link>
          <Link to="/dashboard" className="hover:text-purple-400">
            Dashboard
          </Link>
        </div>

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg text-white transition cursor-pointer"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default PrivateNavbar;
