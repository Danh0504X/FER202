import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import ListOfUsers from "../data/ListOfUsers";

export default function ManageUsersPage() {
  const nav = useNavigate();
  const [q, setQ] = useState("");
  const [page, setPage] = useState(1);

  const users = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return ListOfUsers;
    return ListOfUsers.filter((u) => u.username.toLowerCase().includes(s));
  }, [q]);

  const pageSize = 4;
  const totalPages = Math.max(1, Math.ceil(users.length / pageSize));
  const safePage = Math.min(page, totalPages);
  const shown = users.slice((safePage - 1) * pageSize, safePage * pageSize);

  return (
    <div className="screen">
      <div className="dash">
        {/* topbar */}
        <div className="topbar">
          <div className="brand">
            <span className="brand-icon">👤</span>
            <span className="brand-text">Manage Users</span>
          </div>

          <div className="topbar-right">
            <div className="search">
              <span className="search-ico">🔍</span>
              <input
                value={q}
                onChange={(e) => {
                  setQ(e.target.value);
                  setPage(1);
                }}
                placeholder="Search directory..."
              />
            </div>

            <button className="btn btn-ghost" type="button" onClick={() => nav("/")}>
              Logout
            </button>
          </div>
        </div>

        {/* main card */}
        <div className="dash-card">
          <div className="dash-head">
            <div>
              <h2 className="dash-title">User Directory</h2>
              <p className="dash-subtitle">
                Manage and monitor system access for all registered users.
              </p>
            </div>

            <button className="btn btn-primary btn-small" type="button">
              <span className="plus">＋</span> Add User
            </button>
          </div>

          <div className="table-wrap">
            <table className="table">
              <thead>
                <tr>
                  <th style={{ width: 90 }}>ID</th>
                  <th>USER</th>
                  <th style={{ width: 140 }}>STATUS</th>
                  <th style={{ width: 160 }}>PASSWORD</th>
                  <th style={{ width: 140, textAlign: "right" }}>ACTIONS</th>
                </tr>
              </thead>

              <tbody>
                {shown.map((u) => (
                  <tr key={u.id}>
                    <td className="muted">#{u.id}</td>

                    <td>
                      <div className="usercell">
                        <div className="avatar">{u.avatar}</div>
                        <div className="username">{u.username}</div>
                      </div>
                    </td>

                    <td>
                      <span className={`pill ${u.status === "Active" ? "pill-green" : "pill-gray"}`}>
                        {u.status}
                      </span>
                    </td>

                    <td>
                      <div className="passcell">
                        <span className="muted">{u.password}</span>
                        <button className="iconbtn" type="button">👁</button>
                      </div>
                    </td>

                    <td style={{ textAlign: "right" }}>
                      <button className="iconbtn" type="button" title="Edit">✏️</button>
                      <button className="iconbtn" type="button" title="Lock">🔒</button>
                    </td>
                  </tr>
                ))}

                {shown.length === 0 && (
                  <tr>
                    <td colSpan={5} className="empty">No users found.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <div className="dash-foot">
            <div className="muted small">
              Showing <b>{shown.length}</b> of <b>{users.length}</b> users
            </div>

            <div className="pager">
              <button
                className="pager-btn"
                type="button"
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={safePage === 1}
              >
                ‹
              </button>

              {Array.from({ length: totalPages }).map((_, i) => {
                const n = i + 1;
                return (
                  <button
                    key={n}
                    className={`pager-btn ${n === safePage ? "active" : ""}`}
                    type="button"
                    onClick={() => setPage(n)}
                  >
                    {n}
                  </button>
                );
              })}

              <button
                className="pager-btn"
                type="button"
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={safePage === totalPages}
              >
                ›
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
