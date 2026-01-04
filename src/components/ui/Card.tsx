"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type CardProps = React.HTMLAttributes<HTMLElement> & {
	as?: React.ElementType;
};

const Card = React.forwardRef<HTMLElement, CardProps>(
	({ as: Component = "div", className, ...props }, ref) => (
		<Component
			ref={ref}
			className={cn(
				"rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] shadow-[var(--shadow-soft)]",
				className,
			)}
			{...props}
		/>
	),
);

Card.displayName = "Card";

export { Card };
