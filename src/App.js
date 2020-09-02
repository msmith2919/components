import React from 'react';
import logo from './logo.svg';
import './App.css';
import Box from "./component/Box";

function App() {

  const [toggle, setToggle]=React.useState("Hiya");
  const [color, setColor]= React.useState("orange");

  return (
      <div className="App">
          <div className="topnav" style={{backgroundColor:color, color:"white", height: "50px", justifyContent: "center"}}>
              <a className="active" href="#home">Home          </a>
              <a href="#news">News          </a>
              <a href="#contact">Contact          </a>
              <a href="#about">          About</a>
          </div>
        <Box name={"Marisol"} age={"21"} color={"red."}/>
        <Box name={"Mason"} age={"20"} color={"orange."}/>
        <Box name={"Marty"} age={"23"} color={"yellow."}/>
      </div>
  );
}

export default App;
