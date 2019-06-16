import React from 'react';
import './index.scss';
import { Button, Modal } from 'react-bootstrap';

export const ModalCustom = ({ show, onHide, file, close, title, location }) => {
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header>
        <Modal.Title>
          <div className="d-flex flex-column title-block-modal">
            <span className="sub-title">You're applying to</span>
            <h4>
              {title}, {location}
            </h4>
            <span className="title-description">
              Please fill out all fields below. Once submetted, you will receive
              an automatic confirmation of your application.
            </span>
            <div className="d-flex upload-section">
              <div className="file-section d-flex justify-content-between">
                <span className="ricon-pdf" />
                <div className="d-flex flex-column">
                  <span className="file-title">{file?.name}</span>
                  <a href="#">
                    Change file <span className="ricon-upload" />
                  </a>
                </div>
                <span className="ricon-input-required" />
              </div>
              <div className="description-upload">
                Please upload your most recent resume.
                <br />
                We accept MS Word (.docx) and PDF files
              </div>
            </div>
            <div className="d-flex linkedin-block">
              <span className="ricon-linkedin" />
              <a href="#">Sign in with Linkedin</a>
              <span> to save time.</span>
            </div>
          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body />
      <Modal.Footer>
        <Button variant="secondary" onClick={close}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
