import React from "react";
import "./App.css";
import {
  Switch,
  Route,
} from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./pages/About";
import History from "./pages/History";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        {/*<Route path="/" exact>*/}
        {/*  <Home/>*/}
        {/*</Route>*/}
        <Route path="/" exact component={Home} />
        <Route path="/history" exact component={History} />
        <Route path="/about" exact component={About} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
