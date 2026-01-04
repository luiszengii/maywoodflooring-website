"use client";

import { useEffect, useMemo, useRef, useState } from "react";

import { cn } from "@/lib/utils";

type NumberTickerProps = {
	value: number;
	className?: string;
	prefix?: string;
	suffix?: string;
	decimals?: number;
	duration?: number;
};

export function NumberTicker({
	value,
	className,
	prefix,
	suffix,
	decimals = 0,
	duration = 1500,
}: NumberTickerProps) {
	const ref = useRef<HTMLSpanElement>(null);
	const [hasStarted, setHasStarted] = useState(false);
	const [displayValue, setDisplayValue] = useState(0);

	useEffect(() => {
		const node = ref.current;
		if (!node) {
			return;
		}

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setHasStarted(true);
					observer.disconnect();
				}
			},
			{ threshold: 0.6 }
		);

		observer.observe(node);

		return () => observer.disconnect();
	}, []);

	useEffect(() => {
		if (!hasStarted) {
			return;
		}

		let animationFrameId = 0;
		let startTime: number | null = null;

		const step = (timestamp: number) => {
			if (startTime === null) {
				startTime = timestamp;
			}

			const progress = Math.min((timestamp - startTime) / duration, 1);
			const nextValue = value * progress;

			setDisplayValue(nextValue);

			if (progress < 1) {
				animationFrameId = window.requestAnimationFrame(step);
			}
		};

		animationFrameId = window.requestAnimationFrame(step);

		return () => window.cancelAnimationFrame(animationFrameId);
	}, [duration, hasStarted, value]);

	const formattedValue = useMemo(() => {
		return new Intl.NumberFormat("en-US", {
			minimumFractionDigits: decimals,
			maximumFractionDigits: decimals,
		}).format(displayValue);
	}, [decimals, displayValue]);

	return (
		<span ref={ref} className={cn("tabular-nums", className)}>
			{prefix}
			{formattedValue}
			{suffix}
		</span>
	);
}
