import React, {Component} from 'react';

import './Header.scss';

class Header extends Component {
  
    constructor(props) {
    super(props);

    this.state = {}

  }

  render() {
    const {toggleNav} = this.props;
    return (
      <header>
          <div className="header_elements">
            <div className="header_logo">McCann</div>
            <div className="header_action">
                <div className="flags">flags</div>
                <div className="navToggle" onClick={toggleNav} >nav</div>
            </div>
          </div>
      </header>
    )
  }
}

export default Header
