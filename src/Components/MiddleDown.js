import React from 'react';
import ImageSearchIcon from '@material-ui/icons/ImageSearch';
import CallMergeIcon from '@material-ui/icons/CallMerge';
import RefreshIcon from '@material-ui/icons/Refresh';
import KeyboardArrowDownTwoToneIcon from '@material-ui/icons/KeyboardArrowDownTwoTone';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CloseIcon from '@material-ui/icons/Close';
import { Button } from '@material-ui/core';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft:'58.5vh',
    height: '67.5vh',
  },
  table: {
    backgroundColor: '#151922',
  },
  tables: {
    backgroundColor: '#151922',
  },
  textT : {
    textTransform: 'none',
  },
  button: {
    backgroundColor : 'rgba(23, 226, 216, 0.416)',
    color:'#9e9e9e',
  },
  th: {
    border: '1px solid rgba(224, 224, 224, 1)',
  },
  tableRightBorder : { borderWidth: 0.1, borderColor: '#bdbdbd',borderStyle: 'solid'} // or borderTop: '1px solid red'
});

function createData(name, description) {
  return { name, description };
}

const rows = [
  createData('date', 'date'),
  createData('device_type', 'character varying'),
  createData('country', 'character varying'),
  createData('sessions', 'integers'),
  createData('revenue', 'integers'),
];



const MiddleBottom = () => {
  const classes = useStyles();
  return (
    <div style={{color:'#bdbdbd', backgroundColor: '#151922'}}>
      <div style={{backgroundColor: '#151922', marginLeft:'58.5vh'}}>
        <div style={{display:'flex', gap:'10px'}}>
          <ImageSearchIcon style={{marginTop:'20px'}} />
          <h3>Query results</h3>
          <CallMergeIcon style={{marginTop:'20px', color:'#fff'}} />
          <h3 style={{color:'#fff'}}>Schemas</h3>
        </div>
      </div>
      <hr style={{width: '100%', backgroundColor: 'black', border:'none', borderTop: '1px solid #8c8b8b' }} />
      <div className = {classes.root}>
        <div style={{marginRight:'83px'}}>
          <div style={{display:'flex', gap:'10px'}}>
            <h3>Refresh</h3>
            <RefreshIcon style={{marginTop:'20px'}} />
          </div>
          <div style={{display:'flex', gap:'2px'}}>
            <KeyboardArrowDownTwoToneIcon style={{marginTop:'22px'}}/>
            <h4>dataset_1</h4>
          </div>
          <div style={{ display:'flex', marginLeft: '20px', gap:'10px', color:'#fff' }} >
            <VisibilityIcon style={{ height: '40px', marginTop:'13px' }} />
            <h6>dataset_5_from_script_builder</h6>
          </div>
          <div style={{display:'flex', marginLeft: '20px', gap:'10px'}} >
            <VisibilityIcon style={{ height: '40px', marginTop: '13px' }} />
            <h6>dataset_3_incremental_date</h6>
          </div>
          <div style={{display:'flex', marginLeft: '20px' , gap:'10px'}} >
            <VisibilityIcon style={{ height: '40px', marginTop: '13px' }} />
            <h6>dataset_4_incremental_snapshot</h6>
          </div>
          <div style={{display:'flex', marginLeft: '20px', gap:'10px'}} >
            <VisibilityIcon style={{ height: '40px', marginTop: '13px' }} />
            <h6>reporting_gb</h6>
          </div>
          <div style={{display:'flex',gap:'2px'}}>
            <KeyboardArrowRightIcon style={{marginTop:'22px'}}/>
            <h4>datafrom_set2</h4>
          </div>
        </div>
        <hr style={{color:'#757575',marginTop:'-9px', backgroundColor: 'black', border: '1px solid #8c8b8b' }} />
        <div style={{width:'65%', marginRight:'1%'}}>
          <div style={{display:'flex'}}>
            <Button variant="contained" className= {classes.button} style={{ height: '30px', marginTop: '15px',marginRight:'20px', borderRadius: '20px' }}>
            <h4 className= {classes.textT}>view</h4>
          </Button>
            <p>dataform_demo.database_1</p>
            <CloseIcon style={{ height: '40px', marginTop: '10px',marginLeft: '50%' }} />
          </div>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="caption table">
              <TableHead>
                <TableRow >
                  <TableCell className={classes.tableRightBorder} style={{size:'small', color:'white', width:'0.15px'}} >Field</TableCell>
                  <TableCell className={classes.tableRightBorder} style={{color:'white'}} align="middle">Data</TableCell>
                </TableRow>
              </TableHead>
              <TableBody className={classes.table}>
                {rows.map((row) => (
                  <TableRow key={row.name} >
                    <TableCell className={classes.tableRightBorder} style={{color:'#bdbdbd'}} component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell className={classes.tableRightBorder} style={{color:'#bdbdbd'}} align="middle">{row.description}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
      <hr style={{width: '100%', backgroundColor: 'black', border:'none', borderTop: '1px solid #8c8b8b' }} />
    </div>
  );
};

export default MiddleBottom;