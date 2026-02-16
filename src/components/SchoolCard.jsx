import { FiMapPin } from "react-icons/fi";

function SchoolCard({ title, image, annee, description, localisation }) {

    return (
        <div className="card">
            <img className="imgCard" alt="school-image" src={image}></img>
            <h3>{title}</h3>
            <p>{annee}</p>
            <p>{description}</p>
            <p className="localisation"><FiMapPin style={{ width: "12px", height: "12px" }}/> {localisation}</p>
        </div>
    );
}

export default SchoolCard