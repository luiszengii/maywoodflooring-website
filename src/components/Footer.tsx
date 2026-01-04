"use client";

import {
	Typography,
	Button,
	Container,
	Grid,
	Box,
	IconButton,
	TextField,
	FormControl,
	InputLabel,
	Select,
	MenuItem,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { RiWechatFill } from "react-icons/ri";
import { SiXiaohongshu } from "react-icons/si";
import Copyright from "@/components/Copyright";

export default function Footer() {
	return (
		<Box component="footer" sx={{ bgcolor: "#f5f5f5", pt: 6, pb: 4, mt: 8 }}>
			<Container maxWidth="lg">
				<Grid container spacing={4} alignItems="flex-start">
					<Grid item xs={12}>
						<Box
							sx={{
								border: "1px solid #e0e0e0",
								borderRadius: 2,
								p: { xs: 3, md: 4 },
								bgcolor: "#ffffff",
							}}
						>
							<Grid container spacing={3}>
								<Grid item xs={12} md={6}>
									<Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>
										Book a Consultation
									</Typography>
									<Typography variant="body2" sx={{ mb: 2, color: "text.secondary" }}>
										Tell us about your project and we will be in touch.
									</Typography>
									<Box
										component="form"
										noValidate
										sx={{ display: "flex", flexDirection: "column", gap: 2 }}
									>
										<TextField label="Name" name="name" size="small" />
										<TextField
											label="Email"
											name="email"
											type="email"
											size="small"
										/>
										<FormControl size="small">
											<InputLabel id="project-type-label">
												Project type
											</InputLabel>
											<Select
												labelId="project-type-label"
												label="Project type"
												defaultValue=""
											>
												<MenuItem value="">
													<em>Select one</em>
												</MenuItem>
												<MenuItem value="residential">Residential</MenuItem>
												<MenuItem value="commercial">Commercial</MenuItem>
												<MenuItem value="restoration">Restoration</MenuItem>
											</Select>
										</FormControl>
										<Button variant="contained" sx={{ alignSelf: "flex-start" }}>
											Request consultation
										</Button>
									</Box>
								</Grid>
								<Grid item xs={12} md={6}>
									<Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
										Contact info
									</Typography>
									<Typography variant="body2" sx={{ mb: 1 }}>
										Phone: (310) 555-0198
									</Typography>
									<Typography variant="body2" sx={{ mb: 1 }}>
										Email: hello@maywoodfloors.com
									</Typography>
									<Typography variant="body2" sx={{ mb: 1 }}>
										Showroom: 123 Maple Avenue, Maywood, CA 90270
									</Typography>
									<Typography variant="body2">
										Hours: Mon–Fri 9am–6pm, Sat 10am–4pm
									</Typography>
								</Grid>
							</Grid>
						</Box>
					</Grid>
					{/* Logo */}
					<Grid item xs={12} md={3} sx={{ mb: { xs: 3, md: 0 } }}>
						<Typography
							variant="h6"
							component="div"
							sx={{
								fontWeight: "bold",
								textAlign: { xs: "center", md: "left" },
							}}
						>
							MAY WOOD FLOORS
						</Typography>
					</Grid>

					{/* Footer Links */}
					<Grid item xs={12} md={6}>
						<Grid container spacing={2}>
							<Grid item xs={4}>
								<Typography
									variant="h6"
									gutterBottom
									sx={{ textAlign: "left" }}
								>
									Products
								</Typography>
								<Box
									sx={{
										display: "flex",
										flexDirection: "column",
										alignItems: "flex-start",
									}}
								>
									<Button sx={{ justifyContent: "flex-start", px: 0, py: 0.5 }}>
										Flooring Products
									</Button>
									<Button sx={{ justifyContent: "flex-start", px: 0, py: 0.5 }}>
										Our ranges
									</Button>
									<Button sx={{ justifyContent: "flex-start", px: 0, py: 0.5 }}>
										Find a Stockist
									</Button>
								</Box>
							</Grid>

							<Grid item xs={4}>
								<Typography
									variant="h6"
									gutterBottom
									sx={{ textAlign: "left" }}
								>
									Company
								</Typography>
								<Box
									sx={{
										display: "flex",
										flexDirection: "column",
										alignItems: "flex-start",
									}}
								>
									<Button sx={{ justifyContent: "flex-start", px: 0, py: 0.5 }}>
										About us
									</Button>
									<Button sx={{ justifyContent: "flex-start", px: 0, py: 0.5 }}>
										Contact us
									</Button>
									<Button sx={{ justifyContent: "flex-start", px: 0, py: 0.5 }}>
										Sustainability
									</Button>
								</Box>
							</Grid>

							<Grid item xs={4}>
								<Typography
									variant="h6"
									gutterBottom
									sx={{ textAlign: "left" }}
								>
									Resources
								</Typography>
								<Box
									sx={{
										display: "flex",
										flexDirection: "column",
										alignItems: "flex-start",
									}}
								>
									<Button sx={{ justifyContent: "flex-start", px: 0, py: 0.5 }}>
										Customer portal
									</Button>
									<Button sx={{ justifyContent: "flex-start", px: 0, py: 0.5 }}>
										Academy
									</Button>
									<Button sx={{ justifyContent: "flex-start", px: 0, py: 0.5 }}>
										Legal
									</Button>
								</Box>
							</Grid>
						</Grid>
					</Grid>

					{/* Social Links */}
					<Grid
						item
						xs={12}
						md={3}
						sx={{ textAlign: { xs: "center", md: "right" } }}
					>
						<Box
							sx={{
								display: "flex",
								justifyContent: { xs: "center", md: "flex-end" },
								gap: 2,
							}}
						>
							<IconButton aria-label="Facebook" component="a" href="#facebook">
								<FacebookIcon />
							</IconButton>
							<IconButton
								aria-label="Instagram"
								component="a"
								href="#instagram"
							>
								<InstagramIcon />
							</IconButton>
							<IconButton aria-label="YouTube" component="a" href="#youtube">
								<YouTubeIcon />
							</IconButton>
							<IconButton aria-label="WhatsApp" component="a" href="#whatsapp">
								<WhatsAppIcon />
							</IconButton>
							<IconButton aria-label="WeChat" component="a" href="#wechat">
								<RiWechatFill />
							</IconButton>
							<IconButton
								aria-label="Xiaohongshu"
								component="a"
								href="#xiaohongshu"
							>
								<SiXiaohongshu />
							</IconButton>
						</Box>
					</Grid>

					{/* Copyright */}
					<Grid item xs={12} sx={{ mt: 4 }}>
						<Copyright />
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
}
