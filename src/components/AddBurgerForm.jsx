import React, {Component, createRef} from 'react';

class AddBurgerForm extends Component {

  nameRef = createRef()
  priceRef = createRef()
  statusRef = createRef()
  descrRef = createRef()
  imageRef = createRef()

  createBurger = (event) => {
    event.preventDefault()
    console.log("create Burger")
    console.log(this.nameRef.current.value)
    console.log(this.priceRef.current.value)
    console.log(this.statusRef.current.value)
    console.log(this.descrRef.current.value)
    console.log(this.imageRef.current.value)
  }

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
        <select
          ref={this.statusRef}
          name="status"
          className="status"
        >
          <option value="available">Accessed</option>
          <option value="unavailable">NOT available</option>
        </select>
        <textarea ref={this.descrRef} name="descr" placeholder="Descr"/>
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
};

export default AddBurgerForm;
