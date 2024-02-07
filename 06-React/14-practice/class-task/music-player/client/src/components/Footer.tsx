import React from "react";
import { Divider, Container, Typography, Link, Grid } from "@mui/material";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer_container">
      <Divider />
      <Container sx={{ py: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>
            Discover, Play, and Groove with 

{" "}
              <Link
                href="#"
                color="primary"
                underline="hover"
              >
Multi Musix              </Link>{" "}
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <nav className="nav_footer">
              <NavLink to="/home-page">Home</NavLink>
              <NavLink to="/about-us">About Us</NavLink>
              <NavLink to="/playlist">Playlist</NavLink>
            </nav>
          </Grid>
        </Grid>
        <Divider />
        <Typography variant="body2" color="textPraimery" align="center">
          &copy; {new Date().getFullYear()} multi musix, Inc.
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
