import { MainLayout } from '@/components/Layouts/MainLayout';
import { MainButtonLink } from '@/components/MainButtonLink';
import { Seo } from '@/components/Seo';
import s from './LinksPage.module.scss';

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
            <MainButtonLink className={s.buttonLink}>Github</MainButtonLink>
          </li>
          <li className={s.linkItem}>
            <MainButtonLink className={s.buttonLink}>
              Игра Knucklebones
            </MainButtonLink>
          </li>
        </ul>
      </MainLayout>
    </>
  );
}
