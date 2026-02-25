import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loginUser } from "../redux/slice/userSlice";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

const Login = () => {
  const loading = useSelector((state) => state.user.loading);

  const navigate = useNavigate();
  const dispatch = useDispatch();


  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "user",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    const {email, password, role} = formData;
    try{
      await dispatch(loginUser({email, password, role})).unwrap();
      navigate("/");
      toast.success("login successfully");

    }
    catch(err){
      console.log(err);
      // navigate("/login");
      toast.error(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black px-4">
      <div className="w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-lg">

        <h2 className="text-3xl font-bold text-white text-center mb-6">
          Welcome Back 👋
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Email */}
          <div>
            <label className="text-gray-300 text-sm">Email</label>
            <input
              type="email"
              name="email"
              required
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 rounded-lg bg-black/40 text-white border border-white/10 focus:outline-none focus:border-purple-500"
              placeholder="you@example.com"
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-gray-300 text-sm">Password</label>
            <input
              type="password"
              name="password"
              required
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 rounded-lg bg-black/40 text-white border border-white/10 focus:outline-none focus:border-purple-500"
              placeholder="••••••••"
            />
          </div>

          {/* Role */}
          <div>
            <label className="text-gray-300 text-sm">Role</label>
            <select
              name="role"
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 rounded-lg bg-black/40 text-white border border-white/10 focus:outline-none focus:border-purple-500"
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          {/* Button */}
          <button
          disabled={loading}
            type="submit"
            className="w-full py-2 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-semibold transition cursor-pointer"
          >
            {loading ? "logging in..." : "Login"}
          </button>
        </form>

        <p className="text-gray-400 text-sm text-center mt-6">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-purple-400 hover:underline">
            Sign up
          </Link>
        </p>

      </div>
    </div>
  );
};

export default Login;
