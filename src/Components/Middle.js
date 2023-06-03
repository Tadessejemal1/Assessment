import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: theme.spacing(0.01),
    marginTop: theme.spacing(3),
    color: '#FFFFFF',
    backgroundColor: '#1A2228',
    height: '95vh',
  },
  root2: {
    display: 'flex',
    marginLeft: theme.spacing(3),
    textAlign: 'center',
    gap: '10px',
  },
  textE: {
    color: '#bdbdbd',
  },
  text: {
    color:'rgba(95, 48, 176, 0.967)',
  },
  text2: {
    color:'rgba(123,255,0,0.981)',
  },
  text3: {
    color : 'rgba(23, 226, 216, 0.616)',
  },
  text4: {
    color:'rgba(238,235, 49, 0.916)',
  },
  textM: {
    color:'#bdbdbd',
    marginLeft: theme.spacing(3),
  },
  text5: {
    color:'rgba(202,41, 119, 0.916)',
  },
  text6: {
    color : 'rgba(23, 226, 216, 0.616)',
  },
  root3:{
    marginLeft: theme.spacing(9.5),
    display: 'flex',
    color: '#fafafa',
    textAlign: 'center',
    gap: '10px',
  },
  textT : {
    textTransform: 'none',
    color:'#fff',
  },
}));
const Middle = () => {
  const classes = useStyles();
  return (
    <div className= {classes.root}>
      <div className= {classes.root2}>
        <p>definition/1_simple_examples/dataset_2_with_ref.sql</p>
        <Button variant="contained" style={{ height: '30px', marginTop: '15px',marginLeft:'120px',backgroundColor: '#36454F', borderRadius: '10px',marginRight:'10px'}}>
            <h5 className= {classes.textT}>Save</h5>
        </Button>
      </div>
      <hr style={{width: '100%', backgroundColor: 'black', border:'none', borderTop: 'px solid #8c8b8b' }} />
      <p className= {classes.textM}>-- learn more on https://docs.project.co/guides/tables/</p>
      <div className= {classes.root2} >
        <p className= {classes.text}>--js</p>
        <p className= {classes.text2}>type</p>
        <p className= {classes.text3}>('table')</p>
      </div>
      <div className= {classes.root2} >
        <p className= {classes.text}>SELECT</p>
        <p className= {classes.textE}>country</p>
        <p className= {classes.text}>as</p>
        <p className= {classes.textE}>country,</p>
      </div>
      <div className= {classes.root3} >
        <p className= {classes.textE}>device_type</p>
        <p className= {classes.text}>as</p>
        <p className= {classes.textE}>device_type,</p>
      </div>
      <div className= {classes.root3} >
        <p className= {classes.text2}>sum</p>
        <p className= {classes.textE}>(revenue)</p>
        <p className= {classes.text}>as</p>
        <p className= {classes.textE}>revenue,</p>
      </div>
      <div className= {classes.root3} >
        <p className= {classes.text2}>sum</p>
        <p className= {classes.textE}>(sessions)</p>
        <p className= {classes.text}>as</p>
        <p className= {classes.textE}>sessions,</p>
      </div>
      <div className= {classes.root3} >
        <p className= {classes.text2}>sum</p>
        <p className= {classes.textE}>(pageviews)</p>
        <p className= {classes.text}>as</p>
        <p className= {classes.textE}>pageviews,</p>
      </div>
      <div className= {classes.root2} >
        <h5 className= {classes.text}>FROM</h5>
        <p className= {classes.text6}>my_table</p>
      </div>
      <div className= {classes.root2} >
        <p className= {classes.text}>WHERE</p>
        <p>country</p>
        <p>=</p>
        <p className= {classes.text4}>'FRANCE'</p>
      </div>
      <div className= {classes.root2} >
        <p className= {classes.text}>GROUP</p>
        <p>BY</p>
        <p className= {classes.text5}>1,  2</p>
      </div>
    </div>
  );
};

export default Middle;