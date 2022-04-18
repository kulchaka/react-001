import React, {useState} from 'react';
import restaurants from "../sample-restaurants";
import PropTypes from "prop-types";


const Landing = (props) => {

  const [display, toggleDisplay] = useState(false)
  const [title, setTitle] = useState('')
  const [url, setUrl] = useState('')

  const displayList = () => {
    toggleDisplay(!display)
  }

  const getDataList = (e) => {
    setTitle(e.title)
    setUrl(e.url)
    toggleDisplay(false)
  }

  const chooseRestaurant = () => {
    props.history.push(`/restaurant/${url}`)
  }

  return (
    <div className='restaurant_select'>
      <div onClick={displayList} className='restaurant_select_top'>
        <div
          className='restaurant_select_top-header font-effect-outline'>
          {
            !title
              ? 'Select Restaurant'
              : `${title}`
          }
        </div>
        <div className='arrow_picker'>
          <div className='arrow_picker-up'></div>
          <div className='arrow_picker-down'></div>
        </div>
      </div>
      {
        display
          ?
          (<div className='restaurant_select_bottom'>
            <ul>
              {
                restaurants.map(e => <li onClick={() => getDataList(e)} key={e.id}>{e.title}</li>)
              }
            </ul>
          </div>)
          :
          null

      }

      {
        !display && title
          ? <button onClick={chooseRestaurant}>Enter</button>
          : null
      }
    </div>
  );
};

Landing.propTypes = {
  history: PropTypes.object
}

export default Landing;

