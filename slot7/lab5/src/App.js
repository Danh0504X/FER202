import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

import NavBarPizza from "./components/NavBar";


import Home from "./pages/Home";
import DangKyForm from "./pages/DangKyForm";
import NewPage from "./pages/NewPage";
import ContactPage from "./pages/ContactPage";
import QuizPage from "./pages/QuizPage";
import UserPage from "./pages/UserPage";
import PostPage from "./pages/PostPage";

function App() {
  return (
    <Router>
      {/* Toast dùng chung cho toàn app */}
      <ToastContainer position="top-right" autoClose={2000} />

      {/* Thanh điều hướng */}
      <NavBarPizza />


      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<DangKyForm />} />
        <Route path="/news" element={<NewPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/post" element={<PostPage />} />
      </Routes>
    </Router>
  );
}

export default App;
