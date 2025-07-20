


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
            <Card
              className={styles.card}
              tabIndex={0}
              aria-label={`View details for ${course.title}`}
            >
              <Box
                className={styles.cardTop}
                style={{ background: course.topColor || '#6366f1' }}
              >
                <span className={styles.courseIcon}>
                  {/* Avatar/icon can be an SVG or <img> */}
                  {course.icon}
                </span>
                <Chip
                  label={course.badge || 'POPULAR'}
                  className={styles.badge}
                  size="small"
                />
              </Box>
              <CardContent className={styles.cardContent}>
                <Box className={styles.infoRow}>
                  <Tooltip title={`Rating: ${course.rating || 4.5}`}>
                    <Typography className={styles.rating}>
                      <StarIcon fontSize="small" />
                      {course.rating || '4.5'}
                    </Typography>
                  </Tooltip>
                  <Typography className={styles.students}>
                    {course.students.toLocaleString()} students
                  </Typography>
                </Box>
                <Typography variant="h6" className={styles.courseTitle}>
                  {course.title}
                </Typography>
                <Typography className={styles.details}>
                  {course.duration} &middot; {course.level}
                </Typography>
                <LinearProgress
                  variant="determinate"
                  value={course.progress || 80}
                  className={styles.progress}
                  aria-valuenow={course.progress || 80}
                  aria-label="Enrollment progress"
                />
                <Typography className={styles.progressText}>
                  {course.progress || 80}% full
                </Typography>
                <Button
                  variant="contained"
                  startIcon={<PhoneIcon />}
                  fullWidth
                  className={styles.enrollBtn}
                  aria-label={`Call to enroll in ${course.title}`}
                >
                 view course
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
