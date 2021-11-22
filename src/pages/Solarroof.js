import React from 'react';
import Header from '../components/Header';
import Modelinfo from '../components/Modelinfo';

const SolarRoof=()=>{
    return(
<div>
      <Header />
      <Modelinfo
        title="Solar Roof"
        subtitle="Book Online Now"
        milage="358mi"
        speed="3.1sec"
        mdImage="solar-roof.jpg"
      ></Modelinfo>
    </div>
    )
}
export default SolarRoof;