import ProjectCard from './ProjectCard';

function ProjectList({ projects, onProjectClick }) {
  return (
    <div className="project-list">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} onClick={() => onProjectClick(project)} />
      ))}
    </div>
  );
}

ProjectList.propTypes = {
  projects: Array,
  onProjectClick: Function,
};

export default ProjectList;