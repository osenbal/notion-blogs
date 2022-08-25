import React from 'react';
import ThumbJumbotron from '../../assets/images/thumbs/thumb-jumbotron.svg';
import './Jumbotron.modules.css';
import IconTwitter from '../../assets/images/icons/icon-twitter.svg';
import IconLinkedIn from '../../assets/images/icons/icon-linkedin.svg';

function Jumbotron() {
  return (
    <>
      <section className="container mt-5" id="jumbotron">
        <div className="d-flex flex-wrap justify-content-between align-items-center">
          <div className="col-12 col-md-7 pe-0 pe-md-5 d-flex flex-column gap-4">
            <div className="jumbotron__title">
              <p className="fs-1 fw-bold">Blog Posts</p>
              <p className="fs-2">I think so, this is it. </p>
            </div>
            <div className="jumbotron__content">
              <p>
                Design begins after I begin to think about how to present an
                experience most successfully, whether a button I put in can
                solve a problem. The only point in design is not ui design, if
                the user does not have a good experience at the end of the
                product, the design will be considered unsuccessful in my
                opinion.
              </p>
            </div>
            <div className="jumbotron__social-media d-flex justify-content-between align-items-center gap-md-4 gap-2">
              <a
                target="_blank"
                href="https://twitter.com/baale_mln"
                rel="noopener noreferrer"
              >
                <img src={IconTwitter} alt="Twitter" />
                Twitter
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/iqbal-maulana1703/"
                rel="noopener noreferrer"
              >
                <img src={IconLinkedIn} alt="LinkedIn" />
                LinkedIn
              </a>
              <a
                target="_blank"
                href="https://github.com/osenbal"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#ffffff"
                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                  />
                </svg>
                GITHUB
              </a>
            </div>
          </div>
          <div className="col-12 col-md-5">
            <img
              src={ThumbJumbotron}
              alt="thumbnail jumbotron"
              className="jumbotron__thumbnail d-md-block ms-auto img-fluid d-none"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Jumbotron;
