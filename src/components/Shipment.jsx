import React, {Component} from 'react';

class Shipment extends Component {
  render() {
    const shipping = this.props.totalPrice > 0 && this.props.totalPrice < 500 ? 99 : 0
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
              this.props.totalPrice < 500
                ? `Please order ${500 - this.props.totalPrice} more for free shipping`
                : null
            }
          </div>
          <div className="total_wrap-final">Total price: {this.props.totalPrice}</div>
        </div>
      </div>
    );
  }
}

export default Shipment;