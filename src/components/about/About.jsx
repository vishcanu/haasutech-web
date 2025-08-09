


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
      businesses, institutions, and learners with{" "}
      <span className={styles.highlight}>
        industry-driven AI, full-stack technology, and EdTech training
      </span>. Based in{" "}
      <span className={styles.highlight}>Bangalore, Noida & Delhi NCR</span>, we
      have trained over{" "}
      <span className={styles.highlight}>10,000+ learners</span> with
      IITian-led mentorship and hands-on projects.
      <br />
      <br />
      Our team comprises several accomplished and acclaimed{" "}
      <span className={styles.highlight}>IITians</span> and{" "}
      <span className={styles.highlight}>industry professionals</span>. We are
      passionate about transferring the{" "}
      <span className={styles.highlight}>
        expertise and experience gained over the years
      </span>{" "}
      to our eager learners.
      <br />
      <br />
      In the fast-evolving{" "}
      <span className={styles.highlight}>Artificial Intelligence (AI)</span>{" "}
      space, innovations and disruptions are transforming every industry
      vertical. Businesses are eager to embrace the{" "}
      <span className={styles.highlight}>AI paradigm</span> to deliver premium,
      path-breaking services and applications.
      <br />
      <br />
      To accelerate and sustain{" "}
      <span className={styles.highlight}>
        digital transformation initiatives
      </span>
      , it is essential to gain mastery over{" "}
      <span className={styles.highlight}>
        pioneering technologies, breakthrough architectural styles, and
        state-of-the-art digital infrastructures
      </span>
      . Our primary mission is to empower{" "}
      <span className={styles.highlight}>
        institutions, individuals, and innovators
      </span>{" "}
      with the right skills to thrive in this rapidly changing technological
      landscape.
    </>
  ),
  image: "/assets/About2.png",
},
,
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
           
            <Typography  className={styles.courseName}>
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
