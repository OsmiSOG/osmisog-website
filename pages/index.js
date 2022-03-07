import { Avatar, Box, Card, CardActions, CardContent, Grid, Typography } from "@mui/material";
import React from "react";
import Link from "../components/Link";

export default function Home() {
   return (
      <Box>
         <Typography variant="h2" align="center" margin={5}>Hola, Soy Santiago Otálora</Typography>
         <Grid container>
            <Grid item md={6} xs={12} align="center">
               <Avatar src="/mePicture.jpg" alt="Osmi Picture"  sx={{ width: 300, height: 300 }} layout="responsive"/>
            </Grid>
            <Grid item md={6} xs={12}>
               <Card>
                  <CardContent>
                     <Typography>
                        Soy Desarrollador de software Full Stack, apasionado por la tecnología.
                        He desarrollado proyectos en diferentes lenguajes de programación,
                        sin embargo he tenido mayor experiencia en PHP junto con su Freamwork Laravel,
                        y desde el front he trabajado con Vue y React.
                     </Typography>

                  </CardContent>
                  <CardActions>
                     <Link type="link" href="/about" underline="hover"> <Typography> Mas Sobre Mi... </Typography> </Link>
                  </CardActions>
               </Card>
            </Grid>
         </Grid>
      </Box>
   )
}
