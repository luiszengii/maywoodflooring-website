"use client";

import {
	AppBar,
	Toolbar,
	Typography,
	Button,
	Container,
	Box,
	IconButton,
	Menu,
	MenuItem,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";

export default function NavigationBar() {
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

	const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<AppBar
			position="static"
			color="transparent"
			elevation={0}
			sx={{ 
				py: 1.5, 
				bgcolor: "rgb(255,255,255)",
				borderBottom: "1px solid rgba(0, 0, 0, 0.06)" 
			}}
		>
			<Container maxWidth="lg">
				<Toolbar disableGutters>
					{/* Logo section with increased size */}
					<Typography
						variant="h6"
						component="div"
						sx={{
							flexGrow: 1,
							display: "flex",
							alignItems: "center",
							flexWrap: "wrap",
						}}
					>
						<Box
							component="img"
							src="/images/maywoodflooringlogo.jpg"
							alt="Maywood Flooring Logo"
							sx={{
								height: "65px",
								width: "auto",
								transition: "transform 0.3s ease-in-out",
								"&:hover": {
									transform: "scale(1.05)",
								},
							}}
						/>
					</Typography>

					{/* Desktop menu with improved spacing */}
					<Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
						<Button
							color="inherit"
							endIcon={<KeyboardArrowDownIcon />}
							sx={{ 
								color: "rgba(90, 79, 79, 0.8)",
								fontWeight: 500,
								"&:hover": {
									backgroundColor: "rgba(0, 0, 0, 0.03)",
								},
							}}
						>
							Products
						</Button>
						<Button
							color="inherit"
							endIcon={<KeyboardArrowDownIcon />}
							sx={{ 
								color: "rgba(90, 79, 79, 0.8)",
								fontWeight: 500,
								"&:hover": {
									backgroundColor: "rgba(0, 0, 0, 0.03)",
								},
							}}
						>
							Brands
						</Button>
						<Button
							color="inherit"
							endIcon={<KeyboardArrowDownIcon />}
							sx={{ 
								color: "rgba(90, 79, 79, 0.8)",
								fontWeight: 500,
								"&:hover": {
									backgroundColor: "rgba(0, 0, 0, 0.03)",
								},
							}}
						>
							Resources
						</Button>
						<IconButton
							color="inherit"
							sx={{ 
								ml: 1, 
								color: "rgba(90, 79, 79, 0.8)",
								"&:hover": {
									backgroundColor: "rgba(0, 0, 0, 0.03)",
								},
							}}
						>
							<SearchIcon />
						</IconButton>
					</Box>

					{/* Mobile menu */}
					<Box sx={{ display: { xs: "flex", md: "none" } }}>
						<IconButton
							size="large"
							aria-label="menu"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleMenu}
							sx={{ color: "rgba(90, 79, 79, 0.8)" }}
						>
							<MenuIcon />
						</IconButton>
						<Menu
							id="menu-appbar"
							anchorEl={anchorEl}
							anchorOrigin={{
								vertical: "top",
								horizontal: "right",
							}}
							keepMounted
							transformOrigin={{
								vertical: "top",
								horizontal: "right",
							}}
							open={Boolean(anchorEl)}
							onClose={handleClose}
						>
							<MenuItem onClick={handleClose}>Products</MenuItem>
							<MenuItem onClick={handleClose}>Brands</MenuItem>
							<MenuItem onClick={handleClose}>Resources</MenuItem>
							<MenuItem onClick={handleClose}>Search</MenuItem>
						</Menu>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
}
