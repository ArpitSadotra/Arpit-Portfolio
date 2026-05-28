import { FaCode, FaDatabase, FaChartBar, FaTools } from "react-icons/fa";
import { MdWeb, MdOutlineHub } from "react-icons/md";

function Skills() {
  return (
    <section className="skills">

      {/* LEFT CONTENT */}
      <div className="skills-content">

        <h2>Skills</h2>
        <br/>
        <br/>
        <div className="skills-grid">

          {/* Programming */}
          <div className="skill-box">
            <h3><FaCode /> Programming Languages:</h3>
            <ul>
              <li>Python</li>
              <li>JavaScript</li>
              <li>Java</li>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
          </div>

          {/* Web Dev */}
          <div className="skill-box">
            <h3><MdWeb /> Web Development:</h3>
            <ul>
              <li>React.js</li>
              <li>Node.js</li>
              <li>Flask</li>
              <li>Vite</li>
              <li>REST APIs</li>
            </ul>
          </div>

          {/* Databases */}
          <div className="skill-box">
            <h3><FaDatabase /> Databases & Cloud:</h3>
            <ul>
              <li>Firebase (Firestore/Auth)</li>
              <li>SQL (MySQL)</li>
              <li>MongoDB</li>
              <li>PapaParse</li>
              <li>SheetJS</li>
            </ul>
          </div>

          {/* Core CS */}
          <div className="skill-box">
            <h3><MdOutlineHub /> Core CS Concepts:</h3>
            <ul>
              <li>Data Structures & Algorithms</li>
              <li>Object-Oriented Programming</li>
              <li>DBMS</li>
              <li>OS</li>
            </ul>
          </div>

          {/* Data Viz */}
          <div className="skill-box">
            <h3><FaChartBar /> Data Visualization:</h3>
            <ul>
              <li>Recharts</li>
              <li>Plotly.js</li>
              <li>Matplotlib</li>
            </ul>
          </div>

          {/* Tools */}
          <div className="skill-box">
            <h3><FaTools /> Tools & Methodologies:</h3>
            <ul>
              <li>Git</li>
              <li>GitHub</li>
              <li>SDLC</li>
              <li>VS Code</li>
              <li>Responsive UI/UX Design</li>
            </ul>
          </div>

        </div>
      </div>

      {/* RIGHT IMAGE
      <div className="skills-image">
        <img src="/src/assets/Profile4.png" alt="skills" />
      </div> */}

    </section>
  );
}

export default Skills;