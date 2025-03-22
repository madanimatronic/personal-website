import { Alkalami, Press_Start_2P } from 'next/font/google';

const pressStart2PFont = Press_Start_2P({
  variable: '--font-press-start-2p',
  subsets: ['latin', 'cyrillic'],
  weight: '400',
});

const alkalamiFont = Alkalami({
  variable: '--font-alkalami',
  subsets: ['latin'],
  weight: '400',
});

export { alkalamiFont, pressStart2PFont };
