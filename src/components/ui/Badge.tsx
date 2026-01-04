"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type BadgeProps = React.HTMLAttributes<HTMLSpanElement>;

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
	({ className, ...props }, ref) => (
		<span
			ref={ref}
			className={cn(
				"inline-flex items-center rounded-full bg-[var(--color-surface-muted)] px-3 py-1 text-xs font-medium text-[var(--color-foreground)]",
				className,
			)}
			{...props}
		/>
	),
);

Badge.displayName = "Badge";

export { Badge };
