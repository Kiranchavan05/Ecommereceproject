import React, { useState } from "react";

const SignContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

export const SignContextProvider = (props) => {
    const initialToken = localStorage.getItem('token')
  const [token, setToken] = useState(initialToken);

  const loggedIn = token ? true : false;

  const loginHandler = (token) => {
    setToken(token);
    localStorage.setItem('token',token)

  };

  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem('token')
  };

  const signContext = {
    token: token,
    isLoggedIn: loggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <SignContext.Provider value={signContext}>
      {props.children}
    </SignContext.Provider>
  );
};

export default SignContext;