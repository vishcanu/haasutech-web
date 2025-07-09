// import React from 'react';
// import { Box, Typography, Grid, Card, CardContent, Button } from '@mui/material';
// import styles from './CoursesPreview.module.css';

// const courses = [
//   {
//     title: 'Data Science',
//     description: 'Master Data Science from basics to advanced with real-world projects.',
//   },
//   {
//     title: 'Machine Learning',
//     description: 'Understand ML algorithms, model training, and deployment.',
//   },
//   {
//     title: 'DSA for Interviews',
//     description: 'Crack coding interviews with DSA taught by IIT experts.',
//   },
//   {
//     title: 'AI for Beginners',
//     description: 'Start your AI journey with simple and intuitive lessons.',
//   },
// ];

// export default function CoursesPreview() {
//   return (
//     <Box className={styles.courseSection}>
//       <Typography variant="h4" className={styles.sectionTitle}>
//         Our Top AI Courses
//       </Typography>
//       <Grid container spacing={3} className={styles.courseGrid}>
//         {courses.map((course, index) => (
//           <Grid item xs={12} sm={6} md={3} key={index}>
//             <Card className={styles.courseCard}>
//               <CardContent>
//                 <Typography variant="h6" className={styles.courseTitle}>
//                   {course.title}
//                 </Typography>
//                 <Typography variant="body2" className={styles.courseDescription}>
//                   {course.description}
//                 </Typography>
//                 <Button variant="outlined" size="small" href="/courses" className={styles.courseButton}>
//                   Learn More
//                 </Button>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// }



// import React from 'react';
// import {
//   Box,
//   Typography,
//   Grid,
//   Card,
//   CardContent,
//   Button,
//   Chip,
// } from '@mui/material';
// import StarIcon from '@mui/icons-material/Star';
// import styles from './CoursesPreview.module.css';

// const courses = [
//   {
//     title: 'Web Development Fundamentals',
//     level: 'Beginner',
//     price: '$99',
//     rating: 4.9,
//     duration: '12 weeks',
//     description: 'Learn HTML, CSS, and JavaScript from scratch.',
//     bg: 'linear-gradient(to right, #4e54c8, #8f94fb)',
//   },
//   {
//     title: 'Data Science & Analytics',
//     level: 'Intermediate',
//     price: '$199',
//     rating: 4.8,
//     duration: '16 weeks',
//     description: 'Master Python, SQL, and machine learning.',
//     bg: 'linear-gradient(to right, #11998e, #38ef7d)',
//   },
//   {
//     title: 'UX/UI Design Mastery',
//     level: 'Advanced',
//     price: '$149',
//     rating: 4.9,
//     duration: '10 weeks',
//     description: 'Transform creative skills into a tech career.',
//     bg: 'linear-gradient(to right, #f953c6, #b91d73)',
//   },
//   {
//     title: 'Mobile App Development',
//     level: 'Beginner',
//     price: '$179',
//     rating: 4.7,
//     duration: '14 weeks',
//     description: 'Build iOS and Android apps.',
//     bg: 'linear-gradient(to right, #f12711, #f5af19)',
//   },
//   {
//     title: 'Cloud Computing & DevOps',
//     level: 'Intermediate',
//     price: '$249',
//     rating: 4.8,
//     duration: '18 weeks',
//     description: 'Master AWS, Docker, and Kubernetes.',
//     bg: 'linear-gradient(to right, #396afc, #2948ff)',
//   },
//   {
//     title: 'AI & Machine Learning',
//     level: 'Advanced',
//     price: '$299',
//     rating: 4.9,
//     duration: '20 weeks',
//     description: 'Deep learning, neural networks, AI apps.',
//     bg: 'linear-gradient(to right, #00b09b, #96c93d)',
//   },
// ];

// export default function CoursesPreview() {
//   return (
//     <Box className={styles.courseSection}>
//       <Typography variant="h4" className={styles.sectionTitle}>
//         Our AI Courses
//       </Typography>
//       <Typography variant="body1" className={styles.sectionSubtitle}>
//         Choose from our top-rated, industry-ready AI & Tech programs
//       </Typography>

//       <Grid container spacing={3} className={styles.courseGrid}>
//         {courses.map((course, index) => (
//           <Grid item xs={12} sm={6} md={4} key={index}>
//             <Card className={styles.courseCard}>
//               <Box className={styles.cardHeader} style={{ background: course.bg }} />
//               <CardContent>
//                 <Box className={styles.badgeRow}>
//                   <Chip label={course.level} size="small" color="default" />
//                   <Box className={styles.rating}>
//                     <StarIcon fontSize="small" style={{ color: '#FFC107' }} />
//                     <span>{course.rating}</span>
//                   </Box>
//                 </Box>

//                 <Typography variant="h6" className={styles.courseTitle}>
//                   {course.title}
//                 </Typography>

