import { Dropdown, DropdownButton } from "react-bootstrap";
import "./App.css";

import React, { useState } from "react";

const App = () => {
  const paths = [
    "Select path",
    "A->B",
    "A->C",
    "A->D",
    "A->E",
    "B->C",
    "B->D",
    "B->E",
    "C->D",
    "C->E",
    "D->E",
    "A->E->D",
    "A->B->C",
  ];
  const [selectedPath, setSelectedPath] = useState("Select path");

  const handleSelect = (eventKey) => {
    setSelectedPath(paths[eventKey]);
  };
  return (
    <div className="main-container">
      <div className="dropdown-container">
        <h5>Select path</h5>
        <DropdownButton
          id="dropdown-basic-button"
          title={selectedPath}
          onSelect={handleSelect}
          variant="secondary"
        >
          {paths.map((path, index) => (
            <Dropdown.Item key={index} eventKey={index}>
              {path}
            </Dropdown.Item>
          ))}
        </DropdownButton>
      </div>
      <div className="hexagon-container">
        <div className="alphabet a">A</div>
        <div className="alphabet b">B</div>
        <div className="alphabet c">C</div>
        <div className="alphabet d">D</div>
        <div className="alphabet e">E</div>
        <svg className="line-container">
          <line
            id="A->B"
            className={`${
              selectedPath === "A->B" || selectedPath === "A->B->C"
                ? "active-line"
                : "line"
            }`}
            x1="30"
            x2="250"
            y1="230"
            y2="20"
          />
          <line
            id="A->C"
            className={`${selectedPath === "A->C" ? "active-line" : "line"}`}
            x1="130"
            x2="250"
            y1="460"
            y2="20"
          />
          <line
            id="A->D"
            className={`${selectedPath === "A->D" ? "active-line" : "line"}`}
            x1="360"
            x2="250"
            y1="460"
            y2="20"
          />
          <line
            id="A->E"
            className={`${
              selectedPath === "A->E" || selectedPath === "A->E->D"
                ? "active-line"
                : "line"
            }`}
            x1="480"
            x2="250"
            y1="240"
            y2="20"
          />

          <line
            id="B->C"
            className={`${
              selectedPath === "B->C" || selectedPath === "A->B->C"
                ? "active-line"
                : "line"
            }`}
            x1="30"
            x2="240"
            y1="210"
            y2="800"
          />
          <line
            id="B->D"
            className={`${selectedPath === "B->D" ? "active-line" : "line"}`}
            x1="10"
            x2="380"
            y1="210"
            y2="480"
          />
          <line
            id="B->E"
            className={`${selectedPath === "B->E" ? "active-line" : "line"}`}
            x1="50"
            x2="480"
            y1="230"
            y2="230"
          />
          <line
            id="C->D"
            className={`${selectedPath === "C->D" ? "active-line" : "line"}`}
            x1="120"
            x2="380"
            y1="480"
            y2="480"
          />
          <line
            id="C->E"
            className={`${selectedPath === "C->E" ? "active-line" : "line"}`}
            x1="120"
            x2="480"
            y1="480"
            y2="220"
          />
          <line
            id="D->E"
            className={`${
              selectedPath === "D->E" || selectedPath === "A->E->D"
                ? "active-line"
                : "line"
            }`}
            x1="380"
            x2="480"
            y1="480"
            y2="220"
          />
        </svg>
      </div>
    </div>
  );
};

export default App;
