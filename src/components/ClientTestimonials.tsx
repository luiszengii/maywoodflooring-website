"use client";

const testimonials = [
	{
		quote:
			"Every board was laid with care, and the team kept us informed daily. The finish is flawless.",
		name: "Sarah T.",
		detail: "Camberwell Renovation",
		initials: "ST",
	},
	{
		quote:
			"They promised a tight timeline before our opening and delivered without compromise on craftsmanship.",
		name: "James L.",
		detail: "Retail Showroom Fit-out",
		initials: "JL",
	},
	{
		quote:
			"The crew respected our home, worked efficiently, and finished ahead of schedule. Stunning result.",
		name: "Priya K.",
		detail: "Mornington Residence",
		initials: "PK",
	},
];

export default function ClientTestimonials() {
	return (
		<section className="mx-auto max-w-6xl px-4 py-12">
			<div className="mb-6 space-y-2">
				<h2 className="text-[length:var(--font-size-h4)] font-bold">Client Testimonials</h2>
				<p className="text-sm text-[var(--color-muted)] md:text-base">
					Trusted for meticulous workmanship and reliable timelines across
					Melbourne projects.
				</p>
			</div>

			<div className="grid gap-6 md:grid-cols-3">
				{testimonials.map((testimonial) => (
					<article
						key={testimonial.name}
						className="rounded-2xl bg-white p-6 shadow-[var(--shadow-soft)]"
					>
						<p className="mb-4 text-sm italic text-[var(--color-foreground)]">
							“{testimonial.quote}”
						</p>
						<div className="flex items-center gap-3">
							<div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-primary)] text-sm font-semibold text-white">
								{testimonial.initials}
							</div>
							<div>
								<p className="text-sm font-semibold text-[var(--color-foreground)]">
									{testimonial.name}
								</p>
								<p className="text-xs text-[var(--color-muted)]">
									{testimonial.detail}
								</p>
							</div>
						</div>
					</article>
				))}
			</div>
		</section>
	);
}
