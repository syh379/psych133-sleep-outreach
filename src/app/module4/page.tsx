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
          Sleep in the Clinic 2: Narcolepsy
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
            Section 1: Prevalence and First Signs of Narcolepsy
          </Typography>
          <Typography variant="body1" color="text.primary" paragraph>
            Narcolepsy is a rare neurological disorder that affects about 1 in
            2,000 people worldwide. The first signs typically appear between the
            ages of 10 and 20 and include excessive daytime sleepiness, sudden
            muscle weakness (cataplexy), and sleep disturbances. Many
            individuals experience an irresistible urge to sleep during the day,
            even after a full night’s sleep, leading to challenges in daily
            activities.
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
            Section 2: Symptoms and Manifestation of Narcolepsy
          </Typography>
          <Typography variant="body1" color="text.primary" paragraph>
            The primary symptoms of narcolepsy include:
            <br />
            <strong>Excessive Daytime Sleepiness:</strong> A constant feeling of
            fatigue, often resulting in involuntary naps. It is usually the
            first symptom to appear and often the most troubling as well.
            <br />
            <strong>Sleep Paralysis:</strong> A temporary inability to move or
            speak when waking up or falling asleep. This usually happens during
            the transition from REM to wakefulness where the brain is partially
            awake but paralysis is still in place.
            <br />
            <strong>Hypnagogic Hallucinations:</strong> Vivid, dream-like
            experiences that occur while falling asleep or waking up. These
            symptoms can significantly cause one distress as they confuse the
            line between reality and dreams. These symptoms can significantly
            impact an individual's ability to function in daily life and often
            require medical attention for proper diagnosis and treatment.
            <br />
            <strong>Cataplexy:</strong> Sudden muscle weakness triggered by
            strong emotions such as laughter, excitement, or anger. The sudden
            loss of muscle control can range from slight weakness to total
            collapse. The trigger is oftentimes strong (positive) emotions.
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
            Section 3: Cause, Mechanism and Treatment of Narcolepsy
          </Typography>
          <Typography variant="body1" color="text.primary" paragraph>
            Orexin is a neurochemical released from the hypothalamus that acts
            as a switch that stimulates or shuts down the brainstem which
            releases neurochemicals that govern the sleep-wake cycles.
            Narcolepsy is associated with a significant loss of orexin brain
            cells as well as orexin receptors in the brain, causing the brain to
            be in an unstable state between wakefulness and sleepiness.
            Treatment options focus on managing symptoms and may include:
            <br />
            <strong>Stimulants:</strong> Medications such as amphetamines to
            improve alertness during the day but have severe side effects. The
            more recent new wake stimulating druge is Provigil.
            <br />
            <strong>Antidepressants:</strong> Drugs that can help with
            cataplexy.
          </Typography>
        </Paper>
      </div>
    </>
  );
}
