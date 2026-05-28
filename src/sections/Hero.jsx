import { useState } from "react";

import {
  LuFolder,
  LuBriefcase,
  LuCode,
  LuUser,
  LuSettings,
  LuGraduationCap,
  LuShare2,
  LuLinkedin,
  LuGithub,
  LuMail,
  LuX,
} from "react-icons/lu";

import profile from "../assets/Profile1.png";

function Hero({ refs }) {

  // POPUP STATES
  const [showEducation, setShowEducation] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showSocials, setShowSocials] = useState(false);

  const scrollTo = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero">

      {/* TOP LEFT */}
      <div className="hero-text">
        <h1>Arpit Sadotra</h1>
        <br></br>
        <h3>Web & Software Developer | Full-Stack | AI & Data-Driven Applications</h3>
      </div>

      {/* TOP RIGHT NAV */}
      <div className="top-right">

        {/* SERVICES */}
        <button
          onClick={() =>
            window.open(
              "https://wa.me/916006730683",
              "_blank"
            )
          }
        >
          <LuSettings /> Services
        </button>

        {/* EDUCATION */}
        <button onClick={() => setShowEducation(true)}>
          <LuGraduationCap /> Education
        </button>

        {/* CONTACT */}
        <button onClick={() => setShowContact(true)}>
          <LuMail /> Contact
        </button>

        {/* SOCIALS */}
        <button onClick={() => setShowSocials(true)}>
          <LuShare2 /> Socials
        </button>

      </div>

      {/* DESCRIPTION */}
      <div className="hero-desc">
        <p>
Full-stack developer with experience in building scalable, user-friendly web applications using modern technologies like React, Node.js, and Python. Skilled in working with APIs, developing real-time features, and creating interactive, data-driven platforms with a strong focus on performance and usability.

Backed by a solid understanding of core computer science fundamentals, I focus on writing clean, efficient code and designing intuitive UI/UX experiences. Passionate about solving real-world problems and continuously improving through hands-on development and exploring new technologies.
        </p>
      </div>

      {/* RIGHT IMAGE */}
      <div className="hero-image">
        <img src={profile} alt="profile" />
      </div>

      {/* BOTTOM LEFT (SCROLL BUTTONS) */}
      <div className="bottom-left">

        <button onClick={() => scrollTo(refs.projectsRef)}>
          <LuFolder /> Projects
        </button>

        <button onClick={() => scrollTo(refs.experienceRef)}>
          <LuBriefcase /> Experience
        </button>

        <button onClick={() => scrollTo(refs.skillsRef)}>
          <LuCode /> Skills
        </button>

        <button onClick={() => scrollTo(refs.aboutRef)}>
          <LuUser /> About Me
        </button>

      </div>

      {/* BOTTOM RIGHT (SOCIALS) */}
      <div className="bottom-right">

        <a
          href="https://linkedin.com/in/arpit-sadotra"
          target="_blank"
          rel="noreferrer"
        >
          <LuLinkedin />
        </a>

        <a
          href="https://github.com/ArpitSadotra"
          target="_blank"
          rel="noreferrer"
        >
          <LuGithub />
        </a>

        <a href="mailto:sadotraarpit@gmail.com">
          <LuMail />
        </a>

      </div>

      {/* EDUCATION POPUP */}
      {showEducation && (
        <div
          className="popup-overlay"
          onClick={() => setShowEducation(false)}
        >

          <div
            className="popup-card"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className="close-btn"
              onClick={() => setShowEducation(false)}
            >
              <LuX />
            </button>

            <h2>Education</h2>

            <div className="edu-item">
              <h3>10th Grade</h3>
              <p>Delhi Public School, Kathua, J&K</p>
              <span>2020 • 89%</span>
            </div>

            <div className="edu-item">
              <h3>12th Grade</h3>
              <p>Delhi Public School, Kathua, J&K</p>
              <span>2022 • 86%</span>
            </div>

            <div className="edu-item">
              <h3>Graduation</h3>
              <p>Chandigarh University, Mohali</p>
              <span>B.Tech CSE • 2022 - 2026</span>
            </div>

          </div>

        </div>
      )}

      {/* CONTACT POPUP */}
      {showContact && (
        <div
          className="popup-overlay"
          onClick={() => setShowContact(false)}
        >

          <div
            className="popup-card small"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className="close-btn"
              onClick={() => setShowContact(false)}
            >
              <LuX />
            </button>

            <h2>Contact</h2>

            <a
              href="mailto:sadotraarpit@gmail.com"
              className="popup-link"
            >
              Gmail
            </a>

            <a
              href="https://wa.me/916006730683"
              target="_blank"
              rel="noreferrer"
              className="popup-link"
            >
              WhatsApp
            </a>

          </div>

        </div>
      )}

      {/* SOCIALS POPUP */}
      {showSocials && (
        <div
          className="popup-overlay"
          onClick={() => setShowSocials(false)}
        >

          <div
            className="popup-card small"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className="close-btn"
              onClick={() => setShowSocials(false)}
            >
              <LuX />
            </button>

            <h2>Socials</h2>

            <a
              href="https://instagram.com/arpitsadotra"
              target="_blank"
              rel="noreferrer"
              className="popup-link"
            >
              Instagram
            </a>

            <a
              href="https://snapchat.com/add/ArpitSadotra"
              target="_blank"
              rel="noreferrer"
              className="popup-link"
            >
              Snapchat
            </a>

          </div>

        </div>
      )}

    </section>
  );
}

export default Hero;