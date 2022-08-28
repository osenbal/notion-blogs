import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import IconTelephone from '../../../assets/images/icons/icon-telephone.svg';
import IconMail from '../../../assets/images/icons/icon-mail.svg';
import './Contact.css';

function Contact() {
  const fromRef = useRef<HTMLFormElement | null>(null);
  const [email, setEmail] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [popupMessage, setPopupMessage] = useState('');
  const [popupMessageError, setPopupMessageError] = useState('');
  const [popupStatus, setPopupStatus] = useState(false);
  const [popupStatusError, setPopupStatusError] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (email === '' || name === '' || message === '') {
      return;
    }

    const formData = {
      name,
      email,
      message,
    };

    emailjs
      .send(
        `${process.env.REACT_APP_EMAIL_SERVICE_ID}`,
        `${process.env.REACT_APP_EMAIL_TEMPLATE_ID}`,
        formData,
        `${process.env.REACT_APP_EMAIL_PUBLIC_KEY}`
      )
      .then(
        () => {
          fromRef.current?.reset();
          setPopupMessage('Message sent successfully');
          setPopupStatus(true);
          setInterval(() => {
            setPopupStatus(false);
          }, 5000);
        },
        () => {
          setPopupMessageError('Sorry, Failed to send message');
          setPopupStatusError(true);
          setInterval(() => {
            setPopupStatusError(false);
          }, 5000);
        }
      );
  };

  return (
    <>
      {popupStatus ? (
        <div className="popup  popup--show-success">
          <p className="popup__message">{popupMessage}</p>
        </div>
      ) : (
        <></>
      )}
      {popupStatusError ? (
        <div className="popup  popup--show-error">
          <p className="popup__message">{popupMessageError}</p>
        </div>
      ) : (
        <></>
      )}
      <main id="contact">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-12 col-md-5">
              <p className="fs-1 fw-semibold">Let's Talk</p>
              <p className="fs-6 fw-normal">
                Ask me or everything or just say hi...
              </p>

              <div className="contact__phone d-flex gap-3 mt-5 justify-content-start align-items-center">
                <img src={IconTelephone} alt="telephone" />
                <p className="fs-6 m-0">089999999999</p>
              </div>

              <div className="contact__email d-flex gap-3 mt-2 justify-content-start align-items-center">
                <img src={IconMail} alt="email" />
                <p className="fs-6 m-0">trickster.net215@gmail.com</p>
              </div>
            </div>
            <div className="col-12 col-md-7">
              <form className="mt-5 mt-md-0c contact__form" ref={fromRef}>
                <div className="form-group row">
                  <div className="col-12 col-md-6">
                    <label className="d-block fw-semibold" htmlFor="name">
                      NAME
                    </label>
                    <input
                      onChange={(e) => setName(e.target.value)}
                      className="w-100 form__name"
                      type="text"
                      name="name"
                      id="name"
                      aria-describedby="name"
                    />
                  </div>
                  <div className="col-12 col-md-6">
                    <label className="d-block fw-semibold" htmlFor="">
                      EMAIL
                    </label>
                    <input
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-100 form__email"
                      type="email"
                      id="email"
                      name="email"
                      aria-describedby="email"
                    />
                  </div>
                </div>
                <label className="d-block mt-5 fw-semibold" htmlFor="message">
                  MESSAGE
                </label>
                <textarea
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-100 contact__message"
                  name="message"
                  id="message"
                  aria-describedby="message"
                />

                <button
                  className="btn btn-secondary d-block w-100 mt-3"
                  type="submit"
                  onClick={handleSubmit}
                >
                  SEND
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Contact;
