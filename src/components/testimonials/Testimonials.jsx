


// import React from 'react';
// import {
//   Box,
//   Typography,
//   CardContent,
//   Avatar,
// } from '@mui/material';
// import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
// import StarIcon from '@mui/icons-material/Star';
// import styles from './Testimonials.module.css';

// const testimonials = [
//   {
//     name: 'Mr. Pradeep Singh',
//     title: 'Administrative Director',
//     text: 'As a seasoned professional, I wanted to pivot into AI. Haasutech’s structured AI training and job-ready projects helped me confidently transition into the AI industry.',
//     badge: '25+ Years Exp | IIT Roorkee Alum',
//     initials: 'PS',
//     stars: 5
//   },
//   {
//     name: 'Shubham Singh',
//     title: 'M.Tech in VLSI, IIT Jammu',
//     text: 'As a fresher, I needed real project exposure. Haasutech’s hands-on Generative AI training gave me industry-ready skills and boosted my placement opportunities.',
//     badge: 'Fresher | GenAI Certified',
//     initials: 'SS',
//     stars: 5
//   },
//   {
//     name: 'Prem Bahadur Thapa',
//     title: 'IT Professional (3 Yrs Exp)',
//     text: 'I upskilled in Generative AI while working full-time. The practical learning and expert mentorship helped me earn a 200% salary hike and transition roles.',
//     badge: 'Working Pro | 200% Salary Hike',
//     initials: 'PT',
//     stars: 5
//   }
// ];




// export default function Testimonials() {
//   return (
//     <Box className={styles.testimonialsSection}>
//       <Typography variant="h3" className={styles.heading}> 
//        Career Shift Stories
//       </Typography>

//       <Typography variant="subtitle1" className={styles.subheading}>
//        Hear from learners who landed top tech jobs after completing our AI and Data Science programs. Real stories. Real results.
//       </Typography>

//       <Box className={styles.cardGrid}>
//         {testimonials.map((testimonial, index) => (
//           <Box key={index} className={styles.testimonialCard}>
//             <CardContent>
//               <Box className={styles.cardHeader}>
//                 <Avatar sx={{ bgcolor: '#7C3AED', color: '#fff' }}>
//   {testimonial.initials}
// </Avatar>
//                 <Box>
//                   <Typography className={styles.name}>{testimonial.name}</Typography>
//                   <Typography className={styles.role}>{testimonial.title}</Typography>
//                 </Box>
//               </Box>

//               <Typography className={styles.feedback}>
//                 “{testimonial.text}”
//               </Typography>

//               {/* ⭐ Star Ratings */}
//               <Box className={styles.stars}>
//                 {Array.from({ length: testimonial.stars }).map((_, i) => (
//                   <StarIcon key={i} fontSize="small" />
//                 ))}
//               </Box>

//               {/* 🎖️ Badge */}
//               <Typography className={styles.badge}>
//                 {testimonial.badge}
//               </Typography>
//             </CardContent>
//           </Box>
//         ))}
//       </Box>
//     </Box>
//   );
// }


import React, { useEffect, useRef } from 'react';
import {
  Box,
  Typography,
  CardContent,
  Avatar,
  useMediaQuery,
  useTheme
} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import styles from './Testimonials.module.css';

