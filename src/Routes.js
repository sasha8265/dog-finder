import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import DogList from "./DogList";
import FilterDog from "./FilterDog";


const DogRoutes = ({ dogs }) => {
    
    return (
        <Routes>
            <Route exact path="/dogs" element={<DogList dogs={dogs} />}></Route>
            <Route path="/dogs/:name" element={<FilterDog dogs={dogs} />}></Route>
            <Route path="/" element={<Navigate to="/dogs" replace />} />
        </Routes>
    )
}

export default DogRoutes;