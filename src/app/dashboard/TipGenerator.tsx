import { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { motion } from "framer-motion"; // Import motion from Framer Motion

// Define the type for a tip
type Tip = {
  id: string;
  tip: string; // Adjust this based on your Firestore structure
};

export default function TipGenerator() {
  const [tips, setTips] = useState<Tip[]>([]); // Explicitly define the type
  const [currentTip, setCurrentTip] = useState<Tip | null>(null); // Handle a single tip

  // Initialize Firestore
  const db = getFirestore();

  // Fetch tips from Firestore
  useEffect(() => {
    const fetchTips = async () => {
      try {
        const tipsCollection = collection(db, "tips");
        const tipsSnapshot = await getDocs(tipsCollection);
        const tipsList = tipsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Tip[]; // Ensure TypeScript recognizes this as an array of `Tip`
        setTips(tipsList);
      } catch (error) {
        console.error("Error fetching tips: ", error);
      }
    };

    fetchTips();
  }, [db]);

  // Handle tip generation
  const generateTip = () => {
    let randomIndex = Math.floor(Math.random() * tips.length);
    if (tips.length > 0) {
      // Ensure the tip is different from the current one
      while (currentTip?.id === tips[randomIndex].id) {
        randomIndex = Math.floor(Math.random() * tips.length);
      }
      setCurrentTip(tips[randomIndex]);
    }
  };

  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h6" component="div" gutterBottom>
          Tip Generator
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Get tips to improve your sleep hygiene.
        </Typography>
        <CardActions>
          <Button
            variant="contained"
            sx={{ backgroundColor: "#fefefe", color: "black" }}
            fullWidth
            onClick={generateTip}
          >
            Generate Tip
          </Button>
        </CardActions>
        {currentTip && (
          <motion.div
            key={currentTip.id} // Ensure motion is triggered for each new tip
            initial={{
              opacity: 0,
              x: -100, // Start from the left (horizontal)
            }}
            animate={{
              opacity: 1,
              x: 0, // Move to the center (horizontal)
            }}
            exit={{
              opacity: 0,
              x: 100, // Move rightward when it disappears
            }}
            transition={{
              duration: 0.6,
              ease: "easeOut", // Smooth easing
            }}
            className="mt-4"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography variant="body1" align="center">
              {currentTip.tip}
            </Typography>
          </motion.div>
        )}
      </CardContent>
    </Card>
  );
}
