import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import Avatar from '@material-ui/core/Avatar';
import SearchIcon from '@material-ui/icons/Search';
import user from '../assets/images/user.png'
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import CustomListItem from './ListItem'
import Modal from '@material-ui/core/Modal';
import UserPresent from './UserPresent'

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
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
        
    },
    search: {
        position: 'absolute',
        left: 1000,
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        marginLeft: 20,
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

const textStyle = {
    position: 'absolute',
    left: 1450
}
const userIcon = {
    position: 'absolute',
    left: 1700,
    ///border: 10,
    width: 70,
    height: 70,
    //backgroundColor: 'white',
    //color: 'black'
}
const menuStyle = {
    position: 'absolute',
    left: 1800,
    backgroundColor: 'white',
    borderRadius: 10
}
const btnStyle = {
    height: 50,
    width: 150,
    
}


export default function SearchAppBar(props) {
    const classes = useStyles();

  
 
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar style={{ height: 95 }}>
                    {/* <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton> */}
                    <Typography className={classes.title} variant="h3" noWrap>
                        Virtual Event
          </Typography>
                    <div className={classes.search} style={{ width: 400, }}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            style={{ marginLeft: 40, marginTop: 10, width: 350 }}
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>
                    <UserPresent visitor={props.visitor} />
                    <div style={userIcon}>
                        <Avatar src={user} style={{ width: '100%', height: '100%' }} />
                    </div>
                    {/* Menu(settings) Button here */}
                    {/* <div style={menuStyle}>
                        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} style={btnStyle}>
                            Settings
                         </Button>
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
                    </div> */}
                </Toolbar>
            </AppBar>
        </div>
    );
}
