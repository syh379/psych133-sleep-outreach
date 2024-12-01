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

// Define the type for a fact
type Fact = {
  id: string;
  fact: string;
  imageURL: string;
};

export default function FactGenerator() {
  const [facts, setFacts] = useState<Fact[]>([]); // Explicitly define the type
  const [currentFact, setCurrentFact] = useState<Fact | null>(null); // Handle a single tip

  // Initialize Firestore
  const db = getFirestore();

  // Fetch tips from Firestore
  useEffect(() => {
    const fetchFacts = async () => {
      try {
        const factsCollection = collection(db, "facts");
        const factsSnapshot = await getDocs(factsCollection);
        const factsList = factsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Fact[]; // Ensure TypeScript recognizes this as an array of `Tip`
        setFacts(factsList);
      } catch (error) {
        console.error("Error fetching tips: ", error);
      }
    };

    fetchFacts();
  }, [db]);

  // Handle tip generation
  const generateFact = () => {
    let randomIndex = Math.floor(Math.random() * facts.length);
    if (facts.length > 0) {
      // Ensure the tip is different from the current one
      while (currentFact?.id === facts[randomIndex].id) {
        randomIndex = Math.floor(Math.random() * facts.length);
      }
      setCurrentFact(facts[randomIndex]);
    }
  };

  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h6" component="div" gutterBottom>
          Sleep Fact Generator
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Learn fun, bite-sized facts about sleep!
        </Typography>
        <CardActions>
          <Button
            variant="contained"
            sx={{ backgroundColor: "#fefefe", color: "black" }}
            fullWidth
            onClick={generateFact}
          >
            Generate a Fact
          </Button>
        </CardActions>
        {currentFact && (
          <motion.div
            key={currentFact.id} // Ensure motion is triggered for each new tip
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
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={currentFact.imageURL}
              alt="Sleep Fact"
              className="rounded-xl"
              style={{
                width: "auto",
                height: "220px",
                margin: "1rem",
              }}
            />
            <Typography variant="subtitle1" align="left">
              {currentFact.fact}
            </Typography>
          </motion.div>
        )}
      </CardContent>
    </Card>
  );
}
