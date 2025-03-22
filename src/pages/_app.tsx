import { alkalamiFont, pressStart2PFont } from '@/styles/fonts';
import '@/styles/globals.scss';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div
      className={`appWrapper ${pressStart2PFont.variable} ${alkalamiFont.variable}`}
    >
      <Component {...pageProps} />
    </div>
  );
}
