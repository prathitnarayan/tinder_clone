import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ChatIcon from '@mui/icons-material/Chat';
import { IconButton }  from '@mui/material';
// import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';

import './Header.css';

function Header() {
  return (
    <div className='tinder-header'>
        <IconButton className='header-icons' fontSize='large'>
        <AccountCircleIcon fontSize='large'/>
        </IconButton>
       
        <img src='https://img.freepik.com/premium-vector/car-logo-vector_25327-40.jpg' />
        <IconButton className='header-icons' fontSize='large'>
        <ChatIcon fontSize='large'/>
        </IconButton>

    </div>
  )
}

export default Header