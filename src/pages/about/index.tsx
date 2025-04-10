import { MainLayout } from '@/components/Layouts/MainLayout';
import { MainContentBlock } from '@/components/MainContentBlock';
import { Seo } from '@/components/Seo';
import { procharityURL } from '@/utils/constants';
import clsx from 'clsx';
import s from './AboutPage.module.scss';

// TODO: секции (упорядоченный список) стек, требования к работе (лучше написать пожелания или предпочтения), "хотите связаться?", обо мне

export default function AboutPage() {
  return (
    <>
      <Seo
        headTitle='About page'
        metaDescription='some description'
        iconLink='/favicon.ico'
      />
      <MainLayout mainElementClassName={s.main}>
        <h1 className={s.intro}>
          <span className={s.greeting}>Привет!</span> <br />
          Меня зовут testName <br /> Я начинающий frontend-разработчик,
          стремящийся к новым знаниям и навыкам.
        </h1>
        <MainContentBlock title='Опыт'>
          <div className={s.textContainer}>
            <p className={s.contentBlockText}>
              На данный момент у меня не так много опыта frontend-разработки, но
              я уже успел поработать над проектами яндекс-практикума, включая
              участие в реальном проекте{' '}
              <a
                className={clsx(s.textLink, s.procharityLink)}
                target='_blank'
                href={procharityURL}
              >
                ProCharity
              </a>
            </p>
            <p className={s.contentBlockText}>
              Также завершил несколько собственных pet-проектов и участвовал в
              небольшом стартапе в роли fullstack-разработчика, где приобрёл
              массу ценных занний и получил опыт работы с{' '}
              <span className={s.lightGreenAccent}>NodeJS</span>,{' '}
              <span className={s.grayAccent}>Express.js</span>,{' '}
              <span className={s.blueAccent}>PostgreSQL</span>,{' '}
              <span className={s.lightGrayAccent}>NextJS</span>,{' '}
              <span className={s.purpleAccent}>Lightweight Charts</span>,{' '}
              <span className={s.darkGreenAccent}>Zustand</span> и прочими
              инструментами.
            </p>
          </div>
        </MainContentBlock>
        <MainContentBlock title='Стек'></MainContentBlock>
      </MainLayout>
    </>
  );
}
