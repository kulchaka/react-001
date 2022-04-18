import React from 'react';
import PropTypes from "prop-types";

const Burger = (props) => {

  const  handleClick = () => {
    props.addToOrder(props.index)
  }

  const {name, price, image, desc, status} = props.details
  const isAvailable = status === 'available'

  return (
    <li className="menu-burger">
      <div className="image-container">
        <img src={image} alt={name}/>
      </div>
      <div className="burger-details">
        <h3 className="burger-name">
          {name}
          <span className="price">{price}</span>
        </h3>
        <p>{desc}</p>
        <button
          onClick={handleClick}
          disabled={!isAvailable}
          className="buttonOrder">
          {isAvailable ? 'Order' : 'NOT Available'}
        </button>
      </div>
    </li>
  );
};

Burger.propTypes = {
  addToOrder: PropTypes.func,
  index: PropTypes.string,
  details: PropTypes.shape({
    desc: PropTypes.string,
    image: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    status: PropTypes.string
  })
}

export default Burger;