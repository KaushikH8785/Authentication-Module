import { createContext, useContext } from "react";
import { auth } from "../firebase";

const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const getUser = () => {
    return auth.currentUser;
  };

  return (
    <UserContext.Provider value={getUser()}>{children}</UserContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(UserContext);
};
