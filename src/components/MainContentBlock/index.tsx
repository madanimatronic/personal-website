import clsx from 'clsx';
import { FC, ReactNode } from 'react';
import s from './MainContentBlock.module.scss';

interface MainContentBlockProps {
  title: string;
  children?: ReactNode;
  className?: string;
}

export const MainContentBlock: FC<MainContentBlockProps> = ({
  title,
  children,
  className: additionalClassName,
}) => {
  return (
    // TODO: Возможно тут лучше подойдёт <section>, перепроверить
    <div className={clsx(s.contentBlock, additionalClassName)}>
      <h2 className={s.title}>{title}</h2>
      {children}
    </div>
  );
};
