import React from 'react';
import {string} from "prop-types";

const Header = (props) => (
  <header className='top'>
    <div className='wrap'>
      <div className='header-content'>
        <div className="header-rating">
          <div className='header-rating_tag'>Rating</div>
          <div className='header-title-theme header-rating_icon'><span role="img" aria-labelledby="stars">⭐️⭐️⭐️⭐️⭐️</span></div>
        </div>
        <div className="header-divider"></div>
        <h1 className='font-effect-fire-animation'>{props.title}</h1>
        <h3>
            <span>
              Fast Delivery
              <span className='sub-header'> Burgers</span>
            </span>
        </h3>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  title: string.isRequired
}

export default Header;
