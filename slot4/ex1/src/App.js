import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import HeroCarousel from "./components/HeroCarousel";
import { banners } from "./data/bannerImages";

import { pizzaList } from "./data/PizzaList";
import PizzaSliderRow from "./components/PizzaSliderRow";


function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <main className="flex-grow-1">
        <HeroCarousel slides={banners} />
      </main>

    
    <div>
      <PizzaSliderRow items={pizzaList} title="Popular Pizzas" />
    </div>

      <Footer
        info={{
          avatar: "/images/Karina.jpg",
          name: "Karina",
          email: "Karina@gmail.com",
        }}
      />
    </div>
  );
}

export default App;
