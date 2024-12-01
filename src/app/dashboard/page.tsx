"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import Image from "next/image";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Avatar,
  Card,
  CardContent,
  CardActions,
} from "@mui/material";
import TipGenerator from "./TipGenerator";
import SleepGraphs from "./SleepGraphs";

export default function Home() {
  const [loading, setLoading] = useState(true); // To handle loading state
  const router = useRouter();
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        // Redirect to sign-in page if no user is logged in
        router.push("/");
      } else {
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
        router.push("/");
      })
      .catch((error) => {
        console.error("Error signing out: ", error);
      });
  };

  return (
    <div>
      {/* App Bar */}
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: "white",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          color: "black",
        }}
      >
        <Toolbar>
          <Image
            src="/sloth.svg"
            alt="My Sleep Hub Logo"
            width={100}
            height={50}
            priority
          />
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            My Sleep Hub
          </Typography>
          {auth.currentUser && (
            <div className="flex items-center gap-4">
              <Avatar
                alt={auth.currentUser.displayName || ""}
                src={auth.currentUser.photoURL || ""}
              />
              <Button color="inherit" onClick={handleSignOut}>
                Sign Out
              </Button>
            </div>
          )}
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <div className="p-8 sm:p-20 min-h-screen">
        <header className="flex flex-col items-center mb-4">
          <Image
            src="/sloth.svg"
            alt="My Sleep Hub Logo"
            width={300}
            height={100}
            priority
          />
          <h1 className="text-3xl font-bold text-center">
            Hi, {auth.currentUser?.displayName}. Welcome to My Sleep Hub!
          </h1>
        </header>

        <main className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Tip Generator Section */}
          <section className="col-span-1">
            <TipGenerator />
          </section>

          {/* Graphs Section */}
          <section className="col-span-1">
            <SleepGraphs />
          </section>

          {/* Sleep Modules Section */}
          <section className="col-span-1">
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h6" component="div" gutterBottom>
                  Sleep Modules
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Explore in-depth learning resources to optimize your sleep.
                </Typography>
                <div className="mt-4 grid grid-cols-1 gap-4">
                  <Button
                    variant="outlined"
                    fullWidth
                    onClick={() => router.push("/module1")}
                  >
                    Module 1: Understanding Sleep
                  </Button>
                  <Button
                    variant="outlined"
                    fullWidth
                    onClick={() => router.push("/module2")}
                  >
                    Module 2: Sleep Hygiene
                  </Button>
                  <Button
                    variant="outlined"
                    fullWidth
                    onClick={() => router.push("/module3")}
                  >
                    Module 3: Managing Sleep Disorders
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>
        </main>

        <footer className="mt-8 text-center text-gray-500 text-sm">
          &copy; 2024 My Sleep Hub. All rights reserved.
        </footer>
      </div>
    </div>
  );
}
