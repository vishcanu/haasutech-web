import React from 'react';
import { Box, Typography, Grid, Link } from '@mui/material';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <Box className={styles.footer}>
      <Grid container spacing={4} justifyContent="center" alignItems="flex-start">
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" className={styles.footerTitle}>Haasutech AI</Typography>
          <Typography variant="body2" className={styles.footerText}>
            Learn AI, ML, and DSA from IITians & industry experts. Future-proof your career.
          </Typography>
        </Grid>

        <Grid item xs={12} sm={6} md={2}>
          <Typography variant="h6" className={styles.footerTitle}>Explore</Typography>
          <ul className={styles.footerList}>
            <li><Link href="/courses" underline="none">Courses</Link></li>
            <li><Link href="/about" underline="none">About</Link></li>
            <li><Link href="/contact" underline="none">Contact</Link></li>
          </ul>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" className={styles.footerTitle}>For Learners</Typography>
          <ul className={styles.footerList}>
            <li><Link href="/career-switch" underline="none">Career Switchers</Link></li>
            <li><Link href="/upskill" underline="none">Upskilling Employees</Link></li>
            <li><Link href="#" underline="none">College Students</Link></li>
          </ul>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" className={styles.footerTitle}>Contact</Typography>
          <Typography variant="body2" className={styles.footerText}>
            Email: <a href="mailto:business@haasutech.com">business@haasutech.com</a><br />
            Phone: 
            <br />
            <a href="tel:+918932900125">+91-89329-00125</a>
            <br />
            <a href="tel:+918299770993">+91-82997-70993</a>
          </Typography>
        </Grid>
      </Grid>

      <Box className={styles.bottomBar}>
        <Typography variant="body2">
          © {new Date().getFullYear()} Haasutech AI. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
}
