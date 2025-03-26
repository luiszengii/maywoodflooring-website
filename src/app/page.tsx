"use client";

import { Box } from "@mui/material";
import NavigationBar from "@/components/NavigationBar";
import Hero from "@/components/Hero";
import ProductGallery from "@/components/ProductGallery";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <Box component="div">
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "W7 Design Flooring",
          image: "https://w7designflooring.com/svgs/logo.ico",
          description: "Melbourne's premier flooring specialist offering hardwood, laminate, vinyl & hybrid flooring solutions.",
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
          url: "https://w7designflooring.com",
          telephone: "YOUR_PHONE",
          priceRange: "$$",
        })}
      </script>
      <NavigationBar />
      <Hero />
      <ProductGallery />
      <Footer />
    </Box>
  );
}
