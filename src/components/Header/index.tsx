import clsx from 'clsx';
import Link from 'next/link';
import { FC } from 'react';
import s from './Header.module.scss';

interface HeaderProps {
  title: string;
  className?: string;
}

// TODO: пересмотреть этот компонент

export const Header: FC<HeaderProps> = ({
  title,
  className: additionalClassName,
}) => {
  return (
    <header className={clsx(s.header, additionalClassName)}>
      <Link href='/' aria-label={title}>
        <p className={s.title}>{title}</p>
      </Link>
    </header>
  );
};
