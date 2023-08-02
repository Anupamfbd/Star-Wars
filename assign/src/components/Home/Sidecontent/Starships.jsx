// src/components/Character.js
import React, { useState, useEffect } from 'react';
import { TfiViewGrid } from "react-icons/tfi"
import { TfiViewListAlt } from "react-icons/tfi";
import { BiDotsVerticalRounded } from "react-icons/bi";
import starshipimage from "../../../assets/starship.jpg";
import "./Films.scss";

const Starships = () => {
    const [starship, setStarship] = useState([]);
    const [isGridView, setIsGridView] = useState(false);

    const toggleView = () => {
        setIsGridView(IsGridView => !IsGridView);
    };

    useEffect(() => {
        fetch('https://swapi.dev/api/starships/')
            .then((response) => response.json())
            .then((data) => setStarship(data.results))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className="main">
            <div className="togglebtn" onClick={toggleView}>
                {isGridView ? <TfiViewListAlt /> : <TfiViewGrid />}
            </div>
        {isGridView ? (
        <div className="grid-container">
            {starship.map((starships) => (
                <div key={starships.url} className="grid-item">
                    <div className="upperdiv">
                        <img src={starshipimage} alt="oops" />
                    </div>
                    <div className="info">
                        <h3>{starships.name}</h3>
                        <div className="threedot">
                           <BiDotsVerticalRounded />
                        </div>
                    </div>
                </div>
            ))}
        </div>
        ) :
        (
            <div className="list">
            <table className="films-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Model</th>
                        <th>Hyperdrive</th>
                    </tr>
                </thead>
                <tbody>
                    {starship.map((starships, index) => (
                        <tr key={index}>
                            <td>{starships.name}</td>
                            <td>{starships.model}</td>
                            <td>{starships.hyperdrive_rating}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

        )}
        </div>
    );
};

export default Starships;
