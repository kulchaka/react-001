import React, {Component} from 'react';
import AddBurgerForm from "./AddBurgerForm";
import EditBurgerForm from "./EditBurgerForm";
import PropTypes from "prop-types";

class MenuManagement extends Component {

  static propTypes = {
    addBurger: PropTypes.func,
    deleteBurger: PropTypes.func,
    loadSampleBurgers: PropTypes.func,
    updBurgers: PropTypes.func,
    burgers: PropTypes.object
  }

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