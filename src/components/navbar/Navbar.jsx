



import React, { useState } from 'react';
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

  const handleDrawerToggle = () => {
    setDrawerOpen((prev) => !prev);
  };

  const handleClose = () => {
    setDrawerOpen(false);
  };

  return (
    <>
      <AppBar position="sticky" className={styles.navbar}>
        <Toolbar className={styles.toolbar}>
          <Box className={styles.brand}>
            {/* <img
              src="src/assets/haasutech_ai_logo.jpg"
              alt="HaasuTech AI Logo"
              className={styles.logoImage}
            /> */}
            <Typography variant="h6" component="div">
              <a href="/" className={styles.logo}>HaasuTech AI</a>
            </Typography>
          </Box>

          <Box className={styles.links}>
            <a href="/courses"><Button color="inherit">Courses</Button></a>
            <a href="/career-switch"><Button color="inherit">Career Switch</Button></a>
            <a href="/upskill"><Button color="inherit">Upskill</Button></a>
            <a href="/about"><Button color="inherit">About</Button></a>
            <a href="/contact"><Button color="inherit">Contact</Button></a>
          </Box>

          <Box className={styles.rightButtons}>
            <Button className={styles.callBtn} startIcon={<PhoneIcon />}>
              Call Now
            </Button>

            <IconButton
              edge="end"
              className={styles.menuButton}
              onClick={handleDrawerToggle}
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={drawerOpen} onClose={handleClose}>
        <Box className={styles.drawer} role="presentation" onClick={handleClose}>
          <List>
            <ListItem><a href="/courses"><Button color="inherit">Courses</Button></a></ListItem>
            <ListItem><a href="/career-switch"><Button color="inherit">Career Switch</Button></a></ListItem>
            <ListItem><a href="/upskill"><Button color="inherit">Upskill</Button></a></ListItem>
            <ListItem><a href="/about"><Button color="inherit">About</Button></a></ListItem>
            <ListItem><a href="/contact"><Button color="inherit">Contact</Button></a></ListItem>
            <ListItem>
              <Button
                className={styles.callBtn}
                fullWidth
                startIcon={<PhoneIcon />}
              >
                Call Now
              </Button>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
}
