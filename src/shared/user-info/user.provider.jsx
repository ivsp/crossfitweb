import { UserContext } from "./user.context";
import { useState } from "react";

function UserProvider({ children }) {
  const [userData, setUserData] = useState({});

  return (
    <UserContext.Provider value={[userData, setUserData]}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
