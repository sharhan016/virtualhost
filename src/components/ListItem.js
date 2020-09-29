import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { FixedSizeList } from 'react-window';
import ChatIcon from '@material-ui/icons/Chat';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: 400,
    maxWidth: 300,
    position: 'absolute',
    left: '20%',
    top: '20%',
    backgroundColor: '#eee',
    borderRadius: 10,
    // backgroundColor: theme.palette.background.paper,
  },
}));
// const styles = {
//     display: flex, primary={`Item ${index + 1}`}
//     flexDirection: ''
// }
function renderRow(props) {
  const { index, style } = props;

  return (
    <ListItem button style={style} key={index}>
      <ListItemText primary={`Item ${index + 1}`}  secondary={"Owner, Country"} />
      <ChatIcon />
    </ListItem>
    
  );
}

renderRow.propTypes = {
  index: PropTypes.number.isRequired,
  style: PropTypes.object.isRequired,
};

export default function VirtualizedList(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <h6 style={{backgroundColor: '#eee', textAlign: 'center', height: 40, paddingTop: 10,color: 'black'}}>Currently Present</h6>
      <FixedSizeList height={400} width={300} itemSize={60} itemCount={props.leng} style={{backgroundColor: 'white'}}>
        {renderRow}
      </FixedSizeList>
    </div>
  );
}
