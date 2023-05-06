import { DarkModeContext } from "../context/darkModeContext";
import { useContext } from "react";
import {
  FaCross,
  FaEnvelopeOpen,
  FaFonticonsFi,
  FaLanguage,
  FaList,
  FaMoon,
  FaSearch,
} from "react-icons/fa";
import "../style/navbar.scss";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const { dispatch } = useContext(DarkModeContext);

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <FaSearch />
        </div>
        <div className="items">
          <div className="item">
            <FaLanguage className="icon" />
            English
          </div>
          <div className="item">
            <FaMoon
              className="icon"
              onClick={() => dispatch({ type: "TOGGLE" })}
            />
          </div>
          <div className="item">
            <FaCross className="icon" />
          </div>
          <div className="item">
            <FaFonticonsFi className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <FaEnvelopeOpen className="icon" />
            <div className="counter">2</div>
          </div>
          <div className="item">
            <FaList className="icon" />
          </div>
          <div className="item">
            <img
              src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
