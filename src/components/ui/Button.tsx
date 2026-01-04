"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "accent" | "accentDeep" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg" | "icon";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: ButtonVariant;
	size?: ButtonSize;
}

const variantClasses: Record<ButtonVariant, string> = {
	primary:
		"bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-dark)]",
	accent:
		"bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-dark)]",
	accentDeep: "bg-[var(--color-accent-deep)] text-white hover:bg-[var(--color-accent-deep-hover)]",
	outline:
		"border border-[var(--color-accent-deep)] text-[var(--color-accent-deep)] hover:border-[var(--color-accent-deep-hover)] hover:bg-[var(--color-accent-overlay)]",
	ghost: "text-[var(--color-foreground-subtle)] hover:bg-[var(--color-overlay)]",
};

const sizeClasses: Record<ButtonSize, string> = {
	sm: "px-4 py-2 text-sm",
	md: "px-5 py-3 text-sm",
	lg: "px-6 py-3 text-base",
	icon: "h-10 w-10 p-0 text-lg",
};

const baseClasses =
	"inline-flex items-center justify-center gap-2 rounded-full font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-surface)] disabled:pointer-events-none disabled:opacity-60";

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant = "primary", size = "md", ...props }, ref) => (
		<button
			ref={ref}
			className={cn(baseClasses, variantClasses[variant], sizeClasses[size], className)}
			{...props}
		/>
	),
);

Button.displayName = "Button";

export { Button };
