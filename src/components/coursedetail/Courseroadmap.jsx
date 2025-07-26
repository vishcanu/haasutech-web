


import React, { useEffect, useRef, useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import styles from './CourseRoadmap.module.css';

export default function CourseRoadmap({ steps = [] }) {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const totalHours = useMemo(
    () => steps.reduce((acc, s) => acc + (s.hours || 0), 0),
    [steps]
  );

  // Scroll spy to know which step is currently visible
  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;

    const targets = root.querySelectorAll(`.${styles.step}`);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.getAttribute('data-index'));
            setActiveIndex((prev) => (idx > prev ? idx : prev));
          }
        });
      },
      { rootMargin: '0px 0px -55% 0px', threshold: 0.25 }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const botProgress =
    steps.length > 1 ? (activeIndex / (steps.length - 1)) * 100 : 0;

  return (
    <section className={styles.roadmapSection}>
      <h2 className={styles.heading}>Your Learning Roadmap</h2>

      <p className={styles.subheading}>
        Follow this path to mastery. Our <span className={styles.aiHighlight}>AI guide</span> leads the way.
      </p>

      {/* ✅ Meta row showing total hours */}
      <div className={styles.metaRow}>
        <span className={styles.totalHoursPill}>
          ⏱ Total Estimated Time: <strong>{totalHours} hrs</strong>
        </span>
        <span className={styles.stepsCountPill}>
          {steps.length} milestones
        </span>
      </div>

      <div className={styles.timelineWrapper} ref={containerRef}>
        {/* Static line */}
        <div className={styles.line} />

        {/* Progress (fills the line as you scroll) */}
        <motion.div
          className={styles.progressLine}
          style={{ height: `${botProgress}%` }}
          animate={{ height: `${botProgress}%` }}
          transition={{ type: 'spring', stiffness: 120, damping: 20 }}
        />

        {/* AI bot */}
        <motion.div
          className={styles.aiBot}
          animate={{ top: `${botProgress}%` }}
          transition={{ type: 'spring', stiffness: 120, damping: 18 }}
          aria-hidden="true"
        >
          <div className={styles.pulse} />
           <img src="/assets/ai-bot.png" alt="AI Bot" className={styles.botImage} />
        </motion.div>

        {/* Steps */}
        {steps.map((s, i) => (
          <motion.div
            key={s.id ?? i}
            data-index={i}
            className={`${styles.step} ${i <= activeIndex ? styles.active : ''}`}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-20% 0px -20% 0px' }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            <div className={styles.dot} />
            <div className={styles.stepContent}>
              <div className={styles.stepHeader}>
                <h4 className={styles.stepTitle}>{s.title}</h4>

                {/* ⏱ Hours pill */}
                {s.hours != null && (
                  <span className={styles.hoursPill}>{s.hours} hrs</span>
                )}
              </div>

              {s.desc && <p className={styles.stepDesc}>{s.desc}</p>}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
