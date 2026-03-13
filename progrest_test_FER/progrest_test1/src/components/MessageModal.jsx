import { Modal, Button } from "react-bootstrap";

function MessageModal({ show, message, onContinue }) {
  return (
    <Modal show={show} centered>
      <Modal.Header>
        <Modal.Title>Login Successful</Modal.Title>
      </Modal.Header>

      <Modal.Body>{message}</Modal.Body>

      <Modal.Footer>
        <Button variant="success" onClick={onContinue}>
          Continue
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MessageModal;