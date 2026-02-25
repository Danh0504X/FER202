import React from "react";

export default function User({ user }) {
  if (!user) return null;

  return (
    <div className="border rounded p-3 bg-white">
      <h5 className="mb-2">{user.name}</h5>
      <div className="text-muted">{user.email}</div>
    </div>
  );
}
