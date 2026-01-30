import React, { useReducer, useEffect } from "react";
import { Container, Button, Modal } from "react-bootstrap";

const initialState = {
  isShowModal: false,
  isConfirmed: false,
};

/* 2. Reducer xử lý các Action */
function reducer(state, action) {
  switch (action.type) {
    case "OPEN_MODAL":
      return {
        ...state,
        isShowModal: true,
      };

    case "CLOSE_MODAL":
      return {
        ...state,
        isShowModal: false,
      };

    case "CONFIRM_ORDER":
      return {
        ...state,
        isConfirmed: true,
      };

    default:
      return state;
  }
}

export default function Exercise2Modal() {
  /* 3. useReducer thay cho useState */
  const [state, dispatch] = useReducer(reducer, initialState);

  /* 4. Mở modal */
  const handleOpen = () => {
    dispatch({ type: "OPEN_MODAL" });
  };

  /* 5. Đóng modal */
  const handleClose = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };

  /* 6. Xác nhận đơn hàng */
  const handleConfirm = () => {
    dispatch({ type: "CONFIRM_ORDER" });
  };

  /* 7. Khi confirmed → hiện thông báo + tự đóng modal */
  useEffect(() => {
    if (state.isConfirmed) {
      alert("Duyệt đơn hàng thành công!");

      // Tự động đóng modal sau khi confirm
      dispatch({ type: "CLOSE_MODAL" });
    }
  }, [state.isConfirmed]);

  return (
    <Container className="mt-4">
      <h4 className="mb-3">Exercise 2 - Modal Xác nhận đơn hàng</h4>

      {/* Button mở modal */}
      <Button variant="primary" onClick={handleOpen}>
        Xử lý đơn hàng
      </Button>

      {/* Modal */}
      <Modal show={state.isShowModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Xác nhận xử lý</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          Bạn có chắc chắn muốn duyệt đơn hàng này để chuyển sang bộ phận kho
          không?
        </Modal.Body>

        <Modal.Footer>
          {/* Cancel */}
          <Button variant="secondary" onClick={handleClose}>
            Hủy
          </Button>

          {/* Confirm */}
          <Button variant="success" onClick={handleConfirm}>
            Xác nhận
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Hiển thị trạng thái confirmed */}
      {state.isConfirmed && (
        <p className="mt-3 text-success">
          ✅ Đơn hàng đã được duyệt thành công!
        </p>
      )}
    </Container>
  );
}
