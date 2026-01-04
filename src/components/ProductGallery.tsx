"use client";

import { Typography, Card, CardContent, CardMedia, Container, Box, Button } from "@mui/material";
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

const OfferingsGrid = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
  gap: "24px",
  marginTop: "48px",
  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "1fr",
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
          <CardMedia component="img" image="/floors/special-edition.jpg" alt="Special Edition" />
          <CardContent>
            <Typography variant="h6">Special Edition</Typography>
          </CardContent>
        </GridItem>
      </GridContainer>

      <OfferingsGrid>
        <Card variant="outlined">
          <CardContent sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Typography variant="h5" component="h3" fontWeight="bold">
              Wholesale
            </Typography>
            <Typography variant="body1">
              Partner pricing, priority allocations, and tailored product support for builders and
              installers.
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Minimum orders start at 120 m². Typical lead times are 2–4 weeks depending on stock.
            </Typography>
            <Box>
              <Button variant="contained" color="primary">
                Open a Trade Account
              </Button>
            </Box>
          </CardContent>
        </Card>
        <Card variant="outlined">
          <CardContent sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Typography variant="h5" component="h3" fontWeight="bold">
              Retail
            </Typography>
            <Typography variant="body1">
              Explore our curated ranges, expert advice, and samples to find the perfect floor for
              your home.
            </Typography>
            <Box>
              <Button variant="outlined" color="primary">
                Visit Our Showroom
              </Button>
            </Box>
          </CardContent>
        </Card>
      </OfferingsGrid>
    </Container>
  );
}
