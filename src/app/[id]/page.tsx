import { CharacterDetails } from "@/src/features";
import { Metadata } from "next";

interface PageProps {
  params: Promise<{ id: string }>;
}

export const metadata: Metadata = {
  title: "Character Details",
  description: "...",
};
export default async function CharacterDetailPage({ params }: PageProps) {
  const { id } = await params;
  return <CharacterDetails id={id} />;
}
