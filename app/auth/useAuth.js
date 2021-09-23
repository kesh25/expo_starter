import { useContext } from "react";
// import jwtDecode from "jwt-decode";

import AuthContext from "./context";
import authStorage from "./storage";
import apiClient from './../api/client';

export default useAuth = () => {
  const { user, setUser } = useContext(AuthContext);

  const logIn = (user, authToken) => {
    // const user = jwtDecode(authToken);
    setUser(user);
    
    authStorage.storeToken(authToken);
  };

  const logOut = () => {
    setUser(null);
    authStorage.removeToken();
  };

  const checkUser = (user) => {
    setUser(user); 
  }

  return { user, logIn, logOut };
};
