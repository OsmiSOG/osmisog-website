import { Avatar, Box, Card, CardActions, CardContent, Grid, Typography } from "@mui/material";
import Head from "next/head";
import React from "react";
import Link from "../components/Link";
import { profile } from "../data/profile";

export default function Home({about}) {
   return (
      <Box>
         <Head>
            <title>OsmiSOG</title>
            
            <meta name="viewport" content="initial-scale=1, width=device-width" />
            <meta name="description" content="Web Page portfolio about Osmi Santiago Otalora Guerrero" />
            <meta name="keywords" content="osmi, Osmi, OsmiSOG, osmisog, osmi santiago otalora guerrero, Osmi Santiago Otalora Guerrero, Santiago Otalora, Osmi Page, Osmi Pagina" />
            <meta name="author" content="Osmi Santiago Otalora Guerrero" />
            <meta name="robots" content="index,follow"/>

            <link rel="canonical" href="https://osmisog-website.vercel.app/"/>
            <link rel="icon" href="/head.png" />
         </Head>
         <Typography variant="h2" align="center" margin={5}>Hola, Soy {about.short_name}</Typography>
         <Grid container>
            <Grid item md={6} xs={12} align="center">
               <Avatar src="/mePicture.jpg" alt="Osmi Picture"  sx={{ width: 300, height: 300 }} layout="responsive"/>
            </Grid>
            <Grid item md={6} xs={12}>
               <Card>
                  <CardContent>
                     <Typography>
                        {about.introduction}
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

export async function getStaticProps() {
   return {
      props: {
         about: profile
      }
   }
}