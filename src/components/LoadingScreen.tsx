"use client";

export default function LoadingScreen() {
	return (
		<div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[var(--color-background)]">
			<div
				className="h-10 w-10 animate-spin rounded-full border-4"
				style={{
					borderColor:
						"color-mix(in srgb, var(--color-foreground) 40%, transparent)",
					borderTopColor: "var(--color-foreground)",
				}}
			/>
			<p className="mt-3 text-sm font-semibold text-[var(--color-foreground)]">
				Loading Images...Please Wait......
			</p>
		</div>
	);
}
