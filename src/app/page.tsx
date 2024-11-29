"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import Image from "next/image";
import { AppBar, Toolbar, Typography, Button, Avatar } from "@mui/material";
import { useAuth } from "../contexts/AuthContext"; // Assuming you have a custom auth context

export default function Home() {
  const [loading, setLoading] = useState(true); // To handle loading state
  const [user, setUser] = useState(null);
  const router = useRouter();
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        // Redirect to sign-in page if no user is logged in
        router.push("/signin");
      } else {
        setUser(currentUser); // Set the user once authenticated
        setLoading(false); // Set loading to false once the user is authenticated
      }
    });

    return () => unsubscribe(); // Clean up the subscription when the component unmounts
  }, [router]);

  // Show a loading state while checking authentication
  if (loading) {
    return <div>Loading...</div>;
  }

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Redirect to the sign-in page after signing out
        router.push("/signin");
      })
      .catch((error) => {
        console.error("Error signing out: ", error);
      });
  };

  return (
    <div>
      {/* App Bar */}
      <AppBar position="sticky" color="primary">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            My Sleep Hub
          </Typography>
          {user && (
            <div className="flex items-center gap-4">
              <Avatar alt={user.displayName} src={user.photoURL} />
              <Button color="inherit" onClick={handleSignOut}>
                Sign Out
              </Button>
            </div>
          )}
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <header className="flex flex-col items-center gap-4">
          <Image
            src="/sleep-hub-logo.svg" // Replace with your actual logo
            alt="My Sleep Hub Logo"
            width={180}
            height={38}
            priority
          />
          <h1 className="text-3xl font-bold text-center">
            Welcome to My Sleep Hub
          </h1>
        </header>

        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-full max-w-2xl">
          <section className="text-center sm:text-left">
            <h2 className="text-xl font-semibold">Daily Sleep Dashboard</h2>
            <p className="text-gray-600">
              Your personalized dashboard for sleep tips, facts, and progress.
            </p>
          </section>

          <section className="flex flex-col gap-4 items-center sm:items-start w-full">
            <button
              className="rounded-full bg-blue-600 text-white px-6 py-3 hover:bg-blue-700"
              onClick={() => alert("Generate a Sleep Tip")}
            >
              Get a Sleep Tip
            </button>
            <div className="bg-gray-100 p-4 rounded-lg shadow w-full">
              <h3 className="text-lg font-semibold">Sleep Progress</h3>
              <p className="text-gray-500">
                Visualize your circadian rhythm and sleep pressure here.
              </p>
              {/* Placeholder for Circadian Rhythm and Sleep Pressure Graphs */}
              <div className="h-32 bg-white rounded mt-4 flex items-center justify-center text-gray-400">
                Graphs Coming Soon
              </div>
            </div>
          </section>
        </main>

        <footer className="row-start-3 text-sm text-center text-gray-500">
          <p>&copy; 2024 My Sleep Hub. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
