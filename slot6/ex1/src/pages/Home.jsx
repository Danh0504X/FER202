import React from "react";
import FlightBookingForm from "../components/FlightBookingForm";
import "./HomePage.css";

export default function HomePage() {
  return (
    <div className="home">
      <div className="home__container">
        {/* LEFT */}
        <section className="home__left">
          <h1 className="home__headline">
            Khám phá thế giới
            <br />
            <span>dễ dàng hơn bao giờ</span>
            <br />
            <span>hết</span>
          </h1>

          <p className="home__desc">
            Hệ thống đặt vé máy bay hiện đại, nhanh chóng và bảo mật. Quản lý mọi
            chuyến đi của bạn chỉ trong vài cú nhấp chuột.
          </p>

          <div className="home__badges">
            <div className="badge">
              <span className="badge__icon" aria-hidden="true">🏷️</span>
              <span>Vé giá rẻ nhất</span>
            </div>
            <div className="badge">
              <span className="badge__icon" aria-hidden="true">🛟</span>
              <span>Hỗ trợ 24/7</span>
            </div>
          </div>
        </section>

        {/* RIGHT */}
        <section className="home__right">
          <div className="panel">
            <div className="panel__alert">
              <span className="panel__dot" aria-hidden="true">i</span>
              <div className="panel__alertText">
                Lưu ý: Vui lòng nhập thông tin chính xác theo CMND/CCCD
              </div>
              <button className="panel__close" type="button" aria-label="Close">
                ×
              </button>
            </div>

            <h2 className="panel__title">Form đặt vé máy bay</h2>

            {/* Form đặt vé của bạn */}
            <FlightBookingForm embedded />
          </div>
        </section>
      </div>

      <footer className="home__footer">
        © 2023 Stormi Air. Hệ thống được thiết kế bởi Expert Designer.
      </footer>
    </div>
  );
}
