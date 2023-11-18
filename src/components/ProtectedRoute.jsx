import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = (props) => {
  const token = useSelector((state) => state?.auth?.token);

  return !token ? <Navigate to="/auth" replace={true} /> : props?.children;
};

export default ProtectedRoute;
