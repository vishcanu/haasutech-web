import React from 'react';
import { Box, Typography, Grid, Card, CardContent, Avatar } from '@mui/material';
import styles from './Testimonials.module.css';

const testimonials = [
  {
    name: 'Aarav Mehta',
    title: 'Software Engineer at TCS',
    text: 'Haasutech AI gave me real industry-level knowledge in ML. The projects were incredible!',
    image: 'https://i.pravatar.cc/64?img=1',
  },
  {
    name: 'Priya Sharma',
    title: 'Final Year Student, IIT Delhi',
    text: 'The DSA course helped me crack product-based company interviews. Highly recommended!',
    image: 'https://i.pravatar.cc/64?img=1',
  },
  {
    name: 'Rohan Kumar',
    title: 'Data Analyst at Swiggy',
    text: 'Clear explanations and hands-on projects made Data Science easy to master.',
    image: 'https://i.pravatar.cc/64?img=1',
  },
];

export default function Testimonials() {
  return (
    <Box className={styles.testimonialsSection}>
      <Typography variant="h4" gutterBottom className={styles.title}>
        What Our Learners Say
      </Typography>
      <Grid container spacing={4}>
        {testimonials.map((testimonial, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card className={styles.testimonialCard}>
              <CardContent>
                <Avatar
                  src={testimonial.image}
                  alt={testimonial.name}
                  className={styles.avatar}
                />
                <Typography variant="body1" className={styles.text}>
                  “{testimonial.text}”
                </Typography>
                <Typography variant="subtitle1" className={styles.name}>
                  {testimonial.name}
                </Typography>
                <Typography variant="body2" className={styles.titleText}>
                  {testimonial.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
