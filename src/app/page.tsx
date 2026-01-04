"use client";

import { Box } from "@mui/material";
import NavigationBar from "@/components/NavigationBar";
import Hero from "@/components/Hero";
import FeaturedProjects from "@/components/FeaturedProjects";
import ProductGallery from "@/components/ProductGallery";
import FlooringGallery from "@/components/FlooringGallery";
import ClientTestimonials from "@/components/ClientTestimonials";
import Footer from "@/components/Footer";

export default function Home() {
	return (
		<Box component="div">
			<script type="application/ld+json">
				{JSON.stringify({
					"@context": "https://schema.org",
					"@type": "LocalBusiness",
					name: "May Wood Flooring",
					image: "https://australia-maywood.com/svgs/logo.ico",
					description:
						"Melbourne's premier flooring specialist offering hardwood, laminate, vinyl & hybrid flooring solutions.",
					address: {
						"@type": "3152",
						streetAddress: "Suffolk St, Wantirna South",
						addressLocality: "Melbourne",
						addressCountry: "AU",
					},
					geo: {
						"@type": "GeoCoordinates",
						latitude: "-37.88333000",
						longitude: "145.21667000",
					},
					url: "https://australia-maywood.com",
					telephone: "YOUR_PHONE",
					priceRange: "$$",
				})}
			</script>
			<NavigationBar />
			<Hero />
			<FeaturedProjects />
			<FlooringGallery />
			<ProductGallery />
			<ClientTestimonials />
			<Footer />
		</Box>
	);
}
