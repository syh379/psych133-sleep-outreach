"use client";
import { motion, useScroll } from "framer-motion";
import { Typography, IconButton, Paper } from "@mui/material";
import ArrowBack from "@mui/icons-material/ArrowBack"; // Import the back arrow icon
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
          Dreaming 1: What are Dreams? & Lucid Dreaming
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
            Section 1: When do we dream?
          </Typography>
          <Typography variant="body1" color="text.primary" paragraph>
            Dreaming primarily occurs during REM (Rapid Eye Movement) sleep, a
            stage characterized by heightened brain activity. During REM, the
            brain's visual, motor, emotional, and memory centers are activated,
            while the rational thinking areas are deactivated. REM cycles
            typically occur every 90 minutes during sleep, becoming longer and
            more intense throughout the night. Non-REM stages are also crucial.
            Studies found that 40-70% of participants also report dreaming
            during stage 2 NREM sleep while 0-20% of participants report
            dreaming during deep NREM sleep.
          </Typography>
          <Typography variant="body1" color="text.primary" paragraph>
            During dreams, we experience vivid, emotional, and often bizarre
            events. We also exhibit muscle paralysis, preventing us from acting
            out our dreams. Besides, we might experience hallucinations,
            delusions, a sense of disorientation, quick mood swings, and
            amnesia.
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
            Section 2: Freud - The Interpretation of Dreams
          </Typography>
          <Typography variant="body1" color="text.primary" paragraph>
            Sigmund Freud is the father of modern dream analysis and
            psychoanalysis. He published the seminal "Interpretation of Dreams"
            in 1900 where he discussed his theory of "Disguised Censorship".
            Sigmund Freud posited that dreams reveal the unconscious mind's
            desires, offering a symbolic narrative to repressed wishes. He
            warned that if these repressed wishes were expressed in the dreams
            in their raw form, they would be so disturbing that they would wake
            you up. Therefore, he suggested that to prevent this, dreams must be
            censored or disguised in abstract ways to encrypt the true message.
            The biggest criticism to Freud's theory about dreaming is that his
            theory is not testable, meaning that it cannot be proven right or
            wrong.
          </Typography>
          <Typography variant="body1" color="text.primary" paragraph>
            Today, scientists believe that dreams are less about veiled desires
            and more about emotional processing, memory consolidation, and
            creativity. During REM sleep, the brain integrates and distills
            learned information, helping us navigate future challenges and
            fueling abstract thought processes, far beyond Freud’s
            interpretation.
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
            Section 3: Beyond Dreaming - Lucidity
          </Typography>
          <Typography variant="body1" color="text.primary" paragraph>
            Lucid dreaming occurs when the dreamer becomes aware they are
            dreaming, offering a rare opportunity to control the dream’s
            narrative. Lucid dreaming bridges conscious control with the natural
            chaos of REM sleep and well-practiced lucid dreamers can determine
            what and how they dream.
          </Typography>
          <Typography variant="body1" color="text.primary" paragraph>
            In research, studies related to lucid dreaming are done by asking
            lucid dreamers to perform specific tasks in their dreams, such as
            moving their eyes in a specific pattern or imagining that they are
            clenching their fists. These tasks are recorded by eye movement
            sensors and fMRIs, confirming that the dreamer is indeed lucid.
            Techniques like reality checks, keeping a dream journal, and
            mindfulness practices are known to improve the frequency and clarity
            of lucid dreams, pushing the boundaries of what we know about the
            dreaming brain.
          </Typography>
        </Paper>
      </div>
    </>
  );
}
