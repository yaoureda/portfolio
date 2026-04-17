
function ProjectCard({ title, image, description, gitLink, webLink }) {

    return (
        <div className="card">
            <img className="imgCard" alt="project-image" src={image}></img>
            <h3>{title}</h3>
            <p>{description}</p>
            <a href={gitLink} target="_blank">Lien GitHub</a> <br/>
            {webLink && (
                <a href={webLink} target="_blank" rel="noopener noreferrer">
                    Voir le site
                </a>
            )}
        </div>
    );
}

export default ProjectCard