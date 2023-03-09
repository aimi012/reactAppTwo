import React from "react";
import "./App.css";
import Header from "./head";
import Main from "./main";
import Footer from "./footer";
import maindata from "./maindata";
import Exercise from "./exercise";
import DarkMode from "./darkmode";

function App(p) {

  return (
    <div style={DarkMode.darkmode} className="App">
      <Header />
      <DarkMode/>
      <Main />
      {/* <Exercise /> */}
    </div>
  );
}

export default App;
