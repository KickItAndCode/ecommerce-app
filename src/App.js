import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage";
import { BrowserRouter, Route } from "react-router-dom";

const Hats = () => {
  return <div>Hats</div>;
};
const Topics = () => {
  return <div>Topics</div>;
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
        <Route path="/Topics" component={Topics} />
        <Route path="/Details" component={Details} />
      </BrowserRouter>
    </div>
  );
}

export default App;
