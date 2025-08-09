// import React from "react";
// import styles from "./UrgencyBar.module.css";

// export default function UrgencyBar() {
//   return (
//     <div className={styles.urgencyBar}>
//       <div className={styles.urgencyContent}>
//         <span className={styles.urgencyEmoji}>⏳</span>
//         <span className={styles.urgencyText}>
//           Limited seats available — Applications close <strong>2 days!</strong>
//         </span>
//       </div>
//       <div className={styles.urgencyActions}>
//         <button className={styles.applyNow}>Enroll Now</button>
//         <button className={styles.downloadBrochure}>Contact Us!</button>
//       </div>
//     </div>
//   );
// }


import React from "react";
import styles from "./UrgencyBar.module.css";
import { FaChair } from "react-icons/fa";

export default function UrgencyBar({ setOpenBot }) {
  const filledSeats = 6;
  const blinkingSeats = 2;
  const totalSeats = 10;

  return (
    <div className={styles.urgencyBar}>
      {/* Left side: text + chairs */}
      <div className={styles.urgencyInfo}>
        <div className={styles.urgencyContent}>
         
          <span className={styles.urgencyText}>
            Limited seats available — Applications close in <strong>2 days!</strong>
          </span>
        </div>
        <div className={styles.chairRow}>
          {[...Array(totalSeats)].map((_, i) => {
            if (i < filledSeats) {
              return <FaChair key={i} className={`${styles.chair} ${styles.chairFilled}`} />;
            }
            if (i < filledSeats + blinkingSeats) {
              return <FaChair key={i} className={`${styles.chair} ${styles.chairBlinking}`} />;
            }
            return <FaChair key={i} className={`${styles.chair} ${styles.chairEmpty}`} />;
          })}
        </div>
      </div>

      {/* Right side: actions */}
      <div className={styles.urgencyActions}>
        <button className={styles.applyNow}  onClick={() => setOpenBot(true)}>Enroll Now</button>
          <a
    className={styles.downloadBrochure}
    href="https://wa.me/918932900125"
    target="_blank"
    rel="noopener noreferrer"
    role="button"
    tabIndex={0}
  >
    Contact Us!
  </a>
      </div>
    </div>
  );
}
