import React from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box
} from '@mui/material';
import InsightsIcon from '@mui/icons-material/Insights';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styles from './CourseDetail.module.css';
import CourseRoadmap from './Courseroadmap';
import UrgencyBar from './UrgencyBar';


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
    {course.industryInsights && (
  <div className={styles.insightsContainer}>
    <div className={styles.insightsHeader}>
      <InsightsIcon className={styles.insightsIcon} />
      <h4 className={styles.insightsTitle}>Industry Insights</h4>
    </div>

    <div className={styles.insightsStats}>
      <div className={styles.statItem}>
        <p className={`${styles.statValue} ${styles.yellow}`}>
          {course.industryInsights.relevance}
        </p>
        <p className={styles.statLabel}>Industry Relevance</p>
      </div>
      <div className={styles.statItem}>
        <p className={`${styles.statValue} ${styles.green}`}>
          {course.industryInsights.marketDemand}
        </p>
        <p className={styles.statLabel}>Market Demand</p>
      </div>
      <div className={styles.statItem}>
        <p className={`${styles.statValue} ${styles.purple}`}>
          {course.industryInsights.avgSalary}
        </p>
        <p className={styles.statLabel}>Avg. Salary</p>
      </div>
    </div>
  </div>
)}

  </div>
</div>

  {Array.isArray(course.roadmap) && course.roadmap.length > 0 && (
        <CourseRoadmap steps={course.roadmap} />
      )}

      <UrgencyBar />

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
