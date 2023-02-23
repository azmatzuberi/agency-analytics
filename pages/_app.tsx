import '@/styles/globals.scss'
import '@/styles/Home.module.scss'
import 'bootstrap/dist/css/bootstrap.css'

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
