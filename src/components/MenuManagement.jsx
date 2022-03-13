import React, {Component} from 'react';
import AddBurgerForm from "./AddBurgerForm";

class MenuManagement extends Component {
  render() {
    return (
      <div className='menu-admin'>
        <h2>Menu Management</h2>
        <AddBurgerForm addBurger={this.props.addBurger}/>
        <button onClick={this.props.loadSampleBurgers}>Add Burgers</button>
      </div>
    );
  }
}

export default MenuManagement;