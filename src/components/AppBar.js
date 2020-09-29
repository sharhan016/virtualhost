import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { Grid } from '@material-ui/core'
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import Avatar from '@material-ui/core/Avatar';
import SearchIcon from '@material-ui/icons/Search';
import user from '../assets/images/user.png'
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
// import CustomListItem from './ListItem'
// import Modal from '@material-ui/core/Modal';
import UserPresent from './UserPresent'
import './styles.css'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        //position: 'absolute'
    },
    menuButton: {
        marginRight: theme.spacing(2),

    },
    title: {
        flexGrow: 1,
        display: 'none',
        marginLeft: 50,
        marginTop: 20,
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
        
    },
    search: {
        // position: 'absolute',
        // left: 1000,
        height: 50,
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        marginTop: 15,
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        top: 10,
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(0, 0, 0, 0),
        marginLeft: 20,
        //marginTop: 20,
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
    typography: {
        padding: theme.spacing(2),
      },
}));

// const textStyle = {
//     position: 'absolute',
//     left: 1450
// }
const userIcon = {
    // position: 'absolute',
    // left: 1700,
    ///border: 10,
    width: 70,
    height: 70,
    //backgroundColor: 'white',
    //color: 'black'
}
const menuStyle = {
    // position: 'absolute',
    // left: 1800,
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: 5,
    width: 65,
    height: 50
}
const textStyle = {
    color: 'black',
    textAlign: 'center',
    marginTop: 12,
    marginLeft: 8
}
const btnStyle = {
    height: 30,
    width: 40,
    textAlign: 'center'
    
}


export default function SearchAppBar(props) {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = (event) => {
      setAnchorEl(null);
      console.log('menu',event.currentTarget);
    };
 
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar style={{ height: 75 }}>
                    {/* <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton> */}
          <Grid container spacing={1}>
              <Grid item md={3}>
              <Typography className={classes.title} variant="h4" noWrap style={{marginTop: 15,fontSize: '2.3rem' }}>
                        Virtual Event
          </Typography>
              </Grid>
                    <Grid item md={5}>
                    {/* <div className={classes.search} style={{ width: 400, }}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            style={{ marginLeft: 40, marginBottom: 40, width: 350 }}
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div> */}
                    <div className='search-container-box'>
                    <input type="text" placeholder="Search" />
                     </div>
                    </Grid>
                    <Grid item md={2} style={{marginTop: 5}}>
                    <UserPresent visitor={props.visitor} />
                    </Grid>
                    <Grid item md={2}>
                    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start'}}>
                    <div style={userIcon}>
                        <Avatar src={user} style={{ width: '70%', height: '70%', marginTop: 10 }} />
                    </div>
                    <div style={menuStyle}>
                        <div onClick={handleClick} style={btnStyle}>
                            <p style={textStyle}>Settings</p>
                         </div>
                        <Menu
                           id="simple-menu"
                           anchorEl={anchorEl}
                           keepMounted
                           open={Boolean(anchorEl)}
                           onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose}>Settings</MenuItem>
                            <MenuItem onClick={handleClose}>Do Not Disturb</MenuItem>
                            <MenuItem onClick={handleClose}>Logout</MenuItem>
                        </Menu>
                    </div>
                    </div>
                    </Grid>
                    {/* <Grid item md={1} style={{marginTop: 5}}>
                    <div style={menuStyle}>
                        <div onClick={handleClick} style={btnStyle}>
                            Settings
                         </div>
                        <Menu
                           id="simple-menu"
                           anchorEl={anchorEl}
                           keepMounted
                           open={Boolean(anchorEl)}
                           onClose={handleClose}
                        >
                            <MenuItem style={menuStyleDrop} onClick={handleClose}>Settings</MenuItem>
                            <MenuItem style={menuStyleDrop} onClick={handleClose}>Do Not Disturb</MenuItem>
                            <MenuItem style={menuStyleDrop} onClick={handleClose}>Logout</MenuItem>
                        </Menu>
                    </div>
                    </Grid> */}
                    
                    
                    </Grid>
                    {/* Menu(settings) Button here */}
                    
                </Toolbar>
            </AppBar>
        </div>
    );
}
