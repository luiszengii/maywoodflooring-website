"use client";

import { Box, Container, Stack, Typography } from "@mui/material";

const stats = [
	{ label: "20+ years", detail: "Trusted flooring specialists" },
	{ label: "500+ installs", detail: "Completed across Victoria" },
	{ label: "Nationwide shipping", detail: "Fast delivery options" },
	{ label: "4.9/5 rating", detail: "Loved by homeowners" },
];

const partners = [
	{ name: "Boral", logo: "/partners/boral.svg" },
	{ name: "Hurford", logo: "/partners/hurford.svg" },
	{ name: "Quick-Step", logo: "/partners/quick-step.svg" },
	{ name: "Havwoods", logo: "/partners/havwoods.svg" },
	{ name: "Gerflor", logo: "/partners/gerflor.svg" },
];

export default function TrustCredentials() {
	return (
		<Box component="section" sx={{ py: { xs: 4, md: 6 }, bgcolor: "#f3efe9" }}>
			<Container maxWidth="lg">
				<Stack spacing={3}>
					<Box>
						<Typography variant="overline" sx={{ letterSpacing: 2, color: "text.secondary" }}>
							Trust & Credentials
						</Typography>
						<Typography variant="h5" component="h2" sx={{ fontWeight: 700, mt: 1 }}>
							Proven experience, trusted partners
						</Typography>
					</Box>

					<Box
						sx={{
							display: "grid",
							gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", md: "repeat(4, 1fr)" },
							gap: 2,
						}}
					>
						{stats.map((stat) => (
							<Box
								key={stat.label}
								sx={{
									p: 2,
									borderRadius: 2,
									bgcolor: "#fff",
									border: "1px solid #e6ded2",
								}}
							>
								<Typography variant="h6" sx={{ fontWeight: 700 }}>
									{stat.label}
								</Typography>
								<Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
									{stat.detail}
								</Typography>
							</Box>
						))}
					</Box>

					<Box
						sx={{
							display: "grid",
							gridTemplateColumns: { xs: "repeat(2, 1fr)", sm: "repeat(3, 1fr)", md: "repeat(5, 1fr)" },
							gap: 2,
							alignItems: "center",
						}}
					>
					{partners.map((partner) => (
						<Box
							key={partner.name}
							sx={{
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								py: 1.5,
								borderRadius: 999,
								bgcolor: "#fff",
								border: "1px solid #e6ded2",
							}}
						>
							<Box
								component="img"
								src={partner.logo}
								alt={`${partner.name} logo`}
								sx={{ height: 32, width: "auto" }}
							/>
						</Box>
					))}
					</Box>
				</Stack>
			</Container>
		</Box>
	);
}
