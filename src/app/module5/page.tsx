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
          Sleep in the Clinic 3: Parasomnias, REM Behavioral Disorder, & Fatal
          Familial Insomnia
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
            Section 1: Parasomnias - Types, cause, & a case of homicidal
            somnambulism
          </Typography>
          <Typography variant="body1" color="text.primary" paragraph>
            Parasomnias are a group of sleep disorders that involve abnormal
            behaviors during sleep. These include sleepwalking, sleep talking,
            sleep texting, sleep eating, night terrors, restless legs syndrome,
            and, in rare cases, homicidal somnambulism. Parasomias occur more
            often in children (perhaps becasue children experience more deep
            NREM sleep) but can also occur in adults with stress and depression.
          </Typography>
          <br />
          <Typography variant="body1" color="text.primary" paragraph>
            Parasomnias are caused by inappropriate activation of the fight or
            flight response in the nervous system, jolting the person awake from
            deep sleep. This can be triggered by stress, anxiety, or other
            factors. Parasomnias can be disruptive to sleep and may lead to
            daytime fatigue and other health issues.
          </Typography>
          <br />
          <Typography variant="body1" color="text.primary" paragraph>
            Homicidal somnambulism is a condition in which a person engages in
            violent acts during sleep, without conscious awareness. In one
            famous case, a man was convicted of murder after allegedly killing
            his parents-in-law while in a sleepwalking state.
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
            Section 2: REM sleep behavioral disorder - Symptoms, features, and
            cause
          </Typography>
          <Typography variant="body1" color="text.primary" paragraph>
            REM Sleep Behavioral Disorder (RBD) is a condition in which a person
            physically acts out their dreams during the Rapid Eye Movement (REM)
            stage of sleep. This may include violent movements, talking,
            yelling, punching, kicking, or even attempting to leave the bed.
            Symptoms of RBD can be severe, and some individuals may injure
            themselves or their bed partners. The condition is believed to occur
            due to a failure in the normal paralysis that occurs during REM
            sleep, allowing the individual to physically act out their dreams.
            RBD is often associated with neurodegenerative disorders, such as
            Parkinson's disease, and is considered an early warning sign of
            these conditions.
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
            Section 3: Fatal Familial Insomnia - Description, mechanisms, and
            example
          </Typography>
          <Typography variant="body1" color="text.primary" paragraph>
            Fatal Familial Insomnia (FFI) is a rare genetic disorder that causes
            severe sleep disturbances, eventually leading to total insomnia and
            death. FFI is caused by a mutation in the prion protein gene,
            leading to progressive damage in the thalamus, the part of the brain
            responsible for regulating sleep. Symptoms begin with difficulty
            sleeping, followed by progressive insomnia, memory loss,
            hallucinations, and motor dysfunction. As the disease progresses,
            individuals lose the ability to sleep entirely, leading to severe
            physical and cognitive decline. There is currently no cure for FFI,
            and it is fatal within months to a few years after onset.
          </Typography>
        </Paper>
      </div>
    </>
  );
}
