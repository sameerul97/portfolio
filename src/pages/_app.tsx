import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head';
import type { AppProps } from 'next/app'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles.css'

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page)

  return getLayout(
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=5" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
