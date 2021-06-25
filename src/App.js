import "./App.css";
import Search from "./components/Search";
import Navigation from "./components/Navigation";
import LogoImg from "./images/googleLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faMicrophone } from "@fortawesome/free-solid-svg-icons";

function App() {
  const searchIcon = {
    paddingLeft: "8px",
    justifySelf: "center",
    alignSelf: "center",
    color: "#b7b6b6",
  };

  const microphoneIcon = {
    paddingRight: "8px",
    justifySelf: "center",
    alignSelf: "center",
  };

  return (
    <div className="App">
      <Navigation />
      <div className="logoDiv">
        <img src={LogoImg} className="logoImg" />
      </div>
      <div className="searchBox">
        <FontAwesomeIcon
          icon={faSearch}
          style={searchIcon}
          className="searchIcon"
        />
        <Search />
        <FontAwesomeIcon
          icon={faMicrophone}
          style={microphoneIcon}
          className="microphoneIcon"
        />
      </div>
      <div className="searchBtnDiv">
        <button className="searchBtn">Google Search</button>
        <button className="searchBtn">I'm Feeling Lucky</button>
      </div>
      <div className="languageOffers">
        Google offered in: <a href="#">עברית</a>
      </div>
      <div className="bottomNav1">Israel</div>
      <div className="bottomNav2">
        <ul className="bottomNavUl">
          <li className="bottomNavLi">About</li>
          <li className="bottomNavLi">Advertising</li>
          <li className="bottomNavLi">Business</li>
          <li className="bottomNavLi">How Search Works</li>
          <li className="bottomNavLi">Privacy</li>
          <li className="bottomNavLi">Terms</li>
          <li className="bottomNavLi">Settings</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
