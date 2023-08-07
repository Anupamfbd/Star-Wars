import { useState, useEffect } from "react";
import "./Sidebar.scss";
import { MdFolder } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
// import { RiMovie2Line } from "react-icons/ri";

import imageuse from "../../../assets/Kylo-Ren.jpg";
import homeimage from "../../../assets/star-war-home.jpg";
import peopleimage from "../../../assets/people.jpg";
import planetimage from "../../../assets/planet.jpg";
import speciesimage from "../../../assets/species.jpg";
import starshipimage from "../../../assets/starship.jpg";
import vehicleimage from "../../../assets/vehicle.jpg";

//Importing components 
import Films from "../../Home/Sidecontent/Films";
import People from "../../Home/Sidecontent/People";
import Planets from "../../Home/Sidecontent/Planets";
import Species from "../../Home/Sidecontent/Species";
import Starships from "../../Home/Sidecontent/Starships";
import Vehicles from "../../Home/Sidecontent/Vehicles";



// import {usePeopleEffect} from "../../Home/Sidecontent/People";

const Sidebar = () => {

   const [films, setFilms] = useState([]);
   const [people, setPeople] = useState([]);
   const [planet, setPlanet] = useState([]);
   const [species, setSpecies] = useState([]);
   const [starship, setStarship] = useState([]);
   const [vehicle, setVehicle] = useState([]);

   const [active, setActive] = useState(false);
   const [activetemp, setActiveTemp] = useState();
   const [userData, setUserData] = useState([]);
   const [isClick, setClick] = useState({
      button1: false,
      button2: false,
      button3: false,
      button4: false,
      button5: false,
      button6: false,

   });
   const handleButtonClick = (buttonName) => {
      const newState = Object.fromEntries(
         Object.entries(isClick).map(([name, value]) => [name, false])
      );
      newState[buttonName] = true;
      setClick(newState);
   };

   //used for arrow functionality
   const changeState = () => {

      setActive(active => !active);

   };
   //used for submenu of menu 
   const changeTempState = (value) => {
      setActiveTemp(value);
   };

   //used to display data of selected object (shows detailed information)
   const displaySub = (index, category) => {
      let data = category;
      const filterName = data[index];
      setUserData(filterName);
   }

   useEffect(() => {
      fetch('https://swapi.dev/api/films/')
         .then((response) => response.json())
         .then((data) => setFilms(data.results))
         .catch((error) => console.error('Error fetching film data:', error));
   }, []);
   useEffect(() => {
      fetch('https://swapi.dev/api/people/')
         .then((response) => response.json())
         .then((data) => setPeople(data.results))
         .catch((error) => console.error('Error fetching film data:', error));
   }, []);
   useEffect(() => {
      fetch('https://swapi.dev/api/planets/')
         .then((response) => response.json())
         .then((data) => setPlanet(data.results))
         .catch((error) => console.error('Error fetching film data:', error));
   }, []);
   useEffect(() => {
      fetch('https://swapi.dev/api/species/')
         .then((response) => response.json())
         .then((data) => setSpecies(data.results))
         .catch((error) => console.error('Error fetching film data:', error));
   }, []);
   useEffect(() => {
      fetch('https://swapi.dev/api/starships/')
         .then((response) => response.json())
         .then((data) => setStarship(data.results))
         .catch((error) => console.error('Error fetching film data:', error));
   }, []);
   useEffect(() => {
      fetch('https://swapi.dev/api/vehicles/')
         .then((response) => response.json())
         .then((data) => setVehicle(data.results))
         .catch((error) => console.error('Error fetching film data:', error));
   }, []);


   return (
      <div className="divmain">
         <div className="sidemain">

            {/* -----------This is left side of sidebar where categories are present--------------- */}

            {/* ------------------------Films Section-------------------- */}

            <div className="folderlogo">
               <MdFolder />
            </div>
            <div className="arrowright" onClick={() => { handleButtonClick('button1'); changeState(); }}>
               {(active && isClick.button1) ? <MdKeyboardArrowDown /> : <MdKeyboardArrowRight />}
            </div>
            <div className="maintextbox">
               <input type="text" className="textbox"
                  style={{
                     backgroundColor: isClick.button1 ? '#ff1694' : 'transparent',
                     borderRadius: isClick.button1 ? '7px' : ''
                  }} placeholder="Films" readOnly
               /></div>

            {/* -------------used to show submenu------------ */}
            <div className="divcontent" style={{ display: (active && isClick.button1) ? "block" : "" }}>
               {films.map((film, index) => (
                  <div className="submenu">
                       {/* <RiMovie2Line className="submenuicon"/>   */}
                     <input type="text" placeholder={film.title} className="textbox" key={index}
                        onClick={() => { displaySub(index, films); changeTempState(true); }}
                        style={{
                           cursor: 'pointer'
                        }}
                        readOnly />
                  </div>
               ))}
            </div>

            {/* ---------used to show selected Entity--------- */}
            <div className="template" style={{ display: (activetemp && isClick.button1) ? "block" : "none" }}>
               <h1>Movie Details</h1>
               <div className="crossbtn" onClick={() => changeTempState(false)}>
                  <RxCross2 />
               </div>
               <hr style={{ height: '2', width: '376', color: 'whitesmoke' }}></hr>
               <h3>Image</h3>
               <div className="imagetemp">
                  <img src={peopleimage} alt="Oops" />
               </div>

               {(activetemp && isClick.button1) ? (
                  <div className="divinside">
                     <h3>Title</h3>
                     <input type="text" placeholder={userData.title} readOnly />
                     <h3>Director</h3>
                     <input type="text" placeholder={userData.director} readOnly />
                     <h3>Release Date</h3>
                     <input type="text" placeholder={userData.release_date} readOnly />
                  </div>) : ("")
               }
               <hr style={{ height: '2', width: '376', color: 'whitesmoke', marginTop: '40px' }}></hr>
               <button className="closebtn" onClick={() => changeTempState(false)}>Close</button>
            </div>


            {/* ------------------------people section------------------- */}

            <div className="folderlogo">
               <MdFolder />
            </div>
            <div className="arrowright" onClick={() => { handleButtonClick('button2'); changeState(); }}>
               {(active && isClick.button2) ? <MdKeyboardArrowDown /> : <MdKeyboardArrowRight />}
            </div>
            <input type="text" className="textbox"
               style={{
                  backgroundColor: isClick.button2 ? '#ff1694' : 'transparent',
                  borderRadius: isClick.button2 ? '7px' : ''
               }} placeholder="People" readOnly
            />

            <div className="divcontent" style={{ display: (active && isClick.button2) ? "block" : "" }}>
               {people.map((person, index) => (
                  <div className="submenu">
                     <input type="text" placeholder={person.name} className="textbox" key={index}
                        onClick={() => { displaySub(index, people); changeTempState(true); }}
                        style={{
                           cursor: 'pointer'
                        }}
                        readOnly />
                  </div>
               ))}
            </div>
            <div className="template" style={{ display: (activetemp && isClick.button2) ? "block" : "none" }}>
               <h1>Person Details</h1>
               <div className="crossbtn" onClick={() => changeTempState(false)}>
                  <RxCross2 />
               </div>
               <hr style={{ height: '2', width: '376', color: 'whitesmoke' }}></hr>
               <h3>Image</h3>
               <div className="imagetemp">
                  <img src={imageuse} alt="Oops" />
               </div>

               {(activetemp && isClick.button2) ? (
                  <div className="divinside">
                     <h3>Name</h3>
                     <input type="text" placeholder={userData.name} readOnly />
                     <h3>Birth Year</h3>
                     <input type="text" placeholder={userData.birth_year} readOnly />
                     <h3>Gender</h3>
                     <input type="text" placeholder={userData.gender} readOnly />
                  </div>) : ("")
               }
               <hr style={{ height: '2', width: '376', color: 'whitesmoke', marginTop: '40px' }}></hr>
               <button className="closebtn" onClick={() => changeTempState(false)}>Close</button>
            </div>
            {/* <div className="template" style={{ display: (activetemp && isClick.button2) ? "block" : "none" }} >
               <button onClick={() => changeTempState(false)}>close it</button>
               {(activetemp && isClick.button2) ? (
                  <div className="divinside">
                     <h1>{userData.name}</h1>
                     <h2>{userData.birth_year}</h2>
                     <h2>{userData.gender}</h2>
                  </div>):("")
               }
            </div> */}

            {/* ---------------------planets section----------------- */}

            <div className="folderlogo">
               <MdFolder />
            </div>
            <div className="arrowright" onClick={() => { handleButtonClick('button3'); changeState(); }}>
               {(active && isClick.button3) ? <MdKeyboardArrowDown /> : <MdKeyboardArrowRight />}
            </div>
            <input type="text" className="textbox" style={{
               backgroundColor: isClick.button3 ? '#ff1694' : 'transparent',
               borderRadius: isClick.button3 ? '7px' : ''
            }} placeholder="Planets" readOnly
            />

            <div className="divcontent" style={{ display: (active && isClick.button3) ? "block" : "" }}>
               {planet.map((planets, index) => (
                  <div className="submenu">
                     <input type="textbox" placeholder={planets.name} className="textbox" key={index}
                        onClick={() => { displaySub(index, planet); changeTempState(true); }}
                        style={{
                           cursor: 'pointer'
                        }}
                        readOnly />
                  </div>
               ))}
            </div>
            <div className="template" style={{ display: (activetemp && isClick.button3) ? "block" : "none" }}>
               <h1>Planets Details</h1>
               <div className="crossbtn" onClick={() => changeTempState(false)}>
                  <RxCross2 />
               </div>
               <hr style={{ height: '2', width: '376', color: 'whitesmoke' }}></hr>
               <h3>Image</h3>
               <div className="imagetemp">
                  <img src={planetimage} alt="Oops" />
               </div>

               {(activetemp && isClick.button3) ? (
                  <div className="divinside">
                     <h3>Name</h3>
                     <input type="text" placeholder={userData.name} readOnly />
                     <h3>Climate</h3>
                     <input type="text" placeholder={userData.climate} readOnly />
                     <h3>Gravity</h3>
                     <input type="text" placeholder={userData.gravity} readOnly />
                  </div>) : ("")
               }
               <hr style={{ height: '2', width: '376', color: 'whitesmoke', marginTop: '40px' }}></hr>
               <button className="closebtn" onClick={() => changeTempState(false)}>Close</button>
            </div>
            {/* ----------------------species section--------------------- */}

            <div className="folderlogo">
               <MdFolder />
            </div>
            <div className="arrowright" onClick={() => { handleButtonClick('button4'); changeState(); }}>
               {(active && isClick.button4) ? <MdKeyboardArrowDown /> : <MdKeyboardArrowRight />}
            </div>
            <input type="text" className="textbox" style={{
               backgroundColor: isClick.button4 ? '#ff1694' : 'transparent',
               borderRadius: isClick.button4 ? '7px' : ''
            }} placeholder="Species" readOnly
            />

            <div className="divcontent" style={{ display: (active && isClick.button4) ? "block" : "" }}>
               {species.map((specie, index) => (
                  <div className="submenu">
                     <input type="textbox" placeholder={specie.name} className="textbox" key={index}
                        onClick={() => { displaySub(index, species); changeTempState(true); }}
                        style={{
                           cursor: 'pointer'
                        }}
                        readOnly />
                  </div>
               ))}
            </div>
            <div className="template" style={{ display: (activetemp && isClick.button4) ? "block" : "none" }}>
               <h1>Species Details</h1>
               {/* <button onClick={() => changeTempState(false)}>close it</button> */}
               <div className="crossbtn" onClick={() => changeTempState(false)}>
                  <RxCross2 />
               </div>
               <hr style={{ height: '2', width: '376', color: 'whitesmoke' }}></hr>
               <h3>Image</h3>
               <div className="imagetemp">
                  <img src={speciesimage} alt="Oops" />
               </div>

               {(activetemp && isClick.button4) ? (
                  <div className="divinside">
                     <h3>Name</h3>
                     <input type="text" placeholder={userData.name} readOnly />
                     <h3>Classification</h3>
                     <input type="text" placeholder={userData.classification} readOnly />
                     <h3>Lifespan</h3>
                     <input type="text" placeholder={userData.average_lifespan} readOnly />
                  </div>) : ("")
               }
               <hr style={{ height: '2', width: '376', color: 'whitesmoke', marginTop: '40px' }}></hr>
               <button className="closebtn" onClick={() => changeTempState(false)}>Close</button>
            </div>

            {/* ----------------------starships section---------------------- */}

            <div className="folderlogo">
               <MdFolder />
            </div>
            <div className="arrowright" onClick={() => { handleButtonClick('button5'); changeState(); }}>
               {(active && isClick.button5) ? <MdKeyboardArrowDown /> : <MdKeyboardArrowRight />}
            </div>
            <input type="text" className="textbox" style={{
               backgroundColor: isClick.button5 ? '#ff1694' : 'transparent',
               borderRadius: isClick.button5 ? '7px' : ''
            }} placeholder="Starship" readOnly
            />
            <div className="divcontent" style={{ display: (active && isClick.button5) ? "block" : "" }}>
               {starship.map((starships, index) => (
                  <div className="submenu">
                     <input type="textbox" placeholder={starships.name} className="textbox" key={index}
                        onClick={() => { displaySub(index, starship); changeTempState(true); }}
                        style={{
                           cursor: 'pointer'
                        }}
                        readOnly />
                  </div>
               ))}
            </div>
            <div className="template" style={{ display: (activetemp && isClick.button5) ? "block" : "none" }}>
               <h1>Starships Details</h1>
               {/* <button onClick={() => changeTempState(false)}>close it</button> */}
               <div className="crossbtn" onClick={() => changeTempState(false)}>
                  <RxCross2 />
               </div>
               <hr style={{ height: '2', width: '376', color: 'whitesmoke' }}></hr>
               <h3>Image</h3>
               <div className="imagetemp">
                  <img src={starshipimage} alt="Oops" />
               </div>

               {(activetemp && isClick.button5) ? (
                  <div className="divinside">
                     <h3>Name</h3>
                     <input type="text" placeholder={userData.name} readOnly />
                     <h3>Model</h3>
                     <input type="text" placeholder={userData.model} readOnly />
                     <h3>Hyperdrive Rating</h3>
                     <input type="text" placeholder={userData.hyperdrive_rating} readOnly />
                  </div>) : ("")
               }
               <hr style={{ height: '2', width: '376', color: 'whitesmoke', marginTop: '40px' }}></hr>
               <button className="closebtn" onClick={() => changeTempState(false)}>Close</button>
            </div>


            {/* ----------------------vehicles section----------------------- */}

            <div className="folderlogo">
               <MdFolder />
            </div>
            <div className="arrowright" onClick={() => { handleButtonClick('button6'); changeState(); }}>
               {(active && isClick.button6) ? <MdKeyboardArrowDown /> : <MdKeyboardArrowRight />}
            </div>
            <input type="text" className="textbox" style={{
               backgroundColor: isClick.button6 ? '#ff1694' : 'transparent',
               borderRadius: isClick.button6 ? '7px' : ''
            }} placeholder="Vehicles" readOnly
            />
            <div className="divcontent" style={{ display: (active && isClick.button6) ? "block" : "" }}>
               {vehicle.map((vehicles, index) => (
                  <div className="submenu">
                     <input type="text" placeholder={vehicles.name} className="textbox" key={index}
                        onClick={() => { displaySub(index, vehicle); changeTempState(true); }}
                        style={{
                           cursor: 'pointer'
                        }}
                        readOnly />
                  </div>
               ))}
            </div>
            <div className="template" style={{ display: (activetemp && isClick.button6) ? "block" : "none" }}>
               <h1>Vehicles Details</h1>
               {/* <button onClick={() => changeTempState(false)}>close it</button> */}
               <div className="crossbtn" onClick={() => changeTempState(false)}>
                  <RxCross2 />
               </div>
               <hr style={{ height: '2', width: '376', color: 'whitesmoke' }}></hr>
               <h3>Image</h3>
               <div className="imagetemp">
                  <img src={vehicleimage} alt="Oops" />
               </div>

               {(activetemp && isClick.button6) ? (
                  <div className="divinside">
                     <h3>Name</h3>
                     <input type="text" placeholder={userData.name} readOnly />
                     <h3>Model</h3>
                     <input type="text" placeholder={userData.model} readOnly />
                     <h3>Max Atmosphering Speed</h3>
                     <input type="text" placeholder={userData.max_atmosphering_speed} readOnly />
                  </div>) : ("")
               }
               <hr style={{ height: '2', width: '376', color: 'whitesmoke', marginTop: '40px' }}></hr>
               <button className="closebtn" onClick={() => changeTempState(false)}>Close</button>
            </div>


         </div>

         {/* -------------------------right side of sidebar-------------------------- */}

         <div className="rightside">
            <div className="topside">
               {isClick.button1 ? <h1>Films</h1> : ""}
               {isClick.button2 ? <h1>People</h1> : ""}
               {isClick.button3 ? <h1>Planets</h1> : ""}
               {isClick.button4 ? <h1>Species</h1> : ""}
               {isClick.button5 ? <h1>Starships</h1> : ""}
               {isClick.button6 ? <h1>Vehicles</h1> : ""}

            </div>
            {isClick.button1 ? <Films /> : ""}
            {isClick.button2 ? <People /> : ""}
            {isClick.button3 ? <Planets /> : ""}
            {isClick.button4 ? <Species /> : ""}
            {isClick.button5 ? <Starships /> : ""}
            {isClick.button6 ? <Vehicles /> : ""}

            {(isClick.button1 || isClick.button2 ||
               isClick.button3 || isClick.button4 ||
               isClick.button5 || isClick.button6
            ) ? ("") :
               (<div className="homediv">
                  <img src={homeimage} alt="oops" />
                  <h2>Welcome to Star Wars</h2>
                  <h2>Dashboard</h2>
                  <p>Star Wars is an American epic space opera multimedia franchise created by George Lucas,
                     which began with the eponymous 1977 film and quickly became a worldwide pop culture
                     phenomenon.
                  </p>
               </div>
               )}

         </div>
      </div>
   );
}
export default Sidebar;