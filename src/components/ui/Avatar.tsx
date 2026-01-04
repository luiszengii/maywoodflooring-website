"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type AvatarProps = React.HTMLAttributes<HTMLDivElement>;

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
	({ className, ...props }, ref) => (
		<div
			ref={ref}
			className={cn(
				"flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-primary)] text-sm font-semibold text-white",
				className,
			)}
			{...props}
		/>
	),
);

Avatar.displayName = "Avatar";

export { Avatar };
