import React from 'react';
import { Box, Typography, Grid, Card, CardContent, Button } from '@mui/material';
import styles from './CoursesPreview.module.css';

const courses = [
  {
    title: 'Data Science',
    description: 'Master Data Science from basics to advanced with real-world projects.',
  },
  {
    title: 'Machine Learning',
    description: 'Understand ML algorithms, model training, and deployment.',
  },
  {
    title: 'DSA for Interviews',
    description: 'Crack coding interviews with DSA taught by IIT experts.',
  },
  {
    title: 'AI for Beginners',
    description: 'Start your AI journey with simple and intuitive lessons.',
  },
];

export default function CoursesPreview() {
  return (
    <Box className={styles.courseSection}>
      <Typography variant="h4" className={styles.sectionTitle}>
        Our Top AI Courses
      </Typography>
      <Grid container spacing={3} className={styles.courseGrid}>
        {courses.map((course, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card className={styles.courseCard}>
              <CardContent>
                <Typography variant="h6" className={styles.courseTitle}>
                  {course.title}
                </Typography>
                <Typography variant="body2" className={styles.courseDescription}>
                  {course.description}
                </Typography>
                <Button variant="outlined" size="small" href="/courses" className={styles.courseButton}>
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
