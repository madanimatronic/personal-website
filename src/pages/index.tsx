import { AnimatedContactBanner } from '@/components/AnimatedContactBanner';
import { MainLayout } from '@/components/Layouts/MainLayout';
import { MainButton } from '@/components/MainButton';
import { Seo } from '@/components/Seo';
import { TerminalHero } from '@/components/TerminalHero';
import s from '@/styles/Home.module.scss';

// TODO: при встраивании knucklebones не забыть поменять favicon,
// description и title в Seo (также проверить всё это и на других страницах)

// Нужно переделать hero на анимированную консоль с выводом текста,
// т.к. текст на фоне картинки - сомнительная идея

// TODO: обратить внимание на кнопки в макете, подкорректировать логику
// разметки при необходимости

// TODO: поменять в теге <html> lang с en на ru и убедиться, что так на всех страницах
// (хотя на сайте есть как ru текст, так и en, поэтому лучше поресерчить этот момент)

export default function HomePage() {
  return (
    <>
      <Seo
        headTitle='Home page'
        metaDescription='some description'
        iconLink='/favicon.ico'
      />
      <MainLayout mainElementClassName={s.main}>
        <TerminalHero />
        {/* <div style={{ background: 'rgb(80, 80, 80)' }}>hello there!</div> */}
        <div className={s.buttonsContainer}>
          <MainButton className={s.button}>Портфолио</MainButton>
          <MainButton className={s.button}>Стек</MainButton>
          {/* <MainButton className={s.button}>Принципы</MainButton> */}
        </div>
        <AnimatedContactBanner />
      </MainLayout>
    </>
  );
}
