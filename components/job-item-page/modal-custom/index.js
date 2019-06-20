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
              <DropZoneCustom onDrop={onDrop} file={file} sm />
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
          <div className="d-flex flex-column text-area">
            <Input
              type="textarea"
              label={'Please tell us why you are perfect for this job'}
              placeholder="Enter text"
              id="txt"
            />

            <div className="privacy-zone">
              <form className="d-flex flex-row">
                <input type="checkbox" />
                <label>
                  I hereby grant Rhenus permission to save my personal
                  information as outlined in the <a href="#">GDPR-statement</a> {' '}
                  and <a href="#">privacy statements</a>.
                </label>
              </form>
            </div>
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
