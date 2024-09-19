"use client";
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  GoogleAuthProvider,
} from "firebase/auth";
import { app } from "../Firebase/firebase.config";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const [user, setUser] = useState("");
  const [userInfo, setUserInfo] = useState([]);
  const [loading, setLoading] = useState(true);
  //email login with password
  const emailLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //update
  const updateInfo = (name, PhotoURL) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: PhotoURL,
    });
  };

  //registration with email and password
  const emailRegistration = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //logOut
  const signOutFromWeb = () => {
    return signOut(auth);
  };

  // useEffect(() => {
  //   fetch(`http://localhost:8099/api/getUser/${user?.email}`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setUserInfo(data);
  //       setTimeout(() => {
  //         setLoading(false);
  //       }, 2000);
  //     });
  // }, [user]);

  //auth information

  //unsubscribe
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      return unsubscribe;
    };
  }, []);

  const authInfo = {
    user,
    userInfo,
    loading,
    emailLogin,
    emailRegistration,
    signOutFromWeb,
    updateInfo,
  };
  //update auth information

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

export function useAuthContext() {
  return useContext(AuthContext);
}
