import React from 'react'
import {Box} from '@mui/material'
import Banner from '../image/Banner.jpg'
import '../Styles/Homestyle.css'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <>
     <Box className="home" style={{backgroundImage:`url(${Banner})`}}>
      <Box className="navcontainer">
      <h1>FOODI-CRUSH</h1>  
      <p>Best Food Of  My Foodi-Zoon</p>
      <Link to ="/Menu">
      <button> ODER NOW</button>
      </Link>
      </Box>
     </Box>
      
    </>
  )
}
export default Home
