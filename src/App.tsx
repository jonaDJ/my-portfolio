import React from "react";
import "./App.css";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="App">
      <Header name="Jon" />
      <main>Main</main>
      <div>Footer</div>
    </div>
  );
}

export default App;
