import { Metadata } from "next";
import { pizzaItems } from "@/data/menu";
import MenuGrid from "@/components/menu/MenuGrid";

export const metadata: Metadata = {
  title: "Pizza Menu - Café Serenity",
  description: "Artisanal pizzas with premium toppings",
};

export default function PizzaPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Pizza Menu</h1>
      <MenuGrid items={pizzaItems} />
    </div>
  );
}
