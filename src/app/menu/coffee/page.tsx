import { Metadata } from "next";
import { coffeeItems } from "@/data/menu";
import MenuGrid from "@/components/menu/MenuGrid";
import { Coffee } from "lucide-react";

export const metadata: Metadata = {
  title: "Coffee Menu - Café Serenity",
  description: "Premium coffee selections from around the world",
};

export default function CoffeePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center mb-8">
        <Coffee className="w-8 h-8 mr-4" />
        <h1 className="text-4xl font-bold">Coffee Menu</h1>
      </div>
      <p className="text-gray-600 mb-8">Discover our premium coffee selections, crafted with care by our expert baristas.</p>
      <MenuGrid items={coffeeItems} />
    </div>
  );
}
