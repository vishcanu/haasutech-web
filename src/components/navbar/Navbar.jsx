


import React, { useEffect, useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  Button
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import PhoneIcon from '@mui/icons-material/Phone';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activePath, setActivePath] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setActivePath(window.location.pathname);
    }
  }, []);

  const handleDrawerToggle = () => setDrawerOpen(prev => !prev);
  const handleClose = () => setDrawerOpen(false);

  const navLinks = [
     { label: "Home", href: "/" },
    { label: "Courses", href: "/courses" },
    { label: "Career Switch", href: "/career-switch" },
    { label: "Blog", href: "/blog" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
     { label: "Careers", href: "/careers" }
  ];

  return (
    <>
      <AppBar position="sticky" className={styles.navbar}>
        <Toolbar className={styles.toolbar}>
          <Box className={styles.brand}>
            <Typography variant="h6" component="div">
              <a href="/" className={styles.logo}>HaasuTech AI</a>
            </Typography>
          </Box>

          <Box className={styles.links}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`${styles.navLink} ${activePath === link.href ? styles.active : ""}`}
              >
                <Button color="inherit">{link.label}</Button>
              </a>
            ))}
          </Box>

          <Box className={styles.rightButtons}>
            <a href="tel:+918932900125" className={styles.callLink}>
  <Button className={styles.callBtn} startIcon={<PhoneIcon />}>
    Call Now
  </Button>
</a>
            <IconButton edge="end" className={styles.menuButton} onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={drawerOpen} onClose={handleClose}>
        <Box className={styles.drawer} onClick={handleClose}>
          <List>
            {navLinks.map((link) => (
              <ListItem key={link.href}>
                <a
                  href={link.href}
                  className={`${styles.navLink} ${activePath === link.href ? styles.active : ""}`}
                >
                  <Button color="inherit">{link.label}</Button>
                </a>
              </ListItem>
            ))}
            <ListItem>
              <a href="tel:+918932900125" className={styles.callLink}>
  <Button className={styles.callBtn} startIcon={<PhoneIcon />}>
    Call Now
  </Button>
</a>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
}