import React, {Component} from 'react';

class AddBurgerForm extends Component {

  createBurger = (event) => {
    event.preventDefault()
    console.log("create Burger")
  }

  render() {
    return (
      <form className="burger-edit" onSubmit={this.createBurger}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          autoComplete="off"
        />
        <input
          type="text"
          name="price"
          placeholder="Price"
          autoComplete="off"
        />
        <select
          name="status"
          className="status"
        >
          <option value="available">Accessed</option>
          <option value="unavailable">NOT available</option>
        </select>
        <textarea name="decr" placeholder="Desc"/>
        <input
          type="text"
          name="image"
          placeholder="Image"
          autoComplete="off"
        />
        <button type="submit">+ Add on Menu</button>
      </form>
    );
  }
};

export default AddBurgerForm;
