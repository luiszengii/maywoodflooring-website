"use client";

import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

type BlurFadeProps = {
	children: ReactNode;
	className?: string;
	delay?: number;
};

export function BlurFade({ children, className, delay = 0 }: BlurFadeProps) {
	const ref = useRef<HTMLDivElement>(null);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const node = ref.current;
		if (!node) {
			return;
		}

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
					observer.disconnect();
				}
			},
			{ threshold: 0.3 }
		);

		observer.observe(node);

		return () => observer.disconnect();
	}, []);

	return (
		<div
			ref={ref}
			className={cn(
				"transition-all duration-700 ease-out",
				isVisible
					? "translate-y-0 opacity-100 blur-0"
					: "translate-y-4 opacity-0 blur-sm",
				className
			)}
			style={{ transitionDelay: `${delay}ms` }}
		>
			{children}
		</div>
	);
}
