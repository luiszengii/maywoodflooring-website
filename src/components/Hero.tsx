"use client";

import { useEffect, useRef, useState } from "react";
import { Typography, Grid, TextField, Box, InputAdornment, Paper, Button, Container } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

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
            const distanceFromCenter = (windowHeight / 2 - elementCenter) / (windowHeight / 2);
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
    transform: `scale(${1 + scrollProgress * 0.15}) translateY(${scrollProgress * 20}px)`,
    boxShadow: `0px ${15 * scrollProgress}px ${30 * scrollProgress}px rgba(0, 0, 0, ${0.3 * scrollProgress})`,
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
            Australia&apos;s largest wholesale supplier of timber & timber look flooring including laminate, hybrid, bamboo, cork and vinyl.
          </Typography>

          <Paper
            elevation={0}
            sx={{
              display: "flex",
              mb: 6,
              border: "1px solid #e0e0e0",
              borderRadius: "4px",
              overflow: "hidden",
            }}
          >
            <TextField
              fullWidth
              placeholder="Search site"
              variant="outlined"
              InputProps={{
                sx: { borderRadius: 0 },
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              sx={{
                "& .MuiOutlinedInput-notchedOutline": { border: "none" },
              }}
            />
            <Button
              variant="contained"
              color="primary"
              sx={{
                borderRadius: 0,
                px: 3,
              }}
            >
              Search
            </Button>
          </Paper>
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
                zIndex: -1,
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
                zIndex: 0,
                ...animationStyle,
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