//                 <Typography variant="body2" className={styles.courseDescription}>
//                   {course.description}
//                 </Typography>

//                 <Box className={styles.courseMeta}>
//                   <Typography className={styles.price}>{course.price}</Typography>
//                   <Typography className={styles.duration}>{course.duration}</Typography>
//                 </Box>

//                 <Button
//                   variant="contained"
//                   className={styles.courseButton}
//                   href="/courses"
//                   fullWidth
//                 >
//                   Enroll Now
//                 </Button>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// }



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
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import MemoryIcon from '@mui/icons-material/Memory';
import StorageIcon from '@mui/icons-material/Storage';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import PsychologyIcon from '@mui/icons-material/Psychology';
import HubIcon from '@mui/icons-material/Hub';

import styles from './CoursesPreview.module.css';

const courses = [
  {
    title: 'AI & Machine Learning Bootcamp',
    level: 'Intermediate',
    rating: 4.9,
    reviews: 3124,
    price: 5000,
    oldPrice: 1000,
    weeks: 20,
    enrolled: 10456,
    progress: 88,
    icon: <SmartToyIcon />,
    color: 'linear-gradient(to right, #667eea, #764ba2)',
    badge: 'TRENDING',
  },
  {
    title: 'Deep Learning with TensorFlow',
    level: 'Advanced',
    rating: 4.8,
    reviews: 1987,
    price: 4000,
    oldPrice: 8000,
    weeks: 24,
    enrolled: 8247,
    progress: 75,
    icon: <MemoryIcon />,
    color: 'linear-gradient(to right, #0f2027, #203a43, #2c5364)',
    badge: 'ADVANCED',
  },
  {
    title: 'Generative AI & Prompt Engineering',
    level: 'All Levels',
    rating: 4.7,
    reviews: 1650,
    price: 6000,
    oldPrice: 8000,
    weeks: 16,
    enrolled: 6045,
    progress: 83,
    icon: <PsychologyIcon />,
    color: 'linear-gradient(to right, #ff9966, #ff5e62)',
    badge: 'HOT',
  },
  {
    title: 'AI for Beginners',
    level: 'Beginner',
    rating: 4.9,
    reviews: 2786,
    price: 3000,
    oldPrice: 5000,
    weeks: 12,
    enrolled: 11856,
    progress: 90,
    icon: <LaptopMacIcon />,
    color: 'linear-gradient(to right, #43cea2, #185a9d)',
    badge: 'BESTSELLER',
  },
  {
    title: 'Natural Language Processing',
    level: 'Intermediate',
    rating: 4.8,
    reviews: 1394,
    price: 2500,
    oldPrice: 4000,
    weeks: 14,
    enrolled: 7123,
    progress: 80,
    icon: <HubIcon />,
    color: 'linear-gradient(to right, #00c6ff, #0072ff)',
    badge: 'POPULAR',
  },
  {
    title: 'Generative AI & Prompt Engineering',
    level: 'All Levels',
    rating: 4.7,
    reviews: 1650,
    price: 6000,
    oldPrice: 8000,
    weeks: 16,
    enrolled: 6045,
    progress: 83,
    icon: <PsychologyIcon />,
    color: 'linear-gradient(to right, #ff9966, #ff5e62)',
    badge: 'HOT',
  },
];

export default function CoursesPreview() {
  return (
    <Box className={styles.section}>
      <Typography variant="h5" className={styles.title}>
        🔥 Most Popular Courses
      </Typography>
      <Typography className={styles.subtitle}>
        Join thousands of students in our top-rated courses
      </Typography>

      <Grid container spacing={3} className={styles.grid}>
        {courses.map((course, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box height="100%">
            <Card className={styles.card}>
              <Box className={styles.cardTop} style={{ background: course.color }}>
                <Box className={styles.courseIcon}>{course.icon}</Box>
                <Chip label={course.badge} className={styles.badge} />
              </Box>

              <CardContent className={styles.cardContent}>
                <Box className={styles.infoRow}>
                  <Chip label={course.level} size="small" />
                  <Typography className={styles.rating}>
                    <StarIcon fontSize="40px"/> {course.rating} ({course.reviews} reviews)
                  </Typography>
                </Box>

                <Typography variant="h6" className={styles.courseTitle}>
                  {course.title}
                </Typography>

                <Typography className={styles.details}>
                  {course.weeks} weeks · {course.enrolled.toLocaleString()} students enrolled
                </Typography>

                {/* <Box className={styles.priceRow}>
                  <Typography className={styles.price}>Rs.{course.price}</Typography>
                  <Typography className={styles.oldPrice}>Rs.{course.oldPrice}</Typography>
                </Box> */}

                <LinearProgress
                  variant="determinate"
                  value={course.progress}
                  className={styles.progress}
                />
                <Typography className={styles.progressText}>{course.progress}% full</Typography>

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
      </Grid>
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
  );
}
