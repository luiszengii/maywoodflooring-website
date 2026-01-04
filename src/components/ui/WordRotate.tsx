"use client";

import { useEffect, useState } from "react";
import type { CSSProperties } from "react";

type WordRotateProps = {
	words: string[];
	className?: string;
	duration?: number;
};

export function WordRotate({
	words,
	className,
	duration = 2600,
}: WordRotateProps) {
	const [index, setIndex] = useState(0);
	const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

	useEffect(() => {
		const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
		const handlePreferenceChange = () =>
			setPrefersReducedMotion(mediaQuery.matches);

		handlePreferenceChange();
		mediaQuery.addEventListener("change", handlePreferenceChange);

		return () => mediaQuery.removeEventListener("change", handlePreferenceChange);
	}, []);

	useEffect(() => {
		if (prefersReducedMotion || words.length <= 1) {
			return;
		}

		const intervalId = window.setInterval(() => {
			setIndex((previousIndex) => (previousIndex + 1) % words.length);
		}, duration);

		return () => window.clearInterval(intervalId);
	}, [duration, prefersReducedMotion, words.length]);

	const currentWord = words[index] ?? "";

	return (
		<span
			className={`relative inline-flex min-w-[8ch] ${className ?? ""}`}
			aria-live="polite"
			aria-atomic="true"
		>
			<span
				key={currentWord}
				className={
					prefersReducedMotion ? "inline-flex" : "animate-ui-word-rotate inline-flex"
				}
				style={
					{
						"--word-rotate-duration": `${duration}ms`,
					} as CSSProperties
				}
			>
				{currentWord}
			</span>
		</span>
	);
}
