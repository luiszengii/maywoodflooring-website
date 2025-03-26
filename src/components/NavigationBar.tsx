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
			elevation={1}
			sx={{ py: 1, bgcolor: "#362b22" }}
		>
			<Container maxWidth="lg">
				<Toolbar disableGutters sx={{ color: "#362b22" }}>
					{/* Logo section remains unchanged */}
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
							// src="/images/logo.png"
							// src="/images/logo-trans.png"
							src="/images/maywoodflooringlogo.jpg"
							// src="/images/logo-white.png"
							// src="/images/logo-white-trans.png"
							alt="W7 Design Flooring Logo"
							sx={{
								height: "50px",
								width: "auto",
								transition: "transform 0.3s ease-in-out",
								"&:hover": {
									transform: "scale(1.05)",
								},
							}}
						/>
						{/* Original text logo
            <Box
              component="span"
              sx={{
                position: "relative",
                display: "inline-flex",
                alignItems: "flex-end",
                gap: "-2px",
              }}
            >
              <Box
                component="span"
                sx={{
                  fontWeight: 700,
                  letterSpacing: "0.001em",
                  color: "rgba(255, 255, 255, 0.9)",
                  fontSize: "2.3rem",
                  fontFamily: "'Playfair Display', serif",
                  lineHeight: 1,
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                  transition: "all 0.5s ease-in-out",
                  "&:hover, &:active": {
                    color: "rgb(255, 255, 255)",
                    letterSpacing: "0.02em",
                    textShadow: "0 0 3px rgba(255, 255, 255, 0.35), 0 0 12px rgba(255, 255, 255, 0.2), 0 0 18px rgba(255, 255, 255, 0.1)",
                    transform: "scale(1.01) translateY(-0.5px)",
                  },
                }}
              >
                W7 DESIGN
              </Box>
              <Box
                component="span"
                sx={{
                  color: "rgba(255, 255, 255, 0.75)",
                  fontSize: "1.1rem",
                  fontFamily: "'Playfair Display', serif",
                  whiteSpace: "nowrap",
                  marginLeft: "2px",
                }}
              >
                FLOORING
              </Box>
            </Box>
            */}
					</Typography>

					{/* Desktop menu */}
					<Box sx={{ display: { xs: "none", md: "flex" } }}>
						<Button
							color="inherit"
							endIcon={<KeyboardArrowDownIcon />}
							sx={{ mx: 1, color: "#ffffff" }}
						>
							Products
						</Button>
						<Button
							color="inherit"
							endIcon={<KeyboardArrowDownIcon />}
							sx={{ mx: 1, color: "#ffffff" }}
						>
							Brands
						</Button>
						<Button
							color="inherit"
							endIcon={<KeyboardArrowDownIcon />}
							sx={{ mx: 1, color: "#ffffff" }}
						>
							Resources
						</Button>
						<Button
							color="inherit"
							sx={{ minWidth: "auto", ml: 1, color: "#ffffff" }}
						>
							<SearchIcon />
						</Button>
					</Box>

					{/* Mobile menu */}
					<Box sx={{ display: { xs: "flex", md: "none" } }}>
						<IconButton
							size="large"
							aria-label="menu"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleMenu}
							sx={{ color: "#ffffff" }}
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
