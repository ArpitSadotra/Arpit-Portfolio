import ProjectSlider from "../components/ProjectSlider";
import profile from "../assets/Profile2.png";
import proj1 from "../assets/Proj1.png";  
import proj2 from "../assets/Proj2.png";  

function Projects() {
  const projects = [
    {
      title: " Insightify- Interactive Data Analysis Dashboard",
      desc: "An interactive data analysis dashboard built with React and Recharts, allowing users to visualize and explore complex datasets through dynamic charts and graphs. The dashboard provides an intuitive interface for data manipulation, filtering, and real-time updates, enabling users to gain insights and make informed decisions based on their data.",
      tech: ["React", "Tailwind", "Recharts"],
      image: proj1, // replace with actual project image later
      github: "https://github.com/ArpitSadotra/Insightify",
      live: "https://insightify-omega.vercel.app/",
    },
    {
      title: " Brainsync AI- Brainstorm Board",
      desc: "Developed a full-stack web application to enhance collaborative idea generation using React.js and Flask. Integrated Google Gemini API for AI-driven idea clustering and summarization. Leveraged Firebase for real-time data persistence and anonymous authentication, ensuring seamless drag-and-drop functionality",
      tech: ["MERN", "Stripe"],
      image: proj2,
      github: "https://github.com/ArpitSadotra/AI-Brainstorm-Board",
      live: "https://github.com/ArpitSadotra/AI-Brainstorm-Board",
    },
  ];

  return (
    <section className="projects">

      {/* LEFT IMAGE
      <div className="projects-image">
        <img src={profile} alt="profile" />
      </div> */}

      {/* RIGHT CONTENT */}
      <div className="projects-content">

        <h2>Projects</h2>
        <p>
          Here are some of the projects I’ve worked on.
          Each one represents a unique challenge and a solution built with creativity and code.
        </p>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>

        {/* SLIDER */}
        <ProjectSlider projects={projects} />

      </div>
    </section>
  );
}

export default Projects;