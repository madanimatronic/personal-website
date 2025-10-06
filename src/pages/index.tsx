import { AnimatedContactBanner } from '@/components/AnimatedContactBanner';
import { MainLayout } from '@/components/Layouts/MainLayout';
import { MainButtonLink } from '@/components/MainButtonLink';
import { Seo } from '@/components/Seo';
import { TerminalHero } from '@/components/TerminalHero';
import s from '@/styles/HomePage.module.scss';
import { devTitle, myGithubURL } from '@/utils/constants';

export default function HomePage() {
  return (
    <>
      <Seo
        headTitle={devTitle}
        metaDescription='Меня зовут Илья. Я начинающий backend node.js разработчик,
          стремящийся к новым знаниям и навыкам'
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
