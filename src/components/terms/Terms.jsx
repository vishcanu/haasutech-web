import React from 'react';
import styles from './Terms.module.css';

export default function Terms() {
  return (
    <section className={styles.termsSection}>
      <h1 className={styles.heading}>
        Haasutech AI Terms & Conditions
      </h1>
      <p className={styles.intro}>
        These Terms & Conditions (“Terms”) govern your access to and use of Haasutech AI’s website, online platform, and courses. By accessing or registering, you agree to comply with these rules.
      </p>
      <ol className={styles.list}>
        <li><b>User Eligibility:</b> Haasutech AI courses are open to students and professionals aged 16+, including those residing in Noida, Delhi, Bangalore, and pan-India.</li>
        <li><b>Course Access:</b> Access to digital content is subject to enrollment, payment, and compliance with platform guidelines.</li>
        <li><b>Payments & Refunds:</b> Fees are due on registration. See our <a href="/refund-policy" className={styles.link}>Refund Policy</a> for conditions and process.</li>
        <li><b>Intellectual Property:</b> All course materials, videos, notes, and assessments are copyrighted. Copying, redistribution, or publishing without written consent is strictly prohibited.</li>
        <li><b>Privacy Policy:</b> Personal details are used as described in our <a href="/privacy" className={styles.link}>Privacy Policy</a>, in compliance with Indian regulations.</li>
        <li><b>Code of Conduct:</b> Plagiarism, harassment, or unethical behavior leads to suspension and forfeiture of access. Respect instructors, support staff, and peers.</li>
        <li><b>Instructor & Mentor Terms:</b> Instructors must adhere to curriculum standards, provide support, and uphold digital learning ethics.</li>
        <li><b>Disclaimers:</b> Haasutech AI does not guarantee job placement, but provides career support. Tech content evolves and may be updated.</li>
        <li><b>Jurisdiction:</b> All disputes subject to jurisdiction of courts in Noida, Uttar Pradesh, India.</li>
        <li><b>Policy Updates:</b> Haasutech AI may update terms. Users will be notified via email or platform announcement.</li>
      </ol>
      <p className={styles.contact}>
        For questions or clarifications, contact our support at{' '}
        <a href="mailto:business@haasutech.com" className={styles.link}>business@haasutech.com</a>{' '}
        or via WhatsApp:{' '}
        <a href="https://wa.me/918932900125" target="_blank" rel="noopener noreferrer" className={styles.link}>+91 89329 00125</a>
      </p>
    </section>
  );
}
