import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  MenuItem,
  Snackbar,
  Alert,
} from "@mui/material";

import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";

import styles from "./HeroSection.module.css";

export default function HeroSection() {
  const [selectedPath, setSelectedPath] = useState("");
  const [hoveredPath, setHoveredPath] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [toast, setToast] = useState({
    open: false,
    message: "",
    severity: "success",
  });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [timeLeft, setTimeLeft] = useState(getRemainingTime());

  function getRemainingTime() {
    const targetTime = new Date().setHours(24, 0, 0, 0); // today 24:00
    const now = new Date().getTime();
    const diff = Math.max(0, targetTime - now);

    return {
      hours: String(Math.floor(diff / (1000 * 60 * 60))).padStart(2, "0"),
      minutes: String(Math.floor((diff / (1000 * 60)) % 60)).padStart(2, "0"),
      seconds: String(Math.floor((diff / 1000) % 60)).padStart(2, "0"),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getRemainingTime());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const { hours, minutes, seconds } = timeLeft;

  const courses = [
    "Python for Beginners",
    "Java Programming Masterclass",
    "Data Structures & Algorithms (DSA)",
    "Machine Learning with Python",
    "Deep Learning & Neural Networks",
    "Natural Language Processing (NLP)",
    "Computer Vision & OpenCV",
    "AI for Everyone (Beginner)",
    "Full Stack AI Developer Bootcamp",
    "DevOps with Docker & Kubernetes",
    "MLOps for AI Engineers",
    "Cloud Computing with AWS & GCP",
    "Prompt Engineering for LLMs",
    "ChatGPT & Generative AI Mastery",
    "Data Engineering with Apache Spark",
    "Git & GitHub Version Control",
    "Linux Command Line for DevOps",
    "Frontend Development (React.js)",
    "Backend Development (Node.js + Express)",
    "Database Systems (SQL & NoSQL)",
  ];

  const getRecommendations = (path) => {
    switch (path) {
      case "student":
        return [
          "Python for Beginners",
          "Java Programming Masterclass",
          "Data Structures & Algorithms (DSA)",
          "AI for Everyone (Beginner)",
          "Frontend Development (React.js)",
        ];
      case "professional":
        return [
          "Machine Learning with Python",
          "Deep Learning & Neural Networks",
          "DevOps with Docker & Kubernetes",
          "Cloud Computing with AWS & GCP",
          "MLOps for AI Engineers",
        ];
      case "career":
        return [
          "Full Stack AI Developer Bootcamp",
          "ChatGPT & Generative AI Mastery",
          "Prompt Engineering for LLMs",
          "Backend Development (Node.js + Express)",
          "Database Systems (SQL & NoSQL)",
        ];
      default:
        return [];
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => setOpenModal(true), 30000);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, phone, course } = formData;
    if (!name || !email || !phone || !course) {
      setToast({
        open: true,
        message: "Please fill all fields.",
        severity: "error",
      });
      return;
    }

    setSubmitting(true);
    try {
      const response = await fetch("https://getform.io/f/bnlxgjeb", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setToast({
          open: true,
          message: "🎉 Registered successfully!",
          severity: "success",
        });
        setFormData({ name: "", email: "", phone: "", course: "" });
        setTimeout(() => setOpenModal(false), 1500);
      } else {
        throw new Error("Failed to submit");
      }
    } catch (error) {
      setToast({
        open: true,
        message: "❌ Submission failed. Try again later.",
        severity: "error",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Box className={styles.heroSection}>
        <Box className={styles.limitedBanner}>
          <Box className={styles.bannerLeft}>
            <Typography variant="h6" className={styles.bannerTitle}>
              Limited Time Offer Ends In:
            </Typography>
            <Typography className={styles.bannerSubtitle}>
              Don't miss out on 30% savings!
            </Typography>
          </Box>

          <Box className={styles.timerWrapper}>
            <Box className={styles.timerBox}>
              <strong>{hours}</strong>
              <span>Hours</span>
            </Box>
            <Box className={styles.timerBox}>
              <strong>{minutes}</strong>
              <span>Minutes</span>
            </Box>
            <Box className={styles.timerBox}>
              <strong>{seconds}</strong>
              <span>Seconds</span>
            </Box>
          </Box>

          <Button variant="contained" className={styles.ctaBtn}>
            Claim Offer!
          </Button>
        </Box>

        <Box className={styles.container}>
          {/* Left Section */}
          <Box className={styles.left}>
            <Typography variant="h2" className={styles.title}>
              Transform Your Career with{" "}
              <span className={styles.highlight}>Expert-Led Courses</span>
            </Typography>

            <Typography className={styles.subtitle}>
              Whether you're a student starting out, a professional upskilling,
              or making a career change – we have the perfect learning path.{" "}
              <strong>Learn from top IITians and industry experts.</strong>
            </Typography>

            <Box className={styles.buttonGroup}>
              <Button
                variant="contained"
                className={styles.primaryBtn}
                href="/courses"
              >
                Explore Courses
              </Button>
              <Button
                variant="outlined"
                className={styles.secondaryBtn}
                onClick={() => setOpenModal(true)}
              >
                Register Now
              </Button>
            </Box>

            <Box className={styles.stats}>
              <div>
                <strong>10K+</strong>
                <br />
                Students
              </div>
              <div>
                <strong>100+</strong>
                <br />
                Courses
              </div>
              <div>
                <strong>95%</strong>
                <br />
                Success Rate
              </div>
            </Box>
          </Box>

          {/* Right Section */}
          
          <Box className={styles.right}>
            <Typography className={styles.pathTitle}>
              Find Your Perfect Path
            </Typography>

            {["student", "professional", "career"].map((type) => (
              <Box
                key={type}
                className={styles.pathOptionWrapper}
                onMouseEnter={() => setHoveredPath(type)}
                onMouseLeave={() => setHoveredPath("")}
                onClick={() => {
                  if (selectedPath === type) {
                    setSelectedPath("");
                    setHoveredPath("");
                  } else {
                    setSelectedPath(type);
                    setHoveredPath(""); // optional: close hover immediately
                  }
                }}
              >
                <Box
                  className={`${styles.pathOption} ${
                    selectedPath === type ? styles.pathOptionSelected : ""
                  }`}
                >
                  {type === "student" && <SchoolIcon className={styles.icon} />}
                  {type === "professional" && (
                    <WorkIcon className={styles.icon} />
                  )}
                  {type === "career" && (
                    <SwapHorizIcon className={styles.icon} />
                  )}
                  <div>
                    <strong>
                      {type === "student"
                        ? "Student"
                        : type === "professional"
                        ? "Professional"
                        : "Career Changer"}
                    </strong>
                    <br />
                    <span>
                      {type === "student"
                        ? "Build foundational skills"
                        : type === "professional"
                        ? "Advance your current role"
                        : "Switch to a new field"}
                    </span>
                  </div>
                </Box>

                {(hoveredPath === type || selectedPath === type) && (
                  <Box className={styles.dropdown}>
                    <Typography className={styles.dropdownTitle}>
                      Recommended:
                    </Typography>
                    <ul className={styles.dropdownList}>
                      {getRecommendations(type).map((rec, i) => (
                        <li key={i}>{rec}</li>
                      ))}
                    </ul>
                  </Box>
                )}
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      {/* Register Modal */}
      <Dialog
        open={openModal}
        onClose={() => setOpenModal(false)}
        PaperProps={{
          className: styles.dialogPaper,
        }}
      >
        <DialogTitle className={styles.dialogTitle}>
          Start your journey today!
        </DialogTitle>

        <DialogContent>
          <form onSubmit={handleSubmit} className={styles.dialogForm}>
            <TextField
              name="name"
              label="Name"
              value={formData.name}
              onChange={handleChange}
              fullWidth
              required
            />
            <TextField
              name="email"
              label="Email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              fullWidth
              required
            />
            <TextField
              name="phone"
              label="Phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              fullWidth
              required
            />
            <TextField
              name="course"
              label="Select Course"
              select
              value={formData.course}
              onChange={handleChange}
              fullWidth
              required
            >
              {courses.map((course) => (
                <MenuItem key={course} value={course}>
                  {course}
                </MenuItem>
              ))}
            </TextField>

            <Button
              type="submit"
              variant="contained"
              disabled={submitting}
              className={styles.dialogSubmitBtn}
            >
              {submitting ? "Submitting..." : "Submit"}
            </Button>
          </form>
        </DialogContent>
      </Dialog>

      <Snackbar
        open={toast.open}
        autoHideDuration={3000}
        onClose={() => setToast({ ...toast, open: false })}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={() => setToast({ ...toast, open: false })}
          severity={toast.severity}
          sx={{ width: "100%" }}
        >
          {toast.message}
        </Alert>
      </Snackbar>
    </>
  );
}
