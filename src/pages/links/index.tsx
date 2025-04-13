import { MainLayout } from '@/components/Layouts/MainLayout';
import { MainButton } from '@/components/MainButton';
import { Seo } from '@/components/Seo';
import s from './Links.module.scss';

export default function LinksPage() {
  return (
    <>
      <Seo
        headTitle='Links page'
        metaDescription='some description'
        iconLink='/favicon.ico'
      />
      <MainLayout mainElementClassName={s.main}>
        <ul className={s.linksList}>
          <li className={s.linkItem}>
            <MainButton className={s.linkButton}>Github</MainButton>
          </li>
          <li className={s.linkItem}>
            <MainButton className={s.linkButton}>Игра Knucklebones</MainButton>
          </li>
        </ul>
      </MainLayout>
    </>
  );
}
