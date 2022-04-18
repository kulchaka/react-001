import React from 'react';
import PropTypes from "prop-types";

const Shipment = (props) => {

  const shipping = props.totalPrice > 0 && props.totalPrice < 500 ? 99 : 0
  const shippingNeon = shipping === 0 ? (
      <span className="font-effect-neon total_wrap-cheap">FREE</span>
    )
    : (
      <span>{shipping}</span>
    )

  return (
    <div className="total">
      <div className="total_wrap">
        <div>Shipping: {shippingNeon}</div>
        <div className="total_wrap-free">
          {
            props.totalPrice < 500
              ? `Please order ${500 - props.totalPrice} more for free shipping`
              : null
          }
        </div>
        <div className="total_wrap-final">Total price: {props.totalPrice}</div>
      </div>
    </div>
  );
};

Shipment.propTypes = {
  totalPrice: PropTypes.number
}

export default Shipment;