import React from 'react';
import { Box, Typography, Grid, Link } from '@mui/material';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <Box className={styles.footer}>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" className={styles.footerTitle}>Haasutech AI</Typography>
          <Typography variant="body2">
            Learn AI, ML, and DSA from IITians & industry experts. Future-proof your career.
          </Typography>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" className={styles.footerTitle}>Explore</Typography>
          <ul className={styles.footerList}>
            <li><Link href="/courses">Courses</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" className={styles.footerTitle}>For Learners</Typography>
          <ul className={styles.footerList}>
            <li><Link href="/career-switch">Career Switchers</Link></li>
            <li><Link href="/upskill">Upskilling Employees</Link></li>
            <li><Link href="#">College Students</Link></li>
          </ul>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" className={styles.footerTitle}>Contact</Typography>
          <Typography variant="body2">
            Email: support@haasutech.ai<br />
            Phone: +91-99999-88888
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
