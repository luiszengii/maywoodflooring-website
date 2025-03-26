"use client";

import { Typography, Button, Container, Grid, Box, IconButton } from "@mui/material";
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
              W7 DESIGN FLOORS
            </Typography>
          </Grid>

          {/* Footer Links */}
          <Grid item xs={12} md={6}>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Typography variant="h6" gutterBottom sx={{ textAlign: "left" }}>
                  Products
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                  }}
                >
                  <Button sx={{ justifyContent: "flex-start", px: 0, py: 0.5 }}>Flooring Products</Button>
                  <Button sx={{ justifyContent: "flex-start", px: 0, py: 0.5 }}>Our ranges</Button>
                  <Button sx={{ justifyContent: "flex-start", px: 0, py: 0.5 }}>Find a Stockist</Button>
                </Box>
              </Grid>

              <Grid item xs={4}>
                <Typography variant="h6" gutterBottom sx={{ textAlign: "left" }}>
                  Company
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                  }}
                >
                  <Button sx={{ justifyContent: "flex-start", px: 0, py: 0.5 }}>About us</Button>
                  <Button sx={{ justifyContent: "flex-start", px: 0, py: 0.5 }}>Contact us</Button>
                  <Button sx={{ justifyContent: "flex-start", px: 0, py: 0.5 }}>Sustainability</Button>
                </Box>
              </Grid>

              <Grid item xs={4}>
                <Typography variant="h6" gutterBottom sx={{ textAlign: "left" }}>
                  Resources
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                  }}
                >
                  <Button sx={{ justifyContent: "flex-start", px: 0, py: 0.5 }}>Customer portal</Button>
                  <Button sx={{ justifyContent: "flex-start", px: 0, py: 0.5 }}>Academy</Button>
                  <Button sx={{ justifyContent: "flex-start", px: 0, py: 0.5 }}>Legal</Button>
                </Box>
              </Grid>
            </Grid>
          </Grid>

          {/* Social Links */}
          <Grid item xs={12} md={3} sx={{ textAlign: { xs: "center", md: "right" } }}>
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
              <IconButton aria-label="Instagram" component="a" href="#instagram">
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
              <IconButton aria-label="Xiaohongshu" component="a" href="#xiaohongshu">
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
