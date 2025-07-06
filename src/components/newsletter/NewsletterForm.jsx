import React from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import styles from './NewsletterForm.module.css';

export default function NewsletterForm() {
  return (
    <Box className={styles.newsletterSection}>
      <Typography variant="h5" gutterBottom>
        Subscribe to our Newsletter
      </Typography>
      <Typography variant="body2" className={styles.subtitle}>
        Get updates on new AI courses, discounts, and free resources.
      </Typography>

      <form
        name="newsletter"
        method="POST"
        data-netlify="true"
        style={{ display: 'flex', flexDirection: 'column', maxWidth: 400, marginTop: '1rem' }}
      >
        <input type="hidden" name="form-name" value="newsletter" />
        <TextField label="Your Email" name="email" required type="email" sx={{ marginBottom: 2 }} />
        <Button type="submit" variant="contained">Subscribe</Button>
      </form>
    </Box>
  );
}
