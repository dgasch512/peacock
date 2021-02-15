import React from 'react';
import '../styles/contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { far } from '@fortawesome/free-regular-svg-icons';
// import { fas } from '@fortawesome/free-solid-svg-icons';
import { faMap, faMobileAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';


const Contact = () => {
  return (
    <div className="main">
        <ul className="content">
            <li className="contact address">
                <FontAwesomeIcon icon={[far, faMap]}></FontAwesomeIcon>
                <h2 id="text address-text">{`515 515 Congress Ave.,<br>
                Austin, TX 78701`}</h2>
                {/* <!-- <hr class="brk"> --> */}
            </li>
            <li className="contact phone">
                <FontAwesomeIcon icon={[far, faMobileAlt ]}></FontAwesomeIcon>
                <h2 id="text phone-text">512-592-9717</h2>
                {/* <!-- <hr class="brk"> --> */}
              </li>
            <li className="contact email">
              <FontAwesomeIcon icon={[far, faEnvelope]}></FontAwesomeIcon>
              <h2 id="text email-text">gaschdav208@gmail.com</h2>
              {/* <!-- <hr class="brk"> --> */}
            </li>
            <li className="contact git">
                <FontAwesomeIcon icon={[far, faEnvelope]}></FontAwesomeIcon>
                <h2 id="text git-text">github.com/dgasch512</h2>
            </li>

          </ul>
      </div>
  )
}

export default Contact;