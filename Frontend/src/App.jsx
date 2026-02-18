import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Generate from "./components/Generate";
export const serverUrl="http://localhost:8080";
import { ToastContainer } from 'react-toastify';
import { useSelector } from "react-redux";
import PrivateNavbar from "./components/PrivateNavbar";
import protectedRoute from "./utils/ProtectedRoute";

function App() {
  const isAuth = useSelector((state) => state.user.userData);
  console.log(isAuth);
  return (
    <>
     <ToastContainer />
        {isAuth ? <PrivateNavbar/> : <Navbar/>}
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/generate" element={<protectedRoute><Generate/></protectedRoute> }/>

        
    </Routes>
    
    </>
  );
}

export default App;
