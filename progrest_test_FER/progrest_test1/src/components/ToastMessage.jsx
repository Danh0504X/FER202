import { Toast, ToastContainer } from "react-bootstrap";

function ToastMessage({ show, message, onClose }) {

  return (
    <ToastContainer position="top-end">

      <Toast
        bg="success"
        show={show}
        onClose={onClose}
        delay={2000}
        autohide
      >

        <Toast.Body className="text-white">
          {message}
        </Toast.Body>

      </Toast>

    </ToastContainer>
  );
}

export default ToastMessage;