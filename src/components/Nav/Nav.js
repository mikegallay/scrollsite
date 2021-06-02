import React, {Component} from 'react';

import './Nav.scss';

class Nav extends Component {
  
    constructor(props) {
    super(props);

    this.state = {}

  }

  render() {
    return (
      <nav className={this.props.active ? "active" : ""}>
          <ul className="nav_holder">
            <li>Work</li>
            <li>About</li>
            <li>McCann NA</li>
            <li>Contact</li>
          </ul>
      </nav>
    )
  }
}

export default Nav
