import { Route, Routes } from "react-router-dom";
import './App.css';
import Login from "./components/LoginPage"
import Signup from "./components/SignUp";
import React from "react";
import Home from "./components/Home";


function App() {
  return (
    <div className="container">
      <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/sign-up'  element={<Signup />} />
      <Route path='/home'  element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
