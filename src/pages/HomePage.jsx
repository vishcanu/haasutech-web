// src/pages/HomePage.jsx
import React, { useState } from "react";
import HeroSection from "../components/hero/HeroSection";
import UrgencyBar from "../components/coursedetail/UrgencyBar";
import CoursesPreview from "../components/courses/CoursesPreview";
import WhyHaasutech from "../components/whyHaasutech/WhyHaasutech";
import Placement from "../components/placement/Placement";
import NewsletterForm from "../components/newsletter/NewsletterForm";
import Testimonials from "../components/testimonials/Testimonials";
import Blog from "../components/blog/Blog";

export default function HomePage() {
  const [openBot, setOpenBot] = useState(false);

  return (
    <>
      <HeroSection openBot={openBot} setOpenBot={setOpenBot} />
      <UrgencyBar setOpenBot={setOpenBot} />
      <CoursesPreview />
      <WhyHaasutech />
      <Placement />
      <Testimonials />
      <NewsletterForm />
      <Blog />
    </>
  );
}
