import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Ex1Page from "../pages/Ex1Page";
import Ex2Page from "../pages/Ex2Page";
import Ex3Page from "../pages/Ex3Page";
import Ex4Page from "../pages/Ex4Page";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/ex1" replace />} />
      <Route path="/ex1" element={<Ex1Page />} />
      <Route path="/ex2" element={<Ex2Page />} />
      <Route path="/ex3" element={<Ex3Page />} />
      <Route path="/ex4" element={<Ex4Page />} />
      <Route path="*" element={<div>404 - Not Found</div>} />
    </Routes>
  );
}
