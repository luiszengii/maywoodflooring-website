import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "May Wood Flooring | Premium Flooring Solutions in Melbourne",
	description:
		"Melbourne's premier flooring specialist offering hardwood, laminate, vinyl & hybrid flooring solutions. Professional installation & expert consultation for residential & commercial spaces.",
	keywords:
		"flooring Melbounre, hardwood flooring, laminate flooring, vinyl flooring, hybrid flooring, commercial flooring, residential flooring, Melbourne flooring installation, Melbourne design flooring",
	openGraph: {
		title: "May Wood Flooring | Premium Flooring Solutions in Melbourne",
		description:
			"Melbourne's premier flooring specialist offering hardwood, laminate, vinyl & hybrid flooring solutions.",
		url: "https://australia-maywood.com",
		siteName: "May Wood Flooring",
		images: [
			{
				url: "/floors/vinyl-flooring.jpg",
				width: 1200,
				height: 630,
			},
		],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={geist.className}>{children}</body>
		</html>
	);
}
