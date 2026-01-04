"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ScratchToRevealProps {
	overlayImage: string;
	children: ReactNode;
	className?: string;
	revealed?: boolean;
	brushSize?: number;
}

export default function ScratchToReveal({
	overlayImage,
	children,
	className,
	revealed = false,
	brushSize = 32,
}: ScratchToRevealProps) {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const containerRef = useRef<HTMLDivElement>(null);
	const [isPointerDown, setIsPointerDown] = useState(false);

	useEffect(() => {
		const container = containerRef.current;
		const canvas = canvasRef.current;
		if (!container || !canvas || revealed) {
			return;
		}

		const context = canvas.getContext("2d");
		if (!context) {
			return;
		}

		const image = new Image();
		image.src = overlayImage;

		const draw = () => {
			const { width, height } = container.getBoundingClientRect();
			canvas.width = width;
			canvas.height = height;
			context.globalCompositeOperation = "source-over";
			context.clearRect(0, 0, width, height);
			context.drawImage(image, 0, 0, width, height);
		};

		if (image.complete) {
			draw();
		} else {
			image.onload = draw;
		}

		window.addEventListener("resize", draw);
		return () => window.removeEventListener("resize", draw);
	}, [overlayImage, revealed]);

	const scratch = (event: React.PointerEvent<HTMLCanvasElement>) => {
		const canvas = canvasRef.current;
		if (!canvas || revealed) {
			return;
		}

		const context = canvas.getContext("2d");
		if (!context) {
			return;
		}

		const rect = canvas.getBoundingClientRect();
		const x = event.clientX - rect.left;
		const y = event.clientY - rect.top;

		context.globalCompositeOperation = "destination-out";
		context.beginPath();
		context.arc(x, y, brushSize, 0, Math.PI * 2);
		context.fill();
	};

	return (
		<div ref={containerRef} className={cn("relative overflow-hidden", className)}>
			{children}
			<canvas
				ref={canvasRef}
				aria-hidden="true"
				className={cn(
					"absolute inset-0 h-full w-full cursor-grab touch-none transition-opacity",
					revealed ? "pointer-events-none opacity-0" : "opacity-100",
				)}
				onPointerDown={(event) => {
					setIsPointerDown(true);
					event.currentTarget.setPointerCapture(event.pointerId);
					scratch(event);
				}}
				onPointerMove={(event) => {
					if (!isPointerDown) {
						return;
					}
					scratch(event);
				}}
				onPointerUp={(event) => {
					setIsPointerDown(false);
					event.currentTarget.releasePointerCapture(event.pointerId);
				}}
				onPointerLeave={() => setIsPointerDown(false)}
			/>
		</div>
	);
}
