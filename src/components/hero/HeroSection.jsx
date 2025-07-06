import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import styles from './HeroSection.module.css';
// import AI from '../../../public/aiimage.png'; 

const AI = '../../../public/aiimage.png';

export default function HeroSection() {
  return (
    <Box className={styles.heroSection}>
      <Box className={styles.heroContent}>
        <Typography variant="h2" className={styles.heroTitle}>
          Transform Your Career with AI Courses
        </Typography>
        <Typography variant="body1" className={styles.heroSubtitle}>
          Learn from industry experts and IITians. Enroll now to stay ahead.
        </Typography>
        <Button variant="contained" color="primary" href="/courses">
          Browse Courses
        </Button>
      </Box>
      <img src={AI} alt="AI Graphic" className={styles.heroImage} />
    </Box>
  );
}
