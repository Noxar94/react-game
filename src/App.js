import "./App.css";
import { Route, Routes } from "react-router-dom";
import Game from "./pages/game";
import Home from "./pages/home";

import Navbar from "./components/navbar";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/user"
          element={
            <PrivateRoute>
              <Game />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
