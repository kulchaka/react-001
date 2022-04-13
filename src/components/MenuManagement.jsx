import React, {Component} from 'react';
import AddBurgerForm from "./AddBurgerForm";
import EditBurgerForm from "./EditBurgerForm";

class MenuManagement extends Component {
  render() {
    return (
      <div className='menu-admin'>
        <h2>Menu Management</h2>
        {
          Object.keys(this.props.burgers).map(key => {
            return <EditBurgerForm
              key={key}
              index={key}
              burger={this.props.burgers[key]}
              updBurgers={this.props.updBurgers}
              deleteBurger={this.props.deleteBurger}
            />
          })
        }
        <AddBurgerForm addBurger={this.props.addBurger}/>
        <button onClick={this.props.loadSampleBurgers}>Add Burgers</button>
      </div>
    );
  }
}

export default MenuManagement;