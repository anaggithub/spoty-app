import React from "react";
import Home from "./pages/home";
import ArtistList from "./pages/artist-list";
import Artist from "./pages/artist";
import Album from "./pages/album";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { AppProvider } from "./context/app";

const App = () => {
  return (
    <AppProvider>
      <Router>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/home" />} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/home/artists" component={ArtistList} />
          <Route exact path="/home/artists/:artist" component={Artist} />
          <Route exact path="/home/artists/:artist/:album" component={Album} />
        </Switch>
      </Router>
    </AppProvider>
  );
};

export default App;
