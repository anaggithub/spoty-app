import React from "react";
import Home from "./pages/home";
import Artists from "./pages/artists";
import ArtistDetail from "./pages/artist-detail";
import Album from "./pages/album-detail";

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
          <Route exact path="/home/artists" component={Artists} />
          {/* <Route exact path="/home/artists/:artist" component={ArtistDetail} /> */}
          <Route exact path="/home/artists/artist" component={ArtistDetail} />
          {/* <Route exact path="/home/artists/:artist/:album" component={Album} /> */}
          <Route exact path="/home/artists/artist/album" component={Album} />
        </Switch>
      </Router>
    </AppProvider>
  );
};

export default App;
