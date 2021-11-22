import React from "react";
import Modelinfo from "../components/Modelinfo";
import Header from "../components/Header";

function Model3() {
  return (
    <div>
      <Header />
      <Modelinfo
        title="Model 3"
        subtitle="Book Online Now"
        milage="358mi"
        speed="3.1sec"
        mdImage="model-3.jpg"
      ></Modelinfo>
    </div>
  );
}
export default Model3;
