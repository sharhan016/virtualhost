import React from 'react';
import './tileblock.css'
import image from '../../assets/images/logo2.png'
const TileBlock = (props) => {

    return(
        <div className='containerModal'>
            <div className='imageLogo'>
                <img src={image} height={190} width={200} alt='image' />
            </div>
            <div className='title' style={{padding: 0}}>
            <h5 className='head' style={{color: 'black'}}>{props.title}</h5>
            </div>
            <div>
            <p className='info'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
        </div>
    );
}

export default TileBlock