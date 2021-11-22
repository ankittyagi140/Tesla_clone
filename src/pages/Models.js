import React from "react";
import Modelinfo from "../components/Modelinfo";
import Header from "../components/Header";

function Models() {
  return (
    <div>
      <Header />
      <Modelinfo
        title="Model S"
        subtitle="Online booking now available"
        milage="358mi"
        speed="3.1sec"
        mdImage="model-s.jpg"
      ></Modelinfo>
    </div>
  );
}
export default Models;
