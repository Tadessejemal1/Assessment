import React from 'react';
import Navbar from './Navbar';
import NextSidebar from './NextSidebar';
import Middle from './Middle';
import RightSidebar from './RightSidebar';
import MiddleBottom from './MiddleDown';
// import RightDown from './RightDown';
// import DownMiddle from './DownMiddle';


const Main = () => {

  return (
    <div>
      <Navbar />
      <div style={{display:'flex'}}>
        <NextSidebar />
        <Middle />
        <RightSidebar />
      </div>
      <div>
        <MiddleBottom />
      </div>  
    </div>
  );
};

export default Main;