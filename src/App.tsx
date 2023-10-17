import React from "react";
import "./App.css";
import Pages from "./components/pages/Pages";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="App">
      <Header name="Jon" />
      <Pages />
      <div>Footer</div>
    </div>
  );
}

export default App;
