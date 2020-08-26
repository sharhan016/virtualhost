import React from 'react';
import store from '../../assets/images/storelist.png'
import './storelist.css'

const imageStyle = {
    width: 2047, height: 980, position: 'absolute', right: 0, left: 0
  }

const StoreList = (props) => {
return(
    <div className='custom'>
        <img src={store} alt='background' style={imageStyle} />
                    <div className='stall' onClick={() => props.history.push('/stalldisplay')}> </div>
                        {/* {/* <p >Stalls</p> */}
                    </div>
            
);
}

export default StoreList

