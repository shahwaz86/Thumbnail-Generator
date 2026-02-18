import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const protectedRoute = ({Children}) =>{



    const isAuth = useSelector((state) => state.user.userData);

    return isAuth ? Children : <Navigate to="/login"/>;
}

export default protectedRoute;