"use client";

import { Box, CircularProgress, Typography } from "@mui/material";

export default function LoadingScreen() {
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#362b22",
        zIndex: 9999,
      }}
    >
      <CircularProgress sx={{ color: "#ffffff", mb: 2 }} />
      <Typography variant="h6" sx={{ color: "#ffffff" }}>
        Loading Images...Please Wait......
      </Typography>
    </Box>
  );
}
