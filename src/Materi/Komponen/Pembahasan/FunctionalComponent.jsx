import React, { useState } from "react";
import "../Pembahasan/style.css"
import ClassComponent from "./ClassComponent";
export default function FunctionalComponent() {
    const [darkMode, setDarkMode] = useState();
    return (
      <div className={darkMode ? "mode-gelap" : "mode-terang"}>
        <div className="container">
          <span style={{ color: darkMode ? "grey" : "black" }}>terang</span>
          <div className="switch-checkbox">
            <label className="switch">
              <input type="checkbox" onChange={() => setDarkMode(!darkMode)} />
              <span className="slider round"> </span>
            </label>
          </div>
          <span style={{ color: darkMode ? "pink" : "grey" }}>gelap</span>
        </div>
        <div>
          <h1>Tampilan Mode {darkMode ? "Gelap" : "Terang"} </h1>
        </div>
        <div><ClassComponent /></div>
      </div>
    );
  }