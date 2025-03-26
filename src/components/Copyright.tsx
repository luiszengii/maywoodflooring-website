// src/components/Copyright.tsx
"use client";

import { Typography } from "@mui/material";

export default function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 4 }}>
      © {new Date().getFullYear()} W7 Design Flooring
    </Typography>
  );
}
