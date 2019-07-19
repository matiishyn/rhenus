import React, { useState } from 'react';
import './index.scss';
import { Modal } from 'react-bootstrap';
import { Input } from '../../common/input';
import { DropZoneCustom } from '../drop-zone';
import { withNamespaces } from '../../../services/i18n';
import cx from 'classnames';

export const ModalCustom = withNamespaces('common')(props => {
  const {
    show,
    onHide,
    file,
    close,
    title,
    location,
    onDrop,
    t,
    jobId,
    onSubmit
  } = props;
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [motivation, setMotivation] = useState('');
  const [checkBox, setCheckBox] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  // const [resumeByEmail, setResumeByEmail] = useState(false);
  const [checked, setChecked] = useState(false);

  const isFormValid = () => {
    return (
      firstName &&
      lastName &&
      email &&
      phone &&
      motivation &&
      motivation.length >= 200 &&
      checkBox
    );
  };

  const submit = () => {
    setSubmitted(true);

    if (isFormValid()) {
      onSubmit({
        firstName,
        lastName,
        email,
        phone,
        file,
        motivation,
        checkBox,
        jobId
      });
      close();
    }
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      centered
      dialogClassName="mobile-modal-window-input"
    >
      <Modal.Header>
        <Modal.Title>
          <div
            className="d-flex d-md-none back-to-job-mobile-button"
            onClick={close}
          >
            <span className="ricon-arrow-back" />
          </div>
          <div className="d-flex flex-column title-block-modal">
            <span className="sub-title">{t('modal.applying')}</span>
            <h4>
              {title}, {location}
            </h4>
            <span className="title-description">{t('modal.fillOut')}</span>
            <div className="d-flex upload-section">
              {!checked ? (
                <DropZoneCustom onDrop={onDrop} file={file} sm />
              ) : null}

              <div className="description-upload">
                {t('modal.upload')}
                <br />
                {t('modal.accept')}
              </div>
              <div className="d-flex flex-column switcher-zone d-md-none">
                <span>{t('modal.haveResume')}</span>
                <div className="custom-control custom-switch">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customSwitch1"
                    onChange={e => {
                      setChecked(e.target.checked);
                    }}
                  />
                  <label
                    className={cx('custom-control-label', {
                      'left-switch': checked
                    })}
                    htmlFor="customSwitch1"
                  >
                    E-mail resume
                  </label>
                </div>
              </div>
            </div>
            <div className="d-flex linkedin-block">
              <span className="ricon-linkedin" />
              <a href="#">{t('modal.signIn')}</a>
              <span> {t('modal.saveTime')}</span>
            </div>
          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex flex-column">
          <div className="d-flex name-block">
            <div>
              <Input
                type="text"
                label={t('modalLabel.firstName')}
                placeholder={t('modalPlaceholder.firstName')}
                id="firstName"
                value={firstName}
                onChange={setFirstName}
              />

              {submitted && !firstName && (
                <div className="required-validate">
                  <span className="ricon-input-required" />
                  Please enter your first name
                </div>
              )}
            </div>
            <div>
              <Input
                type="text"
                label={t('modalLabel.lastName')}
                placeholder={t('modalPlaceholder.lastName')}
                id="lastName"
                value={lastName}
                onChange={setLastName}
              />
              {submitted && !lastName && (
                <div className="required-validate">
                  <span className="ricon-input-required" />
                  Please enter your last name
                </div>
              )}
            </div>
          </div>
          <div className="d-flex contact-block">
            <div>
              <Input
                type="email"
                label={'E-mail'}
                placeholder={t('modalPlaceholder.eMail')}
                id="Email"
                value={email}
                onChange={setEmail}
              />
              {submitted && !email && (
                <div className="required-validate">
                  <span className="ricon-input-required" />
                  Please enter your correctly email
                </div>
              )}
            </div>
            <div>
              <Input
                type="tel"
                label={t('modalLabel.phone')}
                placeholder={t('modalPlaceholder.phone')}
                id="Phone"
                value={phone}
                onChange={setPhone}
              />
              {submitted && !phone && (
                <div className="required-validate">
                  <span className="ricon-input-required" />
                  Please enter your correctly phone number
                </div>
              )}
            </div>
          </div>
          <div className="d-flex flex-column text-area">
            <div>
              <Input
                type="textarea"
                label={t('modalLabel.tellUs')}
                placeholder={t('modalPlaceholder.enterText')}
                id="txt"
                value={motivation}
                onChange={setMotivation}
              />
              {submitted && motivation.length <= 200 && (
                <div className="required-validate">
                  <span className="ricon-input-required" />
                  Please enter text more than 200 symbol
                </div>
              )}
            </div>

            <div className="privacy-zone">
              <form className="d-flex flex-row mobile-style-checked-zone">
                <input
                  type="checkbox"
                  id="ccc"
                  value={checkBox}
                  onChange={e => {
                    setCheckBox(e.target.checked);
                  }}
                />
                <label htmlFor="ccc">
                  {t('modal.herbyGrant')} <a href="#">GDPR-statement </a>
                  {t('siteWide.and')} <a href="#">{t('modal.privacy')}</a>.
                </label>
                {submitted && checkBox === false && (
                  <div className="required-validate">
                    <span className="ricon-input-required" />
                    Please give permission to save your personal information
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button className="btn-cancel btn d-sm-none" onClick={close}>
          {t('siteWide.cancel')}
        </button>
        <button className="btn-submit btn" onClick={submit} type="submit">
          {t('siteWide.submit')}
        </button>
      </Modal.Footer>
    </Modal>
  );
});
