import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import Button from '@material-ui/core/Button';
import MoreHorizTwoToneIcon from '@material-ui/icons/MoreHorizTwoTone';
import KeyboardArrowDownTwoToneIcon from '@material-ui/icons/KeyboardArrowDownTwoTone';

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: theme.spacing(0.15),
    marginTop: theme.spacing(3),
    color: '#bdbdbd',
    backgroundColor: '#1A2228',
    width: '380px',
    height: '95vh',
  },
  root1: {
    display: 'flex',
    marginLeft: theme.spacing(4),
    textAlign: 'center',
    gap: '10px',
    marginRight: theme.spacing(4),
    color:'rgba(238,235, 49, 0.916)',
  },
  root2: {
    display: 'flex',
    marginLeft: theme.spacing(4),
    textAlign: 'center',
    gap: '10px',
    marginRight: theme.spacing(4),
  },
  root3: {
    display: 'flex',
    marginLeft: theme.spacing(4),
    textAlign: 'center',
    gap: '10px',
    marginRight: theme.spacing(4),
    color: 'rgba(238,235, 49, 0.916)',
  },
  rootD: {
    display: 'flex',
    marginLeft: theme.spacing(4),
    color: '#bdbdbd',
    textAlign: 'center',
    gap: '80px',
    marginRight: theme.spacing(4),
    // textDecoration: 'underline',
  },
  root5: {
    display: 'flex',
    marginLeft: theme.spacing(4),
    justifyContent: 'space-between',
    color: '#bdbdbd',
    marginRight: theme.spacing(4),
  },
  button: {
    backgroundColor : 'rgba(23, 226, 216, 0.416)',
    color: '#bdbdbd',
  },
  button1: {
    backgroundColor : '#33363D',
    color: '#bdbdbd',
    width: '150px',
  },
  button2: {
    width: '150px'
  },
  textE : {
    color: 'white',
  },
  textT : {
    textTransform: 'none',
  },
}));
const Middle = () => {
  const classes = useStyles();
  return (
    <div className= {classes.root}>
      <div className= {classes.rootD}>
        <h3 className= {classes.textE}>Outline</h3>
        <h3>Documentation</h3>
      </div>
      <hr style={{width: '100%', marginTop:'-1px', backgroundColor: 'black', border:'none', borderTop: '1px solid #8c8b8b' }} />
      <hr style={{width:'200px', marginTop:'-10px', marginLeft:'-0.002px'}} />
      <div className= {classes.root1}>
        <HelpOutlineIcon style={{marginTop:'20px'}}/>
        <h6>No complesation issues</h6>
      </div>
      <div className= {classes.root2}>
        <Button variant="contained" className= {classes.button}  style={{ height: '30px', marginTop: '15px',borderRadius: '20px' }}>
          <h6 className= {classes.textT}>table</h6>
        </Button>
        <p>dataset_2_with_ref</p>
        <MoreHorizTwoToneIcon style={{marginTop:'20px', marginLeft: '80px'}} />
      </div>
      <hr style={{width: '100%', backgroundColor: 'black', border:'none', borderTop: '1px solid #8c8b8b' }} />
      <div className= {classes.root5}>
        <h6>Dependencies</h6>
        <Button style={{marginRight:'-200px',marginTop:'27px', color:'#fff', width:'2px',height:'2px'}}><h4>3</h4></Button>
        <KeyboardArrowDownTwoToneIcon style={{marginTop:'20px'}}/>
      </div>
      <div className= {classes.root5}>
        <h6>Compiled</h6>
        <KeyboardArrowDownTwoToneIcon style={{marginTop:'20px'}}/>
      </div>
      <hr style={{width: '100%', backgroundColor: 'black', border:'none', borderTop: '1px solid #8c8b8b' }} />
      <div className= {classes.root5}>
        <h6>query</h6>
        <KeyboardArrowDownTwoToneIcon style={{marginTop:'20px'}}/>
      </div>
      <div className= {classes.root2}> 
        <Button variant="contained" className= {classes.button1} style={{ height:'50px', marginLeft:'20px',borderRadius: '10px', backgroundColor: '#33636' }}>
            <h4 className= {classes.textT}>Execute query</h4>
        </Button>
        <Button variant="contained" color="primary" className= {classes.button2} style={{ height:'50px', marginLeft:'20px',borderRadius: '10px' }}>
            <h4 className= {classes.textT}>Run this node</h4>
        </Button>
      </div> 
    </div>
  );
};

export default Middle;
