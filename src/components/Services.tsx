"use client";

import { Box, Card, CardContent, Container, Grid, Typography } from "@mui/material";
import StraightenIcon from "@mui/icons-material/Straighten";
import PaletteIcon from "@mui/icons-material/Palette";
import HandymanIcon from "@mui/icons-material/Handyman";
import SpaIcon from "@mui/icons-material/Spa";

const services = [
	{
		title: "On-site measurement",
		description: "Precise site checks to confirm levels, moisture, and fit.",
		icon: StraightenIcon,
	},
	{
		title: "Design consultation",
		description: "Curated finishes and layout advice tailored to your home.",
		icon: PaletteIcon,
	},
	{
		title: "Installation & project management",
		description: "End-to-end installation with clear timelines and care.",
		icon: HandymanIcon,
	},
	{
		title: "Aftercare",
		description: "Maintenance guidance to keep floors pristine for years.",
		icon: SpaIcon,
	},
];

export default function Services() {
	return (
		<Container maxWidth="lg" sx={{ mt: 6, mb: 8 }}>
			<Typography
				variant="h4"
				component="h2"
				sx={{ mt: 4, mb: 4, fontWeight: "bold" }}
			>
				Services
			</Typography>
			<Grid container spacing={3}>
				{services.map((service) => {
					const Icon = service.icon;
					return (
						<Grid item xs={12} sm={6} md={3} key={service.title}>
							<Card
								sx={{
									height: "100%",
									borderRadius: "16px",
									border: "1px solid rgba(0, 0, 0, 0.08)",
									boxShadow: "0 10px 24px rgba(0, 0, 0, 0.06)",
								}}
							>
								<CardContent sx={{ p: 3 }}>
									<Box
										sx={{
											width: 52,
											height: 52,
											borderRadius: "16px",
											display: "flex",
											alignItems: "center",
											justifyContent: "center",
											backgroundColor: "rgba(17, 25, 40, 0.05)",
											mb: 2,
										}}
									>
										<Icon sx={{ fontSize: 28 }} />
									</Box>
									<Typography
										variant="h6"
										component="h3"
										sx={{ fontWeight: 600, mb: 1 }}
									>
										{service.title}
									</Typography>
									<Typography variant="body2" color="text.secondary">
										{service.description}
									</Typography>
								</CardContent>
							</Card>
						</Grid>
					);
				})}
			</Grid>
		</Container>
	);
}
