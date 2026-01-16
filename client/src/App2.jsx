import React from "react";
import './App.css'

const App = () => {
  let styleText ={
      color:"red",
    };
  return (
    <>
    <h1>
      Hello Everyone, I'm Rayyan
    </h1>
    <div className="header">Header</div>
    <h2 style={{color: "red"}}>rayyan ansari </h2>

  
    <h3 style={styleText}>rayyan ansariiii </h3>

    </>
  );
};

export default App;
