import React, {Component} from 'react';
import restaurants from "../sample-restaurants";

class Landing extends Component {
  render() {
    return (
      <div className='restaurant_select'>
        <div className='restaurant_select_top'>
          <div className='restaurant_select_top-header font-effect-outline'>Select Restaurant</div>
          <div className='arrow_picker'>
            <div className='arrow_picker-up'></div>
            <div className='arrow_picker-down'></div>
          </div>
        </div>
        <div className='restaurant_select'>
          <ul>
            {
              restaurants.map(e => <li key={e.id}>{e.title}</li>)
            }
          </ul>
        </div>
        <button>Enter</button>
      </div>
    );
  }
}

export default Landing;