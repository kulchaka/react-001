import React from 'react';
import AddBurgerForm from "./AddBurgerForm";
import EditBurgerForm from "./EditBurgerForm";
import PropTypes from "prop-types";

const MenuManagement = (props) => {
  return (
    <div className='menu-admin'>
      <h2>Menu Management</h2>
      {
        Object.keys(props.burgers).map(key => {
          return <EditBurgerForm
            key={key}
            index={key}
            burger={props.burgers[key]}
            updBurgers={props.updBurgers}
            deleteBurger={props.deleteBurger}
          />
        })
      }
      <AddBurgerForm addBurger={props.addBurger}/>
      <button onClick={props.loadSampleBurgers}>Add Burgers</button>
    </div>
  );
};

MenuManagement.propTypes = {
  addBurger: PropTypes.func,
  deleteBurger: PropTypes.func,
  loadSampleBurgers: PropTypes.func,
  updBurgers: PropTypes.func,
  burgers: PropTypes.object
}

export default MenuManagement;