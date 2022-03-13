import React, {Component} from 'react';
import Header from "./Header";
import Order from "./Order";
import MenuManagement from "./MenuManagement";

class App extends Component {

  state = {
    burgers: {},
    orders: {}
  }

  addBurger = (burger) => {
    const burgers = {...this.state.burgers}
    burgers[`burger${Date.now()}`] = burger
    this.setState({burgers})
  }


  render() {
    return (
      <div className='burger-paradise'>
        <div className='menu'>
          <Header
            title='Hot Burgers'
            amount={10}
            hot={true}
          />
        </div>
        <Order/>
        <MenuManagement addBurger={this.addBurger}/>
      </div>
    );
  }
}

export default App;