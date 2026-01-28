import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

import NavExercise from "./components/Nav";
import AppRoutes from "./routes/AppRoutes";

export default function App() {
  return (
    <BrowserRouter>
      <Container className="py-3">
        <NavExercise />
        <div className="mt-3">
          <AppRoutes />
        </div>
      </Container>
    </BrowserRouter>
  );
}
