import React from 'react';
import PropTypes from "prop-types";


const EditBurgerForm = (props) => {

  const handleEdite = (event) => {
    const updBurger = {
      ...props.burger,
      [event.currentTarget.name]:
        event.currentTarget.name === 'price'
          ? +event.currentTarget.value
          : event.currentTarget.value
    }
    props.updBurgers(props.index, updBurger)
  }

  return (
    <div className="burger-edit">
      <input onChange={handleEdite} name="name" value={props.burger.name} type="text"/>
      <input onChange={handleEdite} name="price" value={props.burger.price} type="text"/>
      <select onChange={handleEdite} className="status" value={props.burger.status} name="status">
        <option value="available">Available</option>
        <option value="unavailable">Unavailable</option>
      </select>
      <textarea onChange={handleEdite} name="decr" value={props.burger.desc}/>
      <input onChange={handleEdite} name="image" type="text" value={props.burger.image}/>
      <button onClick={() => props.deleteBurger(props.index)}>Delete Burger</button>
    </div>
  );
};

EditBurgerForm.propTypes = {
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

export default EditBurgerForm;