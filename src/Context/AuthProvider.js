import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import app from "../Firebase/Firebase.init";
const auth = getAuth(app);

export const authContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});

  // user log in function
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // user update
  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  // user sign in function
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // user logOut Function

  const logOut = () => {
    return signOut(auth);
  };

  //   userObserve Function
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = { user, createUser, updateUserProfile, signIn, logOut };
  return (
    <authContext.Provider value={authInfo}>{children}</authContext.Provider>
  );
};

export default AuthProvider;
