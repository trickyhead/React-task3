import React from "react";
import ColorPicker from "./ColorPicker";
import "./App.css";

function App() {
  const colors = [
    "#FF5733",
    "#FF4500",
    "#FF6347",
    "#FF7F50",
    "#FF8C00",
    "#33FF57",
    "#32CD32",
    "#00FF00",
    "#4169E1",
    "#0000FF",
    "#6495ED",
    "#808080",
    "#D3D3D3",
    "#A9A9A9",
    "#B0E0E6",
    "#ADD8E6",
    "#4682B4",
    "#FF5733",
    "#33FF57",
    "#5733FF",
    "#FF3399",
    "#33FFFF",
    "#FFD700",
    "#7CFC00",
    "#8A2BE2",
    "#FFA07A",
    "#00BFFF",
    "#5F9EA0",
    "#2F4F4F",
    "#708090",
    "#708090",
    "#FF5733",
    "#33FF57",
    "#5733FF",
    "#FF3399",
    "#33FFFF",
    "#FFD700",
    "#7CFC00",
  ];

  return (
    <div className="App">
      <center>
        <h1>Colour Selector</h1>
        <ColorPicker colors={colors} />
      </center>
    </div>
  );
}

export default App;
