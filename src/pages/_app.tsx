import { alkalamiFont, pressStart2PFont } from '@/styles/fonts';
import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div
      className={`appWrapper ${pressStart2PFont.variable} ${alkalamiFont.variable}`}
    >
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}
