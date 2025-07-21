// import React from 'react';
// import styles from './Blog.module.css';
// import { Box, Typography, Grid, Card, CardContent, Button } from '@mui/material';

// // Sample blog data
// const blogData = [
//   {
//     title: 'Why Learn Cloud Computing?',
//     date: 'July 9, 2025',
//     excerpt: 'Cloud is the future. Learn how cloud skills can transform your career.',
//     image: 'https://via.placeholder.com/400x200',
//     slug: 'learn-cloud-computing',
//   },
//   {
//     title: 'Mastering React in 30 Days',
//     date: 'June 25, 2025',
//     excerpt: 'Step-by-step roadmap to becoming a React pro. Let’s dive in!',
//     image: 'https://via.placeholder.com/400x200',
//     slug: 'react-30-days',
//   },

// ];

// const Blog = () => {
//   return (
//     <Box className={styles.blogSection}>
//       <Typography variant="h3" className={styles.title}>
//         Latest Blog Posts
//       </Typography>
//       <Typography className={styles.subtitle}>
//         Stay updated with the latest tech trends, tutorials & career tips.
//       </Typography>

//       <Grid container spacing={4} className={styles.blogGrid}>
//         {blogData.map((blog, index) => (
//           <Grid item xs={12} sm={6} md={4} key={index}>
//             <Card className={styles.blogCard}>
//               <img src={blog.image} alt={blog.title} className={styles.blogImage} />
//               <CardContent className={styles.cardContent}>
//                 <Typography variant="h6" className={styles.blogTitle}>
//                   {blog.title}
//                 </Typography>
//                 <Typography variant="caption" className={styles.blogDate}>
//                   {blog.date}
//                 </Typography>
//                 <Typography className={styles.blogExcerpt}>
//                   {blog.excerpt}
//                 </Typography>
//                 <Button
//                   variant="outlined"
//                   href={`/blog/${blog.slug}`}
//                   size="small"
//                   className={styles.readMoreBtn}
//                 >
//                   Read More
//                 </Button>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// };

// export default Blog;



import React, { useEffect, useState } from 'react';
import styles from './Blog.module.css';
import {
  Box, Typography, Card, CardContent, Button, Grid,
  useTheme, useMediaQuery
} from '@mui/material';

const blogData = [
  {
    title: 'AI in Everyday Life: The Future is Now',
    date: 'July 9, 2025',
    excerpt: 'Explore how Artificial Intelligence is transforming industries from healthcare to finance and what skills you need to thrive.',
    image: "/assets/blog1.jpg",
    slug: 'ai-in-everyday-life',
    keywords: ['AI', 'Artificial Intelligence', 'Future Technology', 'AI Careers'],
  },
  {
    title: 'How to Start a Career in Data Science in 2025',
    date: 'June 25, 2025',
    excerpt: 'A practical guide for beginners: Learn how to enter the field of data science with no prior experience.',
    image: "/assets/blog2.jpg",
    slug: 'data-science-career-guide',
    keywords: ['Data Science', 'Data Science Career', 'Python', 'Machine Learning'],
  },
  {
    title: 'Top 10 Machine Learning Projects to Build in 2025',
    date: 'June 10, 2025',
    excerpt: 'Boost your resume and skills with these hands-on machine learning projects using real-world datasets.',
    image: "/assets/blog3.jpg",
    slug: 'top-machine-learning-projects',
    keywords: ['Machine Learning', 'ML Projects', 'AI Models', 'Scikit-learn'],
  },
  {
    title: 'Understanding Generative AI: Beyond ChatGPT',
    date: 'May 28, 2025',
    excerpt: 'What is Generative AI? Discover how tools like ChatGPT, Sora, and Midjourney are reshaping creative industries.',
    image: "/assets/blog2.jpg",
    slug: 'generative-ai-explained',
    keywords: ['Generative AI', 'ChatGPT', 'Midjourney', 'Sora AI', 'AI Tools'],
  },
  {
    title: 'LLMs Explained: How Large Language Models Work',
    date: 'May 15, 2025',
    excerpt: 'Break down how LLMs like GPT-4 and Claude work and how to build applications using them.',
    image: "/assets/blog1.jpg",
    slug: 'llms-how-they-work',
    keywords: ['LLMs', 'Large Language Models', 'GPT-4', 'NLP', 'AI Applications'],
  },
  {
    title: 'AI vs ML vs DL: What’s the Difference?',
    date: 'April 30, 2025',
    excerpt: 'Confused between AI, Machine Learning, and Deep Learning? Here’s a simple breakdown with real-world examples.',
    image: "/assets/blog3.jpg",
    slug: 'ai-vs-ml-vs-dl',
    keywords: ['AI vs ML vs DL', 'Deep Learning', 'Neural Networks', 'AI Basics'],
  },
];


const Blog = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // <600
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md')); // 600–900
  const isLaptop = useMediaQuery(theme.breakpoints.up('md')); // >900
  

  const [activeIndex, setActiveIndex] = useState(0);
  let cardsToShow = 3;

  if (isMobile) cardsToShow = 1;
  else if (isTablet) cardsToShow = 2;

  const visibleBlogs = blogData.slice(
    activeIndex,
    activeIndex + cardsToShow
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) =>
        prev + cardsToShow >= blogData.length ? 0 : prev + 1
      );
    }, 3000); // auto-scroll every 3s
    return () => clearInterval(interval);
  }, [cardsToShow]);

  return (
    <Box className={styles.blogSection}>
      <Typography variant="h4" className={styles.title}>
        Latest Blog Posts
      </Typography>
      <Typography className={styles.subtitle}>
        Stay updated with the latest tech trends, tutorials & career tips.
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {visibleBlogs.map((blog, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card className={styles.blogCard}>
              <img
                src={blog.image}
                alt={blog.title}
                className={styles.blogImage}
              />
              <CardContent className={styles.cardContent}>
                <Typography variant="h6" className={styles.blogTitle}>
                  {blog.title}
                </Typography>
                <Typography variant="caption" className={styles.blogDate}>
                  {blog.date}
                </Typography>
                <Typography className={styles.blogExcerpt}>
                  {blog.excerpt}
                </Typography>
                <Button
                  variant="outlined"
                  href={`/blog/${blog.slug}`}
                  size="small"
                  className={styles.readMoreBtn}
                >
                  Read More
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Blog;
