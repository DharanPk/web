import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isLogin = sessionStorage.getItem("isLogin");
  const location = useLocation();

  if (!isLogin) {
    return <Navigate to="/login" state={{ from: location.pathname }} />;
  }
  return children;
};
export default ProtectedRoute;
