import React, { useEffect, useState } from 'react';
import { AuthContext } from '../AuthContext/AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from '../../Firebase/firebase.config'


const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);




  // Register
  const register = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
  }

  // Log in
  const logIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }

  // Log out
  const logOut = () => {
    return signOut(auth)
  }

  // Forget Password
  const forgetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  }

  // Update user
  const updateUser = (updatedData) => {
    return updateProfile(auth.currentUser, updatedData)
  }


  // Observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, [])

  // Google Login
  const provider = new GoogleAuthProvider();
  const googleLogin = () => {
    return signInWithPopup(auth, provider)
  }


  const registerInfo = {
    register,
    logIn,
    logOut,
    forgetPassword,
    updateUser,
    googleLogin,
    user,
    setUser,
    loading,
    setLoading
  }
  return (
    <AuthContext.Provider value={registerInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;