import { BrowserRouter, Routes} from "react-router-dom";
import Home from "./components/Home/Home";
//import Films from "./components/Home/Sidecontent/Films";
import './App.css';

function App() {
  return (
   <div className="App">
    
      <BrowserRouter>
  
                <Home />
                <Routes>
                    {/* <Route path="/" element={<Home />} /> */}
                    {/* </BrowserRouter>Route path="/films" element={<Films />} /> */}
                    {/* <Route path="/people" element={<People />} />
                    <Route path="/planets" element={<Planets />} />
                    <Route path="/species" element={<Species />} />
                    <Route path="/starships" element={<Starships />} />
                    <Route path="/vehicles" element={<Vehicles />} /> */}
                </Routes>
      </BrowserRouter>
  
    </div>
  );
}

export default App;
