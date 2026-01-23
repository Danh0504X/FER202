import "../pizzaCard.css";
import { useNavigate } from "react-router-dom";

export default function PizzaCard({ item, onBuy }) {
  const navigate = useNavigate();
  if (!item) return null;

  const { id, image, name, price, oldPrice, description, tags } = item;

  const handleView = () => {
    navigate(`/pizza/${id}`);
  };

  const handleBuy = () => {
    if (typeof onBuy === "function") return onBuy(item);
    alert(`Bought: ${name} - $${Number(price).toFixed(2)}`);
  };

  return (
    <div className="pcard">
      <div className="pcard-imgWrap" onClick={handleView} style={{ cursor: "pointer" }}>
        {Array.isArray(tags) && tags.length > 0 && (
          <div className="pcard-tags">
            {tags.map((t) => (
              <span key={t} className={`pcard-tag ${t === "Sale" ? "is-sale" : "is-new"}`}>
                {t}
              </span>
            ))}
          </div>
        )}
        <img className="pcard-img" src={image} alt={name} />
      </div>

      <div className="pcard-body">
        <div className="pcard-top">
          <h5 className="pcard-title">{name}</h5>
          <span className="pcard-id">#{id}</span>
        </div>

        <p className="pcard-desc">{description}</p>

        <div className="pcard-price">
          {oldPrice ? <span className="pcard-old">${Number(oldPrice).toFixed(2)}</span> : null}
          <span className="pcard-new">${Number(price).toFixed(2)}</span>
        </div>


        <div className="pcard-actions">
          <button type="button" className="pcard-detailBtn" onClick={handleView}>
            View Details
          </button>
          <button type="button" className="pcard-buyBtn" onClick={handleBuy}>
            Buy
          </button>
        </div>
      </div>
    </div>
  );
}
