"use client";

import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/utils";

type BentoGridProps = {
	className?: string;
	children: React.ReactNode;
};

type BentoGridItemProps = {
	title: string;
	description?: string;
	image: string;
	className?: string;
};

export function BentoGrid({ className, children }: BentoGridProps) {
	return (
		<div
			className={cn(
				"grid w-full auto-rows-[200px] grid-cols-1 gap-4 md:grid-cols-4",
				className,
			)}
		>
			{children}
		</div>
	);
}

export function BentoGridItem({
	title,
	description,
	image,
	className,
}: BentoGridItemProps) {
	return (
		<Card
			as="article"
			className={cn(
				"group relative flex h-full flex-col justify-end overflow-hidden border-transparent shadow-[var(--shadow-medium)]",
				className,
			)}
		>
			<img
				src={image}
				alt={title}
				className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
			/>
			<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
			<div className="relative z-10 p-4 text-white">
				<h3 className="text-base font-semibold">{title}</h3>
				{description ? (
					<p className="mt-1 text-xs text-white/80">{description}</p>
				) : null}
			</div>
		</Card>
	);
}
