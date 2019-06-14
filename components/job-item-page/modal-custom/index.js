import React from 'react';
import './index.scss';
import { Button, Modal } from 'react-bootstrap';

export const ModalCustom = ({ show, onHide, file, close, title, location }) => {
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header>
        <Modal.Title>
          <div className="d-flex flex-column title-block-modal">
            <span>You're applying to</span>
            <h4>
              {title}, {location}
            </h4>
            <span>
              Please fill out all fields below. Once submetted, you will receive
              an automatic confirmation of your application.
            </span>
            <div className="d-flex justify-content-between ">
              <div className="d-flex flex-row block-pdf">
                <span className="ricon-pdf" />

                <div className="d-flex flex-column">
                  <span>{file?.name}</span>
                  <a href="#">
                    Change file <span className="ricon-upload" />
                  </a>
                </div>
                <div>
                  <span>
                    Please upload your most recent resume. <br />
                    We accept MS Word(.docx) and PDF files
                  </span>
                </div>
              </div>
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
