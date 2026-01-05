"use client";

import { Button } from "@/components/ui/Button";
import { BentoGrid, BentoGridItem } from "@/components/ui/BentoGrid";
import { Card } from "@/components/ui/Card";

const productHighlights = [
	{
		title: "Engineered Timber",
		description: "Signature planks with warm, natural variation.",
		image: "/floors/timber-flooring.jpg",
		className: "md:col-span-2 md:row-span-2",
	},
	{
		title: "Installation Services",
		description: "Precision fitting from subfloor to finishing trim.",
		image: "/images/interior2.jpg",
		className: "md:row-span-2",
	},
	{
		title: "Laminate",
		description: "Scratch-resistant styles for busy homes.",
		image: "/floors/laminate-flooring.jpg",
	},
	{
		title: "Hybrid",
		description: "Waterproof comfort with real-wood texture.",
		image: "/floors/hybrid-flooring.jpg",
	},
];

export default function ProductGallery() {
	return (
		<section className="mx-auto max-w-6xl px-4 pb-6 pt-8">
			<h2 className="mb-6 text-[length:var(--font-size-h4)] font-bold">
				Our Products
			</h2>

			<BentoGrid>
				{productHighlights.map((product, index) => (
					<BentoGridItem
						key={product.title}
						title={product.title}
						description={product.description}
						image={product.image}
						className={`animate-ui-fade-up animate-ui-hover-lift ${
							index < 2 ? "animate-ui-delay-1" : "animate-ui-delay-2"
						} ${product.className ?? ""}`}
					/>
				))}
			</BentoGrid>

			<div className="mt-12 grid gap-6 md:grid-cols-2">
				<Card className="animate-ui-fade-up animate-ui-delay-1 animate-ui-hover-lift p-6">
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
				<Card className="animate-ui-fade-up animate-ui-delay-2 animate-ui-hover-lift p-6">
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
							className="border-[var(--color-primary)] text-[var(--color-primary)] hover:border-[var(--color-primary)] hover:bg-[var(--color-primary-overlay)]"
						>
							Visit Our Showroom
						</Button>
					</div>
				</Card>
			</div>
		</section>
	);
}
