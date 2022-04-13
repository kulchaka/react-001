import React, {Component} from 'react';

class EditBurgerForm extends Component {
  handleEdite = (event) => {
    const updBurger = {
      ...this.props.burger,
      [event.currentTarget.name]: event.currentTarget.value
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
      </div>
    );
  }
}

export default EditBurgerForm;