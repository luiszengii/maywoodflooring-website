"use client";

import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type MarqueeProps = HTMLAttributes<HTMLDivElement> & {
	pauseOnHover?: boolean;
	reverse?: boolean;
	repeat?: number;
};

export function Marquee({
	className,
	children,
	pauseOnHover = false,
	reverse = false,
	repeat = 2,
	...props
}: MarqueeProps) {
	return (
		<div
			className={cn(
				"group flex w-full overflow-hidden",
				"[--marquee-duration:20s] [--marquee-gap:1.5rem]",
				className,
			)}
			{...props}
		>
			{Array.from({ length: repeat }).map((_, index) => (
				<div
					key={index}
					className={cn(
						"flex w-max items-center gap-[var(--marquee-gap)] animate-marquee",
						reverse && "animate-marquee-reverse",
						pauseOnHover && "group-hover:[animation-play-state:paused]",
					)}
				>
					{children}
				</div>
			))}
		</div>
	);
}
