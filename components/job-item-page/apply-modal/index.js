import React from 'react';
import { Modal } from 'react-bootstrap';
import './index.scss';

export const ApplyModal = props => {
  const { show, close, onHide, data, title, location } = props;

  return (
    <Modal show={show} omHide={onHide} className="apply-mobile-modal">
      <Modal.Header className="d-flex flex-column">
        <div className="header-title-apply">
          Good news, {data.firstName}: you've applied to
        </div>
        <Modal.Title>
          {title}, {location}
        </Modal.Title>
        <div className="footer-title-apply">
          Thank you! Your application has been sent. Here's what will happen
          next:
        </div>
      </Modal.Header>
      <Modal.Body>
        <ul className="apply-desc">
          <li>
            <span className="ricon-rhenus-dash" />
            You will receive an automatic confirmation of your application.
          </li>
          <li>
            <span className="ricon-rhenus-dash" />
            Your application will be sent to the owner of the vacancy.
          </li>
          <li>
            <span className="ricon-rhenus-dash" />
            Within 3-5 business days, we will contact you to discuss further
            steps.
          </li>
        </ul>
      </Modal.Body>
      <Modal.Footer className="d-flex justify-content-end">
        <button className="btn btn-submit" onClick={close}>
          Close
        </button>
      </Modal.Footer>
    </Modal>
  );
};
