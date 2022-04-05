import React, {Component} from 'react';
import Header from "./Header";
import Order from "./Order";
import MenuManagement from "./MenuManagement";
import sampleBurgers from "../sample-burgers";
import Burger from "./Burger";
import base from "../base";

class App extends Component {

  state = {
    burgers: {},
    orders: {}
  }

  componentDidMount() {
    this.ref = base.syncState(`${this.props.match.params.restaurantId}/burgers`,
      {
        context: this,
        state: 'burgers'
      }
      )
  }

  componentWillUnmount() {
    base.removeBinding(this.ref)
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
        <Order orders={this.state.orders} burgers={this.state.burgers}/>
        <MenuManagement
          addBurger={this.addBurger}
          loadSampleBurgers={this.loadSampleBurgers}
        />
      </div>
    );
  }
}

export default App;