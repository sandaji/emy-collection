import { DarkModeContext } from "../context/darkModeContext";
import { useContext } from "react";
import {
  FaCross,
  FaEnvelopeOpen,
  FaFonticonsFi,
  FaLanguage,
  FaList,
  FaMarsDouble,
  FaMoon,
  FaSearch,
} from "react-icons/fa";
import "../style/navbar.scss";
import { Image, Navbar } from "react-bootstrap";
import avator from "/images/p1.jpg"

interface AdminNavbarProps {}

const AdminNavbar: React.FC<AdminNavbarProps> = () => {
  const { dispatch } = useContext(DarkModeContext);

  return (
    <Navbar className="navbar">
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
        <FaMarsDouble className="icon" />
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
            <Image
              src={avator}
              alt=""
              className="avatar"
            />
          </div>
        </div>
      </div>
    </Navbar>
  );
};

export default AdminNavbar;
