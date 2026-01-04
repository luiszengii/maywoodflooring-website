"use client";

import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";

const projects = [
	{
		title: "Bayside Family Residence",
		description:
			"Hand-laid European oak in a herringbone pattern, finished with a satin seal for a warm, coastal feel.",
		timeline: "Delivered in 12 days",
		image: "/images/interior.jpg",
		tags: ["Herringbone", "European Oak"],
	},
	{
		title: "Melbourne Boutique Showroom",
		description:
			"Precision-matched planks with seamless transitions to showcase premium fixtures and high foot traffic durability.",
		timeline: "Completed on a 3-week schedule",
		image: "/images/premium-collection.jpg",
		tags: ["Commercial", "Premium Finish"],
	},
	{
		title: "Alpine Retreat Renovation",
		description:
			"Wide-board timber floors with moisture-smart underlay to keep the space quiet, warm, and resilient.",
		timeline: "Finished ahead of handover",
		image: "/images/interior2.jpg",
		tags: ["Wide Board", "Moisture Guard"],
	},
];

export default function FeaturedProjects() {
	return (
		<section className="bg-[#f7f5f2] py-16 md:py-20">
			<div className="mx-auto max-w-6xl px-4">
				<div className="mb-8 space-y-2">
					<h2 className="text-[length:var(--font-size-h4)] font-bold">Featured Projects</h2>
					<p className="text-sm text-[var(--color-muted)] md:text-base">
						Crafted floors that reflect our attention to detail and our promise to
						deliver on time, every time.
					</p>
				</div>

				<div className="grid gap-6 md:grid-cols-3">
					{projects.map((project, index) => (
						<Card
							key={project.title}
							as="article"
							className={`animate-ui-fade-up animate-ui-hover-lift flex h-full flex-col overflow-hidden border-transparent shadow-[var(--shadow-medium)] ${
								index === 0 ? "animate-ui-delay-1" : ""
							} ${index === 1 ? "animate-ui-delay-2" : ""} ${
								index === 2 ? "animate-ui-delay-3" : ""
							}`}
						>
							<img
								src={project.image}
								alt={project.title}
								className="h-56 w-full object-cover"
							/>
							<div className="flex flex-1 flex-col p-5">
								<h3 className="text-base font-semibold text-[var(--color-foreground)]">
									{project.title}
								</h3>
								<p className="mt-2 text-sm text-[var(--color-muted)]">
									{project.description}
								</p>
								<div className="mt-3 flex flex-wrap gap-2">
									{project.tags.map((tag) => (
										<Badge key={tag}>{tag}</Badge>
									))}
								</div>
								<p className="mt-4 text-sm font-semibold text-[var(--color-primary)]">
									{project.timeline}
								</p>
							</div>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}
