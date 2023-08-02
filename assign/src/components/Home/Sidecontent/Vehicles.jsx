// src/components/Character.js
import React, { useState, useEffect } from 'react';
import { TfiViewGrid } from "react-icons/tfi"
import { TfiViewListAlt } from "react-icons/tfi";
import { BiDotsVerticalRounded } from "react-icons/bi";
import vehicleimage from "../../../assets/vehicle.jpg";
import "./Films.scss";

const Vehicles = () => {
    const [vehicle, setVehicle] = useState([]);
    const [isGridView, setIsGridView] = useState(false);

    const toggleView = () => {
      setIsGridView(IsGridView => !IsGridView);
    };

    useEffect(() => {
        fetch('https://swapi.dev/api/vehicles/')
            .then((response) => response.json())
            .then((data) => setVehicle(data.results))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);
    
    return (
        <div className="main">
        <div className="togglebtn" onClick={toggleView}>
           {isGridView ? <TfiViewListAlt /> : <TfiViewGrid /> }
        </div>
        {isGridView ? (
        <div className="grid-container">
            {vehicle.map((vehicles) => (
                <div key={vehicles.url} className="grid-item">
                    <div className="upperdiv">
                       <img src={vehicleimage} alt="oops" />
                    </div>
                    <div className="info">
                        <h3>{vehicles.name}</h3>
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
                  <th>Model</th>
                  <th>Speed</th>
                </tr>
              </thead>
              <tbody>
                {vehicle.map((vehicles, index) => (
                  <tr key={index}>
                    <td>{vehicles.name}</td>
                    <td>{vehicles.model}</td>
                    <td>{vehicles.max_atmosphering_speed}</td>
                  </tr>
                ))}
              </tbody>
            </table>
        </div>

         )}
        </div>
    );
};

export default Vehicles;
