import React from 'react';
import styles from './Placement.module.css';
import { Box, Typography, Container, Grid, Divider } from '@mui/material';

const companies = [
  { name: 'Microsoft', logo: '/assets/microsoft.png' },
  { name: 'Amazon', logo: '/assets/amazon.jpg' },
  { name: 'Google', logo: '/assets/google.png' },
  { name: 'Adobe', logo: '/assets/adobe.png' },
  { name: 'Cognizant', logo: '/assets/cognizant.png' },
  { name: 'Infosys', logo: '/assets/infosys.jpg' },
  { name: 'Cisco', logo: '/assets/cisco.png' },
  { name: 'Oracle', logo: '/assets/oracle.png' },
  { name: 'TCS', logo: '/assets/tcs.jpg' },
];

const Placement = () => {
  return (
    <Box className={styles.placementSection}>
        
      <Container maxWidth="lg">
        <Typography variant="h3" className={styles.title}>
          Placement Assistance by Haasutech
        </Typography>
        <Typography variant="subtitle1" className={styles.subtitle}>
          Top tech and business giants hire from us — your career transformation starts here.
        </Typography>
     <Divider
  sx={{
    height: '2px',
    border: 'none',
    background: 'linear-gradient(to right, transparent, #0d47a1, transparent)',
    marginY: 1,
  }}
/>
        <Box className={styles.sliderWrapper}>
          <Box className={styles.marquee}>
        
            <Box className={styles.marqueeContent}>
              {[...companies, ...companies].map((company, index) => (
                <Box key={index} className={styles.logoContainer}>
                  <img src={company.logo} alt={company.name} className={styles.logo} />
                </Box>
              ))}
            </Box>
            
          </Box>
        </Box>
         <Divider
  sx={{
    height: '2px',
    border: 'none',
    background: 'linear-gradient(to right, transparent, #0d47a1, transparent)',
    marginY: 1,
  }}
/>
      </Container>
     
    </Box>
    
  );
};

export default Placement;
