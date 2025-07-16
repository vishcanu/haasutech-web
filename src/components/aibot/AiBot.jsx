import React, { useEffect, useState } from "react";
import styles from "./AiBot.module.css";

const messages = [
  "Welcome to Haasutech!",
  "Ananya just enrolled in the Data Science course!",
  "Rohit landed a job at Deloitte!",
  "Priya got a 150% hike after completing the AI program!",
  "IITians are teaching real-world tech skills here!",
  "Your tech journey starts now — let’s go!",
  "Karan from Noida just joined the Full Stack course!",
  "Learn Python, ML, and Data Analytics from scratch!",
  "Shreya switched from marketing to data science!",
  "Trained by top mentors from IITs and industry!",
  "Over 10,000 students already transformed their careers!",
  "I’m your AI buddy. Let’s build your future together!",
  "Someone from Mumbai just started their AI journey!",
  "Hands-on projects, job-ready skills, IIT-level learning!",
  "Mehul just cracked a job at Amazon Web Services!",
  "Learning made fun, practical, and powerful!",
  "Swati moved from HR to a top tech analyst role!",
  "Limited time offer: 30% off on flagship AI programs!",
  "Build your own portfolio with real AI projects!",
  "Taught by IITians. Trusted by learners globally.",
  "Lakshmi just switched from teaching to data analytics!",
  "Learn AI, Cloud, Web Dev, and much more with us!",
  "Start with zero coding experience — we’ve got you!",
  "Success rate: 95% learners transition within 3 months!",
  "Personalized career roadmap designed for you!",
  "Ravi got placed at Accenture after upskilling here!",
  "Build your tech dream — one project at a time.",
  "Shruti just enrolled in the Cloud & DevOps track!",
  "Our AI mentors help you stand out in interviews!",
  "Need help choosing a course? I’m here to guide you!"
];

export default function FloatingAIBot() {
  const [messageIndex, setMessageIndex] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let showTimeout, hideTimeout, loopTimeout;

    const loopBot = () => {
      setVisible(true);

      // Hide message after 3.2s
      hideTimeout = setTimeout(() => {
        setVisible(false);
      }, 3200);

      // Show next message after 6s
      loopTimeout = setTimeout(() => {
        setMessageIndex((prev) => (prev + 1) % messages.length);
        loopBot();
      }, 6000);
    };

    loopBot();

    return () => {
      clearTimeout(showTimeout);
      clearTimeout(hideTimeout);
      clearTimeout(loopTimeout);
    };
  }, []);

  return (
    <div className={styles.floatingWrapper}>
    <div className={`${styles.floatingBot} ${visible ? styles.visible : ""}`}>
      <div className={styles.botBubble}>{messages[messageIndex]}</div>
      <img
        src="/assets/ai-bot.png"
        alt="AI Bot"
        className={styles.botImage}
      />
    </div>
    </div>
  );
}
