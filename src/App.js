import React from "react";
import {BrowserRouter as Router,Switch,Route, Link} from "react-router-dom";
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import HomePage from './components/HomePage';

import ProductsPage from './components/ProductsPage';
import ContactPage from './components/ContactPage';

function App() {
  return (
    <Router>
    <div className="page-container">
    <div className="content-wrap">

    <NavBar />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/ProductsPage" exact>
          <ProductsPage />
        </Route>
        <Route path="/ContactPage" exact>
          <ContactPage />
        </Route>
      </Switch>
      </div>
      <Footer />
    </div>
 

    
    </Router>

  );
}

export default App;