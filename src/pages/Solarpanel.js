import React from 'react';
import Header from '../components/Header';
import Modelinfo from '../components/Modelinfo';

const SolarPanel=()=>{
    return (
        <div>
        <Header />
        <Modelinfo
          title="Solar Panel"
          subtitle="Book Online Now"
          milage="358mi"
          speed="3.1sec"
          mdImage="solar-panel.jpg"
        ></Modelinfo>
      </div>
    )
   
}
export default SolarPanel;