import React from 'react';
import './style.scss';

const Header = (props) => {
  const { count } = props;
  return (
    <div className="main">
      <div className="story">Store</div>
      <div className="logo">
        <i className="fa" style={{ fontSize: 30 }}>
          &#xf07a;
        </i>
        <span>
          {count}
        </span>
      </div>
    </div>
  );
};

export default Header;
