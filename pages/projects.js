import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { Box, Card, CardActionArea, CardActions, CardContent, CardMedia, Divider, Grid, Typography } from '@mui/material';
import Head from 'next/head';
import React from 'react';
import Link from '../components/Link';

export default function projects() {
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
               
               <Grid item xs={4} sm={4} md={4}>
                  <Card>
                     <CardMedia
                        component="img"
                        image="/logo-accedo.svg"
                        alt="Accedo"
                     />
                     <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography variant='h4'>
                           Accedo
                           <Link type="link" target="_blank" href="https://www.accedotechnologies.com/" >
                              <OpenInNewIcon fontSize="small"/>
                           </Link>
                        </Typography>
                        <Typography sx={{ lineHeight: "1" }}>
                           Accedo es la empresa en la que trabajo actualmente, 
                           en mi busqueda de un lugar mejor de trabajo ademas de un sitio donde realizar mis practicas me tope con accedo,
                           aqui he trabajado en proyectos para el ciclo de vida del personal, en el web page de reclutamiento dentro de la empresa,
                           proyectos externos como alltruismo y noisesharks.
                           Dentro de mis principales tareas y retos que he superado aqui han sido, la adquisición y diseño de requerimientos para diferentes modulos del sistema interno,
                           dentro de ellos el sistema de reclutamiento, soporte de proyectos como implementacion de mejoras, cambios, y actualizacion de los diferentes depedencias de los proyectos.
                        </Typography>
                        <Typography>
                           Las Principales tecnologias que uso:
                           Laravel, Vue, Mysql, Sail Docker, Javascript
                        </Typography>
                     </CardContent>
                     <CardActions>
                     </CardActions>
                  </Card>
               </Grid>

               <Grid item xs={4} sm={4} md={4}>
                  <Card>
                     <CardMedia
                        component="img"
                        image="/pokeapi.png"
                        alt="libreria de pokemones"
                     />
                     <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography variant='h4'>
                           Libreria de Pokemones 
                           <Link type="link" target="_blank" href="https://osmisog.github.io/pokemon-react/" title="PokePage React">
                              <OpenInNewIcon fontSize="small"/>
                           </Link>
                           <Link type="link" target="_blank" href="https://github.com/OsmiSOG/pokemon-react" title="PokePage GitHub React">
                              <GitHubIcon fontSize="small"/>
                           </Link>
                           <Link type="link" target="_blank" href="https://pokemon-api-d2eb5.web.app/" title="PokePage Vue">
                              <OpenInNewIcon fontSize="small"/>
                           </Link>
                           <Link type="link" target="_blank" href="https://github.com/OsmiSOG/pokemon-project" title="PokePage GitHub Vue">
                              <GitHubIcon fontSize="small"/>
                           </Link>
                        </Typography>
                        <Typography sx={{ lineHeight: "1" }}>
                           Este es uno de mis proyectos en los que he practicado y entrenado tecnologias como React y Vue,
                           por lo que tengo dos versiones de este mismo proyecto, uno con cada tecnologia respectivamente,
                           en donde consumo el 
                           <Link type="link" target="_blank" href="https://pokeapi.co/"> api pokemon </Link> 
                           listandolos, y ver el detalle de cada pokemon.
                        </Typography>
                        <Typography>
                           Construido con: React, Vue, Vuex, firebase, api pokemon
                        </Typography>
                     </CardContent>
                     <CardActions>
                     </CardActions>
                  </Card>
               </Grid>

               <Grid item xs={4} sm={4} md={4}>
                  <Card>
                     <CardMedia
                        component="img"
                        image="/logo-process-plus.png"
                        alt="Process Pluss"
                     />
                     <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography variant='h4'>
                           Process 
                           <Link type="link" target="_blank" href="http://process.grupotesta.com.co:8989/Pruebas/public/Ingreso" >
                              <OpenInNewIcon fontSize="small"/>
                           </Link>
                        </Typography>
                        <Typography sx={{ lineHeight: "1" }}>
                        Este fue en la primer empresa y de igual modo proyecto en el que trabaje,
                           se trata de un ERP para la misma empresa de publicidad en el cual se buscaba tener control de las diferentes campañas que se tenian, 
                           desde creación de presupuestos, hasta la asignación de tareas entre el ejecutivo y su equipo de creativos.
                           Este proyecto se realizo con laravel, aunque debido a la falta de cultura tecnologica, y bajo presupuesto para el desarrollo, 
                           el codigo era dificil de mantener, poco escalable, no seguia ningún principio de SOLID o DRY, por lo que apesar de usar laravel apenas si se implementaba un 1% del freamwork.
                           Desafortunadamente no cuentan con una pagina web en el que se puedan dar a conocer.
                        </Typography>
                        <Typography>
                           Construido con Laravel, MySql, y Javascript
                        </Typography>
                     </CardContent>
                     <CardActions>
                     </CardActions>
                  </Card>
               </Grid>
               
               <Grid item xs={4} sm={4} md={4}>
                  <Card>
                     <CardMedia
                        component="img"
                        image="/valorator.png"
                        alt="aplicacion valorator uniminuto"
                     />
                     <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography variant='h4'>
                           Valorator Uniminuto
                           <Link type="link" target="_blank" href="https://rebrand.ly/valoratorUniminuto" >
                              <OpenInNewIcon fontSize="small"/>
                           </Link>
                        </Typography>
                        <Typography sx={{ lineHeight: "1" }}>
                           Este fue el proyecto que trabaje dentro del semillero universitario,
                           el cual su area de investigación son las smart cities y blockchain.
                           El proyecto esta principalmente orientado hacia las smart cities, 
                           en donde se buscaba empezar a implementar esta filosofia en ciudades como Bogotá, Colombia, 
                           ayudando a dar un avance hacia este aspecto, con una orientación hacia el e-gobenance, 
                           para lograr obtener una valoración de la ciudad apartir de la percepción de cada persona,
                           desde tres aspectos diferentes; salud, segurida y ambiente, 
                           de tal modo que con los reportes generados por el aplicativo los gobiernos puedan tomar acción de acuerdo a la calificación del indice de bienestar obtenido.
                        </Typography>
                        <Typography>
                           Construido con PHP, Javascript, mysql
                        </Typography>
                     </CardContent>
                     <CardActions>
                     </CardActions>
                  </Card>
               </Grid>
               
               <Grid item xs={4} sm={4} md={4}>
                  <Card>
                     <CardMedia
                        component="img"
                        image="/puzzle.png"
                        alt="puzzle 15"
                     />
                     <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography variant='h4'>
                           Puzzle 15
                           <Link type="link" target="_blank" href="https://osmisog.github.io/Puzzle15/" >
                              <OpenInNewIcon fontSize="small"/>
                           </Link>
                        </Typography>
                        <Typography sx={{ lineHeight: "1" }}>
                           Este fue uno de mis proyectos universitarios, 
                           se trata del famoso y sencillo juego de puzzle 15, 
                           el cual consiste en un tablero de 4 x 4 piezas cuadradas, las cuales estan numeradas, 
                           en donde la pieza 16 no esta, dejando un espació entre las fichas,
                           con el fin de ordenarlas del 1 al 15.
                        </Typography>
                        <Typography>
                           Construido con Javascript
                        </Typography>
                     </CardContent>
                     <CardActions>
                     </CardActions>
                  </Card>
               </Grid>

               <Grid item xs={4} sm={4} md={4}>
                  <Card>
                     <CardMedia
                        component="img"
                        image="/others.png"
                        alt="Otros Proyectos"
                     />
                     <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography variant='h4'>
                           Otros Proyectos
                           <Link type="link" target="_blank" href="https://github.com/OsmiSOG" title="Personal">
                              <GitHubIcon fontSize="small"/>
                           </Link>
                           <Link type="link" target="_blank" href="https://github.com/osmiOTALORAGUERRERO" title="Universitario">
                              <GitHubIcon fontSize="small"/>
                           </Link>
                        </Typography>
                        <Typography sx={{ lineHeight: "1" }}>
                           Dentro de mi trayectoria, he realizado una gran variedad de proyectos, 
                           tanto universitario, como a nivel personal y autodidacta,
                           algunos de ellos son; algunos de ellos son un aplicativo para colaborar en el apredizaje de idiomas con Node,
                           trabajos de simulación e inteligencia artificial con python, mineria de datos con R, 
                           algunos proyectos implementando implementando las bases de la criptografia, entre otros...
                        </Typography>
                        <Typography>
                           PHP, Javascript, Python, R, Java, Ruby, React, Vue.
                        </Typography>
                     </CardContent>
                     <CardActions>
                     </CardActions>
                  </Card>
               </Grid>

            </Grid>
         </Box>
      </div>
   );
}
