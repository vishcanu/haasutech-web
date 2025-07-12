// import React, { useState } from "react";
// import {
//   Box,
//   Typography,
//   Grid,
//   Button,
//   Chip,
//   TextField,
//   InputAdornment
// } from "@mui/material";
// import styles from "./MainCourses.module.css";
// import { courseData } from "./coursesData";
// import SchoolIcon from "@mui/icons-material/School";
// import MenuBookIcon from "@mui/icons-material/MenuBook";
// import WorkIcon from "@mui/icons-material/Work";
// import TrendingUpIcon from "@mui/icons-material/TrendingUp";
// import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
// import AccessTimeIcon from "@mui/icons-material/AccessTime";
// import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
// import SearchIcon from "@mui/icons-material/Search";

// const tabs = [
//     "Programming Fundamentals",
//     "Data Science & Analytics",
//   "AI & Machine Learning",
//  "AI Capstone & Labs",
//   "Data Analytics",
//   "Generative AI",
//   "Agentic AI",
//   "Cloud & DevOps",
//   "Cybersecurity",
//   "Full Stack Development",
// //   "Project Management & Tools",
// //   "Digital Marketing",
//   "Foundation & Career Launchers",
// ];

// export default function MainCourses() {
//   const [selectedTab, setSelectedTab] = useState("AI & Machine Learning");
//   const [search, setSearch] = useState("");

//   const filteredCourses = courseData.filter(
//     (course) =>
//       course.tag === selectedTab &&
//       course.title.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <Box className={styles.wrapper}>
//       {/* Hero Section */}
//       <Box className={styles.hero}>
//         <Typography variant="h3" className={styles.heroTitle}>
//           Master AI & Tech Skills
//         </Typography>
//         <Typography className={styles.heroSubtitle}>
//           From Python basics to advanced AI - comprehensive courses for every level
//         </Typography>
//         <Box className={styles.heroButtons}>
//           <Button className={styles.primaryButton} variant="contained">
//             Find Your Perfect Course
//           </Button>
//           <Button className={styles.outlineButton} variant="outlined">
//             Explore All Courses
//           </Button>
//         </Box>
//       </Box>

//       {/* Stats */}
//       <Box className={styles.stats}>
//         <div>
//           <SchoolIcon className={styles.statIcon} />
//           <h3>5,000</h3>
//           <p>Active Learners</p>
//         </div>
//         <div>
//           <MenuBookIcon className={styles.statIcon} />
//           <h3>90+</h3>
//           <p>Tech Courses</p>
//         </div>
//         <div>
//           <WorkIcon className={styles.statIcon} />
//           <h3>89%</h3>
//           <p>Job Placement Rate</p>
//         </div>
//         <div>
//           <TrendingUpIcon className={styles.statIcon} />
//           <h3>65%</h3>
//           <p>Average Salary Increase</p>
//         </div>
//       </Box>

//       {/* Tabs */}
//       <Typography className={styles.title}>Choose Your Learning Path</Typography>
//       <Typography className={styles.subtitle}>
//         Comprehensive courses designed for every skill level
//       </Typography>

//       <Box className={styles.tabs}>
//         {tabs.map((tab) => (
//           <Chip
//             key={tab}
//             label={tab}
//             onClick={() => setSelectedTab(tab)}
//             color={selectedTab === tab ? "primary" : "default"}
//             className={styles.chip}
//           />
//         ))}
//       </Box>

//       {/* Search */}
//       <TextField
//         variant="outlined"
//         placeholder="Search courses..."
//         size="small"
//         fullWidth
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//         className={styles.searchBox}
//         InputProps={{
//           startAdornment: (
//             <InputAdornment position="start">
//               <SearchIcon style={{ color: "#666" }} />
//             </InputAdornment>
//           ),
//           classes: { notchedOutline: styles.notchedOutline },
//         }}
//       />

//       {/* Courses */}
//       <Box className={styles.gridWrapper}>
//   <Grid container spacing={3} className={styles.grid}>
//     {filteredCourses.map((course) => {
//       const Icon = course.icon;
//       return (
//         <Grid item xs={12} sm={6} md={4} lg={3} key={course.id}>
//           <Box className={styles.courseCard}>
//             <Box
//               className={styles.cardTop}
//               style={{ background: course.topColor }}
//             >
//               <span
//                 className={styles.levelTag}
//                 style={{ backgroundColor: course.badgeColor }}
//               >
//                 {course.badge}
//               </span>
//               {Icon && <Icon className={styles.courseIcon} />}
//             </Box>

//             <Box className={styles.cardContent}>
//               <Typography variant="h6" className={styles.courseTitle}>
//                 {course.title}
//               </Typography>
//               <Typography variant="body2" className={styles.courseDesc}>
//                 {course.description}
//               </Typography>

//               {/* <Typography variant="body2" className={styles.meta}>
//                 <PeopleAltIcon fontSize="small" /> {course.enrolled} students
//                 &nbsp;&nbsp;
//                 <AccessTimeIcon fontSize="small" /> {course.weeks} weeks
//               </Typography> */}

//               <Button
//                 variant="contained"
//                 size="small"
//                 className={styles.enrollBtn}
//               >
//                 Start Learning
//               </Button>
//             </Box>
//           </Box>
//         </Grid>
//       );
//     })}
//   </Grid>
// </Box>

