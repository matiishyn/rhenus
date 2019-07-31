import React from 'react';
import { Modal } from 'react-bootstrap';
import './index.scss';
import { withNamespaces } from '../../../services/i18n';

export const ApplyModal = withNamespaces('common')(props => {
  const { show, close, onHide, data, title, location, t } = props;

  return (
    <Modal show={show} omHide={onHide} className="apply-mobile-modal">
      <Modal.Header className="d-flex flex-column">
        <div className="header-title-apply">
          {t('applyModal.goodNews')} {data.firstName}: {t('applyModal.applied')}
        </div>
        <Modal.Title>
          {title}, {location}
        </Modal.Title>
        <div className="footer-title-apply">{t('applyModal.thankMessage')}</div>
      </Modal.Header>
      <Modal.Body>
        <ul className="apply-desc">
          <li>
            <span className="ricon-rhenus-dash" />
            {t('applyModal.firstParagraph')}
          </li>
          <li>
            <span className="ricon-rhenus-dash" />
            {t('applyModal.secondParagraph')}
          </li>
          <li>
            <span className="ricon-rhenus-dash" />
            {t('applyModal.thirdParagraph')}
          </li>
        </ul>
      </Modal.Body>
      <Modal.Footer className="d-flex justify-content-end">
        <button className="btn btn-submit" onClick={close}>
          {t('applyModal.close')}
        </button>
      </Modal.Footer>
    </Modal>
  );
});
