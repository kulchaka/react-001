import React, {Component} from 'react';

class EditBurgerForm extends Component {
  render() {
    return (
      <div className="burger-edit">
        <input value={this.props.burger.name}  type="text"/>
      </div>
    );
  }
}

export default EditBurgerForm;