//     </Box>
//   );
// }

import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Button,
  Chip,
  TextField,
  InputAdornment,
  Dialog,
  MenuItem,
  Divider,
} from "@mui/material";
import styles from "./MainCourses.module.css";
import { courseData } from "./coursesData";
import SchoolIcon from "@mui/icons-material/School";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import WorkIcon from "@mui/icons-material/Work";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import SearchIcon from "@mui/icons-material/Search";

const tabs = [
  "All Courses",
  "Programming Fundamentals",
  "Data Science & Analytics",
  "AI & Machine Learning",
  "AI Capstone & Labs",
  "Data Analytics",
  "Generative AI",
  "Agentic AI",
  "Cloud & DevOps",
  "Cybersecurity",
  "Full Stack Development",
  "Foundation & Career Launchers",
];

export default function MainCourses() {
  const [selectedTab, setSelectedTab] = useState("All Courses");
  const [search, setSearch] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);
const [selectedCourseSlug, setSelectedCourseSlug] = useState('');

  const filteredCourses = courseData.filter(
    (course) =>
      (selectedTab === "All Courses" || course.tag === selectedTab) &&
      course.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Box className={styles.wrapper}>
      {/* Hero Section */}
      <Box className={styles.hero}>
        <Typography variant="h3" className={styles.heroTitle}>
          Master AI & Tech Skills
        </Typography>
        <Typography className={styles.heroSubtitle}>
          From Python basics to advanced AI - comprehensive courses for every
          level
        </Typography>
        <Box className={styles.heroButtons}>
          <Button className={styles.primaryButton} variant="contained">
            Find Your Perfect Course
          </Button>
          <Button 
          className={styles.outlineButton} 
          variant="outlined"
          onClick={() => setDialogOpen(true)}
          >
            Explore All Courses
          </Button>
        </Box>
      </Box>

      {/* Stats */}
      <Box className={styles.stats}>
        <div>
          <SchoolIcon className={styles.statIcon} />
          <h3>5,000</h3>
          <p>Active Learners</p>
        </div>
        <div>
          <MenuBookIcon className={styles.statIcon} />
          <h3>90+</h3>
          <p>Tech Courses</p>
        </div>
        <div>
          <WorkIcon className={styles.statIcon} />
          <h3>89%</h3>
          <p>Job Placement Rate</p>
        </div>
        <div>
          <TrendingUpIcon className={styles.statIcon} />
          <h3>65%</h3>
          <p>Average Salary Increase</p>
        </div>
      </Box>
<Divider
  sx={{
    height: '2px',
    border: 'none',
    background: 'linear-gradient(to right, transparent, #1976d2, transparent)',
    marginY: 1,
  }}
/>
      {/* Tabs */}
      <Typography className={styles.title}>
        Choose Your Learning Path
      </Typography>
      <Typography className={styles.subtitle}>
        Comprehensive courses designed for every skill level
      </Typography>

      <Box className={styles.tabsWrapper}>
        <Box className={styles.tabs}>
          {tabs.map((tab) => (
            <Chip
              key={tab}
              label={tab}
              onClick={() => setSelectedTab(tab)}
              color={selectedTab === tab ? "primary" : "default"}
              className={`${styles.chip} ${
                selectedTab === tab ? styles.activeChip : ""
              }`}
            />
          ))}
        </Box>
      </Box>

      {/* Courses */}
      <Box className={styles.gridWrapper}>
        <Grid container spacing={3} className={styles.grid}>
          {filteredCourses.map((course) => {
            const Icon = course.icon;
            return (
              <Grid item xs={12} sm={6} md={4} lg={3} key={course.id}>
                <Box className={styles.courseCard}>
                  <Box
                    className={styles.cardTop}
                    style={{ background: course.topColor }}
                  >
                    <span
                      className={styles.levelTag}
                      style={{ backgroundColor: course.badgeColor }}
                    >
                      {course.badge}
                    </span>
                    {Icon && <Icon className={styles.courseIcon} />}
                  </Box>

                  <Box className={styles.cardContent}>
                    <Typography variant="h6" className={styles.courseTitle}>
                      {course.title}
                    </Typography>
                    <Typography variant="body2" className={styles.courseDesc}>
                      {course.description}
                    </Typography>

                    <Button
                      variant="contained"
                      size="small"
                      href={`/courses/${course.slug}`}
                      className={styles.enrollBtn}
                    >
                      View Course
                    </Button>
                  </Box>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Box>
      <Dialog
  open={dialogOpen}
  onClose={() => setDialogOpen(false)}
  fullWidth
  maxWidth="sm"
  classes={{ paper: styles.dialogPaper }} // Add this
>
  <Box p={3} className={styles.dialogContent}>
    <Typography variant="h6" gutterBottom>Select a Course</Typography>
    <TextField
      select
      fullWidth
      variant="outlined"
      label="Choose a course"
      value={selectedCourseSlug}
      onChange={(e) => {
        setSelectedCourseSlug(e.target.value);
        setDialogOpen(false);
        window.location.href = `/courses/${e.target.value}`;
      }}
    >
      {courseData.map((course) => (
        <MenuItem key={course.id} value={course.slug}>
          {course.title}
        </MenuItem>
      ))}
    </TextField>
  </Box>
</Dialog>


    </Box>
    
  );
}
