import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CATALOG, type CatItem } from "@/data/catalog";
import HeroLayout from "@/components/blueprints/HeroLayout";
import SidebarLayout from "@/components/blueprints/SidebarLayout";
import GridLayout from "@/components/blueprints/GridLayout";
import ServicesLayout from "@/components/blueprints/ServicesLayout";
import BookingLayout from "@/components/blueprints/BookingLayout";
import GalleryLayout from "@/components/blueprints/GalleryLayout";
import LocalLayout from "@/components/blueprints/LocalLayout";
import StoreLayout from "@/components/blueprints/StoreLayout";

const SITE = "https://www.bambergdigital.com";

export function generateStaticParams() {
  return CATALOG.map((item) => ({ id: item.id }));
}

export const dynamicParams = false;

function getIndustry(id: string): CatItem | undefined {
  return CATALOG.find((item) => item.id === id);
}

type Params = Promise<{ id: string }>;

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { id } = await params;
  const industry = getIndustry(id);
  if (!industry) {
    return { title: "Blueprint Not Found · Bamberg Digital" };
  }
  const title = `${industry.name} Website Blueprint · Bamberg Digital`;
  const description = `${industry.tag}. A live, production-ready ${industry.name.toLowerCase()} website blueprint by Bamberg Digital — Sacramento web design.`;
  const url = `${SITE}/blueprints/${industry.id}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: "Bamberg Digital",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

const TEMPLATES: Record<
  CatItem["layout"],
  React.ComponentType<{ industry: CatItem }>
> = {
  hero: HeroLayout,
  sidebar: SidebarLayout,
  grid: GridLayout,
  services: ServicesLayout,
  booking: BookingLayout,
  gallery: GalleryLayout,
  local: LocalLayout,
  store: StoreLayout,
};

export default async function BlueprintPage({ params }: { params: Params }) {
  const { id } = await params;
  const industry = getIndustry(id);
  if (!industry) notFound();
  const Template = TEMPLATES[industry.layout];
  return <Template industry={industry} />;
}
