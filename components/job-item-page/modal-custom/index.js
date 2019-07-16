import React, { useState } from 'react';
import './index.scss';
import { Modal } from 'react-bootstrap';
import { Input } from '../../common/input';
import { DropZoneCustom } from '../drop-zone';
import { withNamespaces } from '../../../services/i18n';

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
    onSubmit
  } = props;
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [text, setText] = useState('');
  const [checkBox, setCheckBox] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  const isFormValid = () => {
    return firstName && lastName && email && phone && text && checkBox;
  };

  const submit = () => {
    setSubmitted(true);

    if (isFormValid()) {
      onSubmit({
        firstName,
        lastName,
        email,
        phone,
        text,
        checkBox
      });
    }
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header>
        <Modal.Title>
          <div className="d-flex flex-column title-block-modal">
            <span className="sub-title">{t('modal.applying')}</span>
            <h4>
              {title}, {location}
            </h4>
            <span className="title-description">{t('modal.fillOut')}</span>
            <div className="d-flex upload-section">
              <DropZoneCustom onDrop={onDrop} file={file} sm />
              <div className="description-upload">
                {t('modal.upload')}
                <br />
                {t('modal.accept')}
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
              {/*// {submitted && !firstName && (*/}
              <div className="required-validate">
                <span className="ricon-input-required" />
                Please enter your first name
              </div>
              {/*)}*/}
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
              {submitted && !lastName && <div>Required.</div>}
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
              {submitted && !lastName && <div>Required.</div>}
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
              {submitted && !lastName && <div>Required.</div>}
            </div>
          </div>
          <div className="d-flex flex-column text-area">
            <Input
              type="textarea"
              label={t('modalLabel.tellUs')}
              placeholder={t('modalPlaceholder.enterText')}
              id="txt"
              value={text}
              onChange={setText}
            />

            <div className="privacy-zone">
              <form className="d-flex flex-row">
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
                <div>{submitted && !lastName && <div>Required.</div>}</div>
              </form>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button className="btn-cancel btn" onClick={close}>
          {t('siteWide.cancel')}
        </button>
        <button className="btn-submit btn" onClick={submit} type="submit">
          {t('siteWide.submit')}
        </button>
      </Modal.Footer>
    </Modal>
  );
});
