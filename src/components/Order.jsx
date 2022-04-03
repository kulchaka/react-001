import React, {Component} from 'react';

class Order extends Component {
  render() {
    const renderList = (key) => {
      const isAvailable = this.props.burgers[key] && this.props.burgers[key].status === 'available'
      if (!isAvailable) {
        return  <li key={key}>{this.props.burgers[key].name} NOT AVAILABLE</li>
      }
      return <li key={key}>{this.props.burgers[key].name} x {this.props.orders[key]}</li>
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
        <p>{totalPrice || null}</p>
      </div>
    );
  }
}

export default Order;