import { Metadata } from "next";
import { pastriesItems } from "@/data/menu";
import MenuGrid from "@/components/menu/MenuGrid";

export const metadata: Metadata = {
  title: "Pastries Menu - Café Serenity",
  description: "Freshly baked pastries and desserts",
};

export default function PastriesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Pastries Menu</h1>
      <MenuGrid items={pastriesItems} />
    </div>
  );
}
