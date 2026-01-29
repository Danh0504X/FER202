import React, { useState } from "react";
import "./FlightBookingForm.css";

export default function FlightBookingForm({ embedded = false }) {
  const [form, setForm] = useState({
    fullName: "",
    address: "",
    from: "Hà Nội (HAN)",
    to: "TP. Hồ Chí Minh (SGN)",
    tripGo: true,
    tripReturn: false,
  });

  const setField = (key) => (e) => {
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setForm((p) => ({ ...p, [key]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    alert("Đặt vé ngay (demo)!");
  };

  return (
    <form className={`fb ${embedded ? "fb--embedded" : ""}`} onSubmit={onSubmit}>
      <div className="field">
        <label className="label">Họ tên</label>
        <div className="inputGroup">
          <span className="addon addon--left">👤</span>
          <input className="input" placeholder="Nhập họ và tên" value={form.fullName} onChange={setField("fullName")} />
          <span className="addon addon--right">VND</span>
        </div>
        <div className="help">Phải nhập 5 ký tự, in hoa...</div>
      </div>

      <div className="field">
        <label className="label">Địa chỉ</label>
        <input className="input" placeholder="Nhập địa chỉ của bạn" value={form.address} onChange={setField("address")} />
        <div className="help">Phải nhập 5 ký tự, in hoa...</div>
      </div>

      <div className="row2">
        <div className="field">
          <label className="label">Đi từ</label>
          <select className="select" value={form.from} onChange={setField("from")}>
            <option>Hà Nội (HAN)</option>
            <option>Đà Nẵng (DAD)</option>
            <option>TP. Hồ Chí Minh (SGN)</option>
          </select>
        </div>

        <div className="field">
          <label className="label">Đến</label>
          <select className="select" value={form.to} onChange={setField("to")}>
            <option>TP. Hồ Chí Minh (SGN)</option>
            <option>Hà Nội (HAN)</option>
            <option>Đà Nẵng (DAD)</option>
          </select>
        </div>
      </div>

      <div className="field">
        <label className="label">Chọn chiều đi (Khứ hồi)</label>
        <div className="checks">
          <label className="check">
            <input type="checkbox" checked={form.tripGo} onChange={setField("tripGo")} />
            <span>Đi</span>
          </label>
          <label className="check">
            <input type="checkbox" checked={form.tripReturn} onChange={setField("tripReturn")} />
            <span>Về</span>
          </label>
        </div>
      </div>

      <button className="submit" type="submit">
        Đặt vé ngay
      </button>
    </form>
  );
}
