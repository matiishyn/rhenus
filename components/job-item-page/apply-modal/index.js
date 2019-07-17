import React from 'react';
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

export const ApplyModal = props => {
  const { show, close, onHide } = props;
  return (
    <Modal show={show} omHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={close}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
