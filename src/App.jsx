import React from "react";
import Navbar from "./components/Navbar";
import Create from "./components/Create";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" exact element={<Create />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
