import React from "react";
import Arrived from "./components/Arrived";
import Browser from "./components/Browser";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Browser />
      <Arrived />
    </div>
  );
}

export default App;
