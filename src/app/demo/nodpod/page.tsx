import type { Metadata } from "next";
import NodpodDemo from "./NodpodDemo";

export const metadata: Metadata = {
  title: "NodPod Demo · Bamberg Digital",
  description:
    "Live demo — NodPod wellness brand website blueprint by Bamberg Digital.",
  robots: { index: false, follow: false },
};

export default function NodpodDemoPage() {
  return <NodpodDemo />;
}
