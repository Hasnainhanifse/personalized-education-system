import { selectCurrentUser } from "../store";
const { useSelector } = require("react-redux");
const { useLocation, Outlet, Navigate } = require("react-router-dom");
const { default: React } = require("react");

const RequireAuth = () => {
  const user = useSelector(selectCurrentUser);
  const token = user.token;
  const location = useLocation();

  return token ? (
    <Outlet />
  ) : (
    <Navigate to="/auth" state={{ from: location }} replace />
  );
};

export default RequireAuth;
