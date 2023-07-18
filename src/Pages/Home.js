import React from 'react'
import {Box} from '@mui/material'
import Banner from '../image/Banner.jpg'
import '../Styles/Homestyle.css'
const Home = () => {
  return (
    <>
     <Box className="home" style={{backgroundImage:`url(${Banner})`}}>
      <Box className="navcontainer">
      <h1>FOODI-CRUSH</h1>  
      <p>Best Food Of  My Foodi-Zoon</p>
      <a href ="/Menu">
      <button> ODER NOW</button>
      </a>
      </Box>
     </Box>
      
    </>
  )
}
export default Home
