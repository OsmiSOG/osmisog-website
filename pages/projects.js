import { Box, Divider, Grid, Typography } from '@mui/material';
import Head from 'next/head';
import React from 'react';
import CardProject from '../components/CardProject';
import { projects as projectsData } from "../data/projects";

export default function projects({projects}) {
   return (
      <div>
         <Head>
            <title>OsmiSOG - Projects</title>
         </Head>

         <Box>
            <Typography variant="h3">
               Mis Proyectos
            </Typography>
            <Divider variant="fullWidth"/>

            <Grid container alignItems="flex-start" spacing={{xs:2, md:3}} columns={{xs: 4, sm: 8, md:12}} sx={{margin:2, padding:2}}>
               
               {
                  projects.map((project, index) => (
                     <Grid item xs={4} sm={4} md={4} key={index}>
                        <CardProject project={project}/>
                     </Grid>
                  ))
               }
            </Grid>
         </Box>
      </div>
   );
}


export async function getStaticProps() {
   return {
      props: {
         projects: projectsData
      }
   }
}