import profile from "../assets/Profile3.png"; // same image style

function Experience() {
  return (
    <section className="experience">

      {/* LEFT IMAGE
      <div className="experience-image">
        <img src={profile} alt="profile" />
      </div> */}

      {/* RIGHT CONTENT */}
      <div className="experience-content">

        <h2>Experience</h2>
        <br/>
        <p>
          Here is a quick overview of my work experience over the years.
        </p>
        <br/>
        <br/>
        <br/>
        

        {/* TIMELINE */}
        <div className="timeline">

          <div className="timeline-item active">
            <h3>Frontend Developer Intern</h3>
            <span>Hell Productions | Dec 2025 - Present</span>
            <p>Worked on building and maintaining frontend features using modern frameworks, managing state and hooks to create responsive user interfaces. Developed and integrated API-based functionalities based on client requirements, ensuring seamless communication between frontend and backend systems.</p>
          </div>

          <div className="timeline-item">
            <br/>
            <h3>Web Development Trainee</h3>
            <span>HEX Softwares | April 2026 - June 2026</span>
            <p>Gained hands-on experience in web development by working on real-world projects, learning key concepts such as hosting, routing, and database integration and management. Built multiple end-to-end applications, strengthening skills in development, deployment, and problem-solving.</p>
          </div>

          <div className="timeline-item">
            <br/>
            <h3>Freelance Web Developer</h3>
            <span>St. Paul Convent Trust — Freelance  | Feb 2025</span>
            <p>Developed a dynamic website for a trust-run school, designing intuitive UI/UX and structuring multiple interconnected web pages. Implemented user–admin interaction features through the web interface to enable efficient content management and communication.</p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Experience;