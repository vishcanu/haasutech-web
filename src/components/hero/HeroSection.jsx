import React, { useState, useEffect, useRef } from "react";
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
  Divider,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";

import styles from "./HeroSection.module.css";
import FloatingAIBot from "../aibot/AiBot";

export default function HeroSection() {
  const [selectedPath, setSelectedPath] = useState("");
  const [hoveredPath, setHoveredPath] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [recommendedPath, setRecommendedPath] = useState("professional");
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
  const [openBot, setOpenBot] = useState(false);

  const steps = [
    {
      name: "name",
      prompt: "Hi! I'm your course assistant 🤖 What's your name?",
    },
    { name: "email", prompt: "Great, {name}! \nWhat's your email address?" },
    { name: "phone", prompt: "Thanks! Could you share your phone number?" },
    { name: "course", prompt: "Which course are you interested in?" },
  ];

  const [stepIndex, setStepIndex] = useState(0);
  const [botMessage, setBotMessage] = useState(steps[0].prompt);
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    // Personalize prompt after collecting name
    if (stepIndex > 0) {
      setBotMessage(steps[stepIndex].prompt.replace("{name}", formData.name));
    } else {
      setBotMessage(steps[stepIndex].prompt);
    }
    setInputValue(""); // Clear input at each step
    setTimeout(() => {
      if (inputRef.current) inputRef.current.focus();
    }, 200);
  }, [stepIndex, formData.name, openBot]);

  // Handler for each bot input/step
  const handleBotSubmit = async (e) => {
    e.preventDefault();
    // Save input:
    setFormData((prev) => ({
      ...prev,
      [steps[stepIndex].name]: inputValue,
    }));

    // If not last step, increment step index after short delay
    if (stepIndex < steps.length - 1) {
      setTimeout(() => setStepIndex((prev) => prev + 1), 600); // Simulate "AI thinking"
    } else {
      // Submit form (at last step)
      setSubmitting(true);
      try {
        const response = await fetch("https://getform.io/f/bnlxgjeb", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...formData, course: inputValue }),
        });
        if (response.ok) {
          setBotMessage("🎉 Registered successfully! Welcome aboard.");
          setTimeout(() => {
            setOpenBot(false);
            setFormData({ name: "", email: "", phone: "", course: "" });
            setStepIndex(0);
            setInputValue("");
          }, 1800);
        } else {
          setBotMessage("❌ Submission failed. Try again!");
        }
      } catch (err) {
        setBotMessage("❌ Submission failed. Try again!");
      } finally {
        setSubmitting(false);
      }
    }
  };

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
    const paths = ["student", "professional", "career"];
    const interval = setInterval(() => {
      setRecommendedPath((prev) => {
        const nextIndex = (paths.indexOf(prev) + 1) % paths.length;
        return paths[nextIndex];
      });
    }, 4000); // change every 4 seconds

    return () => clearInterval(interval);
  }, []);

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
    const t = setTimeout(() => setOpenBot(true), 3000);
    return () => clearTimeout(t);
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
        <Box className={styles.container}>
          {/* Left Section */}

          <Box className={styles.left}>
            <Typography variant="h6" className={styles.title}>
              Real Skills. Real Mentors. Real Results.
              <br />
              <span className={styles.highlight}>
                Learn AI & Tech from IITians
              </span>
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
                onClick={() => setOpenBot(true)}
              >
                Register Now
              </Button>
            </Box>
            {/* AI Chat-Bot Modal */}
            {openBot && (
              <div className={styles.botOverlay}>
                <div className={styles.botModal}>
                  <IconButton
                    className={styles.botCloseIcon}
                    onClick={() => setOpenBot(false)}
                    size="large"
                    aria-label="Close registration dialog"
                  >
                    <CloseIcon fontSize="inherit" />
                  </IconButton>
                  <div className={styles.aiBotContainer}>
                    <img
                      src="/assets/ai-bot.png"
                      alt="AI Bot"
                      className={styles.aiBotSpinner} // see CSS below
                      style={{ width: 75, height: 75 }}
                    />

                    <div className={styles.aiBubble}>
                      {botMessage.split("\n").map((line, i) => (
                        <span key={i}>
                          {line}
                          {i < botMessage.split("\n").length - 1 && <br />}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Conversational Form */}
                  <form onSubmit={handleBotSubmit} className={styles.botForm}>
                    {stepIndex < 3 ? (
                      <input
                        ref={inputRef}
                        type={
                          steps[stepIndex].name === "email"
                            ? "email"
                            : steps[stepIndex].name === "phone"
                            ? "tel"
                            : "text"
                        }
                        placeholder={
                          steps[stepIndex].name === "phone"
                            ? "eg. 9999999999"
                            : "Type here..."
                        }
                        value={inputValue}
                        disabled={submitting}
                        onChange={(e) => setInputValue(e.target.value)}
                        className={styles.botInput}
                        required
                      />
                    ) : (
                      // Step 4: Choose course with dropdown
                      <select
                        ref={inputRef}
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        className={styles.botInput}
                        required
                      >
                        <option value="" disabled>
                          Select course...
                        </option>
                        {courses.map((course) => (
                          <option key={course} value={course}>
                            {course}
                          </option>
                        ))}
                      </select>
                    )}
                    <Button
                      type="submit"
                      variant="contained"
                      className={styles.botBtn}
                      disabled={submitting || !inputValue}
                      sx={{ mt: 1 }}
                    >
                      {submitting
                        ? "Submitting..."
                        : stepIndex < 3
                        ? "Next"
                        : "Finish"}
                    </Button>
                  </form>
                </div>
              </div>
            )}
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

          <FloatingAIBot />
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
                  className={`${styles.pathOption} 
  ${selectedPath === type ? styles.pathOptionSelected : ""} 
  ${recommendedPath === type ? styles.pathOptionRecommended : ""}`}
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
                  {recommendedPath === type && (
                    <span className={styles.recommendBadge}>
                      AI Recommended
                    </span>
                  )}
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
