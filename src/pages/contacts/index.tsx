import { MainLayout } from '@/components/Layouts/MainLayout';
import { MainButtonLink } from '@/components/MainButtonLink';
import { Seo } from '@/components/Seo';
import { devTitle, hhResumeURL, myWorkMail } from '@/utils/constants';
import s from './ContactsPage.module.scss';

export default function ContactsPage() {
  return (
    <>
      <Seo
        headTitle={`Контакты | ${devTitle}`}
        metaDescription='Контакты для связи'
      />
      <MainLayout mainElementClassName={s.main}>
        <ul className={s.linksList}>
          <li className={s.linkItem}>
            <MainButtonLink
              external
              href={hhResumeURL}
              target='_blank'
              rel='noopener noreferrer'
              className={s.buttonLink}
            >
              Я на HeadHunter
            </MainButtonLink>
          </li>
        </ul>
        <address className={s.mailContainer}>
          <span className={s.mailTitle}>Мой email:</span>
          <a className={s.mail} href={`mailto:${myWorkMail}`}>
            {myWorkMail}
          </a>
        </address>
      </MainLayout>
    </>
  );
}
