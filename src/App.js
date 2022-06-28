import "./App.css";
import React from "react";
import Market from "./component/Market";
import MainNavigation from "./Navigation/MainNavigation";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from "./Home/Home";
import ItemUploadForm from "./component/ItemUploadForm.js";
import Auth from "./Authentication/Auth";
function App() {
  return (
    <>
      <MainNavigation />
      <Router>
        <Routes>
            <Route path="/market" element={<Market />} />
            <Route path="/" element={<Home />} />
            <Route path="/addProduct" element={<ItemUploadForm />} />
            <Route path="/login" element={<Auth/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
