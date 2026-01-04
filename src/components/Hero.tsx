"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { WordRotate } from "@/components/ui/WordRotate";

export default function Hero() {
	const [scrollProgress, setScrollProgress] = useState(0);
	const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
	const imageRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
		setPrefersReducedMotion(mediaQuery.matches);

		const handlePreferenceChange = () => {
			setPrefersReducedMotion(mediaQuery.matches);
		};

		mediaQuery.addEventListener("change", handlePreferenceChange);

		return () => mediaQuery.removeEventListener("change", handlePreferenceChange);
	}, []);

	useEffect(() => {
		if (prefersReducedMotion) {
			setScrollProgress(0);
			return;
		}

		let ticking = false;

		const handleScroll = () => {
			if (!ticking) {
				window.requestAnimationFrame(() => {
					if (imageRef.current) {
						const element = imageRef.current;
						const rect = element.getBoundingClientRect();
						const windowHeight = window.innerHeight;
						const elementCenter = rect.top + rect.height / 2;
						const distanceFromCenter =
							(windowHeight / 2 - elementCenter) / (windowHeight / 2);
						setScrollProgress(Math.min(Math.max(distanceFromCenter, 0), 1));
					}
					ticking = false;
				});
				ticking = true;
			}
		};

		window.addEventListener("scroll", handleScroll, { passive: true });
		handleScroll();

		return () => window.removeEventListener("scroll", handleScroll);
	}, [prefersReducedMotion]);

	const animationStyle = {
		transform: `scale(${1 + scrollProgress * 0.15}) translateY(${scrollProgress * 20}px)`,
		boxShadow: `0px ${15 * scrollProgress}px ${30 * scrollProgress}px rgba(0, 0, 0, ${
			0.3 * scrollProgress
		})`,
		willChange: "transform, box-shadow",
		transition: "none",
	};

	return (
		<section className="mx-auto max-w-6xl px-4 pb-6 pt-8">
			<div className="grid gap-8 md:grid-cols-2 md:items-center">
				<div>
					<h1 className="animate-ui-fade-up text-[length:var(--font-size-display)] font-bold">
						Flooring Designed for{" "}
						<WordRotate
							words={["Living", "Luxury", "Generations"]}
							className="text-[var(--color-accent)]"
						/>
					</h1>
					<p className="animate-ui-fade-up animate-ui-delay-1 mt-4 text-lg text-[var(--color-muted)]">
						Wholesale supply, a walk-in retail showroom, and on-site design plus
						installation support for timber and timber-look flooring across
						Melbourne.
					</p>

					<div className="animate-ui-fade-up animate-ui-delay-2 mt-6 space-y-4">
						<div className="flex flex-wrap items-center gap-3">
							<Button type="button" variant="accent" className="shadow-md">
								Wholesale Enquiries
							</Button>
							<Button type="button" variant="accentDeep" className="shadow-md">
								Book a Design Consult
							</Button>
							<Button type="button" variant="outline">
								Shop the Showroom
							</Button>
						</div>
						<Button
							type="button"
							variant="ghost"
							size="sm"
							className="text-[var(--color-foreground)]"
						>
							Trusted by builders across Melbourne
						</Button>
					</div>
				</div>

				<div
					ref={imageRef}
					className="animate-ui-fade-in animate-ui-delay-3 relative h-[450px] md:h-[600px]"
				>
					<div className="animate-ui-float absolute left-0 top-0 h-[90%] w-[85%]">
						<img
							src="/images/interior.jpg"
							alt="Elegant interior with herringbone wooden flooring"
							style={animationStyle}
							className="h-full w-full rounded-lg object-cover"
						/>
					</div>
					<div className="animate-ui-float-slow absolute bottom-0 right-0 h-[40%] w-[50%]">
						<img
							src="/images/interior2.jpg"
							alt="Luxurious bathroom with wooden flooring"
							style={animationStyle}
							className="h-full w-full rounded-lg object-cover"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
