"use client";

import { useEffect, useRef, useState } from "react";
import {
	Typography,
	Grid,
	Box,
	Button,
	Container,
} from "@mui/material";

export default function Hero() {
	const [scrollProgress, setScrollProgress] = useState(0);
	const imageRef = useRef(null);

	useEffect(() => {
		let ticking = false;

		const handleScroll = () => {
			if (!ticking) {
				window.requestAnimationFrame(() => {
					if (imageRef.current) {
						const element = imageRef.current as HTMLElement;
						const rect = element.getBoundingClientRect();
						const windowHeight = window.innerHeight;
						const elementCenter = rect.top + rect.height / 2;
						const distanceFromCenter =
							(windowHeight / 2 - elementCenter) / (windowHeight / 2);
						setScrollProgress(Math.min(Math.max(distanceFromCenter, 0), 1));
					}
					ticking = false;
				});
				ticking = true;
			}
		};

		window.addEventListener("scroll", handleScroll, { passive: true });
		handleScroll();

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const animationStyle = {
		transform: `scale(${1 + scrollProgress * 0.15}) translateY(${
			scrollProgress * 20
		}px)`,
		boxShadow: `0px ${15 * scrollProgress}px ${
			30 * scrollProgress
		}px rgba(0, 0, 0, ${0.3 * scrollProgress})`,
		willChange: "transform, box-shadow",
		transition: "none",
	};

	return (
		<Container maxWidth="lg" sx={{ mt: 8, mb: 6 }}>
			<Grid container spacing={4}>
				<Grid item xs={12} md={6}>
					<Typography
						variant="h2"
						component="h1"
						gutterBottom
						sx={{
							fontWeight: "bold",
							fontSize: { xs: "2.5rem", md: "3.5rem" },
						}}
					>
						Hard Flooring Specialists
					</Typography>
					<Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
						Wholesale supply, a walk-in retail showroom, and on-site design plus
						installation support for timber and timber-look flooring across
						Melbourne.
					</Typography>

					<Box sx={{ mb: 6 }}>
						<Box
							sx={{
								display: "flex",
								flexWrap: "wrap",
								gap: 2,
								alignItems: "center",
							}}
						>
							<Button
								variant="contained"
								size="large"
								sx={{
									backgroundColor: "#C46A3B",
									color: "#ffffff",
									"&:hover": { backgroundColor: "#A8562E" },
								}}
							>
								Wholesale Enquiries
							</Button>
							<Button
								variant="contained"
								size="large"
								sx={{
									backgroundColor: "#8B4A2F",
									color: "#ffffff",
									"&:hover": { backgroundColor: "#6F3B25" },
								}}
							>
								Book a Design Consult
							</Button>
							<Button
								variant="outlined"
								size="large"
								sx={{
									borderColor: "#8B4A2F",
									color: "#8B4A2F",
									"&:hover": {
										borderColor: "#6F3B25",
										backgroundColor: "rgba(139, 74, 47, 0.08)",
									},
								}}
							>
								Shop the Showroom
							</Button>
						</Box>
						<Button
							variant="text"
							color="inherit"
							sx={{
								display: "block",
								mt: 2,
								p: 0,
								textTransform: "none",
								fontWeight: 500,
							}}
						>
							Trusted by builders across Melbourne
						</Button>
					</Box>
				</Grid>

				<Grid item xs={12} md={6}>
					<Box
						ref={imageRef}
						sx={{
							position: "relative",
							height: { xs: "450px", md: "600px" },
							mb: 2,
						}}
					>
						<Box
							component="img"
							src="/images/interior.jpg"
							alt="Elegant interior with herringbone wooden flooring"
							sx={{
								width: "85%",
								height: "90%",
								objectFit: "cover",
								borderRadius: "8px",
								position: "absolute",
								top: 0,
								left: 0,
								zIndex: 1,
								...animationStyle,
							}}
						/>
						<Box
							component="img"
							src="/images/interior2.jpg"
							alt="Luxurious bathroom with wooden flooring"
							sx={{
								width: "50%",
								height: "40%",
								objectFit: "cover",
								borderRadius: "8px",
								position: "absolute",
								bottom: 0,
								right: 0,
								zIndex: 2,
								...animationStyle,
							}}
						/>
					</Box>
				</Grid>
			</Grid>
		</Container>
	);
}
