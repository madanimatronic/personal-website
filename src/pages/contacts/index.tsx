import { MainLayout } from '@/components/Layouts/MainLayout';
import { MainButton } from '@/components/MainButton';
import { Seo } from '@/components/Seo';
import { myWorkMail } from '@/utils/constants';
import s from './ContactsPage.module.scss';

export default function ContactsPage() {
  return (
    <>
      <Seo
        headTitle='Contacts page'
        metaDescription='some description'
        iconLink='/favicon.ico'
      />
      <MainLayout mainElementClassName={s.main}>
        <ul className={s.linksList}>
          <li className={s.linkItem}>
            <MainButton className={s.linkButton}>Я на HeadHunter</MainButton>
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
