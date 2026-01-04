"use client";

import * as React from "react";

const DEFAULT_LENS_SIZE = 160;
const DEFAULT_ZOOM = 2;

type LensProps = {
	src: string;
	zoomSrc?: string;
	alt: string;
	className?: string;
	lensSize?: number;
	zoomScale?: number;
};

export function Lens({
	src,
	zoomSrc,
	alt,
	className,
	lensSize = DEFAULT_LENS_SIZE,
	zoomScale = DEFAULT_ZOOM,
}: LensProps) {
	const containerRef = React.useRef<HTMLDivElement | null>(null);
	const [isHovering, setIsHovering] = React.useState(false);
	const [hoverCapable, setHoverCapable] = React.useState(true);
	const [lensPosition, setLensPosition] = React.useState({ x: 0, y: 0 });
	const [backgroundPosition, setBackgroundPosition] = React.useState("50% 50%");
	const [backgroundSize, setBackgroundSize] = React.useState("200% 200%");

	React.useEffect(() => {
		if (typeof window === "undefined") {
			return;
		}

		const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
		const updateHoverCapable = () => setHoverCapable(mediaQuery.matches);

		updateHoverCapable();
		mediaQuery.addEventListener("change", updateHoverCapable);

		return () => mediaQuery.removeEventListener("change", updateHoverCapable);
	}, []);

	React.useEffect(() => {
		if (!containerRef.current) {
			return;
		}

		const updateBackgroundSize = () => {
			if (!containerRef.current) {
				return;
			}

			const rect = containerRef.current.getBoundingClientRect();
			const width = rect.width * zoomScale;
			const height = rect.height * zoomScale;
			setBackgroundSize(`${width}px ${height}px`);
		};

		updateBackgroundSize();

		const observer = new ResizeObserver(updateBackgroundSize);
		observer.observe(containerRef.current);

		return () => observer.disconnect();
	}, [zoomScale]);

	const handlePointerMove = (event: React.MouseEvent<HTMLDivElement>) => {
		if (!containerRef.current) {
			return;
		}

		const rect = containerRef.current.getBoundingClientRect();
		const x = event.clientX - rect.left;
		const y = event.clientY - rect.top;
		const xPercent = Math.min(Math.max(x / rect.width, 0), 1) * 100;
		const yPercent = Math.min(Math.max(y / rect.height, 0), 1) * 100;

		setLensPosition({ x, y });
		setBackgroundPosition(`${xPercent}% ${yPercent}%`);
	};

	return (
		<div
			ref={containerRef}
			className={`relative overflow-hidden ${className ?? ""}`}
			onMouseEnter={() => setIsHovering(true)}
			onMouseLeave={() => setIsHovering(false)}
			onMouseMove={handlePointerMove}
		>
			<img src={src} alt={alt} className="h-full w-full object-cover" />
			{hoverCapable && isHovering ? (
				<div
					aria-hidden
					className="pointer-events-none absolute rounded-full border border-white/70 shadow-[0_8px_24px_rgba(0,0,0,0.25)]"
					style={{
						left: lensPosition.x,
						top: lensPosition.y,
						width: lensSize,
						height: lensSize,
						transform: "translate(-50%, -50%)",
						backgroundImage: `url(${zoomSrc ?? src})`,
						backgroundPosition,
						backgroundRepeat: "no-repeat",
						backgroundSize,
					}}
				/>
			) : null}
		</div>
	);
}
