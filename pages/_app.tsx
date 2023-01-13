import Head from 'next/head'
import type { AppProps } from 'next/app';
import { Montserrat } from '@next/font/google';
import '../styles/globals.css';

const montserrat = Montserrat({
    weight: [ '400'],
    style: ['normal'],
    subsets: ['cyrillic', 'latin']
});

function MyApp({ Component, pageProps }: AppProps) {
    return (
      <>
        <Head>
          <title>100 Вопросов</title>
        </Head>
        <main className={montserrat.className}>
          <Component {...pageProps} />
        </main>
      </>

    );
}

export default MyApp;
