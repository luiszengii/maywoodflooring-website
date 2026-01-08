"use client";

import { Card } from "@/components/ui/Card";
import Link from "next/link";

const categories = [
  {
    title: "Timber Flooring",
    image: "/floors/timber-flooring.jpg",
    link: "/products/timber",
  },
  {
    title: "Hybrid Flooring",
    image: "/floors/hybrid-flooring.jpg",
    link: "/products/hybrid",
  },
  {
    title: "Laminate Flooring",
    image: "/floors/laminate-flooring.jpg",
    link: "/products/laminate",
  },
  {
    title: "Vinyl Flooring",
    image: "/floors/vinyl-flooring.jpg",
    link: "/products/vinyl",
  },
  {
    title: "Bamboo Flooring",
    image: "/floors/bamboo-flooring.jpg",
    link: "/products/bamboo",
  },
  {
    title: "Special Edition",
    image: "/floors/special-edition.jpg",
    link: "/products/special",
  },
];

export default function CategoryGrid() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <div className="mb-10 text-center">
        <h2 className="text-[length:var(--font-size-h3)] font-bold text-[var(--color-foreground)]">
          Shop by Category
        </h2>
        <p className="mt-2 text-[var(--color-muted)]">
          Find the perfect foundation for your interior style
        </p>
      </div>
      
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <Link href={category.link} key={category.title} className="group">
            <Card className="overflow-hidden border-none shadow-md transition-all duration-300 group-hover:shadow-xl">
              <div className="relative h-64 w-full overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 transition-colors duration-300 group-hover:bg-black/30" />
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-xl font-bold text-white shadow-sm">
                    {category.title}
                  </h3>
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
