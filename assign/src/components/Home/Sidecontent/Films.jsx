import React, { useState, useEffect } from 'react';
import { TfiViewGrid } from "react-icons/tfi";
import { TfiViewListAlt } from "react-icons/tfi"

//import for three dot menu
import { BiDotsVerticalRounded } from "react-icons/bi";
import homeimage from "../../../assets/star-war-home.jpg";
import { GrView } from "react-icons/gr";
import { BsDownload } from "react-icons/bs";
import { GoPencil } from "react-icons/go";
import { BsShare } from "react-icons/bs";
import { PiFolderLight } from "react-icons/pi";
import { PiLockSimpleLight } from "react-icons/pi";
import { AiOutlineDelete } from "react-icons/ai";

import "./Films.scss";

const Films = () => {
  const [films, setFilms] = useState([]);
  const [isGridView, setIsGridView] = useState(true);
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
    fetch('https://swapi.dev/api/films/')
      .then((response) => response.json())
      .then((data) => setFilms(data.results))
      .catch((error) => console.error('Error fetching film data:', error));
  }, []);

  return (
    <div className="main">
      <div className="togglebtn" onClick={toggleView}>
          {isGridView ?  <TfiViewListAlt /> :  <TfiViewGrid />}
      </div>
      
      {isGridView ? (
        <div className="grid-container">
          
          {films.map((film, index) => (
            <div key={film.url} className="grid-item">
              <div className="upperdiv">
                <img src={homeimage} alt="oops"/>
              </div>
              <div className="info">
                <h3>{film.title}</h3>
                {/* <p>Release Date: {film.release_date}</p> */}
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
        </div>) :
        (
          <div className="list">
            <table className="films-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Director</th>
                  <th>Release Date</th>
                </tr>
              </thead>
              <tbody>
                {films.map((film, index) => (
                  <tr key={index}>
                    <td>{film.title}</td>
                    <td>{film.director}</td>
                    <td>{film.release_date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        )}
        {/* {(click === index) ? (
            <div className="menuoption">
              <div className="option"><GrView className="menuicon"/> View</div>
              <div className="option"><BsDownload className="menuicon"/> Download</div>
              <div className="option"><GoPencil className="menuicon"/> Rename</div>
              <div className="option"><BsShare className="menuicon"/>  Share Link</div>
              <div className="option"><PiFolderLight className="menuicon"/> Move</div>
              <div className="option"><PiLockSimpleLight className="menuicon"/> Mark Private</div>
              <div className="option"><AiOutlineDelete className="menuicon"/> Delete</div>
            </div>
        ): ("")} */}
    </div>
  );
};

export default Films;






