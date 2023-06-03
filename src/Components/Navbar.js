import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import KeyboardArrowDownTwoToneIcon from '@material-ui/icons/KeyboardArrowDownTwoTone';
import MoreHorizTwoToneIcon from '@material-ui/icons/MoreHorizTwoTone';
import Button from '@material-ui/core/Button';
import LinearScaleIcon from '@material-ui/icons/LinearScale';
import CropPortraitIcon from '@material-ui/icons/CropPortrait';
import CropLandscapeIcon from '@material-ui/icons/CropLandscape';



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    marginLeft: theme.spacing(9),
    color: 'white',
    height: '50px',
  },
  root2: {
    display: 'flex',
    marginRight: theme.spacing(2),
    color: 'white',
    border: '1px solid white',
    borderRadius: '5px',
    textAlign: 'center',
    justifyContent: 'center',
    height: '40px',
    marginTop: theme.spacing(2),
  },
  icon: {
    color: '#bdbdbd',
    marginRight: theme.spacing(2),
    marginTop: theme.spacing(3),
  },
  icon2: {
    color: '#bdbdbd',
    marginRight: theme.spacing(1),
    marginTop: theme.spacing(1),
    marginLeft: theme.spacing(0.7),
  },
  rootm: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  textT : {
    textTransform: 'none',
  },
  end: {
    display: 'flex',
    color: 'white',
    marginTop: theme.spacing(0.7),
  },
  text: {
    color: '#bdbdbd',
  },
}));

const Navbar = () => {
  const classes = useStyles();
  return (
    <div className={classes.rootm}>
      <div className={classes.root} >
        <h3 className={classes.text}>Project name</h3>
        <KeyboardArrowDownTwoToneIcon className={classes.icon} color="primary" />
        <div className={classes.root2}>
          <h3 style={{ marginTop: '5px', marginLeft:'5px' }} >Development</h3>
          <KeyboardArrowDownTwoToneIcon className={classes.icon2} />
          <hr style={{ marginTop: '-1px',marginBottom:'-1px' }} />
          <MoreHorizTwoToneIcon className={classes.icon2} />
        </div>
        <Button variant="contained" color="primary" style={{ height: '40px', marginTop: '17px' }}>
          <LinearScaleIcon />
          <h3 className= {classes.textT}>commit (2 files)</h3>
        </Button>
      </div>
      <div className={classes.end}>
        <CropLandscapeIcon className={classes.icon} />
        <CropPortraitIcon className={classes.icon} />
        <CropLandscapeIcon className={classes.icon} />
      </div>
    </div>
  );
};

export default Navbar;