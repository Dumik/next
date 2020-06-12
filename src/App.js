import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import NavBar from "./components/Navbar/NavBar";
import Profile from "./components/Ptofile/Profile";
import { Dialogs } from "./components/Dialogs/Dialogs";
import { BrowserRouter, Route } from "react-router-dom";
import { News } from "./components/News/News";
import { Music } from "./components/Music/Music";
import { Settings } from "./components/Settings/Settings";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <NavBar friends={props.state.sidebar.friends} />
        <div className="app-wrapper-content">
          <Route
            path="/profile"
            render={() => <Profile posts={props.state.profilePage.posts} />}
          />
          <Route
            path="/dialogs"
            render={() => (
              <Dialogs
                dialogs={props.state.dialogsPage.dialogs}
                massages={props.state.dialogsPage.massages}
              />
            )}
          />
          <Route path="/news" render={() => <News />} />
          <Route path="/music" render={() => <Music />} />
          <Route path="/settings" render={() => <Settings />} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
