import React, {Component} from 'react';
import restaurants from "../sample-restaurants";

class Landing extends Component {
  state = {
    display: false,
    title: '',
    url: ''
  }

  displayList = () => {
    this.setState({
      ...this.state,
      display: !this.state.display
    })
  }

  render() {
    // console.log(this)
    return (
      <div className='restaurant_select'>
        <div onClick={this.displayList} className='restaurant_select_top'>
          <div className='restaurant_select_top-header font-effect-outline'>Select Restaurant</div>
          <div className='arrow_picker'>
            <div className='arrow_picker-up'></div>
            <div className='arrow_picker-down'></div>
          </div>
        </div>
        {
          this.state.display ?
            (<div className='restaurant_select_bottom'>
              <ul>
                {
                  restaurants.map(e => <li key={e.id}>{e.title}</li>)
                }
              </ul>
            </div>)
            :
            null

        }

        <button>Enter</button>
      </div>
    );
  }
}

export default Landing;