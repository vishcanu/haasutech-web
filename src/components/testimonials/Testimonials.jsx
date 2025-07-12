// import React from 'react';
// import { Box, Typography, Grid, Card, CardContent, Avatar } from '@mui/material';
// import styles from './Testimonials.module.css';

// const testimonials = [
//   {
//     name: 'Aarav Mehta',
//     title: 'Software Engineer at TCS',
//     text: 'Haasutech AI gave me real industry-level knowledge in ML. The projects were incredible!',
//     image: 'https://i.pravatar.cc/64?img=1',
//   },
//   {
//     name: 'Priya Sharma',
//     title: 'Final Year Student, IIT Delhi',
//     text: 'The DSA course helped me crack product-based company interviews. Highly recommended!',
//     image: 'https://i.pravatar.cc/64?img=1',
//   },
//   {
//     name: 'Rohan Kumar',
//     title: 'Data Analyst at Swiggy',
//     text: 'Clear explanations and hands-on projects made Data Science easy to master.',
//     image: 'https://i.pravatar.cc/64?img=1',
//   },
// ];

// export default function Testimonials() {
//   return (
//     <Box className={styles.testimonialsSection}>
//       <Typography variant="h4" gutterBottom className={styles.title}>
//         What Our Learners Say
//       </Typography>
//       <Grid container spacing={4}>
//         {testimonials.map((testimonial, index) => (
//           <Grid item xs={12} sm={6} md={4} key={index}>
//             <Card className={styles.testimonialCard}>
//               <CardContent>
//                 <Avatar
//                   src={testimonial.image}
//                   alt={testimonial.name}
//                   className={styles.avatar}
//                 />
//                 <Typography variant="body1" className={styles.text}>
//                   “{testimonial.text}”
//                 </Typography>
//                 <Typography variant="subtitle1" className={styles.name}>
//                   {testimonial.name}
//                 </Typography>
//                 <Typography variant="body2" className={styles.titleText}>
//                   {testimonial.title}
//                 </Typography>
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
  CardContent,
  Avatar,
} from '@mui/material';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import StarIcon from '@mui/icons-material/Star';
import styles from './Testimonials.module.css';

const testimonials = [
  {
    name: 'Mr. Pradeep Singh',
    title: 'Administrative Director',
    text: 'Haasutech’s clear explanations and practical focus helped me master AI quickly. The strong placement support made it even more valuable.',
    badge: '25+ Years(Exp)| IIT Roorkee Alum',
    initials: 'PS',
    stars: 5
  },
  {
    name: 'Shubham Singh',
    title: 'M.Tech in VLSI, IIT Jammu',
    text: 'Haasutech’s AI courses were hands-on and detailed. The expert guidance gave me real-world confidence in Generative AI.',
    badge: 'Now Skilled in GenAI',
    initials: 'SS',
    stars: 5
  },
  {
    name: 'Prem Bahadur Thapa',
    title: 'IT Professional (3 Yrs Exp)',
    text: 'The GenAI course was top-notch! I learned by building real projects—and landed a 200% salary hike after completion.',
    badge: 'Achieved 200% Hike',
    initials: 'PT',
    stars: 5
  }
];



export default function Testimonials() {
  return (
    <Box className={styles.testimonialsSection}>
      <Typography variant="h4" className={styles.heading}>
        <ChatBubbleOutlineIcon
          style={{
            fontSize: '1.8rem',
            verticalAlign: 'middle',
            marginRight: '0.5rem',
            color: '#7C3AED',
          }}
        />
        What Our Students Say
      </Typography>

      <Typography variant="subtitle1" className={styles.subheading}>
        Real success stories from real people who transformed their careers
      </Typography>

      <Box className={styles.cardGrid}>
        {testimonials.map((testimonial, index) => (
          <Box key={index} className={styles.testimonialCard}>
            <CardContent>
              <Box className={styles.cardHeader}>
                <Avatar sx={{ bgcolor: '#7C3AED', color: '#fff' }}>
  {testimonial.initials}
</Avatar>
                <Box>
                  <Typography className={styles.name}>{testimonial.name}</Typography>
                  <Typography className={styles.role}>{testimonial.title}</Typography>
                </Box>
              </Box>

              <Typography className={styles.feedback}>
                “{testimonial.text}”
              </Typography>

              {/* ⭐ Star Ratings */}
              <Box className={styles.stars}>
                {Array.from({ length: testimonial.stars }).map((_, i) => (
                  <StarIcon key={i} fontSize="small" />
                ))}
              </Box>

              {/* 🎖️ Badge */}
              <Typography className={styles.badge}>
                {testimonial.badge}
              </Typography>
            </CardContent>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
