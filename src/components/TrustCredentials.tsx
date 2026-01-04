"use client";

const stats = [
	{ label: "20+ years", detail: "Trusted flooring specialists" },
	{ label: "500+ installs", detail: "Completed across Victoria" },
	{ label: "Nationwide shipping", detail: "Fast delivery options" },
	{ label: "4.9/5 rating", detail: "Loved by homeowners" },
];

const partners = [
	{ name: "Boral", logo: "/partners/boral.svg" },
	{ name: "Hurford", logo: "/partners/hurford.svg" },
	{ name: "Quick-Step", logo: "/partners/quick-step.svg" },
	{ name: "Havwoods", logo: "/partners/havwoods.svg" },
	{ name: "Gerflor", logo: "/partners/gerflor.svg" },
];

export default function TrustCredentials() {
	return (
		<section className="bg-[#f3efe9] py-10">
			<div className="mx-auto max-w-6xl px-4">
				<div className="space-y-6">
					<div>
						<p className="text-xs uppercase tracking-[0.2em] text-[var(--color-muted)]">
							Trust &amp; Credentials
						</p>
						<h2 className="mt-2 text-[length:var(--font-size-h5)] font-bold">
							Proven experience, trusted partners
						</h2>
					</div>

					<div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
						{stats.map((stat) => (
							<div
								key={stat.label}
								className="rounded-2xl border border-[var(--color-border)] bg-white p-4"
							>
								<p className="text-base font-semibold text-[var(--color-foreground)]">
									{stat.label}
								</p>
								<p className="mt-1 text-xs text-[var(--color-muted)]">
									{stat.detail}
								</p>
							</div>
						))}
					</div>

					<div className="grid items-center gap-3 sm:grid-cols-3 md:grid-cols-5">
						{partners.map((partner) => (
							<div
								key={partner.name}
								className="flex items-center justify-center rounded-full border border-[var(--color-border)] bg-white px-4 py-3"
							>
								<img
									src={partner.logo}
									alt={`${partner.name} logo`}
									className="h-8 w-auto"
								/>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
