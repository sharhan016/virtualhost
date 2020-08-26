import React, { Component } from 'react';
import Background from '../../assets/images/stall1.jpg'
//import Modal from '../modelbox/ModelBox'
import TileBlock from '../tileblock/TileBlock'
import AppBar from '../AppBar'
import './stallDisplay.css'
import Modal from '@material-ui/core/Modal';
import Dropdown from 'react-dropdown';

const options = [
    'one', 'two', 'three'
  ];
  const defaultOption = options[0];

const imageStyle = {
    width: 2047, height: 890, position: 'absolute', right: 0, left: 0
  }
  const headStyle = {
    width: '100%',
    height: 50,
    display:'flex'
  }
  const headStyle2 = {
    backgroundColor: 'gray',
    width: '100%',
    height: 60,
    display:'flex',
    marginBottom: 10
  }
  const dropdownStyle = {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 40 
  }

const body = (
    <div className='modal-div'>
    
        <div style={headStyle}>
            <h6 style={{flex: 1, paddingLeft: 10}}>Product Details</h6>
            <p style={{marginRight: 10}}>Cl</p>
        </div>
        <div style={headStyle2}>
            <p style={{paddingLeft: 20, fontSize: 18,marginRight: 20}}>Filter by</p>
            <Dropdown options={options} className='dropDown' onChange={() => console.log('onSekec')}  placeholder="Select an option" menuClassName='myMenuClassName' />
        </div>
  
        

        
    

    </div>
  );

class StallDisplay extends Component {
    state = { 
        show: false,
        open: true,
        setOpen: false
     };

    showModal = () => {
        this.setState({ setOpen: true, open: true });
        console.log(this.state);
    };

    hideModal = () => {
        this.setState({ setOpen: false, open: false });
    };
    _onSelect= () => {
        console.log('_onSelect');
    }
    render() {
        return (

            <div className={'custom'} >
                <AppBar />
                <img src={Background} alt='background' style={imageStyle} />
                <div className='aboutbutton' onClick={this.showModal}>
                       
                    </div>
                {/* <Modal show={this.state.show} handleClose={this.hideModal}>
                    <TileBlock  title='About'/>
                    <br />
                    <TileBlock title='About'/>


                    <TileBlock title='About'/>
                </Modal> */}
                <Modal
                    open={this.state.open}
                    onClose={this.hideModal}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                >
                    {body}
                    {/* <TileBlock  title='About'/>
                
                    <TileBlock title='About'/>


                    <TileBlock title='About'/> */}
                </Modal>

            </div>

        );
    }
}

export default StallDisplay;

