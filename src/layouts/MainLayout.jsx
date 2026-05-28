import { useRef } from "react";
import Hero from "../sections/Hero";
import Projects from "../sections/Projects";
import Experience from "../sections/Experience";
import Skills from "../sections/Skills";
import AboutMe from "../sections/AboutMe";

function MainLayout() {
  const projectsRef = useRef(null);
  const experienceRef = useRef(null);
  const skillsRef = useRef(null);
  const aboutRef = useRef(null);

  return (
    <>
      <Hero refs={{ projectsRef, experienceRef, skillsRef, aboutRef }} />
      {/* <br /><br /><br /><br ></br> */}
      <div ref={experienceRef}><Experience /></div>
      {/* <br /><br /><br /><br ></br> */}
      <div ref={skillsRef}><Skills /></div>
      {/* <br /><br /><br /><br /><br /> */}
      <div ref={projectsRef}><Projects /></div>
      {/* <br /><br /><br /><br /><br /> */}
      <div ref={aboutRef}><AboutMe /></div>
    </>
  );
}

export default MainLayout;