import { MainFooter } from '@/components/MainFooter';
import { MainHeader } from '@/components/MainHeader';
import { FC, ReactNode } from 'react';
import s from './MainLayout.module.scss';

interface MainLayoutProps {
  children?: ReactNode;
  mainElementClassName?: string;
}

// Основная разметка для страниц сайта
// (для страниц из портфолио могут использоваться другие разметки)
export const MainLayout: FC<MainLayoutProps> = ({
  children,
  mainElementClassName,
}) => {
  return (
    <>
      <div className={s.page}>
        <MainHeader title='testName' />
        <main className={mainElementClassName}>{children}</main>
        <MainFooter className={s.footer} />
      </div>
    </>
  );
};
