import React from 'react';
import '../styles/contact.css';

const Contact = () => {
  return (
    <div className="main">
        <ul className="content">
            <li className="contact address">
                <i className="address-icon far fa-map"></i>
                <h2 id="text address-text">{`515 515 Congress Ave.,<br>
                Austin, TX 78701`}</h2>
                {/* <!-- <hr class="brk"> --> */}
            </li>
            <li className="contact phone">
                <i className="fas fa-mobile-alt"></i>
                <h2 id="text phone-text">512-592-9717</h2>
                {/* <!-- <hr class="brk"> --> */}
              </li>
            <li className="contact email">
              <i className="far fa-envelope"></i>
              <h2 id="text email-text">gaschdav208@gmail.com</h2>
              {/* <!-- <hr class="brk"> --> */}
            </li>
            <li className="contact git">
                <i className="fab fa-github"></i>
                <h2 id="text git-text">github.com/dgasch512</h2>
            </li>

          </ul>
      </div>
  )
}

export default Contact;