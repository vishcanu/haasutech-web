import React from 'react';
import { Box, Typography, Grid, Link, IconButton } from '@mui/material';
import { FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <Box className={styles.footer}>
      <Grid container spacing={10} justifyContent="center" alignItems="flex-start">

        {/* Logo + Social Icons */}
        <Grid item xs={12} sm={6} md={3}>
          <img
            src="/assets/logoHaasutech.jpg"
            alt="Haasutech AI Logo"
            className={styles.footerLogo}
          />
          <Typography variant="body2" className={styles.footerText}>
            Learn AI, ML, and <br />DSA from IITians & industry experts. <br /> Future-proof your career.
          </Typography>
          <Box className={styles.socialIconsContainer}>
  <IconButton
    component="a"
    href="https://www.linkedin.com/company/haasutech-ai/"
    target="_blank"
    className={`${styles.socialIcon} ${styles.linkedin}`}
  >
    <FaLinkedin />
  </IconButton>

  <IconButton
    component="a"
    href="https://www.facebook.com/share/1LE9eiU3JG/"
    target="_blank"
    className={`${styles.socialIcon} ${styles.facebook}`}
  >
    <FaFacebook />
  </IconButton>

  <IconButton
    component="a"
    href="https://www.instagram.com/haasutech_ai?idsh=MWJpNjBoZDc4eGtueg=="
    target="_blank"
    className={`${styles.socialIcon} ${styles.instagram}`}
  >
    <FaInstagram />
  </IconButton>
</Box>

        </Grid>

        {/* ...rest of your sections remain unchanged... */}

        <Grid item xs={12} sm={6} md={3}>
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
            <li><Link href="/blog" underline="none">Blogs</Link></li>
            <li><Link href="#" underline="none">College Students</Link></li>
          </ul>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" className={styles.footerTitle}>Company</Typography>
          <ul className={styles.footerList}>
            <li><Link href="/careers" underline="none">Careers</Link></li>
            <li><Link href="/terms" underline="none">Terms & Conditions</Link></li>
            <li><Link href="/policy" underline="none">Privacy Policy</Link></li>
          </ul>
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
