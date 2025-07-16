



import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Chip,
  Button,
  LinearProgress,
} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import PhoneIcon from '@mui/icons-material/Phone';

import styles from './CoursesPreview.module.css';
import { courseData } from '../maincourses/coursesData';

export default function CoursesPreview() {
  const featuredCourses = courseData.filter(course => course.isFeatured);

  return (
    <Box className={styles.section}>
      <Typography variant="h5" className={styles.title}>
       Most Popular Courses
      </Typography>
      <Typography className={styles.subtitle}>
        Join thousands of students in our top-rated courses
      </Typography>

      <Grid container spacing={3} className={styles.grid}>
        <div className={styles.gridWrapper}>
        {featuredCourses.map((course, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box height="100%">
              <Card className={styles.card}>
                <Box className={styles.cardTop} style={{ background: course.topColor }}>
                  <Box className={styles.courseIcon}>{course.icon}</Box>
                  <Chip label={course.badge || 'POPULAR'} className={styles.badge} />
                </Box>

                <CardContent className={styles.cardContent}>
                  <Box className={styles.infoRow}>
                  
                    <Typography className={styles.rating}>
                      <StarIcon fontSize="small" /> {course.rating || '4.5'} 
                    </Typography>
                  </Box>

                  <Typography variant="h6" className={styles.courseTitle}>
                    {course.title}
                  </Typography>

                  <Typography className={styles.details}>
                    {course.duration} · {course.students.toLocaleString()} students enrolled
                  </Typography>

                  <LinearProgress
                    variant="determinate"
                    value={course.progress || 80}
                    className={styles.progress}
                  />
                  <Typography className={styles.progressText}>
                    {course.progress || 80}% full
                  </Typography>

                  <Button
                    variant="contained"
                    startIcon={<PhoneIcon />}
                    fullWidth
                    className={styles.enrollBtn}
                  >
                    Call to Enroll: +91-8871732621
                  </Button>
                </CardContent>
              </Card>
            </Box>
          </Grid>
        ))}
        </div>
      </Grid>
<Box className={styles.limitedOfferWrapper}>
      <Box className={styles.limitedOffer}>
        <h3>⏰ Limited Time: 50% OFF All Courses!</h3>
        <p>Don't miss out! Call now to secure your spot and save big</p>
        <Box className={styles.ctaButtons}>
          <Button className={styles.callBtn}>📞 Call Now: (+91) 88717 32621</Button>
          <Button className={styles.whatsappBtn}>💬 WhatsApp Us</Button>
        </Box>
        <div className={styles.footerText}>
          🔥 Offer expires in 48 hours | 💳 Easy payment plans available
        </div>
      </Box>
      </Box>
    </Box>
  );
}
