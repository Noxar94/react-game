import "./App.css";
import { Route, Routes } from "react-router-dom";
import Game from "./pages/game";
import Home from "./pages/home";

import Navbar from "./components/navbar";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Game" element={<Game />} />
      </Routes>
    </>
  );
}

export default App;
