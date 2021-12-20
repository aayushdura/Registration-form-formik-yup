import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
export default function RegisterPopup({ show, setShow }) {
  const handleClose = () => setShow(false);
  const navigate = useNavigate();
  return (
    <>
      <Modal show={show} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Student Registered</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            type="button"
            onClick={() => {
              navigate("/success");
            }}
          >
            Continue
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
