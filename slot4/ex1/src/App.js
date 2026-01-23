import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import PizzaList from "./pages/pizzaList";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import PizzaDetail from "./pages/PizzaDetail";
function App() {
  return (
    <Router>
      <>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pizzas" element={<PizzaList />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/pizza/:id" element={<PizzaDetail />} />
        </Routes>

        <Footer
          info={{
            avatar: "/images/Karina.jpg",
            name: "Karina",
            email: "Karina@gmail.com",
          }}
        />
      </>
    </Router>
  );
}

export default App;
