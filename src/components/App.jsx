import React, {Component} from 'react';
import Header from "./Header";
import Order from "./Order";
import MenuManagement from "./MenuManagement";
import sampleBurgers from "../sample-burgers";
import Burger from "./Burger";

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

  loadSampleBurgers = () => {
    this.setState({burgers: sampleBurgers})
  }


  addToOrder = (key) => {
    const order = {...this.state.orders}
    order[key] = order[key] + 1 || 1
    this.setState({orders: order})
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
          {
            Object.keys(this.state.burgers).map(key => {
              return <Burger addToOrder={this.addToOrder} index={key} key={key} details={this.state.burgers[key]}/>
            })
          }
        </div>
        <Order/>
        <MenuManagement
          addBurger={this.addBurger}
          loadSampleBurgers={this.loadSampleBurgers}
        />
      </div>
    );
  }
}

export default App;