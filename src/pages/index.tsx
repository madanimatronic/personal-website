import { AnimatedContactBanner } from '@/components/AnimatedContactBanner';
import { MainLayout } from '@/components/Layouts/MainLayout';
import { MainButtonLink } from '@/components/MainButtonLink';
import { Seo } from '@/components/Seo';
import { TerminalHero } from '@/components/TerminalHero';
import s from '@/styles/HomePage.module.scss';
import { devTitle, myGithubURL } from '@/utils/constants';

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
        headTitle={devTitle}
        metaDescription='some description'
        iconLink='/favicon.ico'
      />
      <MainLayout mainElementClassName={s.main}>
        <TerminalHero />
        <div className={s.buttonsContainer}>
          <MainButtonLink
            external
            href={myGithubURL}
            target='_blank'
            rel='noopener noreferrer'
            className={s.button}
          >
            Портфолио
          </MainButtonLink>
          <MainButtonLink href='/about#stack' className={s.button}>
            Стек
          </MainButtonLink>
          <MainButtonLink href='/about#preferences' className={s.button}>
            Предпочтения
          </MainButtonLink>
        </div>
        <AnimatedContactBanner />
      </MainLayout>
    </>
  );
}
