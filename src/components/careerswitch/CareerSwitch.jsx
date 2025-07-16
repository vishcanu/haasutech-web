// import React from 'react';
// import styles from './CareerSwitch.module.css';

// export default function CareerSwitch() {
//   return (
//     <div className={styles.wrapperSection}>
//    <section className={styles.wrapper}>
//   <div className={styles.leftContent}>
//     <h1 className={styles.heading}>Switch Your Career to AI</h1>
//     <p className={styles.description}>
//       Are you a software engineer, analyst, or working in a non-tech job and want to break into AI/ML or Data Science? You're not alone.
//       Haasutech AI has helped 1000+ professionals make successful career transitions with structured, beginner-friendly AI paths.
//     </p>

//     <ul className={styles.features}>
//       <li>👨‍🏫 Learn from IITians & industry mentors</li>
//       <li>📚 Beginner-friendly, hands-on curriculum</li>
//       <li>💼 Resume & interview preparation</li>
//       <li>📈 Portfolio-ready AI projects</li>
//     </ul>

//     <a href="/courses" className={styles.ctaLink}>
//       <button className={styles.ctaButton}>Explore AI Courses →</button>
//     </a>
//   </div>

//   <div className={styles.rightIllustration}>
//     <img src="/assets/ai-career-illustration.svg" alt="AI Career Switch" />
//   </div>
// </section>
// </div>

//   );
// }


import React from 'react';
import styles from './CareerSwitch.module.css';
import SchoolIcon from '@mui/icons-material/School';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import WorkIcon from '@mui/icons-material/Work';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

export default function CareerSwitch() {
  return (
    <div className={styles.wrapperSection}>
      {/* Section 1: AI Career Switch */}
      <section className={styles.wrapper}>
        <div className={styles.leftContent}>
          <h1 className={styles.heading}>Switch Your Career to AI</h1>
          <p className={styles.description}>
            Are you a software engineer, analyst, or working in a non-tech job and want to break into AI/ML or Data Science? You're not alone.
            Haasutech AI has helped 1000+ professionals make successful career transitions with structured, beginner-friendly AI paths.
          </p>

          <ul className={styles.features}>
            <li><SchoolIcon /> Learn from IITians & industry mentors</li>
            <li><MenuBookIcon /> Beginner-friendly, hands-on curriculum</li>
            <li><WorkIcon /> Resume & interview preparation</li>
            <li><TrendingUpIcon /> Portfolio-ready AI projects</li>
          </ul>

          <a href="/courses" className={styles.ctaLink}>
            <button className={styles.ctaButton}>Explore AI Courses →</button>
          </a>
        </div>

        <div className={styles.rightIllustration}>
          <img src="/assets/ai-career-illustration.svg" alt="AI Career Switch" />
        </div>
      </section>

      {/* Section 2: Career Assessment */}
      <section className={styles.assessmentSection}>
        <h2 className={styles.assessHeading}>Free Career Assessment</h2>
        <p className={styles.assessSub}>
          Discover which tech career path is perfect for you in just 2 minutes.
        </p>

        <form className={styles.assessForm}>
          <div className={styles.row}>
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email Address" required />
          </div>

          <select required>
            <option value="">Select your current field</option>
            <option value="developer">Software Developer</option>
            <option value="analyst">Business/Data Analyst</option>
            <option value="non-tech">Non-Tech</option>
          </select>

          <label>What interests you most about tech?</label>
          <div className={styles.optionsGrid}>
            <label><input type="radio" name="interest" /> Building websites and apps</label>
            <label><input type="radio" name="interest" /> Analyzing data and finding insights</label>
            <label><input type="radio" name="interest" /> Artificial Intelligence and Machine Learning</label>
            <label><input type="radio" name="interest" /> Solving complex problems with code</label>
          </div>

          <select required>
            <option value="">Select time commitment</option>
            <option value="less10">Less than 10 hours/week</option>
            <option value="10-20">10–20 hours/week</option>
            <option value="20plus">20+ hours/week</option>
          </select>

          <button type="submit" className={styles.assessBtn}>
            Get My Personalized Career Plan
          </button>

          <p className={styles.assessNote}>
            ✅ 100% Free Assessment • ✅ Personalized Recommendations • ✅ No Spam
          </p>
        </form>
      </section>
    </div>
  );
}
