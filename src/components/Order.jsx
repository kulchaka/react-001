import React, {Component} from 'react';
import Shipment from "./Shipment";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import PropTypes from "prop-types";

class Order extends Component {

  static propTypes = {
    burgers: PropTypes.object,
    orders: PropTypes.object,
    deleteBurgerFromOrder: PropTypes.func
  }

  render() {
    const renderList = (key) => {
      const isAvailable = this.props.burgers[key] && this.props.burgers[key].status === 'available'

      if (!this.props.burgers[key]) return null

      if (!isAvailable) {
        return (<CSSTransition
          classNames="order"
          key={key}
          timeout={{enter: 500, exit: 500}}
        >
          <li className="unavailable" key={key}> Sorry, {this.props.burgers[key].name} NOT AVAILABLE</li>
        </CSSTransition>)
      }
      return (<CSSTransition
        classNames="order"
        key={key}
        timeout={{enter: 500, exit: 500}}
      >
        <li key={key}>
        <span>
          <TransitionGroup component='span' className='count'>
            <CSSTransition
              classNames='count'
              key={this.props.orders[key]}
              timeout={{enter: 500, exit: 500}}
            >
              <span>{this.props.orders[key]} </span>
              </CSSTransition>
            </TransitionGroup>
           x burgers {this.props.burgers[key].name}
          <span> {this.props.orders[key] * this.props.burgers[key].price}</span>
          <button onClick={() => this.props.deleteBurgerFromOrder(key)} className="cancellItem">&times;</button>
        </span>
        </li>
      </CSSTransition>)
    }

    const orderIds = Object.keys(this.props.orders)
    const totalPrice = orderIds.reduce((prev, key) => {
      const isAvailable = this.props.burgers[key] && this.props.burgers[key].status === 'available'
      if (isAvailable) {
        return prev + this.props.burgers[key].price * this.props.orders[key]
      }
      return prev
    }, 0)
    return (<div className='order-wrap'>
      <h2>Your order:</h2>
      <TransitionGroup component="ul" className="order">
        {orderIds.map(e => renderList(e))}
      </TransitionGroup>
      {totalPrice ? (<Shipment totalPrice={totalPrice}/>) : (<div className="nothingSelected">Nothing Selected</div>)}
    </div>);
  }
}

export default Order;