import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import DogList from "./DogList";
import DogDetails from "./DogDetails";


const DogRoutes = ({ dogs }) => {
    
    return (
        <Routes>
            <Route exact path="/dogs" element={<DogList dogs={dogs} />}></Route>
            {/* <Route exact path="/dogs"><DogList dogs={dogs} /></Route> */}
            {/* <Route exact path="/dogs/:name"><DogDetails dogs={dogs} /></Route> */}
            <Route path="/" element={<Navigate to="/dogs" replace />} />
        </Routes>
    )
}

export default DogRoutes;