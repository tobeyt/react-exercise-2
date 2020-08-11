import React from 'react';
import './style.scss';

const Header = (props) => {
  const { count } = props;
  return (
    <div className="main">
      <div className="story">Store</div>
      <div className="logo">
        <i class="fa" style={{ fontSize: 30 }}>
          &#xf07a;
        </i>
        <span className="badge badge-warning" id="lblCartCount">
          {count}
        </span>
      </div>
    </div>
  );
};

export default Header;
