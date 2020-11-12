import React, {Component} from 'react';
import './modals.css'
class Navbar extends Component {
  handleClick = () => this.props.onClick(this.props.index)

  render() {
    return (
     
          <li
            className={this.props.isActive ? 'active' : ''}
            onClick={this.handleClick}>
            {this.props.name}
          </li>
        
    );
  }
}

export default Navbar;