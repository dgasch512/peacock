import React from 'react';

const Scroll = (props) => {
  return (
    <div style={{ overflowY: 'scroll', border: '1px solib black', height: '100%' }}>
      {props.children}
    </div>
  )
};

export default Scroll;