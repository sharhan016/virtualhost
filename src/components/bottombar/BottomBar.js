import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import ChatBox from '../chatbox/ChatBox'
// import RestoreIcon from '@material-ui/icons/Restore';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import LocationOnIcon from '@material-ui/icons/LocationOn';
import Modal from '@material-ui/core/Modal';
import InfoSearchBox from '../infosearchbox/InfoSearchBox'
import HomeIcon from '../../assets/icons/home.png'
import BroadcastIcon from '../../assets/icons/boardcast.png'
import HelpIcon from '../../assets/icons/help.png'
import ChatIcon from '../../assets/icons/chat-icon.png'
import StarIcon from '../../assets/icons/star.png'
import './bottombar.css'

const useStyles = makeStyles({
  root: {
    //width: '60%',
    height: 80,
    position: 'absolute',
    bottom: 60,
    left: 450,
    backgroundColor: 'transparent',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    // boxShadow:  "0 1px 3px -1px rgba(0,0,0,0.75)"
  },
  paper: {
    position: 'absolute',
    width: 400,
    //backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    //boxShadow: theme.shadows[5],
    //padding: theme.spacing(2, 4, 3),
  },
});

const headStyle = {
  width: '100%',
  height: 60,
  // backgroundColor: 'gray',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}
const textStyle = {
  flex: 1, 
  //paddingLeft: 5, 
  paddingTop: 5, 
  textAlign: 'center' ,
  fontSize: 30
}

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [chatOpen, chatsetOpen] = React.useState(false);

  const Home = <img src={HomeIcon} alt='homeicon' style={{height: 30, width: 35}} />
  const Broadcast = <img src={BroadcastIcon} alt='homeicon' style={{height: 30, width: 35}} />
  const Help = <img src={HelpIcon} alt='homeicon' style={{height: 30, width: 35}} />
  const Chat = <img src={ChatIcon} alt='homeicon' style={{height: 30, width: 35}} />
  const Star = <img src={StarIcon} alt='homeicon' style={{height: 30, width: 35}} />

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChatOpen = () => {
    chatsetOpen(true);
  };

  const handleChatClose = () => {
    chatsetOpen(false);
  };

 

  return (
    <div>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        //className='bottom-bar'
        className={classes.root}
      >
        <BottomNavigationAction label="Home" icon={Home} style={{ height: 90, width: 70, backgroundColor: 'transparent', color: 'white' }} />
        <BottomNavigationAction onClick={handleOpen} label="Information" icon={Help} style={{height: 90, width: 70, backgroundColor: 'transparent', color: 'black' }} />
        <BottomNavigationAction label="Broadcast" icon={Broadcast} style={{ height: 90, width: 70,backgroundColor: 'transparent', color: 'black' }} />
        <BottomNavigationAction onClick={handleChatOpen} label="Chat" icon={Chat} style={{ height: 90, width: 70,backgroundColor: 'transparent', color: 'black' }} />
        <BottomNavigationAction label="Starred" icon={Star} style={{ height: 90, width: 70,backgroundColor: 'transparent', color: 'black' }} />
      </BottomNavigation>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className='modal-div'>
 
          <div style={headStyle}>
            <h4 style={textStyle}>Hall 01 Directory</h4>
          </div>
         
          <InfoSearchBox />



        </div>
      </Modal>
      <Modal
        open={chatOpen}
        onClose={handleChatClose}
        // aria-labelledby="simple-modal-title"
        // aria-describedby="simple-modal-description"
      >
        <div className='chat-container'>
        
        <ChatBox />


        </div>
      </Modal>
    </div>
  );
}
