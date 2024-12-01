"use client";
import { Card, CardContent, Typography, Button } from "@mui/material";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useRouter } from "next/navigation";

export default function ModuleCarousel() {
  const router = useRouter();
  const modules = {
    title: "Dreaming & Disorders",
    description:
      "Explore in-depth learning resources on dreaming and sleep-related disorders.",
    lessons: [
      {
        label: "Dreaming 1: What are Dreams? & Lucid Dreaming",
        path: "/module1",
      },
      {
        label: "Dreaming 2: Experimentally Probing the Dreaming Brain",
        path: "/module2",
      },
      { label: "Sleep in the Clinic 1: Insomnia", path: "/module3" },
      { label: "Sleep in the Clinic 2: Narcolepsy", path: "/module4" },
      {
        label:
          "Sleep in the Clinic 3: Parasomnias, REM Behavioral Disorder, & Fatal Familial Insomnia",
        path: "/module5",
      },
    ],
  };

  return (
    <Card
      variant="outlined"
      style={{
        minWidth: "300px",
      }}
    >
      <CardContent>
        <Typography variant="h6" component="div" gutterBottom>
          {modules.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {modules.description}
        </Typography>
        <div className="mt-4 grid grid-cols-5 gap-4">
          {modules.lessons.map((lesson, lessonIndex) => (
            <Button
              key={lessonIndex}
              variant="outlined"
              fullWidth
              onClick={() => router.push(lesson.path)}
            >
              {lesson.label}
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
