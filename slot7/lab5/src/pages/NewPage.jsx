// NewPage.jsx
import React from "react";
import { newLists } from "../data/newList";
import NewsCard from "../components/NewsCard";

export default function NewPage() {
  return (
    <div className="container my-4">
      <h3 className="mb-3">News</h3>

      {/* Grid 4 card / 1 hàng (xem CSS .news-grid) */}
      <div className="news-grid">
        {newLists.map((item) => (
          <NewsCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
