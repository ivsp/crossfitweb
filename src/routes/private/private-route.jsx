import { useContext, useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { UserContext } from "../../shared/user-info/user.context";
import { getUserData } from "../../APP/fetch/fetch-functions";

function PrivateRoute({ children }) {
  const location = useLocation();
  const token = localStorage.getItem("token");
  const [userData, setUserData] = useContext(UserContext);

  async function fetchData(token) {
    const userdata = await getUserData(token);
    setUserData(userdata);
  }
  useEffect(() => {
    if (token && token !== undefined) {
      fetchData(token);
    }
  }, []);

  if (!token || token === undefined || userData.type === "user") {
    return <Navigate to={`/`} state={{ from: location }} replace />;
  }

  return children;
}

export default PrivateRoute;
