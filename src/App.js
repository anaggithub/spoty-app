import React from "react";
import Home from "./pages/home";
// import ArticleDetail from "./pages/article-detail";
import Contact from "./pages/contact";
import About from "./pages/about";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { AppProvider } from "./context/app"

const App = () => {

  return (
    <AppProvider>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          {/* <Route path='/articledetail' component={ArticleDetail} /> */}
          <Route path='/contact' component={Contact} />
          <Route path='/about' component={About} />
        </Switch>
      </Router>
    </AppProvider>
  );

}

export default App;
