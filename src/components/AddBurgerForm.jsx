import React, {useState} from "react";
import PropTypes from "prop-types";

const AddBurgerForm = (props) => {

  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [status, setStatus] = useState('available')
  const [desc, setDesc] = useState('')
  const [image, setImage] = useState('')


  const createBurger = (event) => {
    event.preventDefault();
    const burger = {
      name,
      price: +price,
      status,
      desc,
      image,
    };
    props.addBurger(burger);
    setName('')
    setPrice('')
    setStatus('available')
    setDesc('')
    setImage('')
    event.currentTarget.reset();
  };

  return (
    <form className="burger-edit" onSubmit={createBurger}>
      <input
        value={name}
        onChange={(e) => setName(e.currentTarget.value)}
        type="text"
        name="name"
        placeholder="Name"
        autoComplete="off"
      />
      <input
        onChange={(e) => setPrice(e.currentTarget.value)}
        type="text"
        name="price"
        placeholder="Price"
        autoComplete="off"
      />
      <select
        onChange={(e) => setStatus(e.target.value)}
        name="status"
        className="status">
        <option value="available">Accessed</option>
        <option value="unavailable">NOT available</option>
      </select>
      <textarea
        onChange={(e) => setDesc(e.currentTarget.value)}
        name="desc"
        placeholder="Desc"/>
      <input
        onChange={(e) => setImage(e.currentTarget.value)}
        type="text"
        name="image"
        placeholder="Image"
        autoComplete="off"
      />
      <button type="submit">+ Add on Menu</button>
    </form>
  );
};

AddBurgerForm.propTypes = {
  addBurger: PropTypes.func
}

export default AddBurgerForm;
