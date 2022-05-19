import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {SessionProvider} from "next-auth/react"

function MyApp({ Component, pageProps:{session, ...pageProps} }: AppProps) {
  return (
    // Wrap the entire appp so that we can use the session from the hook. This will wllow us tyo use all the next auth hooks throughout the app
    <SessionProvider session={session}>
      <Component {...pageProps} />
      </SessionProvider>
  )
}

export default MyApp
