import { LuGithub, LuExternalLink } from "react-icons/lu";

function ProjectCard({ project }) {
  return (
    <div className="project-card">

      {/* TOP LINKS */}
      <div className="project-links">
        <a href={project.github} target="_blank">
          <LuGithub /> GitHub Repo
        </a>
        <a href={project.live} target="_blank">
          <LuExternalLink /> Live Demo
        </a>
      </div>

      {/* CONTENT */}
      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.desc}</p>

        <div className="tech">
          {project.tech.map((t, i) => (
            <span key={i}>{t}</span>
          ))}
        </div>
      </div>

      {/* IMAGE */}
      <div className="project-image">
        <img src={project.image} alt="project" />
      </div>

    </div>
  );
}

export default ProjectCard;