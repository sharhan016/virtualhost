import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import Dropdown from '../dropdown/DropDown'
import TempDropdown from '../dropdown/TempDropdown'
import companyImage from '../../assets/images/c1.png'
import './exhibition.css'

class ExhibitionDirectory extends Component {
  constructor(props) {
    super(props)
    console.log('in constructor PROPS, ',props);
  };
  
  handleSubmit = () => {
    this.props.history.push('/stalldisplay');
  }

  render() {

    console.log('in exhibitionary',this.props);
    return (
        <div>
        <div style={headStyle}>
        <h3 style={textStyle}>Exhibition Directory</h3>
      </div>
      <div className='dropdown-container'>
        <div className='dropdown'>
      <Dropdown title='Search by Category' items={items}  />
      <TempDropdown title='Search by Company' items={companyItems}  />
      </div>
      </div>
      <div className='line-shadow'></div>
      <div className='list-container'>

      <div className='company-container'>
      <img src={companyImage} alt='background' style={imageStyle} />
      <div onClick={this.handleSubmit}>
          <h5 style={headingStyle}> A&A EXPORTS</h5>
          <p style={infoStyle} >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>

      


      </div>
      </div>
    );
  }
}

export default withRouter(ExhibitionDirectory);

const headStyle = {
    width: '100%',
    height: 70,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: "#eee"
  }
  const textStyle = {
    flex: 1, 
    //paddingLeft: 5, 
    paddingTop: 5, 
    textAlign: 'center' ,
    fontSize: 30
  }
  const imageStyle = {
    width: 140, height: 90, 
    padding: 5,
    display: 'inline-block',
    border: '1px solid #ccc',
    borderRadius: 4,
    boxSizing: 'border-box'
  }
  const headingStyle = {
    marginLeft: 10,
    marginTop: 10
  }
  const infoStyle = {
    marginLeft: 10,
    fontSize: 12,
    fontWeight: 500
  }

  const items = [
    {
      id: 1,
      value: 'Company 1'
    },
    {
      id: 2,
      value: 'Company 2'
    },
    {
      id: 3,
      value: 'Company 3'
    },
  ]

  const companyItems = [
    {
      id: 1,
      value: 'Company 4'
    },
    {
      id: 2,
      value: 'Company 5'
    },
    {
      id: 3,
      value: 'Company 6'
    },
  ]