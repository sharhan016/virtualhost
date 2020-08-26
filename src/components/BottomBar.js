import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const useStyles = makeStyles({
  root: {
    width: 1000,
    height: 80,
    position: 'absolute',
    bottom: 50,
    left: 800,
    backgroundColor: 'transparent'

  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="Recents" icon={<RestoreIcon />} style={{height: 70, width: 60, backgroundColor: 'black', color: 'white'}}/>
      <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} style={{height: 70, width: 60, backgroundColor: 'black', color: 'white'}} />
      <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} style={{height: 70, width: 60, backgroundColor: 'black', color: 'white'} }/>
    </BottomNavigation>
  );
}
