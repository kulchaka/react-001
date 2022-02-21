import React, {Component} from 'react';
import Header from "./Header";
import Order from "./Order";
import MenuManagement from "./MenuManagement";

class App extends Component {
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
        <MenuManagement/>
      </div>
    );
  }
}

export default App;