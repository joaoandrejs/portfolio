import { useState } from 'react';
import ProjectList from '../components/ProjectList';
import ProjectPopout from '../components/ProjectPopout';
import '../styles/Projects.css';
import { useTranslation } from 'react-i18next';

function Projects() {
    const { t } = useTranslation();
    const projects = t('projects', { returnObjects: true }) || [];

    const [selectedProject, setSelectedProject] = useState(null);
    
    const handleProjectClick = (project) => {
        setSelectedProject(project);
    };
    
    const closePopout = () => {
        setSelectedProject(null);
    };
    
    return (
        <>
            <div style={{ marginTop: '50px' }}>
                <ProjectList projects={projects} onProjectClick={handleProjectClick} />
                {selectedProject && <ProjectPopout project={selectedProject} onClose={closePopout} />}
            </div>
        </>
    )
}

export default Projects;
