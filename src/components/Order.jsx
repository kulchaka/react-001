import React, {Component} from 'react';

class Order extends Component {
  render() {
    const orderIds = Object.keys(this.props.orders)
    const totalPrice = orderIds.reduce((prev, key) => {
      return prev + this.props.burgers[key].price * this.props.orders[key]
    }, 0)
    return (
      <div className='order-wrap'>
        <h2>Your order:</h2>
        <ul className="order">
          {
            orderIds.map(e => <li key={e}>{this.props.burgers[e].name} x {this.props.orders[e]}</li>)
          }
        </ul>
        <p>{totalPrice}</p>
      </div>
    );
  }
}

export default Order;