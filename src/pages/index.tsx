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

export default function Home() {
  return (
    <>
      <Seo
        headTitle='My page'
        metaDescription='some description'
        iconLink='/favicon.ico'
      />
      <MainLayout>
        <TerminalHero />
        {/* <div style={{ background: 'rgb(80, 80, 80)' }}>hello there!</div> */}
        <div className={s.buttonsContainer}>
          <MainButton>123</MainButton>
          <MainButton>123</MainButton>
          <MainButton>123</MainButton>
        </div>
      </MainLayout>
    </>
  );
}
