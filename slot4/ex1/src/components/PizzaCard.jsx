import "../pizzaCard.css";

export default function PizzaCard({ item }) {
  if (!item) return null;

  const { id, image, name, price, oldPrice, description, tags } = item;

  const formatUSD = (v) => {
    if (v === null || v === undefined) return "";
    return `$${Number(v).toFixed(2)}`;
  };

  return (
    <div className="pcard">
      <div className="pcard-imgWrap">
        {Array.isArray(tags) && tags.length > 0 && (
          <div className="pcard-tags">
            {tags.map((t) => (
              <span
                key={t}
                className={`pcard-tag ${t === "Sale" ? "is-sale" : "is-new"}`}
              >
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
          {oldPrice ? <span className="pcard-old">{formatUSD(oldPrice)}</span> : null}
          <span className="pcard-new">{formatUSD(price)}</span>
        </div>
      </div>
    </div>
  );
}
