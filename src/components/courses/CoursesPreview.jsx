


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
  Tooltip
} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import PhoneIcon from '@mui/icons-material/Phone';

import styles from './CoursesPreview.module.css';
import { courseData } from '../maincourses/coursesData';

export default function CoursesPreview() {
  const featuredCourses = courseData.filter(course => course.isFeatured);

  return (
    <Box className={styles.section}>
      <Typography variant="h3" className={styles.title}>
        Most Popular Courses
      </Typography>
      <Typography className={styles.subtitle}>
        Join thousands of learners. Interactive, job-ready tech courses for everyone.
      </Typography>

      <Grid container spacing={3} className={styles.grid}>
        {featuredCourses.map((course, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card className={styles.card} tabIndex={0}>
  <Box className={styles.cardTop} style={{ background: course.topColor || '#6366f1' }}>
    <span className={styles.courseIcon}>{course.icon}</span>
    <Typography variant="h6" className={styles.courseTitle}>
      {course.title}
    </Typography>
  </Box>
  <CardContent className={styles.cardContent}>
    <Box className={styles.infoRow}>
      <Tooltip title={`Rating: ${course.rating || 4.5}`}>
        <Typography className={styles.rating}>
          <StarIcon fontSize="small" />
          {course.rating || '4.5'}
        </Typography>
      </Tooltip>
    </Box>
     <Typography variant="body2" className={styles.hookLine}>
    Kickstart your journey in {course.title.toLowerCase()} today!
  </Typography>
   
    <Button
  variant="outlined"
  fullWidth
  size="small"
  href={`/courses/${course.slug}`}
  className={styles.enrollBtn}
  style={{
    background: course.topColor || '#6366f1',
    color: '#fff',
    fontWeight: 500
  }}
>
  View
</Button>

  </CardContent>
</Card>

          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
