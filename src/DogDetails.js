import React, {useState} from "react"
import { Link, useParams, Route } from "react-router-dom";

const DogDetails = ({dogs}) => {
    const [src, setSrc] = useState(null);
    const { name } = useParams;

    //filter dog results based on name
    const filterDogs = (dogs) => {
        if (name) {
            const currDog = dogs.find(dog => dog.name.toLowerCase() === name.toLowerCase());
            return currDog;
        }
        return null;
    }

    let img = src ? <img src={src} alt="" /> : null;
    let dog = filterDogs({ dogs })
    if (!dog) return <Route exact path="/dogs"/>
    return (
        <div>
            <h1>Dog name</h1>

        </div>
    )
};

export default DogDetails;