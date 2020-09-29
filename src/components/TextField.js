import React from 'react';
import './infosearchbox/infobox.css'

const textStyle = {
    width: 220,
    height: 30,
    margin: '8px 0',
    paddingLeft: 10,
    display: 'inline-block',
    border: '1px solid #ccc',
    borderRadius: 4,
    boxSizing: 'border-box'
}

const TextField = (props) => {
    return(
        <form style={{margin: 0}}>
            <input type="text" name="name" placeholder="Enter Company Name" style={textStyle} />
        </form>
    );
}

export default TextField

/*

width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;

*/