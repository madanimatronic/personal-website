import clsx from 'clsx';
import Link from 'next/link';
import { FC } from 'react';
import s from './MainHeader.module.scss';

interface MainHeaderProps {
  title: string;
  className?: string;
}

// Используется такое именование, потому что могут быть и другие
// компоненты шапок, например, в интерактивных страницах из портфолио, которые
// могут быть представлены на сайте
export const MainHeader: FC<MainHeaderProps> = ({
  title,
  className: additionalClassName,
}) => {
  return (
    <header className={clsx(s.header, additionalClassName)}>
      <Link href='/' className={s.title}>
        {title}
      </Link>
      <nav className={s.navigation}>
        <ul className={s.linksList}>
          <li className={s.linkItem}>
            <Link className={s.link} href={'/about'}>
              Обо мне
            </Link>
          </li>
          <li className={s.linkItem}>
            <Link className={s.link} href={'/'}>
              Ссылки
            </Link>
          </li>
          <li className={s.linkItem}>
            <Link className={s.link} href={'/'}>
              Контакты
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
