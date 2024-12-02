"use client";
import { motion, useScroll } from "framer-motion";
import { Typography, IconButton, Paper, Button } from "@mui/material";
import ArrowBack from "@mui/icons-material/ArrowBack"; // Import the back arrow icon
import { useRouter } from "next/navigation"; // For navigation
import ArrowForward from "@mui/icons-material/ArrowForward";

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
          Sleep in the Clinic 1: Insomnia
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
            Section 1: What is insomnia?
          </Typography>
          <Typography variant="body1" color="text.primary" paragraph>
            Insomnia is a sleep disorder characterized by difficulty falling
            asleep, staying asleep, or waking up too early and not being able to
            go back to sleep. It can result in distress, fatigue, mood
            disturbances, and a decline in overall functioning. People with
            insomnia may experience problems with concentration and performance
            during the day due to inadequate rest. Chronic insomnia refers to
            persistent sleep issues that last at least three times a week for
            three months or more. Insomnia is more common than we think - ~10%
            of the general population meet diagnostic criteria for insomnia.
            There are 2 broad tpes of insomnia:
            <br />
            <strong>Sleep onset insomnia:</strong> This type of insomnia is
            characterized by difficulty falling asleep.
            <br />
            <strong>Sleep maintenance insomnia:</strong> This type of insomnia
            involves difficulty staying asleep, resulting in frequent awakenings
            throughout the night.
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
            Section 2: Biological changes in insomnia
          </Typography>
          <Typography variant="body1" color="text.primary" paragraph>
            Insomnia is often associated with various biological changes that
            affect the sleep-wake cycle. These changes may involve disruptions
            in the regulation of the body’s circadian rhythms, neurotransmitter
            imbalances, and alterations in the brain’s neural activity. Research
            has shown that insomnia can involve:
            <br />
            <strong>Increased arousal:</strong> Individuals with insomnia may
            have higher levels of brain alertness related to the irregular
            release of neurotransmitters from the brainstem.
            <br />
            <strong>Hyper-emotional activity in the brain:</strong> Studies
            suggest that the brains of people with insomnia may show heightened
            activity in regions responsible for stress responses (elevated
            cortisol level in the evening and early morning), such as the
            amygdala and prefrontal cortex. A major factor in this is the
            failure of the thalamus to inhibit flow of sensory information
            during sleep.
            <br />
            <strong>Excessive memory activation:</strong> Insomnia can lead to
            increased activation of the hippocampus, which is responsible for
            memory formation and consolidation.
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
            Section 3: Treatment of insomnia
          </Typography>
          <Typography variant="body1" color="text.primary" paragraph>
            Common treatments to insomnia include medication and psychological &
            behavioral therapy.
            <br />
            <strong>Medication:</strong> One of the earlier medications used to
            treat insomnia were sleeping pills known as sedative hypnotics.
            These medications work by slowing down the nervous system, inducing
            sleep. However, they can be habit-forming and may have side effects.
            Newer medications, such as dual orexin receptor antagonists (DORAs),
            are also available and can block signals in the brain that stimulate
            wakefulness, inducing natural sleep.
            <br />
            <strong>
              Cognitive Behavioral Therapy for Insomnia (CBT-I):
            </strong>{" "}
            This structured program helps individuals identify and change
            thoughts and behaviors that negatively impact sleep. The goal is to
            restore the patients' confidence to control their sleep. CBT-I is
            considered one of the most effective long-term treatments and its
            impacts are long lasting even after treatment ends.
            <br />
            <strong>Sleep hygiene practices:</strong> Improving sleep
            environment and habits, such as maintaining a consistent sleep
            schedule, reducing screen time before bed, and creating a relaxing
            bedtime routine, can help improve sleep quality. Additionally,
            lifestyle changes like reducing caffeine and alcohol intake,
            managing stress, and engaging in physical activity can also aid in
            the treatment of insomnia.
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
            onClick={() => router.push("/module2")}
          >
            <ArrowBack /> Dreaming 2
          </Button>
          <Button
            variant="contained"
            style={{
              backgroundColor: "white",
              color: "black",
            }}
            onClick={() => router.push("/module4")}
          >
            Sleep in the Clinic 2 <ArrowForward />
          </Button>
        </div>
      </div>
    </>
  );
}
