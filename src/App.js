import React from "react";
import "./App.css";
import Home from "./components/Home";
import Header from "./components/Header";
import Chatbot from "./components/Chatbot";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Chatbot />
    </div>
  );
}
export default App;
