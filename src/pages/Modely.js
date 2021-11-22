import React from "react";
import Modelinfo from "../components/Modelinfo";
import Header from "../components/Header";

function Modely() {
  return (
    <div>
      <Header />
      <Modelinfo
      title="Model Y"
subtitle="Book Online Now"
milage="358mi"
speed="3.1sec"
mdImage="model-y.jpg"
      ></Modelinfo>
    </div>
  );
}

export default Modely;
