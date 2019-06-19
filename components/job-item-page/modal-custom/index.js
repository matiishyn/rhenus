import React from 'react';
import './index.scss';
import { Button, Modal } from 'react-bootstrap';
import { Input } from '../../common/input';
import { DropZoneCustom } from '../drop-zone';

export const ModalCustom = ({
  show,
  onHide,
  file,
  close,
  title,
  location,
  onDrop
}) => {
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
      <Modal.Body>
        <hr />
        <DropZoneCustom onDrop={onDrop} file={file} />
        <hr />

        <div className="d-flex flex-column">
          <div className="d-flex name-block">
            <Input
              type="text"
              label={'First name'}
              placeholder="First name..."
              id="firstName"
            />
            <Input
              type="text"
              label={'Last name'}
              placeholder="Last name..."
              id="lastName"
            />
          </div>
          <div className="d-flex contact-block">
            <Input
              type="email"
              label={'E-mail'}
              placeholder="Your e-mail address..."
              id="Email"
            />
            {/*type tel????????*/}
            <Input
              type="email"
              label={'Phone'}
              placeholder="Your phone number..."
              id="Phone"
            />
          </div>
          <div className="d-flex flex-column">
            <Input
              type="textarea"
              label={'Please tell us why you are perfect for this job'}
              placeholder="Enter text"
              id="txt"
            />
            <div>3</div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={close}>
          Close
        </Button>
        <Button variant="secondary">Submit</Button>
      </Modal.Footer>
    </Modal>
  );
};
