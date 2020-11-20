
import React from "react";

import Navbar from "./src/components/Navbar/Navbar";
import Intro from "./src/components/Intro/Intro";
import Contact from "./src/components/Contact/Contact";


import "./App.css";

class App extends React.Component{
  render(){
    return(
      <div className="App">
        <Navbar />
        <Intro /> 
        <Contact /> 
      </div>
    );
  }
}
export default App;