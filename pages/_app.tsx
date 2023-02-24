import '@/styles/globals.scss'
import 'bootstrap/dist/css/bootstrap.css'
import { Provider } from "react-redux";

import type { AppProps } from 'next/app'
import store from '@/store/store-update';

export default function App({ Component, pageProps }: AppProps) {
  return <Provider store={store}><Component {...pageProps} /></Provider>
}
