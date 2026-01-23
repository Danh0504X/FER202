import React from "react";

import HeroCarousel from "../components/HeroCarousel.jsx";
import BookingForm from "../components/Booking.jsx";
import { banners } from "../data/bannerImages.js";     // đúng theo cây thư mục bạn chụp

import { pizzaList } from "../data/PizzaList.js";
import PizzaSliderRow from "../components/PizzaSliderRow.jsx";

function Home() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <main className="flex-grow-1">
        <HeroCarousel slides={banners} />

        <div>
          <PizzaSliderRow items={pizzaList} title="Popular Pizzas" />
        </div>

        <div className="mt-4">
          <BookingForm />
        </div>
      </main>

    </div>
  );
}

export default Home;
