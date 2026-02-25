import "../pizzaCard.css";
import { useNavigate } from "react-router-dom";

export default function NewsCard({ item }) {
  const navigate = useNavigate();
  if (!item) return null;

  const { id, title, description, images } = item;

  const handleView = () => {
    navigate(`/news/${id}`);
  };

  return (
    <div className="pcard">
      <div className="pcard-imgWrap" onClick={handleView}>
        <img className="pcard-img" src={images} alt={title} />
      </div>

      <div className="pcard-body">
        <div className="pcard-top">
          <h5 className="pcard-title">{title}</h5>
          <span className="pcard-id">#{id}</span>
        </div>

        <p className="pcard-desc">{description}</p>

        <div className="pcard-actions">
          <button type="button" className="pcard-detailBtn" onClick={handleView}>
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}
