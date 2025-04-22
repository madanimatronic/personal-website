import { MainLayout } from '@/components/Layouts/MainLayout';
import { MainButtonLink } from '@/components/MainButtonLink';
import { MainContentBlock } from '@/components/MainContentBlock';
import { Seo } from '@/components/Seo';
import { devTitle, procharityURL } from '@/utils/constants';
import clsx from 'clsx';
import s from './AboutPage.module.scss';

// TODO: секции (упорядоченный список) стек, требования к работе (лучше написать пожелания или предпочтения), "хотите связаться?", обо мне

export default function AboutPage() {
  return (
    <>
      <Seo
        headTitle={`Обо мне | ${devTitle}`}
        metaDescription='some description'
      />
      <MainLayout mainElementClassName={s.main}>
        <h1 className={s.intro}>
          <span className={s.greeting}>Привет!</span> <br />
          Меня зовут testName <br /> Я начинающий frontend-разработчик,
          стремящийся к новым знаниям и навыкам.
        </h1>
        <MainContentBlock title='Опыт' titleAnchorId='experience'>
          <div className={s.textContainer}>
            <p className={s.contentBlockText}>
              На данный момент у меня не так много опыта frontend-разработки, но
              я уже успел поработать над проектами яндекс-практикума, включая
              участие в реальном проекте{' '}
              <a
                className={clsx(s.textLink, s.procharityLink)}
                target='_blank'
                rel='noopener noreferrer'
                href={procharityURL}
              >
                ProCharity
              </a>
            </p>
            <p className={s.contentBlockText}>
              Также завершил несколько собственных pet-проектов и участвовал в
              небольшом стартапе в роли fullstack-разработчика, где приобрёл
              массу ценных занний и получил опыт работы с{' '}
              <span className={s.nodeAccent}>NodeJS</span>,{' '}
              <span className={s.expressAccent}>Express.js</span>,{' '}
              <span className={s.postgreSQLAccent}>PostgreSQL</span>,{' '}
              <span className={s.nextAccent}>NextJS</span>,{' '}
              <span className={s.lwcAccent}>Lightweight Charts</span>,{' '}
              <span className={s.zustandAccent}>Zustand</span> и прочими
              инструментами.
            </p>
          </div>
        </MainContentBlock>
        <MainContentBlock title='Стек' titleAnchorId='stack'>
          <ul className={s.stackList}>
            <li className={clsx(s.stackItem, s.html)}>HTML</li>
            <li className={clsx(s.stackItem, s.css)}>CSS</li>
            <li className={clsx(s.stackItem, s.js)}>JavaScript</li>
            <li className={clsx(s.stackItem, s.ts)}>TypeScript</li>
            <li className={clsx(s.stackItem, s.sass)}>SASS/SCSS</li>
            <li className={clsx(s.stackItem, s.react)}>React</li>
            <li className={clsx(s.stackItem, s.redux)}>Redux</li>
            <li className={clsx(s.stackItem, s.zustand)}>Zustand</li>
            <li className={clsx(s.stackItem, s.storybook)}>Storybook</li>
            <li className={clsx(s.stackItem, s.webpack)}>Webpack</li>
            <li className={clsx(s.stackItem, s.vite)}>Vite</li>
            <li className={clsx(s.stackItem, s.next)}>Next.JS</li>
            <li className={clsx(s.stackItem, s.mui)}>MUI</li>
            <li className={clsx(s.stackItem, s.pixi)}>Pixi.js</li>
            <li className={clsx(s.stackItem, s.lwc)}>Lightweight Charts</li>
            <li className={clsx(s.stackItem, s.express)}>Express.js</li>
            <li className={clsx(s.stackItem, s.node)}>Node.js</li>
            <li className={clsx(s.stackItem, s.reactRouter)}>React Router</li>
            <li className={clsx(s.stackItem, s.git)}>Git</li>
            <li className={clsx(s.stackItem, s.postgreSQL)}>PostgreSQL</li>
            <li className={clsx(s.stackItem, s.restAPI)}>REST API</li>
            <li className={clsx(s.stackItem, s.jest)}>Jest</li>
            <li className={clsx(s.stackItem, s.rtl)}>React Testing Library</li>
            <li className={clsx(s.stackItem, s.cypress)}>Cypress</li>
          </ul>
          <small className={clsx(s.noteText, s.stackNote)}>
            * Данный список может быть неполным. Также я готов изучить что-то
            новое
          </small>
        </MainContentBlock>
        <MainContentBlock title='Предпочтения' titleAnchorId='preferences'>
          <ol className={s.preferencesList}>
            <li className={clsx(s.preferenceItem, s.contentBlockText)}>
              <div className={s.preferenceContainer}>
                <span className={s.preferenceText}>
                  График работы: удалённая работа
                </span>
                <small className={s.noteText}>
                  Я предпочитаю работать удалённо, но могу иногда приезжать в
                  офис при необходимости
                </small>
              </div>
            </li>
            <li className={clsx(s.preferenceItem, s.contentBlockText)}>
              <div className={s.preferenceContainer}>
                <span className={s.preferenceText}>
                  Тип занятости: полная или частичная занятость
                </span>
              </div>
            </li>
            <li className={clsx(s.preferenceItem, s.contentBlockText)}>
              <div className={s.preferenceContainer}>
                <span className={s.preferenceText}>
                  {'Желаемая зарплата: от 45.000р или 300р/час'}
                </span>
                <small className={s.noteText}>
                  Я готов рассмотреть разные предложения
                </small>
              </div>
            </li>
          </ol>
        </MainContentBlock>
        <MainContentBlock title='Хотите связаться?'>
          <MainButtonLink href='/contacts'>Мои контакты</MainButtonLink>
        </MainContentBlock>
      </MainLayout>
    </>
  );
}
