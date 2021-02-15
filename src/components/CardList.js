import React from 'react';
import '../styles/styles.css';

const CardList = () => {
  return (
    <div className="media">
      <h2 id="neon2" className="neon-name">Web development</h2>
      <div className="types">
        <div className="card">
          <div className="spot image"></div>
          <h5 className="subtitle">Portfolio</h5>
        </div>
        <div className="card">
          <div className="spot image"></div>
          <h5 className="subtitle">About me</h5>
        </div>
        <div className="card">
          <div className="spot image"></div>
          <h5 className="subtitle">Learning</h5>
        </div>
      </div>
    </div>
  )
}

export default CardList;