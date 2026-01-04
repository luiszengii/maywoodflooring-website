"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import ScratchToReveal from "@/components/ui/ScratchToReveal";

const promoText = "Free Underlay on orders over 50m²";

export default function RenovationPromo() {
	const [revealed, setRevealed] = useState(false);

	return (
		<section className="bg-white py-16 md:py-20">
			<div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:items-center">
				<div className="space-y-5">
					<div className="space-y-2">
						<p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
							Renovation Promotion
						</p>
						<h2 className="text-[length:var(--font-size-h4)] font-bold text-[var(--color-foreground)]">
							Scratch away the old, reveal the new.
						</h2>
						<p className="text-sm text-[var(--color-muted)] md:text-base">
							Try the scratch card to preview the transformation from worn carpet to
							warm, natural timber flooring.
						</p>
					</div>
					<div className="flex flex-wrap items-center gap-3">
						<Button
							variant="outline"
							size="sm"
							onClick={() => setRevealed(true)}
							disabled={revealed}
							aria-describedby="promo-offer"
						>
							{revealed ? "Offer revealed" : "Reveal offer"}
						</Button>
						<span
							id="promo-offer"
							className="text-sm font-semibold text-[var(--color-accent-deep)]"
						>
							{promoText}
						</span>
					</div>
					<p className="text-xs text-[var(--color-muted)]">
						Use the button to reveal the offer if you are not using a pointer.
					</p>
				</div>

				<ScratchToReveal
					overlayImage="/images/old-carpet.svg"
					revealed={revealed}
					className="aspect-[4/3] w-full overflow-hidden rounded-3xl border border-[rgba(110,90,80,0.2)] shadow-[var(--shadow-soft)]"
				>
					<div className="relative h-full w-full">
						<img
							src="/floors/timber-flooring.jpg"
							alt="Polished timber floor"
							className="h-full w-full object-cover"
						/>
						<div className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-black/55 via-black/15 to-transparent p-6 text-center">
							<p className="text-lg font-semibold text-white drop-shadow-sm">
								{promoText}
							</p>
						</div>
					</div>
				</ScratchToReveal>
			</div>
		</section>
	);
}
