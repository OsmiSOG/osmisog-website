import Head from 'next/head'
import Header from "./Header";
import Container from "@mui/material/Container";

export default function Layout({children}) {
   return (
      <div>
         <Head>
               <title>OsmiSOG</title>
               <meta name="viewport" content="initial-scale=1, width=device-width" />
               <meta name="description" content="Web Page portfolio about Osmi Santiago Otalora Guerrero" />
               <link rel="icon" href="/head.png" />
         </Head>

         <Header />

         <Container>
               {children}
         </Container>
      </div>
   )
}
