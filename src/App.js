import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage";
import { BrowserRouter, Route } from "react-router-dom";
import Shop from "./components/shop/shop";

const Hats = () => {
  return <div>Hats</div>;
};

const Details = () => {
  return <div>Details</div>;
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={HomePage} />
        <Route path="/Hats" component={Hats} />
        <Route path="/Shop" component={Shop} />
        <Route path="/Details" component={Details} />
      </BrowserRouter>
    </div>
  );
}

export default App;
