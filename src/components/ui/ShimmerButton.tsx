"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type ShimmerButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const ShimmerButton = React.forwardRef<HTMLButtonElement, ShimmerButtonProps>(
	({ className, children, ...props }, ref) => (
		<button
			ref={ref}
			className={cn(
				"group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-[var(--color-accent)] px-6 py-3 text-sm font-semibold text-white shadow-md transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-surface)]",
				className,
			)}
			{...props}
		>
			<span className="absolute inset-0">
				<span className="absolute -inset-full animate-shimmer bg-[linear-gradient(120deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.45)_50%,rgba(255,255,255,0)_100%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100" />
			</span>
			<span className="relative z-10">{children}</span>
		</button>
	),
);

ShimmerButton.displayName = "ShimmerButton";

export { ShimmerButton };
