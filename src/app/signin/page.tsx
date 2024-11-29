"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../contexts/AuthContext";
import {
  AppBar,
  Toolbar,
  Avatar,
  IconButton,
  Typography,
  Button,
} from "@mui/material";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

const SignIn = () => {
  const auth = useAuth();
  const user = auth?.user;
  const signInWithGoogle = auth?.signInWithGoogle;
  const handleSignOut = auth?.handleSignOut;
  const router = useRouter();

  useEffect(() => {
    // If the user is logged in, redirect to the homepage
    if (user) {
      router.push("/"); // Redirect to homepage after login
    }
  }, [user, router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {/* Floating Avatar */}
      {user && (
        <div className="fixed top-4 right-4 z-10">
          <Avatar src={user.photoURL || ""} />
        </div>
      )}

      {/* AppBar with Avatar and Sign Out button */}
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: "white",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          color: "black",
        }}
      >
        <Toolbar>
          {user ? (
            <></>
          ) : (
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              Please Sign In to Continue
            </Typography>
          )}
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center flex-grow">
        {!user && (
          <>
            <button
              onClick={signInWithGoogle}
              className="mt-4 p-2 bg-blue-400 text-white rounded"
            >
              Sign In with Google
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default SignIn;
