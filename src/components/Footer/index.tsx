import React from "react";
import "./style.css";
import { Box, Container, Grid, Link } from "@mui/material";
import fbLogo from "../../assets/fb-icon.png";
import instaLogo from "../../assets/insta-icon.png";
import linkedinLogo from "../../assets/linkedin-icon.png";
import logo from "../../assets/footerlogo.png";

const Footer: React.FC = () => {
  return (
    <Box className="footer-container">
      <Container maxWidth="lg">
        <Grid container spacing={3} alignItems="center">
          {/* Logo + Links together */}
          <Grid size={{ xs: 12, md: 9 }}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent={{ xs: "center", md: "flex-start" }}
              flexDirection={{ xs: "column", md: "row" }}
              gap={{ xs: 2, md: 4 }}
              flexWrap="wrap"
            >
              {/* Logo */}
              <Box>
                <img src={logo} alt="Logo" className="footer-logo" />
              </Box>

              {/* Links immediately to the right of logo */}
              <Box display="flex" alignItems="center" gap={3} flexWrap="wrap">
                <Link href="#" className="footer-link">
                  FAQ
                </Link>
                <Link href="#" className="footer-link">
                  Privacy
                </Link>
                <Link href="#" className="footer-link">
                  Support
                </Link>
                <Link href="#" className="footer-link">
                  Contact
                </Link>
              </Box>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 3 }}>
            <Box
              display="flex"
              justifyContent={{ xs: "center", md: "flex-end" }}
              gap={2}
            >
              <img src={fbLogo} alt="fb-icon" className="footer-bar-icon" />
              <img
                src={instaLogo}
                alt="insta-icon"
                className="footer-bar-icon"
              />
              <img
                src={linkedinLogo}
                alt="linkedin-icon"
                className="footer-bar-icon"
              />
            </Box>
          </Grid>
        </Grid>

        {/* Copyright */}
        <Box mt={4}>
          <div className="footer-copy">
            © 2024 Central Texas Fly Fishing All Rights Reserved.
          </div>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
