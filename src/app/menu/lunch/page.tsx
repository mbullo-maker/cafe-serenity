import { Metadata } from "next";
import { lunchItems } from "@/data/menu";
import MenuGrid from "@/components/menu/MenuGrid";

export const metadata: Metadata = {
  title: "Lunch Menu - Café Serenity",
  description: "Satisfying lunch options for every taste",
};

export default function LunchPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Lunch Menu</h1>
      <MenuGrid items={lunchItems} />
    </div>
  );
}
