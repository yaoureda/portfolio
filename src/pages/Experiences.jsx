import ExperienceCard from '../components/ExperienceCard.jsx'
import experiences from "../data/experiences"

function Experiences() {

    return(
        <>
            <h2>Mes expériences professionnelles</h2>
            <div className="container">
                {experiences.map(experience =>
                <ExperienceCard 
                    title={experience.title}
                    image={experience.image}
                    durée={experience.durée}
                    description={experience.description}/>
                )}
            </div>
        </>
    );
}

export default Experiences