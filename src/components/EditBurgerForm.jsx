import React, {Component} from 'react';
import PropTypes from "prop-types";

class EditBurgerForm extends Component {

  static propTypes = {
    deleteBurger: PropTypes.func,
    index: PropTypes.string,
    updBurgers: PropTypes.func,
    burger: PropTypes.shape({
      desc: PropTypes.string,
      image: PropTypes.string,
      name: PropTypes.string,
      price: PropTypes.number,
      status: PropTypes.string,
    })
  }

  handleEdite = (event) => {
    const updBurger = {
      ...this.props.burger,
      [event.currentTarget.name]:
        event.currentTarget.name === 'price'
          ? +event.currentTarget.value
          : event.currentTarget.value
    }
    this.props.updBurgers(this.props.index, updBurger)
  }

  render() {
    return (
      <div className="burger-edit">
        <input onChange={this.handleEdite} name="name" value={this.props.burger.name} type="text"/>
        <input onChange={this.handleEdite} name="price" value={this.props.burger.price} type="text"/>
        <select onChange={this.handleEdite} className="status" value={this.props.burger.status} name="status">
          <option value="available">Available</option>
          <option value="unavailable">Unavailable</option>
        </select>
        <textarea onChange={this.handleEdite} name="decr" value={this.props.burger.desc}/>
        <input onChange={this.handleEdite} name="image" type="text" value={this.props.burger.image}/>
        <button onClick={() => this.props.deleteBurger(this.props.index)}>Delete Burger</button>
      </div>
    );
  }
}

export default EditBurgerForm;