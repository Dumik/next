import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import NavBar from "./components/Navbar/NavBar";
import Profile from "./components/Ptofile/Profile";
import { Dialogs } from "./components/Dialogs/Dialogs";

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <NavBar />

      <div className="app-wrapper-content">
        <Dialogs />
      </div>
    </div>
  );
};

export default App;
