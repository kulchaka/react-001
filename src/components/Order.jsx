import React from 'react';
import Shipment from "./Shipment";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import PropTypes from "prop-types";

const Order = (props) => {

  const renderList = (key) => {
    const isAvailable = props.burgers[key] && props.burgers[key].status === 'available'

    if (!props.burgers[key]) return null

    if (!isAvailable) {
      return (<CSSTransition
        classNames="order"
        key={key}
        timeout={{enter: 500, exit: 500}}
      >
        <li className="unavailable" key={key}> Sorry, {props.burgers[key].name} NOT AVAILABLE</li>
      </CSSTransition>)
    }
    return (
      <CSSTransition
        classNames="order"
        key={key}
        timeout={{enter: 500, exit: 500}}
      >
        <li key={key}>
        <span>
          <TransitionGroup component='span' className='count'>
            <CSSTransition
              classNames='count'
              key={props.orders[key]}
              timeout={{enter: 500, exit: 500}}
            >
              <span>{props.orders[key]} </span>
              </CSSTransition>
            </TransitionGroup>
           x burgers {props.burgers[key].name}
          <span> {props.orders[key] * props.burgers[key].price}</span>
          <button onClick={() => props.deleteBurgerFromOrder(key)} className="cancellItem">&times;</button>
        </span>
        </li>
      </CSSTransition>)
  }
  const orderIds = Object.keys(props.orders)
  const totalPrice = orderIds.reduce((prev, key) => {
    const isAvailable = props.burgers[key] && props.burgers[key].status === 'available'
    if (isAvailable) {
      return prev + props.burgers[key].price * props.orders[key]
    }
    return prev
  }, 0)

  return (
    <div className='order-wrap'>
      <h2>Your order:</h2>
      <TransitionGroup component="ul" className="order">
        {orderIds.map(e => renderList(e))}
      </TransitionGroup>
      {totalPrice ? (<Shipment totalPrice={totalPrice}/>) : (<div className="nothingSelected">Nothing Selected</div>)}
    </div>
  );
};

Order.propTypes = {
  burgers: PropTypes.object,
  orders: PropTypes.object,
  deleteBurgerFromOrder: PropTypes.func
}

export default Order;