const testimonials = [
  {
    name: 'Mr. Pradeep Singh',
    title: 'Administrative Director',
    text: 'As a seasoned professional, I wanted to pivot into AI. Haasutech’s structured AI training and job-ready projects helped me confidently transition into the AI industry.',
    badge: '25+ Years Exp | IIT Roorkee Alum',
    initials: 'PS',
    stars: 5
  },
  {
    name: 'Shubham Singh',
    title: 'M.Tech in VLSI, IIT Jammu',
    text: 'As a fresher, I needed real project exposure. Haasutech’s hands-on Generative AI training gave me industry-ready skills and boosted my placement opportunities.',
    badge: 'Fresher | GenAI Certified',
    initials: 'SS',
    stars: 5
  },
  {
    name: 'Prem Bahadur Thapa',
    title: 'IT Professional (3 Yrs Exp)',
    text: 'I upskilled in Generative AI while working full-time. The practical learning and expert mentorship helped me earn a 200% salary hike and transition roles.',
    badge: 'Working Pro | 200% Salary Hike',
    initials: 'PT',
    stars: 5
  },
  {
    name: 'Ritika Mehra',
    title: 'Career Switcher, Ex-Sales',
    text: 'I moved from sales to tech with Haasutech’s AI career switch program. Their online certification, live classes, and placement support changed my life.',
    badge: 'Non-Tech to Tech | Certified in AI',
    initials: 'RM',
    stars: 5
  },
  {
    name: 'Ravi Kumar',
    title: 'Final Year B.Tech Student',
    text: 'The industry-ready curriculum helped me build real AI projects. Recruiters noticed my portfolio during placements. Great for final-year students!',
    badge: 'Student | Real-World Projects',
    initials: 'RK',
    stars: 5
  },
  {
    name: 'Ayesha Khan',
    title: 'QA Engineer, 2 Yrs Exp',
    text: 'Upskilling with Haasutech helped me switch from QA to AI engineering. Their course platform is the best for working pros who want hands-on learning.',
    badge: 'Course Switch | Practical AI Skills',
    initials: 'AK',
    stars: 5
  },
  {
    name: 'Vignesh R',
    title: 'ME to Data Scientist',
    text: 'Coming from a mechanical background, I had no coding skills. Haasutech’s beginner-friendly AI course gave me confidence and real job-ready skills.',
    badge: 'Non-CS Grad | Job in Data Science',
    initials: 'VR',
    stars: 5
  },
  {
    name: 'Sneha Agarwal',
    title: 'HR to AI Product Manager',
    text: 'Their mentorship and case study-based approach gave me a clear path to switch roles. From HR to AI product—thanks to Haasutech’s tailored learning.',
    badge: 'Domain Switch | Certified PM',
    initials: 'SA',
    stars: 5
  },
  {
    name: 'Rohit Bansal',
    title: 'Interned at MNC, Now Full-Time',
    text: 'As an intern, I lacked confidence. This edtech platform’s AI mini-projects and resume prep helped me land a full-time offer in just 2 months.',
    badge: 'Intern to Full-Time | AI Projects',
    initials: 'RB',
    stars: 5
  },
  {
    name: 'Neha D',
    title: 'Homemaker Turned AI Enthusiast',
    text: 'After a career break, Haasutech’s flexible learning modules helped me upskill. The platform’s certification gave me the edge to restart my career.',
    badge: 'Career Returnee | AI Upskilling',
    initials: 'ND',
    stars: 5
  },
  {
    name: 'Deepak Sinha',
    title: 'Freelancer, Now in MNC',
    text: 'The AI certification program helped me switch from freelance gigs to a stable MNC job. The portfolio-building support was game-changing.',
    badge: 'Freelancer to MNC | AI Certified',
    initials: 'DS',
    stars: 5
  },
  {
    name: 'Harini Nair',
    title: 'College Dropout to AI Intern',
    text: 'Dropped out of college, but Haasutech gave me direction. With their mentorship and hands-on learning, I’m now interning at a funded startup.',
    badge: 'Non-Degree | Startup Intern',
    initials: 'HN',
    stars: 5
  }
];


export default function Testimonials() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // <600
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md')); // 600–900
  const cardWrapperRef = useRef(null);

  const visibleCards = isMobile ? 1 : isTablet ? 2 : 3;
  const scrollInterval = useRef(null);

  useEffect(() => {
    const container = cardWrapperRef.current;
    if (!container) return;

    const scrollCards = () => {
      const cardWidth = container.firstChild?.offsetWidth || 300;
      container.scrollBy({ left: cardWidth + 16, behavior: 'smooth' });

      if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 10) {
        container.scrollTo({ left: 0, behavior: 'smooth' });
      }
    };

    scrollInterval.current = setInterval(scrollCards, 3000);

    return () => clearInterval(scrollInterval.current);
  }, [visibleCards]);

  return (
    <Box className={styles.testimonialsSection}>
      <Typography variant="h3" className={styles.heading}>
        Career Shift Stories
      </Typography>

      <Typography variant="subtitle1" className={styles.subheading}>
        Hear from learners who landed top tech jobs after completing our AI and Data Science programs. Real stories. Real results.
      </Typography>

      <Box className={styles.carouselContainer}>
        <Box className={styles.cardsWrapper} ref={cardWrapperRef}>
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

                <Box className={styles.stars}>
                  {Array.from({ length: testimonial.stars }).map((_, i) => (
                    <StarIcon key={i} fontSize="small" />
                  ))}
                </Box>

                <Typography className={styles.badge}>{testimonial.badge}</Typography>
              </CardContent>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
