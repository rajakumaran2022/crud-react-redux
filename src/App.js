import React from "react";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import Logged from "./components/Logged.jsx";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import './App.css'

const App = () => {
  return (
    <React.Fragment>
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Home />}></Route>
        <Route path={"/logged"} element={<Logged />}></Route>
      </Routes>
    </React.Fragment>
  );
};

export default App;
