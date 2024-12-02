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
            go back to sleep. It can result in fatigue, mood disturbances, and a
            decline in overall functioning. People with insomnia may experience
            problems with concentration and performance during the day due to
            inadequate rest. It can be classified into two types:
            <br />
            <strong>Acute insomnia:</strong> Short-term sleep disturbances that
            typically last a few days or weeks, often triggered by stress or
            changes in the environment.
            <br />
            <strong>Chronic insomnia:</strong> Persistent sleep issues that last
            at least three times a week for three months or more.
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
            have higher levels of alertness and lower levels of sleep-promoting
            chemicals like melatonin.
            <br />
            <strong>Hyperactivity in the brain:</strong> Studies suggest that
            the brains of people with insomnia may show heightened activity in
            regions responsible for stress responses, such as the amygdala and
            prefrontal cortex.
            <br />
            <strong>Disrupted circadian rhythm:</strong> The sleep-wake cycle,
            or circadian rhythm, may be misaligned, leading to poor-quality
            sleep at night. These biological changes can perpetuate the cycle of
            insomnia, making it more difficult for individuals to fall and stay
            asleep.
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
            Treatment for insomnia aims to address the underlying causes, reduce
            symptoms, and restore healthy sleep patterns. Common approaches to
            managing insomnia include:
            <br />
            <strong>
              Cognitive Behavioral Therapy for Insomnia (CBT-I):
            </strong>{" "}
            This structured program helps individuals identify and change
            thoughts and behaviors that negatively impact sleep. CBT-I is
            considered one of the most effective long-term treatments.
            <br />
            <strong>Medication:</strong> In some cases, doctors may prescribe
            medications like benzodiazepines, non-benzodiazepine sedatives, or
            melatonin receptor agonists to help individuals fall asleep.
            However, medications are typically used short-term due to the
            potential for dependence.
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
      </div>
    </>
  );
}
