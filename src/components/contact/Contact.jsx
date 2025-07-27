import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Link,
  Stack,
  Card,
  CardContent,
  Divider,
  IconButton,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';

import styles from "./Contact.module.css";

const PHONES = ["+91 82997 70993", "+91 89329 00125"];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: plug your endpoint (GetForm/Formspree/API)
    console.log("Submit ->", form);
  };

  return (
    <Box component="main" className={styles.page}>
      {/* Decorative BG */}
      <div className={styles.bgGrid} aria-hidden="true" />

      {/* Hero */}
      <section className={styles.hero}>
        <Typography component="h1" className={styles.title}>
          <span>HaasuTech AI Pvt. Ltd.</span>
        </Typography>

        <Typography className={styles.subtitle}>
          Talk to us about{" "}
          <span className={styles.highlight}>
            courses, internships, projects
          </span>
          .
        </Typography>
      </section>

      <div className={styles.container}>
        {/* Info */}
        <Card className={styles.infoCard} elevation={0}>
          <CardContent>
            <Stack spacing={3}>
             

              <div className={styles.block}>
                <PhoneIcon className={styles.icon} />
                <div>
                  <Typography className={styles.blockTitle}>Phone</Typography>
                  <Stack direction="row" spacing={1} flexWrap="wrap" rowGap={1} className={styles.phoneChipContainer}>
                    {PHONES.map((p) => (
                      <Link
                        key={p}
                        href={`tel:${p.replace(/\s+/g, "")}`}
                        className={styles.phoneChip}
                        underline="none"
                      >
                        {p}
                      </Link>
                    ))}
                  </Stack>
                </div>
              </div>

              <Divider className={styles.divider} />

              <div className={styles.block}>
                <EmailIcon className={styles.icon} />
                <div>
                  <Typography className={styles.blockTitle}>Email</Typography>
                  <Link
                    href="mailto:business@haasutech.com"
                    className={styles.email}
                  >
                    business@haasutech.com
                  </Link>
                </div>
              </div>

              <Divider className={styles.divider} />

              <div className={styles.block}>
                <WhatsAppIcon className={styles.icon} />
                <div>
                  <Typography className={styles.blockTitle}>
                    WhatsApp (Fastest)
                  </Typography>
                  <Link
                    href="https://wa.me/918299770993"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.whatsapp}
                  >
                    Chat on WhatsApp
                  </Link>
                </div>
              </div>
               <Divider className={styles.divider} />
                <div className={styles.block}>
                <LocationOnIcon className={styles.icon} />
                <div>
                  <Typography className={styles.blockTitle}>Address</Typography>
                  <Typography className={styles.blockText}>
                    Prospect Princeton Apartment, Manipal County Road, AECS
                    Layout, C Block, Bangalore, 560068
                  </Typography>
                </div>
              </div>

              <Divider className={styles.divider} />

              {/* Social Links */}
              <div className={styles.block}>
  <div className={styles.blockHeader}>
    <ConnectWithoutContactIcon className={styles.icon} /> 
     </div>
    <Typography className={styles.blockTitle}>Follow Us</Typography> 

  <div className={styles.socials}>
    <IconButton
      className={styles.socialIcon}
      href="https://www.instagram.com/haasutech_ai?idsh=MWJpNjBoZDc4eGtueg=="
      target="_blank"
    >
      <InstagramIcon />
    </IconButton>
    <IconButton
      className={styles.socialIcon}
      href="https://www.linkedin.com/company/haasutech-ai/"
      target="_blank"
    >
      <LinkedInIcon />
    </IconButton>
    <IconButton
      className={styles.socialIcon}
      href="https://www.facebook.com/share/1LE9eiU3JG/"
      target="_blank"
    >
      <FacebookIcon />
    </IconButton>
  </div>
</div>

            </Stack>
          </CardContent>
        </Card>
        

        {/* Form */}
        <Card className={styles.formCard} elevation={0}>
          <CardContent>
          <Typography component="h2" className={styles.formTitle}>
            Send us a message
          </Typography>

          <form onSubmit={handleSubmit} className={styles.form}>
            <TextField
              label="Full Name"
              name="name"
              value={form.name}
              onChange={handleChange}
              fullWidth
              required
            />
            <TextField
              label="Email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              fullWidth
              required
            />
            <TextField
              label="Phone"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              label="Message"
              name="message"
              value={form.message}
              onChange={handleChange}
              fullWidth
              multiline
              minRows={4}
              required
            />

            <Button
              type="submit"
              variant="contained"
              className={styles.submitBtn}
            >
              Submit
            </Button>
          </form>
          </CardContent>
        </Card>
      </div>

      {/* Map */}
      <section className={styles.mapSection}>
        <iframe
          className={styles.map}
          title="HaasuTech AI Location"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps?q=Prospect+Princeton+Apartment,+Manipal+County+Road,+AECS+Layout,+C+Block,+Bangalore+560068&output=embed"
        />
      </section>
    </Box>
  );
}
