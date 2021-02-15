import React from 'react';
import '../styles/styles.css';

const Intro = () => {

  return (
    <div className="text">
      <h2 className="greeting">Hello, my name is <span class="neon-name">David Gasch</span></h2>
      <h2 className="intro">I'm the best developer my dog knows</h2>
    </div>
  )
}

export default Intro;