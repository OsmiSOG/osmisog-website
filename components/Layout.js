import Head from 'next/head'
import Header from "./Header";
import Container from "@mui/material/Container";

export default function Layout({children}) {
   return (
      <div>
         <Header />

         <Container>
               {children}
         </Container>
      </div>
   )
}
