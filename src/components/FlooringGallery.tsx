"use client";

import {
	Box,
	Card,
	CardContent,
	CardMedia,
	Chip,
	Container,
	Divider,
	Stack,
	Typography,
} from "@mui/material";

const flooringOptions = [
	{
		name: "European Oak – Natural",
		material: "Engineered timber",
		price: "$129 / m²",
		image: "/floors/timber-flooring.jpg",
	},
	{
		name: "Smoked Walnut",
		material: "Solid timber",
		price: "$159 / m²",
		image: "/images/premium-collection.jpg",
	},
	{
		name: "Coastal Blonde",
		material: "Hybrid timber-look",
		price: "$69 / m²",
		image: "/floors/hybrid-flooring.jpg",
	},
	{
		name: "Urban Ash",
		material: "Laminate",
		price: "$49 / m²",
		image: "/floors/laminate-flooring.jpg",
	},
	{
		name: "Classic Warmth",
		material: "Bamboo",
		price: "$79 / m²",
		image: "/floors/bamboo-flooring.jpg",
	},
	{
		name: "Modern Grain",
		material: "Luxury vinyl plank",
		price: "$59 / m²",
		image: "/floors/vinyl-flooring.jpg",
	},
];

export default function FlooringGallery() {
	return (
		<Box component="section" sx={{ py: { xs: 6, md: 8 }, bgcolor: "#faf8f5" }}>
			<Container maxWidth="lg">
				<Stack spacing={2} sx={{ mb: 4 }}>
					<Typography variant="overline" sx={{ letterSpacing: 2 }}>
						Flooring gallery
					</Typography>
					<Typography variant="h4" component="h2" sx={{ fontWeight: 700 }}>
						Explore timber and timber-look ranges
					</Typography>
					<Typography variant="body1" color="text.secondary" sx={{ maxWidth: 640 }}>
						Compare popular finishes across solid, engineered, and timber-look collections. Pricing is indicative per square metre.
					</Typography>
				</Stack>

				<Box
					sx={{
						display: "grid",
						gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)" },
						gap: 3,
					}}
				>
					{flooringOptions.map((option) => (
						<Card key={option.name} elevation={0} sx={{ borderRadius: 3, border: "1px solid #e8e1d9" }}>
							<CardMedia component="img" image={option.image} alt={option.name} sx={{ height: 220 }} />
							<CardContent>
								<Typography variant="h6" sx={{ fontWeight: 600 }}>
									{option.name}
								</Typography>
								<Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
									{option.material}
								</Typography>
								<Divider sx={{ my: 2 }} />
								<Stack direction="row" justifyContent="space-between" alignItems="center">
									<Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
										{option.price}
									</Typography>
									<Chip label="In stock" size="small" sx={{ bgcolor: "#ede4d6" }} />
								</Stack>
							</CardContent>
						</Card>
					))}
				</Box>
			</Container>
		</Box>
	);
}
