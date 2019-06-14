import React from 'React';
import './index.scss';
import { Button, Modal } from 'react-bootstrap';

export const ModalCustom = ({ show, onHide, file, close }) => {
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>Uploaded File: {file?.name}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={close}>
          Close
        </Button>
        <Button variant="primary" onClick={close}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
