/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import Drawer from '@mui/material/Drawer';
import Paper from '@mui/material/Paper';
import YouTube from '@mui/icons-material/YouTube';
import SearchIcon from '@material-ui/icons/Search';
import UpdateIcon from '@material-ui/icons/Update';
import RemoveIcon from '@material-ui/icons/Remove';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import EventNoteIcon from '@material-ui/icons/EventNote';
import VisibilityIcon from '@material-ui/icons/Visibility';
import DeviceHubIcon from '@material-ui/icons/DeviceHub';
import SyncAltIcon from '@material-ui/icons/SyncAlt';
import photo from '../assets/photo.jpg';
import StorageIcon from '@material-ui/icons/Storage';


const SideBar = () => {

  return (
    <div style={{display:'flex'}}>
      <Drawer variant="permanent" PaperProps={{ elevation: 1 }}>
        <Paper style={{ backgroundColor: 'black', width:'60px', height: '100vh' }} >
          <div style={{color:'#bdbdbd',margin: '15px'}}>
            <VisibilityIcon style={{color:'white', marginTop: '5px'}} />
            <YouTube color="primary" style={{marginTop: '15px'}} />
            <RemoveIcon style={{marginTop: '15px'}} />
            <SearchIcon style={{marginTop: '15px'}} />
            <DeviceHubIcon style={{marginTop: '15px', color:'white'}} />
            <UpdateIcon style={{marginTop: '15px'}} />
            <EventNoteIcon style={{marginTop: '15px'}} />
            <VisibilityIcon style={{marginTop: '15px'}} />
            <StorageIcon style={{marginTop: '15px'}} />
            <RemoveIcon style={{marginTop: '15px'}} />
            <KeyboardArrowRightIcon style={{marginTop: '15px'}} />
            <SyncAltIcon style={{marginTop: '95px'}} />
            <img src={photo} alt="photo" style={{marginTop: '15px',color:'white', borderRadius: '50%', width: '30px', height: '30px'}} />
          </div>
        </Paper>
      </Drawer>
    </div>
  );
};

export default SideBar;