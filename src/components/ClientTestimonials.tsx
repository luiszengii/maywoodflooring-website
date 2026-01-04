"use client";

import { Box, Card, CardContent, Container, Typography, Stack, Avatar } from "@mui/material";

const testimonials = [
  {
    quote:
      "Every board was laid with care, and the team kept us informed daily. The finish is flawless.",
    name: "Sarah T.",
    detail: "Camberwell Renovation",
    initials: "ST",
  },
  {
    quote:
      "They promised a tight timeline before our opening and delivered without compromise on craftsmanship.",
    name: "James L.",
    detail: "Retail Showroom Fit-out",
    initials: "JL",
  },
  {
    quote:
      "The crew respected our home, worked efficiently, and finished ahead of schedule. Stunning result.",
    name: "Priya K.",
    detail: "Mornington Residence",
    initials: "PK",
  },
];

export default function ClientTestimonials() {
  return (
    <Container maxWidth="lg" sx={{ mt: 8, mb: 8 }}>
      <Stack spacing={2} sx={{ mb: 5 }}>
        <Typography variant="h4" component="h2" sx={{ fontWeight: "bold" }}>
          Client Testimonials
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Trusted for meticulous workmanship and reliable timelines across Melbourne projects.
        </Typography>
      </Stack>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
          gap: 4,
        }}
      >
        {testimonials.map((testimonial) => (
          <Card
            key={testimonial.name}
            sx={{
              height: "100%",
              boxShadow: "0 10px 24px rgba(0,0,0,0.06)",
            }}
          >
            <CardContent>
              <Typography variant="body1" sx={{ mb: 3, fontStyle: "italic" }}>
                “{testimonial.quote}”
              </Typography>
              <Stack direction="row" spacing={2} alignItems="center">
                <Avatar sx={{ bgcolor: "primary.main", fontWeight: 600 }}>
                  {testimonial.initials}
                </Avatar>
                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                    {testimonial.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {testimonial.detail}
                  </Typography>
                </Box>
              </Stack>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Container>
  );
}
