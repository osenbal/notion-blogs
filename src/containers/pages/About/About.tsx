import React from 'react';
import Image from '../../../assets/images/thumbs/thumb-p.jpg';
import './About.css';

function About() {
  return (
    <>
      <main id="about">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-12 col-md-6 order-2 order-md-1">
              <p className="fs-2 mt-4 mt-md-0 fw-semibold text-center text-md-start">
                Hello everyone
              </p>
              <p className="fs-5 text-center text-md-start">
                My name is Iqbal Maulana, I am a front end web developer, I have
                experience in building web applications using React JS. I also
                have little experience in building mobile applications using
                React Native. I am currently learning Node JS and Express JS to.
              </p>
              <p className="fs-4 fw-normal  text-center text-md-start">
                Thankyou for visiting this web.
              </p>
            </div>
            <div className="col-12 col-md-6 order-1 order-md-2">
              <img
                className="w-100 img-fluid about__image d-block ms-md-auto mx-auto mx-md-0"
                src={Image}
                alt="p"
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default About;
