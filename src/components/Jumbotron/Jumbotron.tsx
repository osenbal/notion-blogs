import React from 'react';
import ThumbJumbotron from '../../assets/images/thumbs/thumb-jumbotron.svg';
import './Jumbotron.modules.css';
import IconTwitter from '../../assets/images/icons/icon-twitter.svg';
import IconMedium from '../../assets/images/icons/icon-medium.svg';
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
              <a href="https://www.twitter.com">
                <img src={IconTwitter} alt="Twitter" />
                Twitter
              </a>
              <a href="https://www.twitter.com">
                <img src={IconLinkedIn} alt="LinkedIn" />
                LinkedIn
              </a>
              <a href="https://www.twitter.com">
                <img src={IconMedium} alt="Medium" />
                Medium
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
