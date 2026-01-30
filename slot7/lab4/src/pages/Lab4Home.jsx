import React from "react";
import { Card, Container } from "react-bootstrap";

export default function Lab4Home() {
  return (
    <Container className="mt-5 d-flex justify-content-center">
      <Card
        style={{
          maxWidth: "520px",
          width: "100%",
          borderRadius: "18px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
        }}
        className="p-4 text-center"
      >
        <h2 className="mb-3" style={{ color: "#2563eb" }}>
          Lab4 Profile
        </h2>

        <p>
          <b>Tên:</b> Võ Thành Danh
        </p>

        <p>
          <b>MSSV:</b> DE190155
        </p>

        <p>
          <b>GitHub:</b>{" "}
          <a
            href="https://github.com/Danh0504X/FER202"
            target="_blank"
            rel="noreferrer"
          >
            Danh0504X/FER202
          </a>
        </p>
      </Card>
    </Container>
  );
}
