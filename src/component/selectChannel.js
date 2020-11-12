import React, { Component } from 'react';
import { render } from 'react-dom';
import ReactCustomModal from './reactCustomModal';
import './modals.css';

class Selectchannel extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false
    };
  }

  showModal = (e) => {
    this.setState(prevState => ({
        showModal: !prevState.showModal 
    }));
   
  }



  render() {
    return (
      <div>
      
        <button onClick={this.showModal}>
          Click here
        </button>

        {this.state.showModal && 
          <ReactCustomModal 
            onCloseModal={this.showModal} 
          />
        }

      </div>
    );
  }
}

export default Selectchannel
