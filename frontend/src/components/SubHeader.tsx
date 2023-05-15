import {
  Badge,
  Button,
  Form,
  FormControl,
  InputGroup,
  Nav,
  Navbar,
  NavDropdown,
  Row,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { Store } from "../Store";
import { useContext, useEffect } from "react";
import { FaBars, FaSearch, FaUserMinus } from "react-icons/fa";

type Props = {};

const SubHeader = (props: Props) => {


  return (
    <Navbar
      className="d-flex flex-column align-items-stretch p-2 pb-0 mb-0"
      bg="dark"
      variant="dark"
      expand="lg"
      style={{
        height: "4rem",
      }}
    >
      <div
        className="sub-header 
      "
      >
        <div className="d-flex gap-2 align-items-center">
          <Link to="#" className="nav-link header-link my-2">
            <FaBars  /> All
          </Link>
          {["Todays Deal", "Gifts", "On Sale"].map((x) => (
            <Link
              key={x}
              className="nav-link header-link p-1 px-3"
              to={`/search?tag=${x}`}
            >
              {x}
            </Link>
          ))}
        </div>
      </div>
    </Navbar>
  );
};

export default SubHeader;
