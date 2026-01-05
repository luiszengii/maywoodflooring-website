"use client";

import { Card } from "@/components/ui/Card";

const services = [
	{
		title: "On-site measurement",
		description: "Precise site checks to confirm levels, moisture, and fit.",
		icon: (
			<svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
				<path strokeLinecap="round" strokeLinejoin="round" d="M3 7h18M3 12h18M3 17h18" />
				<path strokeLinecap="round" strokeLinejoin="round" d="M7 7v10m5-10v10m5-10v10" />
			</svg>
		),
	},
	{
		title: "Design consultation",
		description: "Curated finishes and layout advice tailored to your home.",
		icon: (
			<svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
				<path strokeLinecap="round" strokeLinejoin="round" d="M12 3c4.418 0 8 2.686 8 6s-3.582 6-8 6-8-2.686-8-6 3.582-6 8-6z" />
				<path strokeLinecap="round" strokeLinejoin="round" d="M9 21c0-2.21 1.79-4 4-4s4 1.79 4 4" />
			</svg>
		),
	},
	{
		title: "Installation & project management",
		description: "End-to-end installation with clear timelines and care.",
		icon: (
			<svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
				<path strokeLinecap="round" strokeLinejoin="round" d="M3 7h6l3 10h9" />
				<path strokeLinecap="round" strokeLinejoin="round" d="M6 7l2-3h8l2 3" />
			</svg>
		),
	},
	{
		title: "Aftercare",
		description: "Maintenance guidance to keep floors pristine for years.",
		icon: (
			<svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
				<path strokeLinecap="round" strokeLinejoin="round" d="M12 4c4 3 6 6 6 9a6 6 0 1 1-12 0c0-3 2-6 6-9z" />
			</svg>
		),
	},
];

export default function Services() {
	return (
		<section className="mx-auto max-w-6xl px-4 pb-8 pt-6">
			<h2 className="mb-6 text-[length:var(--font-size-h4)] font-bold">Services</h2>
			<div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
				{services.map((service, index) => (
					<Card
						key={service.title}
						className={`animate-ui-fade-up animate-ui-hover-lift flex h-full flex-col p-6 ${
							index === 0 ? "animate-ui-delay-1" : ""
						} ${index === 1 ? "animate-ui-delay-2" : ""} ${
							index === 2 ? "animate-ui-delay-3" : ""
						} ${index === 3 ? "animate-ui-delay-4" : ""}`}
					>
						<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--color-overlay)] text-[var(--color-foreground)]">
							{service.icon}
						</div>
						<h3 className="text-base font-semibold text-[var(--color-foreground)]">
							{service.title}
						</h3>
						<p className="mt-2 text-sm text-[var(--color-muted)]">
							{service.description}
						</p>
					</Card>
				))}
			</div>
		</section>
	);
}
