import PropTypes from 'prop-types';

function ProjectCard({ project, onClick }) {
  return (
    <div className="project-card hover" onClick={onClick}>
      <h2 style={{ textAlign: 'center', padding: '10px' }}>{project.title}</h2>
      <img src={project.imageUrl} alt={project.title} width={300} />
    </div>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ProjectCard;
