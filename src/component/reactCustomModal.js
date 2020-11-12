import React, { Component } from 'react';
import Navbar from './Navbar';
import phone from '../icons/phone.svg';
import home from '../icons/home.svg';
import tv from '../icons/tv.svg';
import radio from '../icons/radio.svg'
import './modals.css'

const channelList = [
  { value: "in app", label: "In App" },
  { value: "mobile web", label: "Mobile Web" },
  { value: "desktop", label: "Desktop" },
  { value: "social media", label: "Social Media" },
  { value: "paid search", label: "Paid Search" },
  { value: "email", label: "Email" },
  { value: "lead form", label: "Lead Form" },
  { value: "landing page", label: "Landing Page" }
];
const attributionList = [
  { value: "visits", label: "Visits" },
  { value: "transactions", label: "Transactions" }
]

class ReactCustomModal extends Component {
  constructor() {
    super();
    this.state = {
      activeIndex: null,
      showOne: true,
      showTwo: false,
      showThree:false,
        channel: [],
        attribution: [],
        start: '',
        end: '',
        budget:'',
        impressions:'',
    };
  }

  handleClick = (index) => this.setState({ activeIndex: index });
  closeCustomModal = (e) => {
    this.props.onCloseModal(e);
  }

  nextOne=()=>{
    this.setState(()=>{
      return{showOne:false,
              showTwo:true,
              showThree:false}
    })
  }
  nextTwo=()=>{
    this.setState(()=>{
      return{showOne:false,
              showTwo:false,
              showThree:true}
    })
  }
  prevTwo=()=>{
    this.setState(()=>{
      return{showOne:true,
        showTwo:false,
        showThree:false}
    })
  }
  prevThree=()=>{
    this.setState(()=>{
      return{showOne:false,
        showTwo:true,
        showThree:false}
    })
  }
  handleChannel=(e) =>{
    const item = e.target.name;
    var checkedCopy = []
    if (this.state.channel.includes(item)) {
        checkedCopy = this.state.channel.filter(checked => checked !== item)
        this.setState({ channel: checkedCopy })
    } else {
        checkedCopy = [...this.state.channel, item]
        this.setState({ channel: checkedCopy })
    }
}
   
handleAttribution=(e) =>{
  const item = e.target.name;
  var checkedCopy = []
  if (this.state.attribution.includes(item)) {
      checkedCopy = this.state.attribution.filter(checked => checked !== item)
      this.setState({ attribution: checkedCopy })
  } else {
      checkedCopy = [...this.state.attribution, item]
      this.setState({ attribution: checkedCopy })
  }
}
  handleStart=e=>{
    this.setState({
      start:e.target.value
    })
  }
  handleEnd=e=>{
    this.setState({
      end:e.target.value
    })
  }
  handleBudget=e=>{
    this.setState({
      budget:e.target.value
    })
  }
  handleImpressions=e=>{
    this.setState({
      impressions:e.target.value
    })
  }
  handleSubmit=e=>{
    e.preventDefault();
    const formData = {
     channel : this.state.channel,
     attribution:this.state.attribution,
      start: this.state.start,
      end: this.state.end,
      budget:this.state.budget,
      impressions: this.state.impressions
  }
  console.log(formData)
  }
  render() {

    const {showOne,showTwo,showThree } = this.state;
    const clickables = [
      { name: "STEP 1 - SELECT CHANNEL" },
      { name: "STEP 2 - FLIGHT" },
      { name: "STEP 3 - BUDGET" }
    ];
    return (
      <div id="myModal" className="modals">
        <div className="modals-content">
          <div className="modals-header">
            <b>CAMPAIGN NAME</b>
            <h4>Manis Ad Mobile</h4>
            <ul className="items">
              {clickables.map((clickable, i) => {
                return <Navbar
                  key={clickable.name}
                  name={clickable.name}
                  index={i}
                  isActive={this.state.activeIndex === i}
                  onClick={this.handleClick}
                />
              })
              }
            </ul>
          </div>
         { showOne && <div className="modals-body" >
            <div className="row ">
              <div className="col-sm-8">
                <div className="row">
                  <div className="col-sm-3" ><img className='icons' alt='phone' src={phone} /></div>
                  <div className="col-sm-3"> <img className='icons' alt='home' src={home} /></div>
                  <div className="col-sm-3"> <img className='icons' alt='tv' src={tv} /></div>
                  <div className="col-sm-3"> <img className='icons' alt='radio' src={radio} /></div>
                  <div className="form-group">
                    <b className="m">TYPE(S) OF CHANNEL</b>
                    <div className="form-control border-0 p-0 m">                
                      {channelList.map((x, i) => {
                        return (
                          <label key={i} className="mr-2">
                            <input
                              type="checkbox"
                              name={x.label}                         
                              checked={this.state.channel.includes(x.label)}
                              onChange={this.handleChannel}
                            />{" "}
                            {x.label}
                          </label>
                        );
                      })}
                    </div>                 
                  </div>
                  <div className="form-group">
                    <b className="m">TRACKING OPTIONS</b>
                    <p className="m">Attribution Type</p>
                    <div className="form-control border-0 p-0 m">
                      {attributionList.map((x, i) => {
                        return (
                          <label key={i} className="mr-2">
                            <input
                              type="checkbox"
                              name={x.label}                        
                              checked={this.state.attribution.includes(x.label)}
                              onChange={this.handleAttribution}
                            />{" "}
                            {x.label}
                          </label>
                        );
                      })}
                    </div>                  
                  </div>
                </div>
              </div>
            </div>
            <span className="form-group">
              <input
                type="button"
                className="btn btn-outline-secondary btn-sm cancel"
                value="Cancel"
                onClick={this.closeCustomModal}
              />
            </span>
            <span className="form-group">
              <input
                type="button"
                className="btn btn-secondary btn-sm next"
                value="Next"
                onClick={this.nextOne}
              />
            </span>
          </div>}
        {showTwo &&  <div className="modals-body" >
            <div className="row ">
              <div className="col-sm-4">
                <div className="form-group">
                  <b className="m">Start </b>
                  <input
                    className="form-control m"
                    type="date"
                    name="start"
                    value={this.state.start}
                    onChange={this.handleStart}
                    required
                  />
                </div> 
              </div>
              <div className="col-sm-4">
                <div className="form-group">
                  <b className="m">End </b>
                  <input
                    className="form-control m"
                    type="date"
                    name="end"
                    value={this.state.end}
                    onChange={this.handleEnd}    
                    required         
                  />              
                </div>
              </div>
            </div>
            <span>
              <input
                type="button"
                className="btn btn-outline-secondary btn-sm prev"
                value="Prev"
                onClick={this.prevTwo}
              />
            </span>
            <span className="form-group">
              <input
                type="button"
                className="btn btn-outline-secondary btn-sm cancel1"
                value="Cancel"
                onClick={this.closeCustomModal}
              />
            </span>
            <span className="form-group">
              <input
                type="button"
                className="btn btn-secondary btn-sm next1"
                value="Next"
                onClick={this.nextTwo}
              />
            </span>
          </div>}
         {showThree && <div className="modals-body" >
            <div className="row ">
              <div className="col-sm-4">
              <div className="form-group">
                  <b className="m">Total Budget</b>
                  <input
                    className="form-control m"
                    type="text"
                    name="budget"
                    value={this.state.budget}
                    onChange={this.handleBudget}
                    required
                  />
                </div>
              </div>
              <div className="col-sm-4">
                <div className="form-group">
                  <b className="m">Total Impressions</b>
                  <input
                    className="form-control m"
                    type="text"
                    name="impressions"
                    value={this.state.impressions}
                    onChange={this.handleImpressions}
                    required
                  />
                </div>
              </div>
            </div>
            <span>
              <input
                type="button"
                className="btn btn-outline-secondary btn-sm prev"
                value="Prev"
                onClick={this.prevThree}
              />
            </span>
            <span className="form-group">
              <input
                type="button"
                className="btn btn-outline-secondary btn-sm cancel1"
                value="Cancel"
                onClick={this.closeCustomModal}
              />
            </span>
            <span className="form-group">
              <input
                type="button"
                className="btn btn-secondary btn-sm next1"
                value="Create Track"
                onClick={this.handleSubmit}
              />
            </span>
          </div>}     
        </div>         
      </div>
    );
  }
}

export default ReactCustomModal;

