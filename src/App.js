import { Dropdown, DropdownButton } from "react-bootstrap";
import "./App.css";

import React, { useState } from "react";

const App = () => {
  const paths = [
    "Select path",
    "A-B",
    "A-C",
    "A-D",
    "A-E",
    "B-C",
    "B-D",
    "B-E",
    "C-D",
    "C-E",
    "D-E",
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
      </div>
    </div>
  );
};

export default App;
