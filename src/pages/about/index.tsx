import { MainLayout } from '@/components/Layouts/MainLayout';
import { MainContentBlock } from '@/components/MainContentBlock';
import { Seo } from '@/components/Seo';
import s from './AboutPage.module.scss';

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
          Привет! <br />
          <br />
          Меня зовут testName <br /> Я начинающий frontend-разработчик,
          стремящийся к новым знаниям и навыкам.
        </h1>
        <MainContentBlock title='Опыт'>
          <p className={s.paragraphText}>Тут какое-то описание...</p>
        </MainContentBlock>
      </MainLayout>
    </>
  );
}
