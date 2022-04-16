import React, {Component} from 'react';
import PropTypes from "prop-types";

class Burger extends Component {

  static propTypes = {
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

  handleClick = () => {
    this.props.addToOrder(this.props.index)
  }

  render() {

    const {name, price, image, desc, status} = this.props.details
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
            onClick={this.handleClick}
            disabled={!isAvailable}
            className="buttonOrder">
            {isAvailable ? 'Order' : 'NOT Available'}
          </button>
        </div>
      </li>
    );
  }
}

export default Burger;