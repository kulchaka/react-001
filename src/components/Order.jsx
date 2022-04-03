import React, {Component} from 'react';

class Order extends Component {
  render() {
    const renderList = (key) => {
      const isAvailable = this.props.burgers[key] && this.props.burgers[key].status === 'available'
      if (!isAvailable) {
        return <li className="unavailable" key={key}> Sorry, {this.props.burgers[key].name} NOT AVAILABLE</li>
      }
      return <li key={key}>
        <span>
          <span>{this.props.orders[key]} </span>
           x burgers {this.props.burgers[key].name}
          <span> { this.props.orders[key] * this.props.burgers[key].price}</span>
          <button className="cancellItem">&times;</button>
        </span>
      </li>
    }

    const orderIds = Object.keys(this.props.orders)
    const totalPrice = orderIds.reduce((prev, key) => {
      const isAvailable = this.props.burgers[key] && this.props.burgers[key].status === 'available'
      if (isAvailable) {
        return prev + this.props.burgers[key].price * this.props.orders[key]
      }
      return prev
    }, 0)
    return (
      <div className='order-wrap'>
        <h2>Your order:</h2>
        <ul className="order">
          {
            orderIds.map(e => renderList(e))
          }
        </ul>
        <div className="total">
          <div className="total_wrap">
            {
              totalPrice
                ? <div className="total_wrap-final">Total price: {totalPrice}</div>
                : null
            }
          </div>
        </div>
      </div>
    );
  }
}

export default Order;