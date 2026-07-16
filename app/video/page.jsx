import VideoClient from "./VideoClient";

export const metadata = {
  title: "Videos",
  description: "Watch videos of our products, factory, and service center.",
};

const videoCategories = [
  {
    title: "Factory & Operations",
    videos: [
      { id: 1, title: "Inside Our Manufacturing Facility" },
      { id: 2, title: "Quality Control Processes" },
    ],
  },
  {
    title: "Product Demonstrations",
    videos: [
      { id: 3, title: "OES Spectrometer in Action" },
      { id: 4, title: "Handheld XRF Quick Guide" },
      { id: 5, title: "Carbon Sulfur Analyzer Setup" },
      { id: 7, title: "ICP Demonstration" },
      { id: 8, title: "Mobile Metal Analyser Tutorial" },
      { id: 9, title: "EDXRF Overview" },
    ],
  },
  {
    title: "Service Center",
    videos: [{ id: 6, title: "Routine Maintenance Tutorial" }],
  },
];

export default function VideoPage() {
  return <VideoClient videoCategories={videoCategories} />;
}
