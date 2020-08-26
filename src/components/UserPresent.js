import React, { Component } from 'react';
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';
import CustomListItem from './ListItem'

const textStyle = {
    position: 'absolute',
    left: 1450
}
const body = <CustomListItem leng={12} />
const body2 = <CustomListItem leng={6} />
class UserPresent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        open: false,
        openLocation: false,
        location: false,
        visitor: false,
        visi: props.visitor
      };
    };
    
 
    handleOpenVisitor = () => {
        this.setState({
            open: !this.state.open,
            visitor: !this.state.visitor
        })
        console.log('handleopen',this.state);
    }
    handleCloseVisitor = () => {
        this.setState({
            open: !this.state.open,
            visitor: !this.state.visitor
        })
        console.log('handleclose',this.state);
    }
    handleOpenlocation = () => {
        this.setState({
            openLocation: !this.state.openLocation,
            location: !this.state.location
        })
        console.log('handleopenlocation',this.state);
    }
    handleCloseLocation = () => {
        this.setState({
            openLocation: !this.state.openLocation,
            location: !this.state.location
        })
        console.log('handleclose',this.state);
    }
  render() {
    return (
        <div style={textStyle}>
        <Typography variant="h5" onClick={this.handleOpenVisitor}>
            Total Visitors : 12
         </Typography>
         <Modal
            open={this.state.open}
            onClose={this.handleCloseVisitor}
        >
            <CustomListItem leng={this.state.visi} />
        </Modal>
        
        <Typography variant="h5" onClick={this.handleOpenlocation}>
            At this Location : 6
</Typography>
<Modal
            open={this.state.openLocation}
            onClose={this.handleCloseLocation}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
        >
            {body2}
        </Modal>

    </div>
    );
  }
}

export default UserPresent;
