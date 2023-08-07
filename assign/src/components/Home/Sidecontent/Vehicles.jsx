// src/components/Character.js
import React, { useState, useEffect } from 'react';
import { TfiViewGrid } from "react-icons/tfi"
import { TfiViewListAlt } from "react-icons/tfi";

//import for three dot menu
import { BiDotsVerticalRounded } from "react-icons/bi";
import { GrView } from "react-icons/gr";
import { BsDownload } from "react-icons/bs";
import { GoPencil } from "react-icons/go";
import { BsShare } from "react-icons/bs";
import { PiFolderLight } from "react-icons/pi";
import { PiLockSimpleLight } from "react-icons/pi";
import { AiOutlineDelete } from "react-icons/ai";

import vehicleimage from "../../../assets/vehicle.jpg";
import "./Films.scss";

const Vehicles = () => {
    const [vehicle, setVehicle] = useState([]);
    const [isGridView, setIsGridView] = useState(false);
    const [clickstate, setClickState] = useState(false);
    const [click, setClick] = useState(-1);

    const toggleView = () => {
      setIsGridView(IsGridView => !IsGridView);
    };

    const handleclicktoggle = () => {
      setClickState(clickstate => !clickstate);
    };
  
    const handleClick = (index) => {
         setClick(index);
    }

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
            {vehicle.map((vehicles, index) => (
                <div key={vehicles.url} className="grid-item">
                    <div className="upperdiv">
                       <img src={vehicleimage} alt="oops" />
                    </div>
                    <div className="info">
                        <h3>{vehicles.name}</h3>
                        <div className="threedot" onClick={()=> {handleClick(index); handleclicktoggle();}}>
                           <BiDotsVerticalRounded />
                        </div>
                        {(click === index && clickstate) ? (
                          <div className="menuoption">
                            <div className="option"><GrView className="menuicon"/> View</div>
                            <div className="option"><BsDownload className="menuicon"/> Download</div>
                            <div className="option"><GoPencil className="menuicon"/> Rename</div>
                            <div className="option"><BsShare className="menuicon"/>  Share Link</div>
                            <div className="option"><PiFolderLight className="menuicon"/> Move</div>
                            <div className="option"><PiLockSimpleLight className="menuicon"/> Mark Private</div>
                            <div className="option"><AiOutlineDelete className="menuicon"/> Delete</div>
                          </div>
                        ): ("")}
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
