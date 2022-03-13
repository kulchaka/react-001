import React, {Component} from 'react';
import AddBurgerForm from "./AddBurgerForm";

class MenuManagement extends Component {
  render() {
    return (
      <div className='menu-admin'>
        <h2>Menu Management</h2>
        <AddBurgerForm addBurger={this.props.addBurger}/>
      </div>
    );
  }
}

export default MenuManagement;