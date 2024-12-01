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
  const [chartData, setChartData] = useState<any>(null); // Store the graph data

  // Generate data for Circadian Rhythm (sine wave) and Sleep Pressure
  const circadianRhythm = new Array(24).fill(0).map(
    (_, i) => 50 + 50 * Math.sin(((i - 6) / 24) * 2 * Math.PI) // Sine function for circadian rhythm (low at 11 PM, high at 12 PM)
  );

  const sleepPressure = [
    200, 150, 110, 90, 75, 70, 65, 60, 75, 90, 105, 120, 130, 140, 150, 158,
    166, 173, 179, 184, 189, 193, 197, 200,
  ];
  // Example graph data for sleep pressure and circadian rhythm throughout 24 hours
  const data = {
    labels: [
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
    ], // Time markers on the X-axis
    datasets: [
      {
        label: "Circadian Rhythm",
        data: circadianRhythm,
        fill: false,
        borderColor: "#FFB6C1",
        tension: 0.1, // Smooth line
        borderWidth: 2,
      },
      {
        label: "Sleep Pressure",
        data: sleepPressure,
        fill: false,
        borderColor: "#90EE90",
        tension: 0.1, // Smooth line
        borderWidth: 2,
      },
    ],
  };

  // Set the chart data when the component is mounted
  useEffect(() => {
    setChartData(data);
  }, []);

  // Chart.js options to make the graph interactive
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
        title: {
          display: false,
          text: "Value",
        },
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
          Sleep Graphs: Circadian Rhythm and Sleep Pressure
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Visualize your sleep progress and circadian rhythm over 24 hours.
        </Typography>

        {/* Conditionally render the chart once chartData is available */}
        {chartData ? (
          <div className="relative">
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
