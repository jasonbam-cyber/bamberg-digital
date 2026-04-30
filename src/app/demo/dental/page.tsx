import type { Metadata } from "next";
import DentalDemo from "./DentalDemo";

export const metadata: Metadata = {
  title: "Dental Demo · Bamberg Digital",
  description:
    "Live demo — dental practice website blueprint by Bamberg Digital.",
  robots: { index: false, follow: false },
};

export default function DentalDemoPage() {
  return <DentalDemo />;
}
