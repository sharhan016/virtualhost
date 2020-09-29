import React, { Component } from 'react';
import Background from '../../assets/images/stall1.jpg'
import AppBar from '../../components/AppBar'
import './stallDisplay.css'
import Modal from '@material-ui/core/Modal';
import CustomListItem from './CustomList'
import CloseIcon from '@material-ui/icons/Close';
import BottomBar from '../../components/bottombar/BottomBar'


const optionType = [
    { key: "all", text: "ALL", value: "all" },
    { key: "trending", text: "TRENDING", value: "trending" },
    { key: "new", text: "NEW", value: "new" }
]

const imageStyle = {
    width: 1380, height: 580, position: 'absolute', right: 0, left: 0
  }
const headStyle = {
    width: '100%',
    height: 30,
    display: 'flex',
    marginBottom:10
}
const headStyle2 = {
    backgroundColor: '#eee',
    width: '99%',
    marginLeft: 5,
    height: 50,
    paddingTop: 5,
    display: 'flex',
    marginBottom: 10,
    zIndex: 2,
    position: 'relative',
}




class StallDisplay extends Component {
    state = {
        show: false,
        open: false,
        setOpen: false
    };

    showModal = () => {
        this.setState({ setOpen: true, open: true });
        console.log(this.state);
    };

    hideModal = () => {
        this.setState({ setOpen: false, open: false });
    };
    _onSelect = () => {
        console.log('_onSelect');
    }
    changeMethod = (event, data) => {
        this.setState({
            filterValue: data.value
        })
        console.log(data)
    }
    render() {
        return (

            <div className={'custom'} >
                <AppBar />
                <img src={Background} alt='background' style={imageStyle} />
                <div className='aboutbutton' onClick={this.showModal}>

                </div>
               
                <Modal
                    open={this.state.open}
                    onClose={this.hideModal}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                >
                    <div className='modal-div'>

                        <div style={headStyle}>
                            <h6 style={{ flex: 1, paddingLeft: 15, paddingTop: 5,  }}>Product Details</h6>
                            <CloseIcon style={{ marginRight: 10, marginTop: 10, fontSize: 20 }} onClick={this.hideModal} />
                        </div>
                        <div style={headStyle2}>
                            <p style={{ paddingLeft: 20, fontSize: 14, marginRight: 20, marginTop: 10 }}>Filter by</p>

                            {/*  
                            
                            NEED TO ADD DROPDOWN HERE
                            
                            */}
                             </div>
                        <CustomListItem />

                    </div>
                </Modal>

                <BottomBar />

            </div>

        );
    }
}

export default StallDisplay;

