import React from "react";

/**
 * This is not a component, it is an object that contain a component
 */
const AuthContext = React.createContext({
  isLoggedIn: false,
});

export default AuthContext;
