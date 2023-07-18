import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import React from "react";
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
const Contact = () => {
  return (
    <>
      <Box sx={{my:10 , ml:3,
       "& h4": {
        fontSize:35,
         mb:3,
        },

      "& p": {
        fontFamily:"initial",
        fontSize:20,
      },
    }}>
        <Typography variant="h4" align="center">
          Contact My Foodi-Crush
        </Typography>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          illo quidem quas doloribus. Aut laboriosam quidem voluptates
          doloremque autem reprehenderit odit ducimus provident! Earum aliquid
          voluptates velit, esse maiores sed optio non recusandae maxime modi
          necessitatibus aspernatur atque ut asperiores fuga temporibus, ducimus
          quaerat sit libero eius. Expedita, delectus quo!
        </p>
      </Box>
      <Box sx={{
        
        
        
        
        m:3}}>
        <TableContainer component={Paper}>
          <Table aria-label="contact table">
          <TableHead>
            <TableRow>
              <TableCell sx={{color:"white",bgcolor:"black",fontSize:25 }} align="center">
                Contact Details
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
               <SupportAgentIcon sx={{color:"blue", pt:1}}/> 1800-104-105   (Toll Free Number)
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
               <EmailIcon sx={{color:"skyblue",pt:1}}/> help123@gamil.com 
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
               < CallIcon sx={{color:"red", pt:1}}/> 1234567890
              </TableCell>
            </TableRow>
          </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

export default Contact;
