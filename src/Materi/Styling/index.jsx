import React, {useState} from "react";
import "../Styling/style.css"
import JumbotronTes from "./Jumbotron/Jumbotron";
import NavbarComp from "./NavbarComp/NavbarComp";
import Portfolio from "./Portfolio/portfolio";

export default function Styling(){
    const [darkMode, setDarkMode] = useState();
    return (
        <div>
        <div className={darkMode ? "mode-gelap" : "mode-terang"}>
        <div className="mode">
        <div className="navbarmargin"><NavbarComp /></div>
        <h4 className="judulmode">Tampilan Mode {darkMode ? "Gelap" : "Terang"} </h4>
          <span style={{ color: darkMode ? "grey" : "yellow" }}>☀︎</span>
          <div className="switch-checkbox">
            <label className="switch">
              <input type="checkbox" onChange={() => setDarkMode(!darkMode)} />
              <span className="slider round"> </span>
            </label>
          </div>
          <span style={{ color: darkMode ? "pink" : "grey" }}>☽</span>
        </div>
        <div>
        <JumbotronTes />
        </div>
        <div>
          <Portfolio />
        </div>
      </div>
      </div>
    );
  }