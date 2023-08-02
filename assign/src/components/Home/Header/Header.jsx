
import { TbSearch } from "react-icons/tb";
import "./Header.scss";
import headerimg from "../../../assets/strwr.png";

const Header = () => {
   return(
      <div className="main">
        <img className="headerimg" src={headerimg} alt="Oops"/>
        <input type="text" placeholder="Search" className="input"/>
        <TbSearch className="searchlogo"/>
      </div>
   );
};
export default Header;