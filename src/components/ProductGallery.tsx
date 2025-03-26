"use client";

import { Typography, Card, CardContent, CardMedia, Container, Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const GridContainer = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "24px",
  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    "& .span-two": {
      gridRow: "auto",
    },
  },
}));

const GridItem = styled(Card)(({ theme }) => ({
  height: "100%",
  transition: "all 0.3s ease-in-out",
  cursor: "pointer",
  "& .MuiCardMedia-root": {
    height: "280px",
    objectFit: "cover",
    transition: "all 0.3s ease-in-out",
  },
  "&:hover, &:active": {
    transform: "scale(1.02) translateY(-4px)",
    boxShadow: "0 12px 24px rgba(0,0,0,0.2)",
  },
  "&.span-two": {
    gridRow: "span 2",
    "& .MuiCardMedia-root": {
      height: "100%",
      minHeight: "584px",
    },
  },
}));

export default function ProductGallery() {
  return (
    <Container maxWidth="lg" sx={{ mt: 8, mb: 6 }}>
      <Typography variant="h4" component="h2" sx={{ mt: 8, mb: 4, fontWeight: "bold" }}>
        Our Products
      </Typography>

      <GridContainer>
        {/* Timber Flooring - Spans 2 rows */}
        <GridItem className="span-two">
          <CardMedia component="img" image="/floors/timber-flooring.jpg" alt="Timber Flooring" />
          <CardContent>
            <Typography variant="h6">Timber Flooring</Typography>
          </CardContent>
        </GridItem>

        {/* Laminate Flooring */}
        <GridItem>
          <CardMedia component="img" image="/floors/laminate-flooring.jpg" alt="Laminate Flooring" />
          <CardContent>
            <Typography variant="h6">Laminate Flooring</Typography>
          </CardContent>
        </GridItem>

        {/* Hybrid Flooring */}
        <GridItem>
          <CardMedia component="img" image="/floors/hybrid-flooring.jpg" alt="Hybrid Flooring" />
          <CardContent>
            <Typography variant="h6">Hybrid Flooring</Typography>
          </CardContent>
        </GridItem>

        {/* Vinyl Flooring */}
        <GridItem>
          <CardMedia component="img" image="/floors/vinyl-flooring.jpg" alt="Vinyl Flooring" />
          <CardContent>
            <Typography variant="h6">Vinyl Flooring</Typography>
          </CardContent>
        </GridItem>

        {/* Premium Collection - Spans 2 rows */}
        <GridItem className="span-two">
          <CardMedia component="img" image="/images/premium-collection.jpg" alt="Premium Collection" />
          <CardContent>
            <Typography variant="h6">Premium Collection</Typography>
          </CardContent>
        </GridItem>

        {/* Bamboo Flooring */}
        <GridItem>
          <CardMedia component="img" image="/floors/bamboo-flooring.jpg" alt="Bamboo Flooring" />
          <CardContent>
            <Typography variant="h6">Bamboo Flooring</Typography>
          </CardContent>
        </GridItem>

        {/* Special Edition */}
        <GridItem>
          <CardMedia component="img" image="/floors//special-edition.jpg" alt="Special Edition" />
          <CardContent>
            <Typography variant="h6">Special Edition</Typography>
          </CardContent>
        </GridItem>
      </GridContainer>
    </Container>
  );
}
