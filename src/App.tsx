import React from "react";
import "./App.css";
import Pages from "./components/pages/Pages";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Header name="Jon" />
      <Pages />
      <Footer />
    </div>
  );
}

export default App;
