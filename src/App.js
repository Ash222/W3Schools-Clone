import React, { useState } from "react";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Header from "./components/header/Header";
import SearchBar from "./components/searchbar/SearchBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [toggleSearchBar, setToggleSearchBar] = useState(false);

  function toggleLightHandler() {
    setToggleSearchBar(!toggleSearchBar);
  }

  return (
    <>
      <Header light={toggleLightHandler} />
      {toggleSearchBar && <SearchBar />}
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
