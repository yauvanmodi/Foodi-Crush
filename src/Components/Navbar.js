import React,{useState} from 'react'
import {Box,AppBar,Typography,Toolbar,IconButton,Drawer, Divider} from "@mui/material"
import FastfoodIcon from '@mui/icons-material/Fastfood';
import MenuIcon from '@mui/icons-material/Menu';
import {  NavLink } from 'react-router-dom';
import  '../Styles/Navbarstyle.css'
const Navbar = () => {
  const [mobileopen, setMobileopen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileopen(!mobileopen);
  };

  const drawer = (
    <Box onClick = {handleDrawerToggle} sx={{textAlign:"center"}}>
       <Typography color={'#56b6fd'} variant='h5' component="div" sx={{flexGrow:1, my:3}} >
          <FastfoodIcon/>
           FOODI-CRUSH
         </Typography> 
         <Divider/>
         
            <ul className='mobile-navigation'>
            <li>
                <NavLink activeclassname="active" to ="/">Home</NavLink>
              </li>
              <li>
                <NavLink to ="/about">About</NavLink>
              </li>
              <li>
                <NavLink to ="/menu">Menu</NavLink>
              </li>
              <li>
                <NavLink to ="/contact">Contact</NavLink>
              </li>
            </ul>
    </Box>
  )
  return (
    <>
     <Box>
      <AppBar component={'nav'} sx={{bgcolor:'black'}}>

        <Toolbar>
          <IconButton color='inherit' aria-label='opne drawer' edge='start' sx={{mr:2, display: {sm:"none"}}} onClick={handleDrawerToggle}>

            <MenuIcon/>

            </IconButton>

         <Typography color={'goldenrod'} variant='h5' component="div" sx={{flexGrow:1}}>
          <FastfoodIcon/>
           FOODI-CRUSH
         </Typography>
         
          <Box sx={{display: {xs:"none",sm:"block"}}}>
            <ul className='navigation-manu'>
              <li>
                <NavLink activeclassname="active" to ="/">Home</NavLink>
              </li>
              <li> 
                <NavLink to ="/about">About</NavLink>
              </li>
              <li>
              <NavLink to ="/menu">Menu</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </Box>
          
        </Toolbar>
      </AppBar>

      <Box component="nav">
        <Drawer variant="temporary" open={mobileopen} onClose={handleDrawerToggle} sx={{display:{xs:'block', sm:'none'}, "& .MuiDrawer-paper":{
          boxSizing:"border-box",
          width:"240px",
        } 
      }}>
          {drawer}
        </Drawer>
      </Box>
      <Toolbar/>
     </Box> 
    </>
  )
}

export default Navbar
