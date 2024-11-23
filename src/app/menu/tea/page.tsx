import { Metadata } from "next";
import { teaItems } from "@/data/menu";
import MenuGrid from "@/components/menu/MenuGrid";

export const metadata: Metadata = {
  title: "Tea Menu - Café Serenity",
  description: "Aromatic teas and herbal infusions",
};

export default function TeaPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Tea Menu</h1>
      <MenuGrid items={teaItems} />
    </div>
  );
}
