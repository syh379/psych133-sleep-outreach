import { useState, useEffect } from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register necessary Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function SleepGraphs() {
  const [chartData, setChartData] = useState<any>(null);

  const circadianRhythm = new Array(24)
    .fill(0)
    .map((_, i) => 50 + 50 * Math.sin(((i - 6) / 24) * 2 * Math.PI));

  const sleepPressure = [
    200, 150, 110, 90, 75, 70, 65, 60, 75, 90, 105, 120, 130, 140, 150, 158,
    166, 173, 179, 184, 189, 193, 197, 200,
  ];

  useEffect(() => {
    const now = new Date();
    const currentHour = now.getHours();

    // Subset the data up to the current hour
    const circadianSubset = circadianRhythm.slice(0, currentHour + 1);
    const sleepPressureSubset = sleepPressure.slice(0, currentHour + 1);

    const labels = [
      "12 AM",
      "1 AM",
      "2 AM",
      "3 AM",
      "4 AM",
      "5 AM",
      "6 AM",
      "7 AM",
      "8 AM",
      "9 AM",
      "10 AM",
      "11 AM",
      "12 PM",
      "1 PM",
      "2 PM",
      "3 PM",
      "4 PM",
      "5 PM",
      "6 PM",
      "7 PM",
      "8 PM",
      "9 PM",
      "10 PM",
      "11 PM",
    ];

    setChartData({
      labels,
      datasets: [
        {
          label: "Realtime Circadian Rhythm",
          data: circadianSubset,
          fill: true,
          borderColor: "#E38E49", // Bright orange for realtime
          tension: 0.1,
          borderWidth: 3,
        },
        {
          label: "Realtime Sleep Drive",
          data: sleepPressureSubset,
          fill: true,
          borderColor: "#8174A0", // Bright blue for realtime
          tension: 0.1,
          borderWidth: 3,
        },
        {
          label: "Circadian Rhythm Trajectory",
          data: circadianRhythm,
          fill: false,
          borderColor: "#FFD2A0", // Light pink for trajectory
          borderDash: [5, 5], // Dashed line for distinction
          tension: 0.1,
          borderWidth: 1.5,
        },
        {
          label: "Sleep Drive Trajectory",
          data: sleepPressure,
          fill: false,
          borderColor: "#A888B5", // Light blue for trajectory
          borderDash: [5, 5], // Dashed line for distinction
          tension: 0.1,
          borderWidth: 1.5,
        },
      ],
    });
  }, []);

  const options = {
    responsive: true,
    scales: {
      x: {
        title: {
          display: true,
          text: "Time (24-hour)",
        },
      },
      y: {
        display: false,
      },
    },
    plugins: {
      tooltip: {
        enabled: false,
        intersect: false,
      },
    },
  };

  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h6" component="div" gutterBottom>
          Sleep Graphs: Circadian Rhythm and Sleep Drive
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Visualize your sleep drive and circadian rhythm over 24 hours.
        </Typography>
        {chartData ? (
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "300px",
              display: "flex",
              justifyContent: "center", // Center horizontally
              alignItems: "center", // Center vertically
              marginTop: "0.5rem",
            }}
          >
            <Line data={chartData} options={options} />
          </div>
        ) : (
          <div className="h-32 bg-gray-100 rounded mt-4 flex items-center justify-center text-gray-400">
            Loading graph...
          </div>
        )}
      </CardContent>
    </Card>
  );
}
