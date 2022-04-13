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
    const localStorageRef = localStorage.getItem(this.props.match.params.restaurantId)
    if (localStorageRef) {
      this.setState({orders: JSON.parse(localStorageRef)})
    }

    this.ref = base.syncState(`${this.props.match.params.restaurantId}/burgers`,
      {
        context: this,
        state: 'burgers'
      }
    )
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    localStorage.setItem(this.props.match.params.restaurantId, JSON.stringify(this.state.orders))
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

  updBurgers = (key, updBurger) => {
    const burgers = {...this.state.burgers}
    burgers[key] = updBurger
    this.setState({burgers})
  }

  deleteBurger = (key) => {
    const burgers = {...this.state.burgers}
    burgers[key] = null
    this.setState({burgers})
  }

  deleteBurgerFromOrder = (key) => {
    const orders = {...this.state.orders}
    delete orders[key]
    this.setState({orders})
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
        <Order orders={this.state.orders} burgers={this.state.burgers} deleteBurgerFromOrder={this.deleteBurgerFromOrder}/>
        <MenuManagement
          addBurger={this.addBurger}
          loadSampleBurgers={this.loadSampleBurgers}
          burgers={this.state.burgers}
          updBurgers={this.updBurgers}
          deleteBurger={this.deleteBurger}
        />
      </div>
    );
  }
}

export default App;