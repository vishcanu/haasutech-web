import React from 'react';
import styles from './Career.module.css';
import { FaChalkboardTeacher, FaProjectDiagram, FaLaptopCode, FaUsers, FaCloud, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';

export default function Career() {
  return (
    <section className={styles.careerSection}>
      {/* Background visual, e.g. blurred gradient */}
      <div className={styles.backgroundVisual}></div>
      <div className={styles.inner}>
        <img
          src="/assets/logoHaasutech.jpg"
          alt="Haasutech AI Logo"
          className={styles.logo}
        />
        <h1 className={styles.heading}>
          Tutor & Instructor Careers at Haasutech AI
        </h1>
        <p className={styles.intro}>
          <span className={styles.introHighlight}>Join India’s top edtech mission!</span> Teach future-ready AI and tech skills, design capstone projects, and mentor learners alongside IITians and industry leaders in Noida, Delhi, Bangalore & pan-India.
        </p>
{/* Animated Apply block */}
        <div className={styles.applyCard}>
          <strong>How to Apply:</strong>
          <p>
            Send your resume and portfolio (if any) to<br />
            <a href="mailto:business@haasutech.com" className={styles.email}>business@haasutech.com</a><br />
            Mention your preferred location <span className={styles.location}>(Noida, Delhi, Bangalore, remote)</span> and areas of expertise.
          </p>
          <div className={styles.whatsappBlock}>
            <FaWhatsapp className={styles.whatsappIcon} />
            <span>
              For details, connect on WhatsApp:
              <a
                href="https://wa.me/918932900125"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.whatsappLink}
              > +91 89329 00125</a>
            </span>
          </div>
        </div>
        {/* Animated career cards instead of plain list */}
        <div className={styles.careerGrid}>
          <div className={styles.careerCard}>
            <FaChalkboardTeacher className={styles.cardIcon} />
            <span>Mentor AI, ML, Data Science, Python & Cloud courses</span>
          </div>
          <div className={styles.careerCard}>
            <FaProjectDiagram className={styles.cardIcon} />
            <span>Guide hands-on capstone/final projects and practical assignments</span>
          </div>
          <div className={styles.careerCard}>
            <FaLaptopCode className={styles.cardIcon} />
            <span>Teach coding bootcamp sessions, evaluate project submissions</span>
          </div>
          <div className={styles.careerCard}>
            <FaUsers className={styles.cardIcon} />
            <span>Collaborate with IIT alumni, support hybrid/remote learning</span>
          </div>
          <div className={styles.careerCard}>
            <FaCloud className={styles.cardIcon} />
            <span>Growth in Edtech, curriculum-building & mentoring</span>
          </div>
          <div className={styles.careerCard}>
            <FaMapMarkerAlt className={styles.cardIcon} />
            <span>Locations: Noida, Delhi, Bangalore + remote India</span>
          </div>
        </div>

        
      </div>
    </section>
  );
}
