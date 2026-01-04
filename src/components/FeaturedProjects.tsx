"use client";

import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
  Stack,
  Chip,
} from "@mui/material";

const projects = [
  {
    title: "Bayside Family Residence",
    description:
      "Hand-laid European oak in a herringbone pattern, finished with a satin seal for a warm, coastal feel.",
    timeline: "Delivered in 12 days",
    image: "/images/interior.jpg",
    tags: ["Herringbone", "European Oak"],
  },
  {
    title: "Melbourne Boutique Showroom",
    description:
      "Precision-matched planks with seamless transitions to showcase premium fixtures and high foot traffic durability.",
    timeline: "Completed on a 3-week schedule",
    image: "/images/premium-collection.jpg",
    tags: ["Commercial", "Premium Finish"],
  },
  {
    title: "Alpine Retreat Renovation",
    description:
      "Wide-board timber floors with moisture-smart underlay to keep the space quiet, warm, and resilient.",
    timeline: "Finished ahead of handover",
    image: "/images/interior2.jpg",
    tags: ["Wide Board", "Moisture Guard"],
  },
];

export default function FeaturedProjects() {
  return (
    <Box component="section" sx={{ backgroundColor: "#f7f5f2", py: { xs: 8, md: 10 } }}>
      <Container maxWidth="lg">
        <Stack spacing={2} sx={{ mb: 5 }}>
          <Typography variant="h4" component="h2" sx={{ fontWeight: "bold" }}>
            Featured Projects
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Crafted floors that reflect our attention to detail and our promise to deliver on time,
            every time.
          </Typography>
        </Stack>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
            gap: 4,
          }}
        >
          {projects.map((project) => (
            <Card
              key={project.title}
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                boxShadow: "0 12px 24px rgba(0,0,0,0.08)",
              }}
            >
              <CardMedia component="img" image={project.image} alt={project.title} sx={{ height: 220 }} />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  {project.description}
                </Typography>
                <Stack direction="row" spacing={1} sx={{ mb: 2, flexWrap: "wrap" }}>
                  {project.tags.map((tag) => (
                    <Chip key={tag} label={tag} size="small" />
                  ))}
                </Stack>
                <Typography variant="subtitle2" color="primary">
                  {project.timeline}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
