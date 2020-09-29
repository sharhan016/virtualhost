import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import { FixedSizeList } from 'react-window';
import PictureAsPdfRoundedIcon from '@material-ui/icons/PictureAsPdfRounded';
import StarIcon from '@material-ui/icons/Star';
import WorkRoundedIcon from '@material-ui/icons/WorkRounded';
import { Grid, Divider } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 800,
    maxWidth: 800,
    marginLeft: 2,
    // backgroundColor: 'gray'
  },
  text: {
    fontSize: 15
  },
  secondary: {
    fontSize: 12,
    color: 'green'
  }
}));

function renderRow(props) {
  const { index, style, } = props;
  return (
    <ListItem button style={style} key={index}>
      <Grid container spacing={1}>
        <Grid item md={1}>
          <PictureAsPdfRoundedIcon style={{ fontSize: 25, position: 'absolute', left: 25, top: 20 }} />
        </Grid>
        <Grid item md={1} >
          <button style={{ width: 50, height: 27,marginTop: 20, fontSize: 12,}} className="waves-effect waves-light btn btn-small">
          ViEW
          </button>
        </Grid>
        <Grid item md={7} style={{ marginLeft: 10,}}>
          <p style={{margin: 0, padding: 0, fontSize: 12}}>
          {`Item ${index + 1}`}
          </p>
          <span style={{fontSize: 10}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </span>
       

        </Grid>
        <Grid item md={2}>
          <div style={{ marginTop: 20, }}>
            <StarIcon style={{fontSize: 15}} />
            <StarIcon style={{fontSize: 15}}/>
            <StarIcon style={{fontSize: 15}}/>
            <StarIcon style={{fontSize: 15}}/>
            <StarIcon style={{fontSize: 15}}/>
          </div>
        </Grid>
          
      </Grid>
      <WorkRoundedIcon style={{  color: 'darkgreen' }} />

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
      <FixedSizeList height={395} width={785} itemSize={60} itemCount={20} style={{ backgroundColor: 'white', }}>
        {renderRow}
      </FixedSizeList>
      <Divider />
    </div>
  );
}
