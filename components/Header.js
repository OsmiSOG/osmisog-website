import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import Container from "@mui/material/Container";
import { Avatar, IconButton, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Link from "./Link";

export default function header() {
   const [anchorEl, setAnchorEl] = useState(null);

   return (
      <AppBar position='static'>
         <Container maxWidth="xl">
               <Toolbar disableGutters>
                  <Link type="link" href="/" color="inherit" underline="none" sx={{flexGrow: 1, mr: 2, display: { xs: 'flex', md: 'flex' } }}>
                     <Avatar alt="Osmi Picture" src="/mePicture.jpg" sx={{marginRight: 1}}/>
                     <Typography component="div" variant='h5'>
                        OsmiSOG
                     </Typography>
                  </Link>

                  <Box sx={{flexGrow: 0, display: {xs: 'flex', md:'none'}}}>
                     <IconButton aria-controls='menu-appbar' onClick={e => {setAnchorEl(e.currentTarget)}}>
                        <MenuIcon />
                     </IconButton>
                     <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                           vertical: 'bottom',
                           horizontal: 'left',
                        }}
                        keepMounted
                        transformOrigin={{
                           vertical: 'top',
                           horizontal: 'left',
                        }}
                        open={Boolean(anchorEl)}
                        onClose={() => {setAnchorEl(null)}}
                        sx={{
                           display: { xs: 'block', md: 'none' },
                        }}
                     >
                        <MenuItem>
                           <Typography textAlign="center">
                              <Link type="link" href="/about" color="inherit" underline="none"> About </Link>
                           </Typography>
                        </MenuItem>
                        <MenuItem>
                           <Typography textAlign="center">
                              <Link type="link" href="/projects" color="inherit" underline="none"> Projects </Link>
                           </Typography>
                        </MenuItem>
                     </Menu>
                  </Box>

                  <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
                     <Link type="button" href="/about" sx={{ my: 2, color: 'white', display: 'block' }}>About</Link>
                     <Link type="button" href="/projects" sx={{ my: 2, color: 'white', display: 'block' }}>Projects</Link>
                  </Box>

               </Toolbar>
         </Container>
      </AppBar>
   );
}
