import React, { Component } from 'react';
// import Notification from './Notification'
// import ProjectList from '../../project/ProjectList';
import background from '../../assets/images/lobby.jpg'
import AppBar from '../AppBar'
import BottomBar from '../BottomBar'
import './dashboard.css';
import CustomListItem from '../ListItem'



const imageStyle = {
  width: 2047, height: 890, position: 'absolute', right: 0, left: 0
}


class Dashboard extends Component {

  handleSubmit = () => {
    this.props.history.push('/storelist');
  }

  render() {
    return (
      <div className='custom'>
        <AppBar visitor={10} />
        <img src={background} alt='background' style={imageStyle} />

          <div className='exhibitionbtn' onClick={this.handleSubmit}>

          </div> 
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
      // </div>

    );
  }
}





export default Dashboard;
