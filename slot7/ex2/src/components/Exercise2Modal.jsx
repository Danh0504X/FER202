import React, { useState } from "react";
import { Container, Button, Modal } from "react-bootstrap";

export default function Exercise2Modal() {
  // Trạng thái modal: true = mở, false = đóng
  const [isShowModal, setIsShowModal] = useState(false);

  // Mở modal
  const handleOpen = () => setIsShowModal(true);

  // Đóng modal (dùng cho Hủy và nút X)
  const handleClose = () => setIsShowModal(false);

  // Xác nhận xử lý đơn hàng
  const handleConfirm = () => {
    const ok = window.confirm(
      "Bạn có chắc chắn muốn duyệt đơn hàng này để chuyển sang bộ phận kho không?"
    );

    if (ok) {
      alert("Duyệt đơn hàng thành công!");
      handleClose(); // tự động đóng modal
    }
  };

  return (
    <Container className="mt-4">
      <h4 className="mb-3">Exercise 2 - Xử lý đơn hàng</h4>

      <Button variant="primary" onClick={handleOpen}>
        Xử lý đơn hàng
      </Button>

      <Modal show={isShowModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Xác nhận xử lý</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          Bạn muốn xử lý đơn hàng này chứ?
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Hủy
          </Button>
          <Button variant="success" onClick={handleConfirm}>
            Xác nhận
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}
