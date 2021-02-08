import React from 'react';
import '../styles/styles.css';

const CardList = () => {
  return (
    <div class="media">
      <h2 id="neon2" class="neon-name">Web development</h2>
      <div class="types">
        <div class="card">
          <div class="spot image"></div>
          <h5 class="subtitle">Portfolio</h5>
        </div>
        <div class="card">
          <div class="spot image"></div>
          <h5 class="subtitle">About me</h5>
        </div>
        <div class="card">
          <div class="spot image"></div>
          <h5 class="subtitle">Learning</h5>
        </div>
      </div>
    </div>
  )
}

export default CardList;