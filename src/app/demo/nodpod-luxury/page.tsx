import type { Metadata } from "next";
import NodpodLuxuryDemo from "./NodpodLuxuryDemo";

export const metadata: Metadata = {
  title: "NodPod Luxury Demo · Bamberg Digital",
  description:
    "Live demo — NodPod luxury wellness brand website blueprint by Bamberg Digital.",
  robots: { index: false, follow: false },
};

export default function NodpodLuxuryDemoPage() {
  return <NodpodLuxuryDemo />;
}
