import { Header } from '@/components/Header';
import { FC, ReactNode } from 'react';
import s from './MainLayout.module.scss';

interface MainLayoutProps {
  children?: ReactNode;
}

// TODO: пересмотреть этот компонент

// Основная разметка для страниц сайта
export const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <div className={s.page}>
        <Header title='testName' />
        <main>{children}</main>
        <footer>{'test footer Привет Мир!'}</footer>
      </div>
    </>
  );
};
