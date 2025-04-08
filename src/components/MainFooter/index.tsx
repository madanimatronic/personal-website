import clsx from 'clsx';
import Link from 'next/link';
import { FC } from 'react';
import s from './MainFooter.module.scss';

interface MainFooterProps {
  className?: string;
}

export const MainFooter: FC<MainFooterProps> = ({
  className: additionalClassName,
}) => {
  return (
    <footer className={clsx(s.footer, additionalClassName)}>
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
    </footer>
  );
};
