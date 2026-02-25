import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { newLists } from "../data/newLists";

export default function NewsDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const newsId = Number(id);
  const item = newLists.find((x) => x.id === newsId);

  if (!item) {
    return (
      <div className="container py-4">
        <h4>Không tìm thấy bài viết</h4>
        <button className="btn btn-secondary mt-3" onClick={() => navigate("/news")}>
          Quay lại News
        </button>
      </div>
    );
  }

  return (
    <div className="container py-4">
      <button className="btn btn-outline-secondary mb-3" onClick={() => navigate(-1)}>
        ← Quay lại
      </button>

      <div className="row g-4 align-items-start">
        <div className="col-12 col-lg-7">
          <img
            src={item.images}
            alt={item.title}
            className="w-100"
            style={{ height: 360, objectFit: "cover", borderRadius: 16 }}
          />
        </div>

        <div className="col-12 col-lg-5">
          <div className="p-4 border rounded-4 bg-white shadow-sm">
            <div className="d-flex justify-content-between align-items-start gap-2">
              <h3 className="m-0">{item.title}</h3>
              <span className="badge text-bg-secondary">#{item.id}</span>
            </div>

            <p className="text-muted mt-3 mb-0" style={{ lineHeight: 1.7 }}>
              {item.description}
            </p>

            <hr />

            <div className="d-flex gap-2">
              <button className="btn btn-dark" onClick={() => navigate("/news")}>
                Xem danh sách News
              </button>
              <button className="btn btn-danger" onClick={() => navigate("/")}>
                Về Home
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
