import React from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styles from './CourseDetail.module.css';


const CourseDetail = ({ course }) => {
  return (
    <div className={styles.courseWrapper}>
      <div className={styles.titleSection}>
  <h1 className={styles.title}>{course.title}</h1>
  <p className={styles.description}>{course.description}</p>
</div>

<h2 className={styles.moduleHeading}>Modules</h2>
      <div className={styles.moduleLayout}>
 
  <div className={styles.moduleList}>
    {course.modules.map((mod, index) => (
      <Accordion key={index} className={styles.moduleCard}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6" className={styles.moduleTitle}>
            {mod.title}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ul className={styles.topicList}>
            {mod.topics.map((topic, i) => (
              <li key={i} className={styles.topicItem}>
                {topic}
              </li>
            ))}
          </ul>
        </AccordionDetails>
      </Accordion>
    ))}
  </div>

 
  <div className={styles.sidebar}>
    <img
      src="/assets/learningImage.svg"
      alt="Learning Illustration"
      className={styles.illustration}
    />
    <Box className={styles.ctaBox}>
      <Typography variant="h6">Ready to start learning?</Typography>
      <button className={styles.ctaButton}>Enroll Now</button>
    </Box>
  </div>
</div>


      {/* WHY SECTION */}
      {course.why && (
        <Box className={styles.whySection}>
          <h2 className={styles.moduleHeading}>{course.why.heading}</h2>
          <ul className={styles.whyList}>
            {course.why.points.map((point, i) => (
              <li key={i} className={styles.whyItem}>
                {point}
              </li>
            ))}
          </ul>
        </Box>
      )}
    </div>
  );
};

export default CourseDetail;
