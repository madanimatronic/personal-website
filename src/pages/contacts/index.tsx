import { MainLayout } from '@/components/Layouts/MainLayout';
import { MainButtonLink } from '@/components/MainButtonLink';
import { Seo } from '@/components/Seo';
import { devTitle, myWorkMail } from '@/utils/constants';
import s from './ContactsPage.module.scss';

export default function ContactsPage() {
  return (
    <>
      <Seo
        headTitle={`Контакты | ${devTitle}`}
        metaDescription='some description'
        iconLink='/favicon.ico'
      />
      <MainLayout mainElementClassName={s.main}>
        <ul className={s.linksList}>
          <li className={s.linkItem}>
            <MainButtonLink className={s.buttonLink}>
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
