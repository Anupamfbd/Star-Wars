// src/components/Character.js
import React, { useState, useEffect } from 'react';
import { TfiViewGrid } from "react-icons/tfi"
import { TfiViewListAlt } from "react-icons/tfi";
import { BiDotsVerticalRounded } from "react-icons/bi";
import imageuse from "../../../assets/Kylo-Ren.jpg";
import "./Films.scss";

const Character = () => {
  const [people, setPeople] = useState([]);
  const [isGridView, setIsGridView] = useState(false);

  const toggleView = () => {
    setIsGridView(IsGridView => !IsGridView);
  };


  useEffect(() => {
    fetch('https://swapi.dev/api/people/')
      .then((response) => response.json())
      .then((data) => setPeople(data.results))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);




  return (
    <div className="main">
      <div className="togglebtn" onClick={toggleView}>
        {isGridView ? <TfiViewListAlt /> : <TfiViewGrid />}
      </div>
      {isGridView ? (
        <div className="grid-container">
          {people.map((person) => (
            <div key={person.url} className="grid-item">
              <div className="upperdiv">
                <img src={imageuse} alt="oops" />
              </div>
              <div className="info">
                <h3>{person.name}</h3>
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
                  <th>Birth Year</th>
                  <th>Species</th>
                </tr>
              </thead>
              <tbody>
                {people.map((person, index) => (
                  <tr key={index}>
                    <td>{person.name}</td>
                    <td>{person.birth_year}</td>
                    <td>{person.gender}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        )}
    </div>
  );
};

export default Character;
