import SchoolCard from '../components/SchoolCard.jsx'
import schools from "../data/schools"

function Formation() {

    return(
        <>
            <h2>Mes formations</h2>
            <div className="container">
                {schools.map(school =>
                <SchoolCard 
                    title={school.title}
                    image={school.image}
                    annee={school.annee}
                    description={school.description}
                    localisation={school.localisation}/>
                )}
            </div>
        </>
    );
}

export default Formation