import React, { Component, createRef } from "react";

class AddBurgerForm extends Component {
  nameRef = createRef();
  priceRef = createRef();
  statusRef = createRef();
  descrRef = createRef();
  imageRef = createRef();

  createBurger = (event) => {
    event.preventDefault();
    const burger = {
      name: this.nameRef.current.value,
      price: +this.priceRef.current.value,
      status: this.statusRef.current.value,
      descr: this.descrRef.current.value,
      image: this.imageRef.current.value,
    };
    this.props.addBurger(burger);
    event.currentTarget.reset();
  };

  render() {
    return (
      <form className="burger-edit" onSubmit={this.createBurger}>
        <input
          ref={this.nameRef}
          type="text"
          name="name"
          placeholder="Name"
          autoComplete="off"
        />
        <input
          ref={this.priceRef}
          type="text"
          name="price"
          placeholder="Price"
          autoComplete="off"
        />
        <select ref={this.statusRef} name="status" className="status">
          <option value="available">Accessed</option>
          <option value="unavailable">NOT available</option>
        </select>
        <textarea ref={this.descrRef} name="descr" placeholder="Descr" />
        <input
          ref={this.imageRef}
          type="text"
          name="image"
          placeholder="Image"
          autoComplete="off"
        />
        <button type="submit">+ Add on Menu</button>
      </form>
    );
  }
}

export default AddBurgerForm;
