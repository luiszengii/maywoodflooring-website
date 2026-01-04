"use client";

const flooringOptions = [
	{
		name: "European Oak – Natural",
		material: "Engineered timber",
		price: "$129 / m²",
		image: "/floors/timber-flooring.jpg",
	},
	{
		name: "Smoked Walnut",
		material: "Solid timber",
		price: "$159 / m²",
		image: "/images/premium-collection.jpg",
	},
	{
		name: "Coastal Blonde",
		material: "Hybrid timber-look",
		price: "$69 / m²",
		image: "/floors/hybrid-flooring.jpg",
	},
	{
		name: "Urban Ash",
		material: "Laminate",
		price: "$49 / m²",
		image: "/floors/laminate-flooring.jpg",
	},
	{
		name: "Classic Warmth",
		material: "Bamboo",
		price: "$79 / m²",
		image: "/floors/bamboo-flooring.jpg",
	},
	{
		name: "Modern Grain",
		material: "Luxury vinyl plank",
		price: "$59 / m²",
		image: "/floors/vinyl-flooring.jpg",
	},
];

export default function FlooringGallery() {
	return (
		<section className="bg-[#faf8f5] py-12 md:py-16">
			<div className="mx-auto max-w-6xl px-4">
				<div className="mb-6 space-y-2">
					<p className="text-xs uppercase tracking-[0.2em] text-[var(--color-muted)]">
						Flooring gallery
					</p>
					<h2 className="text-[length:var(--font-size-h4)] font-bold">
						Explore timber and timber-look ranges
					</h2>
					<p className="max-w-2xl text-sm text-[var(--color-muted)] md:text-base">
						Compare popular finishes across solid, engineered, and timber-look
						collections. Pricing is indicative per square metre.
					</p>
				</div>

				<div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
					{flooringOptions.map((option) => (
						<article
							key={option.name}
							className="overflow-hidden rounded-2xl border border-[#e8e1d9] bg-white"
						>
							<img
								src={option.image}
								alt={option.name}
								className="h-56 w-full object-cover"
							/>
							<div className="p-4">
								<h3 className="text-base font-semibold text-[var(--color-foreground)]">
									{option.name}
								</h3>
								<p className="mt-1 text-sm text-[var(--color-muted)]">
									{option.material}
								</p>
								<hr className="my-4 border-[#e8e1d9]" />
								<div className="flex items-center justify-between">
									<p className="text-sm font-semibold text-[var(--color-foreground)]">
										{option.price}
									</p>
									<span className="rounded-full bg-[#ede4d6] px-3 py-1 text-xs font-medium text-[var(--color-foreground)]">
										In stock
									</span>
								</div>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}
