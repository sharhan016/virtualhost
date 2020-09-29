import React, { Component } from 'react';
import TextField from '../TextField'
import companyImage from '../../assets/images/c1.png'
import DropDown from '../dropdown/DropDown'
import './infobox.css'


const imageStyle = {
  width: 160, height: 104, 
  display: 'inline-block',
  border: '1px solid #ccc',
  borderRadius: 4,
  boxSizing: 'border-box'
}
const headStyle = {
  marginLeft: 10,
  marginTop: 10,
  fontSize: 20
}
const infoStyle = {
  marginLeft: 10,
  fontSize: 12
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
const items2 = [
  {
    id: 4,
    value: 'Company 4'
  },
  {
    id: 5,
    value: 'Company 5'
  },
  {
    id: 6,
    value: 'Company 6'
  },
]

class InfoSearchBox extends Component {
  
  render() {
    return (
      <div> 
        
        <form className='searchContainer' noValidate autoComplete="off">
        <TextField />
        <DropDown title="Main Product Category" items={items} />
        
        <DropDown title="Sub Products" items={items2}  />
        </form>
        
        <div className='resultContainer'>
        <div className='itemContainer'> 
        <img src={companyImage} alt='background' style={imageStyle} />
        <div>
          <h3 style={headStyle}> A&A EXPORTS</h3>
          <p style={infoStyle} >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        </div>

        <div className='itemContainer'> 
        <img src={companyImage} alt='background' style={imageStyle} />
        <div>
          <h3 style={headStyle}> A&A EXPORTS</h3>
          <p style={infoStyle} >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        </div>

        <div className='itemContainer'> 
        <img src={companyImage} alt='background' style={imageStyle} />
        <div>
          <h3 style={headStyle}> A&A EXPORTS</h3>
          <p style={infoStyle} >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        </div>
        
      
        </div>
        
        </div>


    );
  }
}

export default InfoSearchBox;
