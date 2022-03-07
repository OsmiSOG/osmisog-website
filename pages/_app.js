import Layout from '../components/Layout'
import '@fontsource/dongle/latin.css'
import '../styles/globals.css'
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material'

let theme = createTheme({
   typography: {
      fontFamily: [
         'dongle',
         'sans-serif'
      ].join(','),
      fontSize: 20
   }
})

theme = responsiveFontSizes(theme)

function MyApp({ Component, pageProps }) {
   return (
      <ThemeProvider theme={theme}>
         <Layout>
            <Component {...pageProps} />
         </Layout>
      </ThemeProvider>
   )
}

export default MyApp
