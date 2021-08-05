import React from "react";
import { BrowserRouter, Route , Switch} from "react-router-dom";
import "./icons.js";
import Main from "./screens/Main";
import Nav from "./components/Nav";
import Logo from "./components/LogoBar";

import PortfolioCard from "./components/PortfolioCard";
import ContactMe from "./components/ContactMe";
import About from "./components/About";


import "./style.css";

function App() {
  return (
    <BrowserRouter>

      <Logo/>

      <Nav/>
      
      <Switch>
        <Route component={ PortfolioCard } exact path='/' />
        <Route component={ ContactMe } exact path='/contact' />
        <Route component={ About } exact path='/About' />
      </Switch>

      {/* <Main/> */}

    </BrowserRouter>
  );
}

export default App;
