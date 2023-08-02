// src/components/Character.js
import React, { useState, useEffect } from 'react';
import { TfiViewGrid } from "react-icons/tfi"
import { TfiViewListAlt } from "react-icons/tfi";
import { BiDotsVerticalRounded } from "react-icons/bi";
import planetimage from "../../../assets/planet.jpg";
import "./Films.scss";

const Planets = () => {
    const [planet, setPlanet] = useState([]);
    const [isGridView, setIsGridView] = useState(false);

    const toggleView = () => {
        setIsGridView(IsGridView => !IsGridView);
    };
    
   
      useEffect(() => {
            fetch('https://swapi.dev/api/planets/')
                  .then((response) => response.json())
                .then((data) => setPlanet(data.results))
                .catch((error) => console.error('Error fetching data:', error));
        }, []);

    

    return (
        <div className="main">
            <div className="togglebtn" onClick={toggleView}>
                {isGridView ? <TfiViewListAlt /> : <TfiViewGrid />}
            </div>
            {isGridView ? (
                <div className="grid-container">
                    {planet.map((planets) => (
                        <div key={planets.url} className="grid-item">
                            <div className="upperdiv">
                                <img src={planetimage} alt="oops" />
                            </div>
                            <div className="info">
                                <h3>{planets.name}</h3>
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
                                    <th>Climate</th>
                                    <th>Planets</th>
                                </tr>
                            </thead>
                            <tbody>
                                {planet.map((planets, index) => (
                                    <tr key={index}>
                                        <td>{planets.name}</td>
                                        <td>{planets.climate}</td>
                                        <td>{planets.gravity}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
               )
            }
        </div>
    );
};

export default Planets;
