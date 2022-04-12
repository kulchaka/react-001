import React, {Component} from 'react';

class EditBurgerForm extends Component {
  render() {
    return (
      <div className="burger-edit">
        <input name="name" value={this.props.burger.name} type="text"/>
        <input name="price" value={this.props.burger.price} type="text"/>
        <select className="status" value={this.props.burger.status} name="status">
          <option value="available">Available</option>
          <option value="unavailable">Unavailable</option>
        </select>
        <textarea name="decr" value={this.props.burger.desc}/>
        <input name="image" type="text" value={this.props.burger.image}/>
      </div>
    );
  }
}

export default EditBurgerForm;