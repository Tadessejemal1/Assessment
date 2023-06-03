import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import MoreHorizTwoToneIcon from '@material-ui/icons/MoreHorizTwoTone';
import ModeCommentIcon from '@material-ui/icons/ModeComment';



const useStyles = makeStyles((theme) => ({
  mainroot: {
    display: 'flex',
    color: 'white',
    height: '50px',
  },
  root: {
    marginLeft: theme.spacing(4),
    color: '#bdbdbd',
    backgroundColor: '#36454F',
    height: '175.7vh',
    marginTop: theme.spacing(3),
    width: '320px',
  },
  file: {
    color: '#e0e0e0',
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(5),
  },
  root2: {
    display: 'flex',
    marginLeft: theme.spacing(2),
    color: '#bdbdbd',
    textAlign: 'center',
    gap: '5px',
  },
  roota: {
    backgroundColor:'rgba(123,255,0,0.281)',
    color: 'white',
  },
  textT : {
    textTransform: 'none',
  },
  text4: {
    backgroundColor:'rgba(238,235, 49, 0.916)',
    color: 'white',
  },
  button: {
    backgroundColor : 'rgba(23, 226, 216, 0.416)',
    color: 'white',
  },
  root3: {
    display: 'flex',
    color: '#bdbdbd',
    marginRight: theme.spacing(4),
    textAlign: 'center',
    gap: '10px',
  },
  root4: {
    display: 'flex',
    color: '#bdbdbd',
    textAlign: 'center',
    marginLeft: theme.spacing(8),
    gap: '10px',
  },
  root5: {
    display: 'flex',
    color: '#bdbdbd',
    textAlign: 'center',
    marginLeft: theme.spacing(10),
    gap: '10px',
  },
  root6: {
    display: 'flex',
    textAlign: 'center',
    marginLeft: theme.spacing(10),
    gap: '10px',
    color:'#fff',
    backgroundColor: '#1A2228',
  }
}));

const NextSidebar = () => {
  const classes = useStyles();
  return (
    <div className= {classes.mainroot}>
      <div className= {classes.root}>
          <h2 className={classes.file}>Files</h2>
        <div className= {classes.root2}> 
          <Button variant="contained" className= {classes.button} style={{ height: '30px', marginTop: '15px',marginLeft:'20px',borderRadius: '20px' }}>
            <h3 className= {classes.textT}>config</h3>
          </Button>
          <h4 className= {classes.textT}>dataform</h4>
        </div> 
        <div className= {classes.root2}> 
          <Button variant="contained" className= {classes.button} style={{ height: '30px', marginTop: '15px',marginLeft:'20px',borderRadius: '20px' }}>
            <h3 className= {classes.textT}>config</h3>
          </Button>
          <h4>package Lock</h4>
        </div> 
        <div className= {classes.root2}> 
          <Button variant="contained" className= {classes.button} style={{ height: '30px', marginTop: '15px',marginLeft:'20px',borderRadius: '20px' }}>
            <h3 className= {classes.textT}>config</h3>
          </Button>
          <h4>Package</h4>
        </div> 
        <div className= {classes.root3}>
          <KeyboardArrowDownIcon style={{ height: '40px', marginTop: '10px',marginLeft:'20px',borderRadius: '20px' }} />
          <ModeCommentIcon style={{ height: '40px', marginTop: '10px', transform: 'rotate(180deg)' }} />
          <h4>modules</h4>
        </div>
        <div className= {classes.root4}>
          <KeyboardArrowDownIcon style={{ height: '40px', marginTop:'10px'}} />
          <ModeCommentIcon style={{ height: '40px', marginTop: '10px', transform: 'rotate(180deg)' }} />
          <h4>1_simplest_examples</h4>
        </div>
        <div className= {classes.root6}>
          <Button variant="contained" className= {classes.roota} style={{ height: '30px', marginTop: '13px',marginLeft:'20px',borderRadius: '20px' }}>
              <h4>SQL</h4>
            </Button>
            <p>dataset_1</p>
            <MoreHorizTwoToneIcon style={{ height: '40px', marginTop: '10px',marginLeft:'20px',color:'#bdbdbd' }} />
        </div>
        <div className= {classes.root5}>
          <Button variant="contained" className= {classes.roota} style={{ height: '30px', marginTop: '13px',marginLeft:'20px',borderRadius: '20px' }}>
            <h4>SQL</h4>
          </Button>
          <p>dataset_2_with_ref</p>
        </div>
        <div className= {classes.root4}>
          <KeyboardArrowDownIcon style={{ height: '40px', marginTop:'10px'}} />
          <ModeCommentIcon style={{ height: '40px', marginTop: '10px', transform: 'rotate(180deg)' }} />
          <h4>2_Advanced_examples</h4>
        </div>
        <div className= {classes.root5}>
          <Button variant="contained" className= {classes.roota} style={{ height: '30px', marginTop: '13px',marginLeft:'20px',borderRadius: '20px' }}>
              <h4>SQL</h4>
            </Button>
            <p>dataset_3_increa...</p>
            <MoreHorizTwoToneIcon style={{ height: '40px', marginTop: '10px' }} />
        </div>
        <div className= {classes.root5}>
          <Button variant="contained" className= {classes.text4} style={{ height: '30px', marginTop: '13px',marginLeft:'20px',borderRadius: '20px' }}>
            <h4>JS</h4>
          </Button>
          <p>dataset_4_increase...</p>
        </div>
        <div className= {classes.root4}>
          <KeyboardArrowDownIcon style={{ height: '40px', marginTop:'10px'}} />
          <ModeCommentIcon style={{ height: '40px', marginTop: '10px', transform: 'rotate(180deg)' }} />
          <h4>2_Advanced_examples</h4>
        </div>
        <div className= {classes.root5}>
          <Button variant="contained" className= {classes.roota} style={{ height: '30px', marginTop: '13px',marginLeft:'20px',borderRadius: '20px' }}>
              <h4 className= {classes.textT}>ops</h4>
            </Button>
            <p>grant_access</p>
            <MoreHorizTwoToneIcon style={{ height: '40px', marginTop: '10px' }} />
        </div>
        <div className= {classes.root5}>
          <Button variant="contained" color="primary" style={{ height: '30px', marginTop: '13px',marginLeft:'20px',borderRadius: '20px' }}>
            <h4 className= {classes.textT}>assert</h4>
          </Button>
          <p>simple_assertion</p>
        </div>
        <div className= {classes.root3}>
          <KeyboardArrowDownIcon style={{ height: '40px', marginTop: '10px',marginLeft:'20px',borderRadius: '20px' }} />
          <ModeCommentIcon style={{ height: '40px', marginTop: '10px', transform: 'rotate(180deg)' }} />
          <h4>modules</h4>
        </div>
      </div>
    </div>
  );
};

export default NextSidebar;