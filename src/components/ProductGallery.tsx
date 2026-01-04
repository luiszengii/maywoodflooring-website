"use client";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

const products = [
	{
		title: "Timber Flooring",
		image: "/floors/timber-flooring.jpg",
		spanTwo: true,
	},
	{
		title: "Laminate Flooring",
		image: "/floors/laminate-flooring.jpg",
	},
	{
		title: "Hybrid Flooring",
		image: "/floors/hybrid-flooring.jpg",
	},
	{
		title: "Vinyl Flooring",
		image: "/floors/vinyl-flooring.jpg",
	},
	{
		title: "Premium Collection",
		image: "/images/premium-collection.jpg",
		spanTwo: true,
	},
	{
		title: "Bamboo Flooring",
		image: "/floors/bamboo-flooring.jpg",
	},
	{
		title: "Special Edition",
		image: "/floors/special-edition.jpg",
	},
];

export default function ProductGallery() {
	return (
		<section className="mx-auto max-w-6xl px-4 pb-6 pt-8">
			<h2 className="mb-6 text-[length:var(--font-size-h4)] font-bold">
				Our Products
			</h2>

			<div className="grid gap-6 md:grid-cols-3">
				{products.map((product) => (
					<Card
						key={product.title}
						as="article"
						className={`group overflow-hidden border-transparent shadow-[var(--shadow-medium)] transition duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[var(--shadow-strong)] ${
							product.spanTwo ? "md:row-span-2" : ""
						}`}
					>
						<img
							src={product.image}
							alt={product.title}
							className={`w-full object-cover transition duration-300 ${
								product.spanTwo
									? "h-72 md:h-full md:min-h-[584px]"
									: "h-72"
							}`}
						/>
						<div className="p-4">
							<h3 className="text-base font-semibold text-[var(--color-foreground)]">
								{product.title}
							</h3>
						</div>
					</Card>
				))}
			</div>

			<div className="mt-12 grid gap-6 md:grid-cols-2">
				<Card className="p-6">
					<h3 className="text-[length:var(--font-size-h5)] font-bold">
						Wholesale
					</h3>
					<p className="mt-3 text-sm text-[var(--color-foreground)]">
						Partner pricing, priority allocations, and tailored product support for
						builders and installers.
					</p>
					<p className="mt-2 text-sm text-[var(--color-muted)]">
						Minimum orders start at 120 m². Typical lead times are 2–4 weeks depending
						on stock.
					</p>
					<div className="mt-4">
						<Button type="button" size="sm">
							Open a Trade Account
						</Button>
					</div>
				</Card>
				<Card className="p-6">
					<h3 className="text-[length:var(--font-size-h5)] font-bold">Retail</h3>
					<p className="mt-3 text-sm text-[var(--color-foreground)]">
						Explore our curated ranges, expert advice, and samples to find the perfect
						floor for your home.
					</p>
					<div className="mt-4">
						<Button
							type="button"
							variant="outline"
							size="sm"
							className="border-[var(--color-primary)] text-[var(--color-primary)] hover:border-[var(--color-primary)] hover:bg-[rgba(69,133,122,0.08)]"
						>
							Visit Our Showroom
						</Button>
					</div>
				</Card>
			</div>
		</section>
	);
}
