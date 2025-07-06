import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import styles from './Navbar.module.css';
import { Link } from 'astro/components';

export default function Navbar() {
  return (
    <AppBar position="static" className={styles.navbar}>
      <Toolbar className={styles.toolbar}>
        <Typography variant="h6" component="div">
          <a href="/" className={styles.logo}>Haasutech AI</a>
        </Typography>
        <Box className={styles.links}>
  <a href="/courses"><Button color="inherit">Courses</Button></a>
  <a href="/career-switch"><Button color="inherit">Career Switch</Button></a>
  <a href="/upskill"><Button color="inherit">Upskill</Button></a>
  <a href="/about"><Button color="inherit">About</Button></a>
  <a href="/contact"><Button color="inherit">Contact</Button></a>
</Box>
      </Toolbar>
    </AppBar>
  );
}
