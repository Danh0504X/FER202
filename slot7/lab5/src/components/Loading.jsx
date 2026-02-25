import React from "react";

export default function Loading({ text = "Loading..." }) {
  return (
    <div className="d-flex align-items-center gap-2 py-3">
      <div className="spinner-border" role="status" aria-label="loading" />
      <span>{text}</span>
    </div>
  );
}
