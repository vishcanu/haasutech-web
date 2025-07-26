



import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Chip,
  Button,
  Tooltip
} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

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

      {/* ✅ Using CSS Grid */}
      <Box className={styles.grid}>
        {featuredCourses.map((course, index) => (
          <Card className={styles.card} tabIndex={0} key={index}>
            <Box
              className={styles.cardTop}
              style={{ background: course.topColor || '#6366f1' }}
            >
              <span className={styles.courseIcon}>{course.icon}</span>
              <Typography variant="h6" className={styles.courseTitle}>
                {course.title}
              </Typography>
            </Box>

            <CardContent className={styles.cardContent}>
              <Box className={styles.infoRow}>
                <Typography className={styles.byIITians}>By IITians</Typography>
                <Tooltip title={`Rating: ${course.rating || 4.5}`}>
                  <Typography className={styles.rating}>
                    <StarIcon fontSize="small" />
                    {course.rating || '4.5'}
                  </Typography>
                </Tooltip>
              </Box>

              {course.tools?.length > 0 && (
                <Box className={styles.pillGroup}>
                  <Typography className={styles.pillLabel}>
                    Tools &amp; Technologies:
                  </Typography>
                  <Box className={styles.pillsRow}>
                    {course.tools.slice(0, 3).map((t, i) => (
                      <Chip key={i} label={t} size="small" className={styles.toolChip} />
                    ))}
                  </Box>
                </Box>
              )}

              {course.careers?.length > 0 && (
                <Box className={styles.pillGroup}>
                  <Typography className={styles.pillLabel}>Career Outcomes:</Typography>
                  <Box className={styles.pillsRow}>
                    {course.careers.slice(0, 3).map((c, i) => (
                      <Chip key={i} label={c} size="small" className={styles.careerChip} />
                    ))}
                  </Box>
                </Box>
              )}

              <Typography variant="body2" className={styles.hookLine}>
                Kickstart your journey today!
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
        ))}
      </Box>

      {/* Floating "View All Courses" button */}
      <Button className={styles.viewAllBtn} href="/courses">
        View All Courses
      </Button>
    </Box>
  );
}
