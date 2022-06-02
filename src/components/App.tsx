import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Card from "./Card";
import Board from "./Boards";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Board />} />
        <Route path="/new" element={<Card />} />
        <Route path="/:cardNumber" element={<Card />} />
      </Routes>
    </div>
  );
}

export default App;
