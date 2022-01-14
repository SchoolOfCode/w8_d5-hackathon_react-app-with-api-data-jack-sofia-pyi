import { Routes, Route, Link } from "react-router-dom";
import Navbar from "../Navbar";
import Home from "../Home/index.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Home></Home>
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="ingredients" element={<Ingredients />} />
        <Route path="search" element={<SearchPage />} />
      </Routes> */}
    </div>
  );
}

export default App;
