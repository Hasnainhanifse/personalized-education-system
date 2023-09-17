const { useSelector } = require("react-redux");
const { selectCurrentToken } = require("./slices/authSlice");
const { useLocation, Outlet, Navigate } = require("react-router-dom");
const { default: React } = require("react");

const RequireAuth = () => {
  const token = useSelector(selectCurrentToken);
  const location = useLocation();
  console.log("Require auth token:", token);

  return token ? (
    <Outlet />
  ) : (
    <Navigate to="/auth" state={{ from: location }} replace />
  );
};

export default RequireAuth;
