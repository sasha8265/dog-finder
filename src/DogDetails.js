import React from "react"
import { Link, Navigate } from "react-router-dom";

const DogDetails = ({dog}) => {
    // const [src, setSrc] = useState(null);

    if (!dog) return <Navigate to="/dogs" replace />
    return (
        <div>
            <Link to="/dogs">Back</Link>
            <h1>{dog.name}</h1>
            <h4>Age: {dog.age} years old</h4>
            <img src={dog.src} alt={dog.name} />
            <ul>
                {dog.facts.map((fact, idx) => (
                    <li key={idx}>{fact}</li>
                ))}
            </ul>

        </div>
    )
};

export default DogDetails;