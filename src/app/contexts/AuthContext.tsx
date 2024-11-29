"use client";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  User,
} from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyAkfssA84YyjUuvdg0oftfl5tc6iSdykK0",
  authDomain: "sleep-outreach-project.firebaseapp.com",
  projectId: "sleep-outreach-project",
  storageBucket: "sleep-outreach-project.firebasestorage.app",
  messagingSenderId: "710566872528",
  appId: "1:710566872528:web:e8706f17914c26aa80a5d5",
  measurementId: "G-GVLRB2FHWL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Google Auth Provider
const provider = new GoogleAuthProvider();

// Define Auth Context type
interface AuthContextType {
  user: User | null;
  signInWithGoogle: () => Promise<void>;
  handleSignOut: () => Promise<void>;
}

// Create Auth Context
const AuthContext = createContext<AuthContextType | null>(null);
export const useAuth = () => useContext(AuthContext);

import { ReactNode } from "react";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  // Handle authentication state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe(); // Clean up listener on unmount
  }, []);

  // Google Sign-In
  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      console.log("Google User:", result.user);
      console.log("Access Token:", credential?.accessToken); // Optional, for additional APIs
    } catch (error) {
      console.error("Google Sign-In Error:", error);
    }
  };

  // Sign Out
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      console.log("User signed out successfully.");
    } catch (error) {
      console.error("Sign-Out Error:", error);
    }
  };

  // Provide context value
  return (
    <AuthContext.Provider value={{ user, signInWithGoogle, handleSignOut }}>
      {children}
    </AuthContext.Provider>
  );
};
