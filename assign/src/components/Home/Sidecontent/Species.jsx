// src/components/Character.js
import React, { useState, useEffect } from 'react';
import { TfiViewGrid } from "react-icons/tfi"
import { TfiViewListAlt } from "react-icons/tfi";
import { BiDotsVerticalRounded } from "react-icons/bi";
import speciesimage from "../../../assets/species.jpg";
import "./Films.scss";

const Species = () => {
    const [species, setSpecies] = useState([]);
    const [isGridView, setIsGridView] = useState(false);

    const toggleView = () => {
        setIsGridView(IsGridView => !IsGridView);
    };

    useEffect(() => {
        fetch('https://swapi.dev/api/species/')
            .then((response) => response.json())
            .then((data) => setSpecies(data.results))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    return (
      <div className="main">
            <div className="togglebtn" onClick={toggleView}>
                {isGridView ? <TfiViewListAlt /> : <TfiViewGrid />}
            </div>
        {isGridView ? (
        <div className="grid-container">
            {species.map((specie) => (
                <div key={specie.url} className="grid-item">
                    <div className="upperdiv">
                        <img src={speciesimage} alt="oops" />
                    </div>
                    <div className="info">
                        <h3>{specie.name}</h3>
                        <div className="threedot">
                           <BiDotsVerticalRounded />
                        </div>
                    </div>
                </div>
            ))}
        </div>
        ):
        (
        <div className="list">
            <table className="films-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Classification</th>
                        <th>Lifespan</th>
                    </tr>
                </thead>
                <tbody>
                    {species.map((specie, index) => (
                        <tr key={index}>
                            <td>{specie.name}</td>
                            <td>{specie.classification}</td>
                            <td>{specie.average_lifespan}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

        )}
      </div>
    );
};

export default Species;
