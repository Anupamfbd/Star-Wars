import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import "./Home.scss";

const Home = () => {
    return(
       <div className="home">
          <Header />
         
          <Sidebar />
       </div>
    );
}
export default Home;