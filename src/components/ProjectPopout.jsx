import PropTypes from 'prop-types';

function ProjectPopout({ project, onClose }) {
    const { title, description, stack, url } = project;

    return (
        <div className="project-popout">
            <div className="popout-content">
                <span className="close-button hover" onClick={onClose}>
                    {/* &times; */}
                    <svg width="30px" height="30px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path fill="var(--text-color)" d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z"/></svg>
                </span>
                <h2>{title}</h2>

                <ul style={{ marginLeft: '50px' }}>
                    <li><strong>Tech stack:</strong> {stack}</li>
                    <li><strong>URL:</strong> <a href={url}>Project Link</a></li>
                </ul>

                <ul className="description" style={{ marginTop: '20px' }}>
                    {description.map((desc, index) => (
                        index === 0 ? (
                            <p key={index} style={{ marginBottom: '30px', textAlign: 'center' }}>{desc}</p>
                        ) : (
                            <li key={index} style={{ marginTop: '5px', marginLeft: '50px' }}>
                                <p>{desc}</p>
                            </li>
                        )
                    ))}
                </ul>
            </div>
        </div>
    );
}

ProjectPopout.propTypes = {
    project: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.arrayOf(PropTypes.string).isRequired,
        imageUrl: PropTypes.string.isRequired,
        stack: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
    }).isRequired,
    onClose: PropTypes.func.isRequired,
};

export default ProjectPopout;
