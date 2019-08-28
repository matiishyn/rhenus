import React, { useEffect, useState } from 'react';
import './index.scss';
import { Modal } from 'react-bootstrap';
import { Input } from '../../common/input';
import { DropZoneCustom } from '../drop-zone';
import { withNamespaces } from '../../../services/i18n';
import cx from 'classnames';

const isEmailValid = field => {
  const r = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;
  return r.test(field);
};
const isPhonelValid = field => {
  const r = /[0-9]/i;
  if (field.length >= 10 && field.length < 11) {
    return r.test(field);
  }
};

export const ModalCustom = withNamespaces('common')(props => {
  const {
    show,
    onHide,
    resume,
    close,
    title,
    location,
    onDrop,
    t,
    jobId,
    onSubmit,
    liFirstName,
    liLastName,
    lng
  } = props;
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [motivation, setMotivation] = useState('');
  const [checkBox, setCheckBox] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [resumeByEmail, setResumeByEmail] = useState(false);

  // HANDLING PARENT CHANGE
  useEffect(() => setFirstName(liFirstName), [liFirstName]);
  useEffect(() => setLastName(liLastName), [liLastName]);
  const isFormValid = () => {
    return (
      firstName &&
      lastName &&
      isEmailValid(email) &&
      isPhonelValid(phone) &&
      motivation &&
      motivation.length >= 200 &&
      checkBox
      // resumeByEmail
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
        resume,
        motivation,
        checkBox,
        jobId,
        resumeByEmail
      });
      close();
    }
  };

  const loginLinkedin = e => {
    e.preventDefault();
    window.open(
      `${location.origin}/api/linkedin-auth`,
      '',
      'width=500,height=500'
    );
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
              {!resumeByEmail ? (
                <DropZoneCustom onDrop={onDrop} resume={resume} sm />
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
                      setResumeByEmail(e.target.checked);
                    }}
                  />
                  <label
                    className={cx('custom-control-label', {
                      'left-switch': resumeByEmail
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
              <a href="#" onClick={loginLinkedin}>
                {t('modal.signIn')}
              </a>
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
                required
              />

              {submitted && firstName.length < 2 && (
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
                required
              />
              {submitted && lastName.length < 2 && (
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
                required
              />
              {submitted && !isEmailValid(email) && (
                <div className="required-validate">
                  <span className="ricon-input-required" />
                  Please enter your email correctly
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
                required
              />
              {submitted && !isPhonelValid(phone) && (
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
                required
              />
              {submitted && motivation.length <= 200 && (
                <div className="required-validate">
                  <span className="ricon-input-required" />
                  Please enter text more than 200 symbol
                </div>
              )}
            </div>

            <div className="privacy-zone">
              <form className="d-flex mobile-style-checked-zone">
                <input
                  type="checkbox"
                  id="ccc"
                  value={checkBox}
                  onChange={e => {
                    setCheckBox(e.target.checked);
                  }}
                />
                <label htmlFor="ccc">
                  {t('modal.herbyGrant')}{' '}
                  <a
                    href={`/static/privacy/${lng}.pdf`}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    GDPR-statement & {t('modal.privacy')}{' '}
                  </a>
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
        <button className="btn-cancel btn d-sm-none d-md-block" onClick={close}>
          {t('siteWide.cancel')}
        </button>
        <button className="btn-submit btn" onClick={submit} type="submit">
          {t('siteWide.submit')}
        </button>
      </Modal.Footer>
    </Modal>
  );
});
