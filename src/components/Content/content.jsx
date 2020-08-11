import React from 'react';
import placeholder from '../../assets/product_image_placeholder.png';
import './style.scss';

const Content = (props) => {
  const { title, data, addCard } = props;

  return (
    <>
      <div className="title">{title}</div>
      <div className="phone-content">
        {data.map((cur) => (
          <div className="phone">
            <div className="phone-title">{cur.category}</div>
            <img src={placeholder} alt="placeholder" />
            <div className="price-and-addbutton">
              <div className="phone-price">{cur.price}</div>
              <button onClick={addCard}>add to cart</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Content;
