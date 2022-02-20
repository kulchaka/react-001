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

  getDataList = (e) => {
    this.setState({
      ...this.state,
      title: e.title,
      url: e.url,
      display: false
    })
  }

  chooseRestaurant =() => {
    console.log('You have chosen restaurant>>>: ', this.state.title)
  }

  render() {
    return (
      <div className='restaurant_select'>
        <div onClick={this.displayList} className='restaurant_select_top'>
          <div
            className='restaurant_select_top-header font-effect-outline'>
            {
              !this.state.title
                ? 'Select Restaurant'
                : `${this.state.title}`
            }
          </div>
          <div className='arrow_picker'>
            <div className='arrow_picker-up'></div>
            <div className='arrow_picker-down'></div>
          </div>
        </div>
        {
          this.state.display
            ?
            (<div className='restaurant_select_bottom'>
              <ul>
                {
                  restaurants.map(e => <li onClick={() => this.getDataList(e)} key={e.id}>{e.title}</li>)
                }
              </ul>
            </div>)
            :
            null

        }

        {
          !this.state.display && this.state.title
            ? <button onClick={this.chooseRestaurant}>Enter</button>
            : null
        }
      </div>
    );
  }
}

export default Landing;