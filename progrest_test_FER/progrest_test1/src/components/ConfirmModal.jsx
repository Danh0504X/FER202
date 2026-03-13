import { Modal, Button } from "react-bootstrap";

function ConfirmModal({ show, message, onConfirm, onCancel }) {

  return (
    <Modal show={show} centered>

      <Modal.Header>
        <Modal.Title>Confirm</Modal.Title>
      </Modal.Header>

      <Modal.Body>{message}</Modal.Body>

      <Modal.Footer>

        <Button variant="secondary" onClick={onCancel}>
          Cancel
        </Button>

        <Button variant="danger" onClick={onConfirm}>
          Confirm
        </Button>

      </Modal.Footer>

    </Modal>
  );
}

export default ConfirmModal;