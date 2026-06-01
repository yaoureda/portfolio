
function ExperienceCard({ title, image, durée, description }) {

    return (
        <div className="card">
            <img className="imgCard" alt="experience-image" src={image}></img>
            <h3>{title}</h3>
            <p>{durée}</p>
            <div>
            {description.map((line, index) => (
                <p key={index}>{line}</p>
            ))}
            </div>
        </div>
    );
}

export default ExperienceCard