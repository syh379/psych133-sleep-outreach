"use client";
import { motion, useScroll } from "framer-motion";
import { Typography, IconButton, Paper, Button } from "@mui/material";
import ArrowBack from "@mui/icons-material/ArrowBack"; // Import the back arrow icon
import ArrowForward from "@mui/icons-material/ArrowForward"; // Import the forward arrow icon
import { useRouter } from "next/navigation"; // For navigation

export default function Page() {
  const router = useRouter(); // Next.js router for navigation
  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: "12px", // Adjust the height as needed
          width: "100%", // Full width of the page
          background: "linear-gradient(to right, blue, purple, pink)",
          transformOrigin: "0%",
          zIndex: 1000, // Ensure it's above all other elements
          scaleX: scrollYProgress,
        }}
      />

      {/* Back Button */}
      <div
        style={{
          position: "fixed",
          top: "30px",
          left: "24px",
          zIndex: 10,
        }}
      >
        <IconButton
          onClick={() => router.push("/dashboard")}
          aria-label="Back to Dashboard"
          style={{
            backgroundColor: "#fff",
            borderRadius: "50%",
            padding: "8px",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          <ArrowBack />
        </IconButton>
      </div>

      {/* Page Content */}
      <div
        style={{
          margin: "100px auto",
          maxWidth: "1000px",
          padding: "20px",
          backgroundColor: "#f9f9f9",
          borderRadius: "8px",
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Typography variant="h3" align="center" gutterBottom>
          Dreaming 2: Experimentally Probing the Dreaming Brain
        </Typography>

        {/* Section 1 */}
        <Paper
          style={{
            marginBottom: "20px",
            padding: "20px",
            backgroundColor: "#fff",
            borderRadius: "8px",
            boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Typography variant="h4" component="h2" gutterBottom>
            Section 1: Manipulating dreams - the failed history
          </Typography>
          <Typography variant="body1" color="text.primary" paragraph>
            For many decades, scientists have attempted to manipulate and
            control dreams, but progress has been slow and largely unsuccessful.
            Researchers tried to manipulate dreams by exposing participants to
            specific stimuli before sleep, such as light or specific images,
            hoping to influence their dream content. However, the results were
            largely inconclusive.
          </Typography>
        </Paper>

        {/* Section 2 */}
        <Paper
          style={{
            marginBottom: "20px",
            padding: "20px",
            backgroundColor: "#fff",
            borderRadius: "8px",
            boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Typography variant="h4" component="h2" gutterBottom>
            Section 2: Sleep-onset, amnesiacs and video games
          </Typography>
          <Typography variant="body1" color="text.primary" paragraph>
            The transition from wakefulness to sleep is a mysterious period
            known as the hypnagogic state. During this phase, people experience
            vivid sensory perceptions, such as sights, sounds, smells, tastes,
            and feelings of movement. New research shows that playing video
            games before sleep can influence the types of dreams we experience.
            One study had subjects play 7 hours of tetris over 3 days in morning
            and evening sessions. Each night they were repetitively woken up
            just after falling asleep and are asked to report their dreams.
            Participants who are novices to the game reported that they often
            dream about the game's content in some abstract form, demonstrating
            that their brain continued to process the images and themes after
            they’ve fallen asleep. Experts in Tetris tend to dream less about it
            in their hynogogic state. Most surprisingly, amnesic patients, who
            cannot form declarative memory of the game, still reported dreaming
            about it, potentially suggesting that these memories might be stored
            elsewhere in the brain. Thus, sleep-onset dreams do not ome from
            classical memory store of the hippocampus. Lastly, it is crucial to
            note that the dreams are more about the distilled and most salient
            aspects of the game. Overall, these studies show how our cognitive
            activity during the day can bleed into our sleep, especially in the
            early stages of falling asleep.
          </Typography>
        </Paper>

        {/* Section 3 */}
        <Paper
          style={{
            marginBottom: "20px",
            padding: "20px",
            backgroundColor: "#fff",
            borderRadius: "8px",
            boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Typography variant="h4" component="h2" gutterBottom>
            Section 3: Dreaming for overnight therapy
          </Typography>
          <Typography variant="body1" color="text.primary" paragraph>
            Studies also found that dreams are a vital therapeutic tool.
            Research shows that during sleep, our brains process and work
            through emotional and psychological challenges, almost like an
            overnight therapy session. Dreaming helps us process intense
            emotions and experiences, especially those that might be difficult
            to confront in the waking state. Over night, dreams reduces the
            strength of emotions associated with a memory, leaving the
            informative parts of it. Otherwise, every time we recall a past
            event, it will trigger a full-on emotional response, which could be
            very stressful. People who experience nightmares may benefit from
            their dreams by gradually processing and reducing the emotional
            charge of traumatic events.
          </Typography>
          <br />
          <Typography variant="body1" color="text.primary" paragraph>
            Research studies done on the therapeutic effects of dreams have
            found that the electrical quality of REM sleep is correlated with
            emotion dissipation in dreams. Participants, after being exposed
            images ranging from neutral to strongly aversive stimulus, were
            found to have a higher emotional response to the aversive images if
            they stayed awake and retested. The study found that the emotional
            response was significantly reduced after a night of sleep,
            suggesting that the brain processes and reduces the emotional charge
            of the memory during sleep. This process is crucial for emotional
            regulation and mental health.
          </Typography>
        </Paper>
        {/* Navigation Buttons */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "20px",
          }}
        >
          <Button
            variant="contained"
            style={{
              backgroundColor: "white",
              color: "black",
            }}
            onClick={() => router.push("/module1")}
          >
            <ArrowBack /> Dreaming 1
          </Button>
          <Button
            variant="contained"
            style={{
              backgroundColor: "white",
              color: "black",
            }}
            onClick={() => router.push("/module3")}
          >
            Sleep in the Clinic 1 <ArrowForward />
          </Button>
        </div>
      </div>
    </>
  );
}
