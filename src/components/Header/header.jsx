import React from 'react';
import './style.scss';

const Header = () => {
  return (
    <div className="main">
      <div className="story">Store</div>
      <div className="logo">
        <i class="fa" style={{ fontSize: 30 }}>
          &#xf07a;
        </i>
        <span className="badge badge-warning" id="lblCartCount">
          5
        </span>
      </div>
    </div>
  );
};

export default Header;
