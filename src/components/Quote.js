import React from 'react';
import '../styles/styles.css';

const Quote = () => {
  return (
    <div class="quote-section">
      <div id="quote-1"></div>
      <div id="quote-2">
        <blockquote class="quote">{`Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut magni accusantium quidem.\n -This Guy`}</blockquote>
      </div>
  </div>
  )
}

export default Quote;