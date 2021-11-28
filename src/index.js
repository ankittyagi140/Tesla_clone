import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { store } from "./app/store";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import {BrowserRouter, Route,Routes} from "react-router-dom";
import Modelx from "./pages/Modelx";
import Modely from "./pages/Modely";
import Model3 from "./pages/Model3";
import Models from "./pages/Models";
import SolarPanel from "./pages/Solarpanel";
import SolarRoof from "./pages/Solarroof";
import Login from './pages/Login';
import SignUp from './pages/SignUp';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App/>} />
          <Route path="/models" element={<Models/> } />
          <Route path="/modelx" element={<Modelx />} />
          <Route path="/modely" element={<Modely/>} />
          <Route path="/model3" element={<Model3/>} />
          <Route path="/solarpanel" element={<SolarPanel/>}/>
          <Route path="/solarroof" element={<SolarRoof/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
