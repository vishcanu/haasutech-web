import React from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import styles from './NewsletterForm.module.css';

export default function NewsletterForm() {
  return (
    <Box className={styles.newsletterSection}>
      <Typography variant="h5" className={styles.heading}>
        Subscribe to our Newsletter
      </Typography>
      <Typography variant="body2" className={styles.subtitle}>
        Get updates on new AI courses, discounts, and free resources.
      </Typography>

      <form
        name="newsletter"
        method="POST"
        data-netlify="true"
        className={styles.form}
      >
        <input type="hidden" name="form-name" value="newsletter" />
        <TextField
          label="Your Email"
          name="email"
          required
          type="email"
          fullWidth
          className={styles.emailInput}
        />
        <Button
          type="submit"
          variant="contained"
          className={styles.subscribeButton}
        >
          Subscribe
        </Button>
      </form>
    </Box>
  );
}
