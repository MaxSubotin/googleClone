import React from "react";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTh, faAngry } from "@fortawesome/free-solid-svg-icons";

function Navigation() {
  const navIconUser = {
    width: "30px",
    height: "30px",
    padding: "0 10px 0 5px",
  };

  const navIconGrid = {
    width: "18px",
    height: "18px",
    padding: "0 5px",
  };

  return (
    <nav className="navDiv">
      <ul className="navUl">
        <li className="navLi">Gmail</li>
        <li className="navLi">Images</li>
        <li className="navLi">
          <FontAwesomeIcon icon={faTh} style={navIconGrid} />
        </li>
        <li className="navLi">
          <FontAwesomeIcon icon={faAngry} style={navIconUser} />
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
