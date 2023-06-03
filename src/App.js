import React from 'react';
import './App.css';
import SideBar from './Components/SideBar';
import Main from './Components/Main';
import Box from '@mui/material/Box';

const App = () => {
  return (
    <Box sx={{ display: 'flex',gap:'20px' }}>
      <SideBar /> 
      <Main />
    </Box>
  );
};

export default App;
