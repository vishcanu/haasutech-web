import React from 'react';
import styles from './whyHaasutech.module.css';
import { Grid } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import CodeIcon from '@mui/icons-material/Code';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import InsightsIcon from '@mui/icons-material/Insights';

const cards = [
  {
    icon: <SchoolIcon className={styles.icon} />, // Academic theme
    title: 'Taught by IITians',
    desc: 'Learn AI from IIT graduates with deep academic knowledge and industry expertise. Gain clarity and confidence like never before.',
  },
  {
    icon: <CodeIcon className={styles.icon} />, // Dev/project theme
    title: 'Project-based Learning',
    desc: 'Build real-world AI projects that mirror industry standards. Graduate with a portfolio that speaks for your skills.',
  },
  {
    icon: <Diversity3Icon className={styles.icon} />, // Inclusive & friendly
    title: 'Beginner Friendly',
    desc: 'No coding background? No problem. Our step-by-step training makes AI easy for everyone—even complete beginners.',
  },
  {
    icon: <InsightsIcon className={styles.icon} />, // Career / placement growth
    title: 'Placement Assistance',
    desc: 'From resume building to mock interviews and referrals—get support that actually lands you jobs, not just lectures.',
  },
  {
    icon: <WorkspacePremiumIcon className={styles.icon} />, // Badge for certification
    title: 'Certification & Resume Boost',
    desc: 'Earn industry-recognized certification. Impress recruiters with credentials and proof of hands-on project experience.',
  },
  {
    icon: <AutoFixHighIcon className={styles.icon} />, // Tools / magic wand
    title: 'AI Tools & Resources',
    desc: 'Access premium AI tools, datasets, and code labs. Everything you need to train, build, and experiment—without limits.',
  },
];


const whyHaasutech = () => {
  return (
   <section className={styles.wrapper}>
  <h3 className={styles.heading}>Why Thousands Trust Haasutech to Learn AI Right!</h3>
  <Grid container justifyContent="center">
  <div className={styles.cardContainer}>
    {cards.map((item, index) => (
      <div key={index} className={styles.card}>
        <div className={styles.iconWrapper}>{item.icon}</div>
        <h3 className={styles.cardTitle}>{item.title}</h3>
        <p className={styles.cardDesc}>{item.desc}</p>
      </div>
    ))}
  </div>
</Grid>
</section>

  );
};

export default whyHaasutech;
