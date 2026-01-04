"use client";

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
					<article
						key={product.title}
						className={`group overflow-hidden rounded-2xl bg-white shadow-[var(--shadow-medium)] transition duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[var(--shadow-strong)] ${
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
					</article>
				))}
			</div>

			<div className="mt-12 grid gap-6 md:grid-cols-2">
				<div className="rounded-2xl border border-black/10 bg-white p-6">
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
						<button
							type="button"
							className="rounded-full bg-[var(--color-primary)] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[var(--color-primary-dark)]"
						>
							Open a Trade Account
						</button>
					</div>
				</div>
				<div className="rounded-2xl border border-black/10 bg-white p-6">
					<h3 className="text-[length:var(--font-size-h5)] font-bold">Retail</h3>
					<p className="mt-3 text-sm text-[var(--color-foreground)]">
						Explore our curated ranges, expert advice, and samples to find the perfect
						floor for your home.
					</p>
					<div className="mt-4">
						<button
							type="button"
							className="rounded-full border border-[var(--color-primary)] px-4 py-2 text-sm font-semibold text-[var(--color-primary)] transition hover:bg-[rgba(69,133,122,0.08)]"
						>
							Visit Our Showroom
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}
