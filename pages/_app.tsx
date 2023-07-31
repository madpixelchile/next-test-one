// import { ReactElement, ReactNode } from 'react';
import { NextPage } from 'next';
import { AppProps } from 'next/app';

import '@/styles/globals.css';

export type NextPageWithLayout = NextPage & {
  getLayout?: ( page: JSX.Element ) => JSX.Element; 
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function MyApp({ Component, pageProps } : AppPropsWithLayout ) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? (( page ) => page)
 
  return getLayout(<Component {...pageProps} />)
}
