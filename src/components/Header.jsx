import React, {Component} from 'react';

class Header extends Component {
  render() {
    return (
      <header className='top'>
        <div className='wrap'>
          <div className='header-content'>
            <div className="header-rating">
              <div className='header-rating_tag'>Rating</div>
              <div className='header-rating_icon'>+++</div>
            </div>
            <div className="header-divider"></div>
            <h1 className='font-effect-fire-animation'>Hot Burgers</h1>
            <h3>
            <span>
              Fast Delivery
              <span className='sub-header'> Burgers</span>
            </span>
            </h3>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;

