import { useState, useEffect } from "react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import ProjectCard from "./ProjectCard";

function ProjectSlider({ projects }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  // AUTO SLIDE
  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % projects.length);
    }, 1800);

    return () => clearInterval(interval);
  }, [paused, projects.length]);

  // ARROWS
  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <div className="project-slider">

      {/* LEFT ARROW */}
      <button className="arrow left" onClick={prevSlide}>
        <LuChevronLeft />
      </button>

      {/* CARD VIEW */}
      <div
        className="slider-window"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div
          className="slider-track"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {projects.map((project, i) => (
            <div className="slide" key={i}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT ARROW */}
      <button className="arrow right" onClick={nextSlide}>
        <LuChevronRight />
      </button>

    </div>
  );
}

export default ProjectSlider;