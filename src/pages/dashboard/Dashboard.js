import React, { Component } from 'react';
import { connect } from "react-redux";
import { StallItems } from '../../store/actions/Load'
import background from '../../assets/images/lobbey.jpg'
import AppBar from '../../components/AppBar'
import BottomBar from '../../components/bottombar/BottomBar'
import Modal from '@material-ui/core/Modal';
import './dashboard.css';
// import CustomListItem from '../ListItem'
import ChatBox from '../../components/chatbox/ChatBox'
import Dropdown from '../../components/dropdown/DropDown'
import ExhibitionDirectory from '../../components/exhibitionsearch/ExhibitionSearch'


const imageStyle = {
  width: 1380, height: 590, position: 'absolute', right: 0, left: 0
}


class Dashboard extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       open: false,
       search: false,
       stallItems: []
    };
  };

  componentDidMount() {
    this.props.loadstall();
  }
  

  handleSubmit = () => {
    this.props.history.push('/storelist');
  }

  handleOpen = () => {
    this.setState({open: true})
  }

  handleClose = () => {
    this.setState({open: false})
  }

  handleSearchOpen = () => {
    this.setState({search: true})
  }

  handleSearchClose = () => {
    this.setState({search: false})
  }

  render() {
    console.log('props in dash',this.props.stallItems)
    console.log('state in dash',this.state)
    return (
      <div className='custom'>
        <AppBar visitor={10} />
        <img src={background} alt='background' style={imageStyle} />

          <div className='exhibitionbtn' onClick={this.handleSearchOpen}>

          </div> 
          <div className='chat-minimised' onClick={this.props.handleOpen}>
           *optional: chat minimised
        </div>
        <Modal
        open={this.state.open}
        onClose={this.handleClose}
        // aria-labelledby="simple-modal-title"
        // aria-describedby="simple-modal-description"
      >
        <div className='chat-container'>
        
        <ChatBox />


        </div>
      </Modal>
      <Modal
      open={this.state.search}
      onClose={this.handleSearchClose}
      >
        <div className='search-stalls'>
          <ExhibitionDirectory stalls={this.props.stallItems} />
        
        </div>


      </Modal>
          {/* </div> */}
          
          {/* <div className='row'>
            <div className="col s12 m6">
              <ProjectList />
            </div>
            <div className="col s12 m5 offset-m1">
              <Notification />
            </div>
          </div> */}
          <BottomBar />
          
        
       </div>

    );
  }
}

const mapStateToProps = (state) => ({
  isLoading: state.load.isLoading,
  isAuthenticated: state.auth.isAuthenticated,
  stallItems: state.load.stallItems,
});
const mapDispatchToProps = (dispatch) => ({
  loadstall: ( ) => dispatch(StallItems()),
});



export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
