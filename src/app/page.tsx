"use client";

import NavigationBar from "@/components/NavigationBar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import FeaturedProjects from "@/components/FeaturedProjects";
import RenovationPromo from "@/components/RenovationPromo";
import ProductGallery from "@/components/ProductGallery";
import FlooringGallery from "@/components/FlooringGallery";
import ClientTestimonials from "@/components/ClientTestimonials";
import TrustCredentials from "@/components/TrustCredentials";
import Footer from "@/components/Footer";

export default function Home() {
	return (
		<main>
			<script type="application/ld+json">
				{JSON.stringify({
					"@context": "https://schema.org",
					"@type": "LocalBusiness",
					name: "May Wood Flooring",
					image: "https://australia-maywood.com/svgs/logo.ico",
					description:
						"Melbourne's premier flooring specialist offering hardwood, laminate, vinyl & hybrid flooring solutions.",
					address: {
						"@type": "PostalAddress",
						streetAddress: "Suffolk St, Wantirna South",
						addressLocality: "Wantirna South",
						addressRegion: "VIC",
						postalCode: "3152",
						addressCountry: "AU",
					},
					geo: {
						"@type": "GeoCoordinates",
						latitude: "-37.88333000",
						longitude: "145.21667000",
					},
					url: "https://australia-maywood.com",
					telephone: "+61 3 9801 0555",
					priceRange: "$$",
					hasOfferCatalog: {
						"@type": "OfferCatalog",
						name: "Flooring Products & Services",
						itemListElement: [
							{
								"@type": "OfferCatalog",
								name: "Flooring Products",
								itemListElement: [
									{
										"@type": "Offer",
										itemOffered: {
											"@type": "Product",
											name: "Hardwood Flooring",
										},
									},
									{
										"@type": "Offer",
										itemOffered: {
											"@type": "Product",
											name: "Laminate Flooring",
										},
									},
									{
										"@type": "Offer",
										itemOffered: {
											"@type": "Product",
											name: "Vinyl Flooring",
										},
									},
									{
										"@type": "Offer",
										itemOffered: {
											"@type": "Product",
											name: "Hybrid Flooring",
										},
									},
								],
							},
							{
								"@type": "OfferCatalog",
								name: "Flooring Services",
								itemListElement: [
									{
										"@type": "Offer",
										itemOffered: {
											"@type": "Service",
											name: "Supply & Installation",
										},
									},
									{
										"@type": "Offer",
										itemOffered: {
											"@type": "Service",
											name: "Wholesale Supply",
										},
									},
								],
							},
						],
					},
				})}
			</script>
			<NavigationBar />
			<Hero />
			<Services />
			<FeaturedProjects />
			<RenovationPromo />
			<FlooringGallery />
			<TrustCredentials />
			<ProductGallery />
			<ClientTestimonials />
			<Footer />
		</main>
	);
}
