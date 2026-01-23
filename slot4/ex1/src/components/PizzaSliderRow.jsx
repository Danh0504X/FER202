import { useRef, useState } from "react";
import PizzaCard from "./PizzaCard";
import ViewDetailModal from "./ViewDetailModal";
import "../pizzaSliderRow.css";

export default function PizzaSliderRow({ items = [], title = "Pizza" }) {
  const trackRef = useRef(null);

  // ✅ state cho modal
  const [showDetail, setShowDetail] = useState(false);
  const [selectedPizza, setSelectedPizza] = useState(null);

  const openDetail = (pizza) => {
    setSelectedPizza(pizza);
    setShowDetail(true);
  };

  const closeDetail = () => {
    setShowDetail(false);
    setSelectedPizza(null);
  };

  const scrollByCards = (dir) => {
    const el = trackRef.current;
    if (!el) return;

    const card = el.querySelector(".psr-item");
    const step = card ? card.offsetWidth + 16 : 320;

    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <section className="psr">
      <div className="psr-head">
        <h3 className="psr-title">{title}</h3>

        <div className="psr-actions">
          <button
            className="psr-btn"
            type="button"
            onClick={() => scrollByCards(-1)}
            aria-label="Previous"
          >
            {"<"}
          </button>
          <button
            className="psr-btn"
            type="button"
            onClick={() => scrollByCards(1)}
            aria-label="Next"
          >
            {">"}
          </button>
        </div>
      </div>

      <div className="psr-track" ref={trackRef}>
        {items.map((p) => (
          <div className="psr-item" key={p.id}>
            {/* ✅ truyền callback xuống card */}
            <PizzaCard item={p} onViewDetail={openDetail} />
          </div>
        ))}
      </div>

      {/* ✅ 1 modal dùng chung */}
      <ViewDetailModal show={showDetail} handleClose={closeDetail} pizza={selectedPizza} />
    </section>
  );
}
