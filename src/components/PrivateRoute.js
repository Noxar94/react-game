import { authenticate } from "../helpers/index";
import { Navigate } from "react-router-dom";

// auth to privateRoute
const PrivateRoute = ({ children }) => {
  const auth = authenticate();
  return auth ? children : <Navigate to="/" />;
};
export default PrivateRoute;
