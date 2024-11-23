import { Metadata } from "next";
import { soupItems } from "@/data/menu";
import MenuGrid from "@/components/menu/MenuGrid";

export const metadata: Metadata = {
  title: "Soups Menu - Café Serenity",
  description: "Homemade soups and broths",
};

export default function SoupsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Soups Menu</h1>
      <MenuGrid items={soupItems} />
    </div>
  );
}
