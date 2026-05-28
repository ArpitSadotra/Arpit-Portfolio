import { useState, useEffect } from "react";

// ✅ IMPORT TRAVEL IMAGES
import travel1 from "../assets/images/travel/travel1.jpg";
import travel2 from "../assets/images/travel/travel2.jpg";
import travel3 from "../assets/images/travel/travel3.jpg";
import travel4 from "../assets/images/travel/travel4.jpg";
import travel5 from "../assets/images/travel/travel5.jpg";
import travel6 from "../assets/images/travel/travel6.jpg";


import family1 from "../assets/images/family/family1.jpeg";
import family2 from "../assets/images/family/family2.jpeg";
import family3 from "../assets/images/family/family3.jpeg";
import family4 from "../assets/images/family/family4.jpeg";

import hobby1 from "../assets/images/hobby/hobby1.jpg";
import hobby2 from "../assets/images/hobby/hobby2.jpg";
import hobby3 from "../assets/images/hobby/hobby3.jpg";
import hobby4 from "../assets/images/hobby/hobby4.jpg"; 

import ach1 from "../assets/images/ach/ach1.jpg";
import ach2 from "../assets/images/ach/ach2.jpg";
import ach3 from "../assets/images/ach/ach3.jpg";



const tabs = [
  "Travel & Experiences",
  "Friends & Family",
  "Hobbies & Interests",
  "Achievements & Co-curricular",
];

function AboutMe() {
  const [activeTab, setActiveTab] = useState(0);
  const [index, setIndex] = useState(0);

  // ✅ ONLY TRAVEL IMAGES ADDED
  const images = [
    [travel1, travel2, travel3, travel4, travel5, travel6],
    [family1, family2, family3, family4],
    [hobby1, hobby2, hobby3, hobby4],
    [ach1, ach2, ach3]
  ];

  const content = [
    {
      title: "Exploring the world, one memory at a time.",
      desc: "Traveling allows me to explore new places and create unforgettable memories.",
    },
    {
      title: "People who matter the most.",
      desc: "Friends and family are the foundation of everything I do.",
    },
    {
      title: "Passions that keep me going.",
      desc: "From sports to coding, hobbies keep me balanced and creative.",
    },
    {
      title: "Milestones and achievements.",
      desc: "Every achievement reflects growth, learning, and dedication.",
    },
  ];

  // AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) =>
        prev === images[activeTab].length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [activeTab]);

  return (
    <section className="about">

      <h2>About Me</h2>

      <p className="about-sub">
        A glimpse into the different facets of my life.
      </p>

      {/* TABS */}
      <div className="about-tabs">
        {tabs.map((tab, i) => (
          <button
            key={i}
            className={activeTab === i ? "active" : ""}
            onClick={() => {
              setActiveTab(i);
              setIndex(0);
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* CONTENT */}
      <div className="about-content">

        {/* LEFT TEXT */}
        <div className="about-text">
          <h3>{content[activeTab].title}</h3>
          <p>{content[activeTab].desc}</p>
        </div>

        {/* RIGHT SLIDER */}
        <div className="about-slider">

          {/* LEFT BUTTON */}
          <button
            className="nav left"
            onClick={() =>
              setIndex((prev) =>
                prev === 0
                  ? images[activeTab].length - 1
                  : prev - 1
              )
            }
          >
            ‹
          </button>

          {/* IMAGE WINDOW */}
          <div className="slider-window">

            <div
              className="slider-track"
              style={{
                transform: `translateX(-${index * 100}%)`,
              }}
            >
              {images[activeTab].map((img, i) => (
                <div className="slide" key={i}>
                  <img src={img} alt="" />
                </div>
              ))}
            </div>

          </div>

          {/* RIGHT BUTTON */}
          <button
            className="nav right"
            onClick={() =>
              setIndex((prev) =>
                prev === images[activeTab].length - 1
                  ? 0
                  : prev + 1
              )
            }
          >
            ›
          </button>

        </div>

      </div>

    </section>
  );
}

export default AboutMe;