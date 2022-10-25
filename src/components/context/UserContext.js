import React from "react";
import { createContext } from "react";
import app from "../../firebase/firebase.config";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

export const AuthContext = createContext();
const auth = getAuth(app);
const UserContext = ({ children }) => {
  const [user, setUser] = useState({});

  const authInfo = { user };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default UserContext;
