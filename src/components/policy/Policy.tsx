import React from 'react';
import styles from './Policy.module.css';

export default function Policy() {
  return (
    <section className={styles.policySection}>
      <h1 className={styles.heading}>
        Haasutech AI Privacy Policy
      </h1>
      <p className={styles.intro}>
        Your privacy rights matter. This policy explains how Haasutech AI (“we”, “us”, “our”) collects, uses, secures, and shares your data as a student, instructor, or visitor to our digital learning platform.
      </p>
      <ol className={styles.list}>
        <li><b>Information Collected:</b> Name, email, phone, and course usage data. For paid courses, payment details (never stored on our servers).</li>
        <li><b>Purpose:</b> To provide course access, enable mentorship, track progress, serve notifications, and improve site experience.</li>
        <li><b>Data Protection:</b> SSL encryption, secure servers, role-based access, and regular audits for compliance (including Indian privacy norms).</li>
        <li><b>Sharing:</b> No third-party sharing for marketing. Data may be shared with instructors solely for course delivery, or with partners for career services, only with your explicit consent.</li>
        <li><b>Cookies:</b> Used to personalize, track progress, and improve site usability. You may adjust browser settings to restrict cookies.</li>
        <li><b>Student/Instructor Rights:</b> Request deletion, export, or correction of your data anytime (<a href="mailto:business@haasutech.com" className={styles.link}>business@haasutech.com</a>).</li>
        <li><b>Updates:</b> Policy updated as needed to comply with laws and improve service. Changes posted online and notified to users.</li>
        <li><b>Contact:</b> Privacy questions? WhatsApp: <a href="https://wa.me/918932900125" target="_blank" rel="noopener noreferrer" className={styles.link}>+91 89329 00125</a></li>
      </ol>
      <p className={styles.bottomNote}>
        By using the Haasutech AI website or enrolling in our courses, you consent to this policy. For more details, email our privacy team at <a href="mailto:business@haasutech.com" className={styles.link}>business@haasutech.com</a>.
      </p>
    </section>
  );
}
