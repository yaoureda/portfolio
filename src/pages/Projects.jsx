import ProjectCard from '../components/ProjectCard.jsx'
import projects from "../data/projects"

function Projects() {

    return(
        <>
            <h2>Mes projets personnels</h2>
            <div className="container">
                {projects.map(project =>
                <ProjectCard 
                    title={project.title}
                    image={project.image}
                    description={project.description}
                    gitLink={project.gitLink}
                    webLink={project.webLink}/>
                )}
            </div>
        </>
    );
}

export default Projects