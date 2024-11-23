import { Metadata } from "next";
import { wineAndBeveragesItems as wineItems } from "@/data/menu";
import MenuGrid from "@/components/menu/MenuGrid";

export const metadata: Metadata = {
  title: "Wine & Beverages Menu - Café Serenity",
  description: "Fine wines and premium beverages",
};

export default function WineBeveragesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Wine & Beverages Menu</h1>
      <div className="mb-4 p-4 bg-amber-100 rounded-lg">
        <p className="text-amber-800">Please note: Age verification required for alcoholic beverages.</p>
      </div>
      <MenuGrid items={wineItems} />
    </div>
  );
}
