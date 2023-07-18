import React from 'react'
import {Box,Typography} from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
const Footer = () => {
  return (
    <>
      <Box sx={{textAlign:'center', bgcolor:'#504949' , color:'white',p:2}}>
        <Box sx={{my:1,
        "& svg":{
            fontSize:"40px",
            cursor:"pointer",
            mr:2,
        },
         "& svg:hover":{
           color:"yellow",
           transform:"translateX(5px)",
           transition:"all 500ms",
         },
        }}>
          <InstagramIcon/>
          <GitHubIcon/>
          <TwitterIcon/>
          <FacebookIcon/>
        </Box>
        <Typography variant='h5' sx={{"@media(max-width:600px)":{ fontSize:"1rem"}}}>
            REACTJS & MUI BASE WEB APPLICATION 
        </Typography>
      </Box>
    </>
  )
}

export default Footer
