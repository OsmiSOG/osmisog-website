import { Box, Divider, Paper, Stack, styled, Typography } from "@mui/material";
import Head from "next/head";

const Item = styled(Paper)(({ theme }) => ({
   ...theme.typography.body2,
   padding: theme.spacing(1),
   textAlign: 'center',
   color: theme.palette.text.secondary,
 }));

export default function about() {
   return (
      <div>
         <Head>
               <title>OsmiSOG - About Me</title>
         </Head>

         <Box sx={{marginBottom:2, paddingBottom:2}}>
            <Typography variant="h3">
               Sobre Mi
            </Typography>
            <Divider variant="fullWidth"/>

            <Box>
               <Typography variant="body1">
                  Hola!!!, soy Santiago Otalora, aunque muchos me dicen Osmi, no es que sea un apodo o sobre nombre, y aunque parezca mentira es mi primer nombre,
                  ya que por cosas del destino mi padre se le vino ese nombre y como que le sono chevere pues asi quedo, no podia hacer nada en ese momento para impedirlo. <br/><br/>
                  Despues de esta pequeña anecdota sobre mi nombre, me presento.
                  Soy de Colombia, he vivido toda mi vida aqui hasta el momento, tengo 22 años, y me apasiona la tecnología, siempre estoy aprendiendo cosas nuevas, y pngo lo mejor de mi.
                  desde que estaba en el colegio siempre queria hacer cosas con tecnología, ya que me fasinaba todo lo que hacia,
                  por lo que cuando llego el momento de decidir que queria estudiar me decidí por ingeniería de sistema, empeze a los 17 años, y me encanto,
                  desde entonces programar se volvio parte de mi vida.
                  Recuerdo que mi primer programa que hice fue hechó en Java, y fue con el que empeze hacer varias cositas, luego conocí a PHP y me gusto bastante, desde entonces ha sido mi lenguage principal junto con Laravel,
                  aunque tambien he hecho cositas con node y python, y con javascript ultimamente he estado usando React y Vue. <br/><br/>
                  Dentro de mi experiencia en proyectos laborales lo obtuve mientras aun continuaba con mis estudios, y fue como desarrollador web, mi primer experiencia dentro de lo que me gusta hacer,
                  y fue muy sorprente porque aunque tomo tiempo en conseguirlo ya que de la mayoria de los lugares a los que me postulaba no me llamaban seguramente por la falta de experiencia, ellos se arriesgaron conmigo,
                  y demostre mi capacidad en las pruebas y me contrataron, hasta que llego de realizar mis practicas profesionales,
                  sin embargo en donde no setia que pudiera avanzar y que de seguro podria encontrar otro lugar en los que pudiera enfrentar nuevos retos y aprender cosas nuevas,
                  por lo que tome la decisión de buscar en otro sitio para realizar mis practicas, durante mi busqueda viaje y salí a conocer un poco más de Colombia, hasta que boom!!!
                  una nueva oportunidad se me presento y la tome, y definitavemente fue una buena decision, he aprendido más cosas y he resuelto nuevos, y para mi sorpresa terminando las practicas me ofrecioeron la oportidad de continuar ahí, y acepte,
                  por lo que actualmente me encuentro trabajando con Vue y Laravel.
               </Typography>
               <br/>
               <Typography variant="h5">
                  Mis Habilidades
               </Typography>
               <Typography>
                  Dentro de mis hablidades en el desarrollo cuento con conocimientos en:
               </Typography>
               <Stack direction="row" divider={<Divider orientation="vertical" flexItem/>} spacing={2}>
                  <Item>PHP</Item>
                  <Item>Java</Item>
                  <Item>JavaScript</Item>
                  <Item>Laravel</Item>
                  <Item>Vue</Item>
                  <Item>React</Item>
                  <Item>MySql</Item>
               </Stack>
               <br />
               <Typography variant="h5">
                  Mis Actividades
               </Typography>
               <Stack direction="row" divider={<Divider orientation="vertical" flexItem/>} spacing={2}>
                  <Item>Aprender</Item>
                  <Item>Desarrollar</Item>
                  <Item>Salir en bici</Item>
                  <Item>Jugar VideoJuegos</Item>
                  <Item>Ver Series y Peliculas</Item>
               </Stack>
            </Box>
         </Box>
      </div>
   )
}
