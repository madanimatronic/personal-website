import { MainLayout } from '@/components/Layouts/MainLayout';
import { Seo } from '@/components/Seo';
// import { geistMono, geistSans } from '@/styles/fonts';

// TODO: при встраивании knucklebones не забыть поменять favicon,
// description и title в Seo (также проверить всё это и на других страницах)

export default function Home() {
  return (
    <>
      <Seo
        headTitle='My page'
        metaDescription='some description'
        iconLink='/favicon.ico'
      />
      <MainLayout>
        <div style={{ background: 'wheat' }}>hello there!</div>
      </MainLayout>
    </>
  );
}
