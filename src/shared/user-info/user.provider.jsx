import { UserContext } from "./user.context";
import { useEffect, useState } from "react";
import { getUserData } from "../../APP/fetch/fetch-functions";

function UserProvider({ children }) {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    //obtengo el token del session
    const token = localStorage.getItem("token");

    //hacer un get para tener los datos del usuario
    async function fetchData(token) {
      const userdata = await getUserData(token);
      setUserData(userdata);
    }
    fetchData(token);
  }, []);

  return (
    <UserContext.Provider value={[userData, setUserData]}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
