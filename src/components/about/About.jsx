// import React from 'react';
// import { Box, Typography } from '@mui/material';
// import styles from './About.module.css';


// export default function About() {
//   return (
//     <Box className={styles.container}>
//       {/* Section 1 */}
//       <Box className={styles.section}>
//          <Box className={styles.imageBox}>
//           <img src="/assets/About2.png" alt="Haasutech team collaborating" />
//         </Box>
//         <Box className={styles.text}>
//           <Typography component="h2" className={styles.heading}>
//             Who We Are
//           </Typography>
//           <Typography className={styles.paragraph}>
//             At Haasutech AI, we empower businesses and learners by delivering industry,driven AI, data science,
//             and full stack technology training. Rooted in expertise spanning cloud computing, machine learning,
//             AI/ML and technology consulting, we equip you with job,ready skills and practical knowledge.
//           </Typography>
//           <Typography className={styles.paragraph}>
//             Based in Bangalore & Noida, we've trained 50K+ learners, partnered with top institutions, and driven digital
//             transformation across domains. Our IIT,led faculty and real,world projects ensure measurable outcomes.
//           </Typography>
//         </Box>
       
//       </Box>

//       {/* Section 2 */}
//       <Box className={`${styles.section} ${styles.reverse}`}>
//         <Box className={styles.imageBox}>
//           <img src="/assets/about3.png" alt="Hands‑on workshop session" />
//         </Box>
//         <Box className={styles.text}>
//           <Typography component="h2" className={styles.heading}>
//             What We Offer
//           </Typography>
//           <Typography className={styles.paragraph}>
//             - AI & Machine Learning: Foundational to advanced certifications.<br/>
//             - Data Science & DSA: Projects-based courses to ace interviews.<br/>
//             - Cloud, DevOps & Full‑stack: End‑to‑end development workflows.<br/>
//             - Career Support: Resume prep, mock interviews, and placement assistance.
//           </Typography>
//           <Typography className={styles.paragraph}>
//             We blend hands‑on experience, industry mentorship, and performance-driven curriculums to create
//             tech professionals who stand out—whether you're a student, career-switcher, or a working professional.
//           </Typography>
//         </Box>
//       </Box>
//     </Box>
//   );
// }


import React from "react";
import { Box, Typography, Card, CardContent, CardMedia } from "@mui/material";
import styles from "./About.module.css";

export default function About() {
  const sections = [
    {
      title: "Who We Are",
      text: (
        <>
          At <span className={styles.highlight}>Haasutech AI</span>, we empower
          businesses and learners with{" "}
          <span className={styles.highlight}>
            industry-driven AI and full-stack technology training
          </span>. Based in{" "}
          <span className={styles.highlight}>Bangalore, Noida & Delhi NCR</span>
          , we have trained over{" "}
          <span className={styles.highlight}>50,000+ learners</span> with
          IITian-led mentorship and hands-on projects.
          <br />
          <br />
          Our expertise spans{" "}
          <span className={styles.highlight}>
            AI/ML, Cloud Computing, Data Science, DevOps, and Full‑Stack
            Development
          </span>{" "}
          — ensuring our learners gain practical, job-ready skills.
        </>
      ),
      image: "/assets/About2.png",
    },
   {
  title: "Our Courses",
  text: (
    <>
      Learn from{" "}
      <span className={styles.highlight}>IITians and industry experts</span>{" "}
      with curated programs:
      <div className={styles.courseGrid}>
        {[
          { name: "AI & Machine Learning", },
          { name: "Data Science & DSA", },
          { name: "Full-Stack Development (MERN)", },
          { name: "Cloud Computing (AWS, GCP, Docker)",  },
          { name: "DevOps & MLOps", },
          { name: "Generative AI & Prompt Engineering",  },
          { name: "& more" },
        ].map((course, index) => (
          <div key={index} className={styles.courseCard}>
           
            <Typography variant="body1" className={styles.courseName}>
              {course.name}
            </Typography>
          </div>
        ))}
      </div>
    </>
  ),
  image: "/assets/about3.png",
  reverse: true,
},

    {
      title: "Internships",
      text: (
        <>
          Gain real-world exposure through{" "}
          <span className={styles.highlight}>paid internships</span> in:
          <div className={styles.tagWrapper}>
            {[
              "AI / Machine Learning Research",
              "Data Science & Analytics",
              "Full-Stack Engineering",
              "Cloud & DevOps",
              "& more",
            ].map((item, index) => (
              <span key={index} className={styles.tag}>
                {item}
              </span>
            ))}
          </div>
        </>
      ),
     image: "/assets/intershipsabout.png",
    },
    {
      title: "Career Opportunities",
      text: (
        <>
          We offer{" "}
          <span className={styles.highlight}>
            placement support, career counseling, and mock interviews
          </span>{" "}
          to help learners land roles such as:
          <div className={styles.tagWrapper}>
            {[
              "AI Engineer / Data Scientist",
              "Full-Stack Developer",
              "Cloud & DevOps Engineer",
              "MLOps Specialist",
              "& more",
            ].map((item, index) => (
              <span key={index} className={styles.tag}>
                {item}
              </span>
            ))}
          </div>
        </>
      ),
      image: "/assets/coursesabout.png",
      reverse: true,
    },
    {
      title: "Final Year Projects",
      text: (
        <>
          We provide{" "}
          <span className={styles.highlight}>capstone projects</span> with
          mentorship on:
          <div className={styles.tagWrapper}>
            {[
              "End-to-End AI/ML Pipelines",
              "Computer Vision & NLP",
              "Generative AI (LLMs, ChatGPT)",
              "Full-Stack + AI Applications",
              "& more",
            ].map((item, index) => (
              <span key={index} className={styles.tag}>
                {item}
              </span>
            ))}
          </div>
        </>
      ),
      image: "/assets/projectsabout.png",
    },
  ];

  return (
    <Box className={styles.aboutPage}>
      {sections.map((sec, index) => (
        <Box
          key={index}
          className={`${styles.section} ${sec.reverse ? styles.reverse : ""}`}
        >
          <Box className={styles.imageBox}>
            <CardMedia
              component="img"
              image={sec.image}
              alt={sec.title}
              className={styles.image}
            />
          </Box>
          <Box className={styles.contentBox}>
            <Typography component="h2" className={styles.heading}>
              {sec.title}
            </Typography>
            <Typography className={styles.text}>{sec.text}</Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
}
